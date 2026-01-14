/**
 * Email validation
 */
export const emailSchema = {
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: 'Invalid email format',
  maxLength: 255,
} as const;

/**
 * Password validation
 */
export const passwordSchema = {
  minLength: 8,
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
  message: 'Password must be at least 8 characters and contain uppercase, lowercase, and number',
} as const;

/**
 * Firebase UID validation
 */
export const firebaseUidSchema = {
  pattern: /^[a-zA-Z0-9]{28}$/,
  message: 'Invalid Firebase UID format',
} as const;

/**
 * Display name validation
 */
export const displayNameSchema = {
  minLength: 1,
  maxLength: 100,
  message: 'Display name must be between 1 and 100 characters',
} as const;

