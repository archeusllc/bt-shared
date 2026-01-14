/**
 * Base application error class for consistent error handling across modules
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Client error (4xx status codes)
 */
export class ClientError extends AppError {
  constructor(message: string, statusCode: number = 400) {
    super(message, statusCode, true);
  }
}

/**
 * Server error (5xx status codes)
 */
export class ServerError extends AppError {
  constructor(message: string, statusCode: number = 500) {
    super(message, statusCode, true);
  }
}

/**
 * Validation error (400 Bad Request)
 */
export class ValidationError extends ClientError {
  public readonly fields?: Record<string, string>;

  constructor(message: string, fields?: Record<string, string>) {
    super(message, 400);
    this.fields = fields;
  }
}

/**
 * Authentication error (401 Unauthorized)
 */
export class AuthenticationError extends ClientError {
  constructor(message: string = 'Authentication required') {
    super(message, 401);
  }
}

/**
 * Authorization error (403 Forbidden)
 */
export class AuthorizationError extends ClientError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403);
  }
}

/**
 * Not found error (404 Not Found)
 */
export class NotFoundError extends ClientError {
  constructor(resource: string = 'Resource') {
    super(`${resource} not found`, 404);
  }
}

/**
 * Conflict error (409 Conflict)
 */
export class ConflictError extends ClientError {
  constructor(message: string) {
    super(message, 409);
  }
}
