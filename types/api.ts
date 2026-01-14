/**
 * Pagination parameters for list endpoints
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Pagination metadata for responses
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * Paginated data structure
 * Use with Eden/Elysia for paginated list endpoints
 */
export interface Paginated<T> {
  data: T[];
  pagination: PaginationMeta;
}

