import { ValidationError } from '../errors/index.js';
import { emailSchema, passwordSchema, firebaseUidSchema, displayNameSchema } from './schemas.js';

/**
 * Validate email format
 */
export function validateEmail(email: string): void {
  if (!email || email.length > emailSchema.maxLength) {
    throw new ValidationError('Email is required and must be valid', { 
      email: emailSchema.message 
    });
  }
  
  if (!emailSchema.pattern.test(email)) {
    throw new ValidationError(emailSchema.message, { email: emailSchema.message });
  }
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): void {
  if (!password || password.length < passwordSchema.minLength) {
    throw new ValidationError(passwordSchema.message, { 
      password: `Password must be at least ${passwordSchema.minLength} characters` 
    });
  }
  
  if (!passwordSchema.pattern.test(password)) {
    throw new ValidationError(passwordSchema.message, { password: passwordSchema.message });
  }
}

/**
 * Validate Firebase UID format
 */
export function validateFirebaseUid(uid: string): void {
  if (!uid || !firebaseUidSchema.pattern.test(uid)) {
    throw new ValidationError(firebaseUidSchema.message, { 
      firebaseUid: firebaseUidSchema.message 
    });
  }
}

/**
 * Validate display name
 */
export function validateDisplayName(name: string): void {
  if (!name || name.length < displayNameSchema.minLength || name.length > displayNameSchema.maxLength) {
    throw new ValidationError(displayNameSchema.message, {
      displayName: displayNameSchema.message
    });
  }
}

/**
 * Validate and normalize pagination parameters
 * Returns validated page and limit within acceptable bounds
 */
export function validatePagination(page?: number, limit?: number): { page: number; limit: number } {
  const validatedPage = page && page > 0 ? Math.floor(page) : 1;
  const validatedLimit = limit && limit > 0 && limit <= 100 ? Math.floor(limit) : 10;

  return { page: validatedPage, limit: validatedLimit };
}
