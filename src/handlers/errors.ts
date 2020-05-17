import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

const errorHandler = (
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

export default errorHandler;
