/**
 * User role enumeration
 */
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

/**
 * Generic timestamp fields
 */
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Generic ID field
 */
export interface WithId {
  id: string;
}

/**
 * User base interface (extends Prisma User model)
 */
export interface UserBase extends WithId, Timestamps {
  firebaseUid: string;
  email: string;
  displayName: string | null;
  photoUrl: string | null;
}
