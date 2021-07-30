class CustomError extends Error {
  statusCode: number;
  isOperational: boolean;
  status: 'fail' | 'error';

  constructor(message: string, statusCode: number) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;

    this.isOperational = true;
    this.status = String(statusCode).startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
