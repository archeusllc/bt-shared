/**
 * Error response structure for API responses
 */
export interface ErrorResponse {
  error: {
    message: string;
    statusCode: number;
    fields?: Record<string, string>;
  };
}

/**
 * Standard error handler result
 */
export interface ErrorHandlerResult {
  message: string;
  statusCode: number;
  isOperational: boolean;
  fields?: Record<string, string>;
}
