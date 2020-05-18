import csvParse from 'csv-parse';
import fs from 'fs';
import { Promise as PromiseHelper } from 'bluebird';
import Transaction, { TransactionType } from '../models/Transaction';
import CreateTransactionService from './CreateTransactionService';

interface TransactionCSV {
  title: string;
  categoryTitle: string;
  value: number;
  type: TransactionType;
}
class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const readCSVStream = fs.createReadStream(filePath);

    const parseStream = csvParse({
      from_line: 2,
      ltrim: true,
      rtrim: true,
    });

    const parseCSV = readCSVStream.pipe(parseStream);

    let transactionsData: TransactionCSV[] = [];

    parseCSV.on(
      'data',
      ([title, type, value, category]: [
        string,
        TransactionType,
        string,
        string,
      ]) => {
        return transactionsData.push({
          title,
          type,
          value: parseInt(value, 10),
          categoryTitle: category,
        });
      },
    );

    await new Promise(resolve => {
      parseCSV.on('end', () => resolve());
    });

    transactionsData = transactionsData.sort(a => {
      if (a.type === 'income') {
        return 1;
      }

      return 2;
    });

    const createTransactionService = new CreateTransactionService();

    const transactions = await PromiseHelper.mapSeries(
      transactionsData,
      transactionData => {
        return createTransactionService.execute(transactionData);
      },
    );

    return transactions;
  }
}

export default ImportTransactionsService;
