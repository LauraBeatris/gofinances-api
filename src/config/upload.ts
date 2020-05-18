import { diskStorage } from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadDirectory = path.resolve(__dirname, '..', '..', 'tmp');

const multerConfig = {
  directory: uploadDirectory,
  storage: diskStorage({
    destination: uploadDirectory,
    filename(_request, file, callback) {
      const filenamePrefix = crypto.randomBytes(8).toString('hex');
      const filename = `${filenamePrefix}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};

export default multerConfig;
