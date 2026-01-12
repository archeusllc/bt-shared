
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Band
 * 
 */
export type Band = $Result.DefaultSelection<Prisma.$BandPayload>
/**
 * Model BandMember
 * 
 */
export type BandMember = $Result.DefaultSelection<Prisma.$BandMemberPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Setlist
 * 
 */
export type Setlist = $Result.DefaultSelection<Prisma.$SetlistPayload>
/**
 * Model SetlistSong
 * 
 */
export type SetlistSong = $Result.DefaultSelection<Prisma.$SetlistSongPayload>
/**
 * Model Rehearsal
 * 
 */
export type Rehearsal = $Result.DefaultSelection<Prisma.$RehearsalPayload>
/**
 * Model Gig
 * 
 */
export type Gig = $Result.DefaultSelection<Prisma.$GigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.band`: Exposes CRUD operations for the **Band** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bands
    * const bands = await prisma.band.findMany()
    * ```
    */
  get band(): Prisma.BandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bandMember`: Exposes CRUD operations for the **BandMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BandMembers
    * const bandMembers = await prisma.bandMember.findMany()
    * ```
    */
  get bandMember(): Prisma.BandMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setlist`: Exposes CRUD operations for the **Setlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setlists
    * const setlists = await prisma.setlist.findMany()
    * ```
    */
  get setlist(): Prisma.SetlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setlistSong`: Exposes CRUD operations for the **SetlistSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SetlistSongs
    * const setlistSongs = await prisma.setlistSong.findMany()
    * ```
    */
  get setlistSong(): Prisma.SetlistSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rehearsal`: Exposes CRUD operations for the **Rehearsal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rehearsals
    * const rehearsals = await prisma.rehearsal.findMany()
    * ```
    */
  get rehearsal(): Prisma.RehearsalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gig`: Exposes CRUD operations for the **Gig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gigs
    * const gigs = await prisma.gig.findMany()
    * ```
    */
  get gig(): Prisma.GigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Band: 'Band',
    BandMember: 'BandMember',
    Song: 'Song',
    Setlist: 'Setlist',
    SetlistSong: 'SetlistSong',
    Rehearsal: 'Rehearsal',
    Gig: 'Gig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "band" | "bandMember" | "song" | "setlist" | "setlistSong" | "rehearsal" | "gig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Band: {
        payload: Prisma.$BandPayload<ExtArgs>
        fields: Prisma.BandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          findFirst: {
            args: Prisma.BandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          findMany: {
            args: Prisma.BandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>[]
          }
          create: {
            args: Prisma.BandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          createMany: {
            args: Prisma.BandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>[]
          }
          delete: {
            args: Prisma.BandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          update: {
            args: Prisma.BandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          deleteMany: {
            args: Prisma.BandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>[]
          }
          upsert: {
            args: Prisma.BandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          aggregate: {
            args: Prisma.BandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBand>
          }
          groupBy: {
            args: Prisma.BandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BandCountArgs<ExtArgs>
            result: $Utils.Optional<BandCountAggregateOutputType> | number
          }
        }
      }
      BandMember: {
        payload: Prisma.$BandMemberPayload<ExtArgs>
        fields: Prisma.BandMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BandMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BandMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          findFirst: {
            args: Prisma.BandMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BandMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          findMany: {
            args: Prisma.BandMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>[]
          }
          create: {
            args: Prisma.BandMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          createMany: {
            args: Prisma.BandMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BandMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>[]
          }
          delete: {
            args: Prisma.BandMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          update: {
            args: Prisma.BandMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          deleteMany: {
            args: Prisma.BandMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BandMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BandMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>[]
          }
          upsert: {
            args: Prisma.BandMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          aggregate: {
            args: Prisma.BandMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBandMember>
          }
          groupBy: {
            args: Prisma.BandMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<BandMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BandMemberCountArgs<ExtArgs>
            result: $Utils.Optional<BandMemberCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Setlist: {
        payload: Prisma.$SetlistPayload<ExtArgs>
        fields: Prisma.SetlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          findFirst: {
            args: Prisma.SetlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          findMany: {
            args: Prisma.SetlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>[]
          }
          create: {
            args: Prisma.SetlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          createMany: {
            args: Prisma.SetlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>[]
          }
          delete: {
            args: Prisma.SetlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          update: {
            args: Prisma.SetlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          deleteMany: {
            args: Prisma.SetlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>[]
          }
          upsert: {
            args: Prisma.SetlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          aggregate: {
            args: Prisma.SetlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetlist>
          }
          groupBy: {
            args: Prisma.SetlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetlistCountArgs<ExtArgs>
            result: $Utils.Optional<SetlistCountAggregateOutputType> | number
          }
        }
      }
      SetlistSong: {
        payload: Prisma.$SetlistSongPayload<ExtArgs>
        fields: Prisma.SetlistSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetlistSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetlistSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>
          }
          findFirst: {
            args: Prisma.SetlistSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetlistSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>
          }
          findMany: {
            args: Prisma.SetlistSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>[]
          }
          create: {
            args: Prisma.SetlistSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>
          }
          createMany: {
            args: Prisma.SetlistSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetlistSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>[]
          }
          delete: {
            args: Prisma.SetlistSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>
          }
          update: {
            args: Prisma.SetlistSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>
          }
          deleteMany: {
            args: Prisma.SetlistSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetlistSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetlistSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>[]
          }
          upsert: {
            args: Prisma.SetlistSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetlistSongPayload>
          }
          aggregate: {
            args: Prisma.SetlistSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetlistSong>
          }
          groupBy: {
            args: Prisma.SetlistSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetlistSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetlistSongCountArgs<ExtArgs>
            result: $Utils.Optional<SetlistSongCountAggregateOutputType> | number
          }
        }
      }
      Rehearsal: {
        payload: Prisma.$RehearsalPayload<ExtArgs>
        fields: Prisma.RehearsalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RehearsalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RehearsalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>
          }
          findFirst: {
            args: Prisma.RehearsalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RehearsalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>
          }
          findMany: {
            args: Prisma.RehearsalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>[]
          }
          create: {
            args: Prisma.RehearsalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>
          }
          createMany: {
            args: Prisma.RehearsalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RehearsalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>[]
          }
          delete: {
            args: Prisma.RehearsalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>
          }
          update: {
            args: Prisma.RehearsalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>
          }
          deleteMany: {
            args: Prisma.RehearsalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RehearsalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RehearsalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>[]
          }
          upsert: {
            args: Prisma.RehearsalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehearsalPayload>
          }
          aggregate: {
            args: Prisma.RehearsalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRehearsal>
          }
          groupBy: {
            args: Prisma.RehearsalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RehearsalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RehearsalCountArgs<ExtArgs>
            result: $Utils.Optional<RehearsalCountAggregateOutputType> | number
          }
        }
      }
      Gig: {
        payload: Prisma.$GigPayload<ExtArgs>
        fields: Prisma.GigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>
          }
          findFirst: {
            args: Prisma.GigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>
          }
          findMany: {
            args: Prisma.GigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>[]
          }
          create: {
            args: Prisma.GigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>
          }
          createMany: {
            args: Prisma.GigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>[]
          }
          delete: {
            args: Prisma.GigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>
          }
          update: {
            args: Prisma.GigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>
          }
          deleteMany: {
            args: Prisma.GigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>[]
          }
          upsert: {
            args: Prisma.GigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GigPayload>
          }
          aggregate: {
            args: Prisma.GigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGig>
          }
          groupBy: {
            args: Prisma.GigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GigCountArgs<ExtArgs>
            result: $Utils.Optional<GigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    band?: BandOmit
    bandMember?: BandMemberOmit
    song?: SongOmit
    setlist?: SetlistOmit
    setlistSong?: SetlistSongOmit
    rehearsal?: RehearsalOmit
    gig?: GigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bandMembers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bandMembers?: boolean | UserCountOutputTypeCountBandMembersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBandMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandMemberWhereInput
  }


  /**
   * Count Type BandCountOutputType
   */

  export type BandCountOutputType = {
    members: number
    setlists: number
    rehearsals: number
    gigs: number
    songs: number
  }

  export type BandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | BandCountOutputTypeCountMembersArgs
    setlists?: boolean | BandCountOutputTypeCountSetlistsArgs
    rehearsals?: boolean | BandCountOutputTypeCountRehearsalsArgs
    gigs?: boolean | BandCountOutputTypeCountGigsArgs
    songs?: boolean | BandCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandCountOutputType
     */
    select?: BandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandMemberWhereInput
  }

  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeCountSetlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistWhereInput
  }

  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeCountRehearsalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehearsalWhereInput
  }

  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeCountGigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GigWhereInput
  }

  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    setlistSongs: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setlistSongs?: boolean | SongCountOutputTypeCountSetlistSongsArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountSetlistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistSongWhereInput
  }


  /**
   * Count Type SetlistCountOutputType
   */

  export type SetlistCountOutputType = {
    songs: number
  }

  export type SetlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | SetlistCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * SetlistCountOutputType without action
   */
  export type SetlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistCountOutputType
     */
    select?: SetlistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SetlistCountOutputType without action
   */
  export type SetlistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistSongWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firebaseId: string | null
    email: string | null
    displayName: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firebaseId: string | null
    email: string | null
    displayName: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebaseId: number
    email: number
    displayName: number
    photoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firebaseId?: true
    email?: true
    displayName?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebaseId?: true
    email?: true
    displayName?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebaseId?: true
    email?: true
    displayName?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firebaseId: string
    email: string
    displayName: string | null
    photoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseId?: boolean
    email?: boolean
    displayName?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bandMembers?: boolean | User$bandMembersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseId?: boolean
    email?: boolean
    displayName?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseId?: boolean
    email?: boolean
    displayName?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firebaseId?: boolean
    email?: boolean
    displayName?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebaseId" | "email" | "displayName" | "photoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bandMembers?: boolean | User$bandMembersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bandMembers: Prisma.$BandMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firebaseId: string
      email: string
      displayName: string | null
      photoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bandMembers<T extends User$bandMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$bandMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firebaseId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bandMembers
   */
  export type User$bandMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    where?: BandMemberWhereInput
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    cursor?: BandMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Band
   */

  export type AggregateBand = {
    _count: BandCountAggregateOutputType | null
    _min: BandMinAggregateOutputType | null
    _max: BandMaxAggregateOutputType | null
  }

  export type BandMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BandCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BandMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BandMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BandCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Band to aggregate.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bands
    **/
    _count?: true | BandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BandMaxAggregateInputType
  }

  export type GetBandAggregateType<T extends BandAggregateArgs> = {
        [P in keyof T & keyof AggregateBand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBand[P]>
      : GetScalarType<T[P], AggregateBand[P]>
  }




  export type BandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandWhereInput
    orderBy?: BandOrderByWithAggregationInput | BandOrderByWithAggregationInput[]
    by: BandScalarFieldEnum[] | BandScalarFieldEnum
    having?: BandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BandCountAggregateInputType | true
    _min?: BandMinAggregateInputType
    _max?: BandMaxAggregateInputType
  }

  export type BandGroupByOutputType = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BandCountAggregateOutputType | null
    _min: BandMinAggregateOutputType | null
    _max: BandMaxAggregateOutputType | null
  }

  type GetBandGroupByPayload<T extends BandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BandGroupByOutputType[P]>
            : GetScalarType<T[P], BandGroupByOutputType[P]>
        }
      >
    >


  export type BandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Band$membersArgs<ExtArgs>
    setlists?: boolean | Band$setlistsArgs<ExtArgs>
    rehearsals?: boolean | Band$rehearsalsArgs<ExtArgs>
    gigs?: boolean | Band$gigsArgs<ExtArgs>
    songs?: boolean | Band$songsArgs<ExtArgs>
    _count?: boolean | BandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["band"]>

  export type BandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["band"]>

  export type BandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["band"]>

  export type BandSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["band"]>
  export type BandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Band$membersArgs<ExtArgs>
    setlists?: boolean | Band$setlistsArgs<ExtArgs>
    rehearsals?: boolean | Band$rehearsalsArgs<ExtArgs>
    gigs?: boolean | Band$gigsArgs<ExtArgs>
    songs?: boolean | Band$songsArgs<ExtArgs>
    _count?: boolean | BandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Band"
    objects: {
      members: Prisma.$BandMemberPayload<ExtArgs>[]
      setlists: Prisma.$SetlistPayload<ExtArgs>[]
      rehearsals: Prisma.$RehearsalPayload<ExtArgs>[]
      gigs: Prisma.$GigPayload<ExtArgs>[]
      songs: Prisma.$SongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["band"]>
    composites: {}
  }

  type BandGetPayload<S extends boolean | null | undefined | BandDefaultArgs> = $Result.GetResult<Prisma.$BandPayload, S>

  type BandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BandCountAggregateInputType | true
    }

  export interface BandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Band'], meta: { name: 'Band' } }
    /**
     * Find zero or one Band that matches the filter.
     * @param {BandFindUniqueArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BandFindUniqueArgs>(args: SelectSubset<T, BandFindUniqueArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Band that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BandFindUniqueOrThrowArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BandFindUniqueOrThrowArgs>(args: SelectSubset<T, BandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Band that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandFindFirstArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BandFindFirstArgs>(args?: SelectSubset<T, BandFindFirstArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Band that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandFindFirstOrThrowArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BandFindFirstOrThrowArgs>(args?: SelectSubset<T, BandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bands
     * const bands = await prisma.band.findMany()
     * 
     * // Get first 10 Bands
     * const bands = await prisma.band.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bandWithIdOnly = await prisma.band.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BandFindManyArgs>(args?: SelectSubset<T, BandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Band.
     * @param {BandCreateArgs} args - Arguments to create a Band.
     * @example
     * // Create one Band
     * const Band = await prisma.band.create({
     *   data: {
     *     // ... data to create a Band
     *   }
     * })
     * 
     */
    create<T extends BandCreateArgs>(args: SelectSubset<T, BandCreateArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bands.
     * @param {BandCreateManyArgs} args - Arguments to create many Bands.
     * @example
     * // Create many Bands
     * const band = await prisma.band.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BandCreateManyArgs>(args?: SelectSubset<T, BandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bands and returns the data saved in the database.
     * @param {BandCreateManyAndReturnArgs} args - Arguments to create many Bands.
     * @example
     * // Create many Bands
     * const band = await prisma.band.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bands and only return the `id`
     * const bandWithIdOnly = await prisma.band.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BandCreateManyAndReturnArgs>(args?: SelectSubset<T, BandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Band.
     * @param {BandDeleteArgs} args - Arguments to delete one Band.
     * @example
     * // Delete one Band
     * const Band = await prisma.band.delete({
     *   where: {
     *     // ... filter to delete one Band
     *   }
     * })
     * 
     */
    delete<T extends BandDeleteArgs>(args: SelectSubset<T, BandDeleteArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Band.
     * @param {BandUpdateArgs} args - Arguments to update one Band.
     * @example
     * // Update one Band
     * const band = await prisma.band.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BandUpdateArgs>(args: SelectSubset<T, BandUpdateArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bands.
     * @param {BandDeleteManyArgs} args - Arguments to filter Bands to delete.
     * @example
     * // Delete a few Bands
     * const { count } = await prisma.band.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BandDeleteManyArgs>(args?: SelectSubset<T, BandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bands
     * const band = await prisma.band.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BandUpdateManyArgs>(args: SelectSubset<T, BandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bands and returns the data updated in the database.
     * @param {BandUpdateManyAndReturnArgs} args - Arguments to update many Bands.
     * @example
     * // Update many Bands
     * const band = await prisma.band.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bands and only return the `id`
     * const bandWithIdOnly = await prisma.band.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BandUpdateManyAndReturnArgs>(args: SelectSubset<T, BandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Band.
     * @param {BandUpsertArgs} args - Arguments to update or create a Band.
     * @example
     * // Update or create a Band
     * const band = await prisma.band.upsert({
     *   create: {
     *     // ... data to create a Band
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Band we want to update
     *   }
     * })
     */
    upsert<T extends BandUpsertArgs>(args: SelectSubset<T, BandUpsertArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandCountArgs} args - Arguments to filter Bands to count.
     * @example
     * // Count the number of Bands
     * const count = await prisma.band.count({
     *   where: {
     *     // ... the filter for the Bands we want to count
     *   }
     * })
    **/
    count<T extends BandCountArgs>(
      args?: Subset<T, BandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Band.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BandAggregateArgs>(args: Subset<T, BandAggregateArgs>): Prisma.PrismaPromise<GetBandAggregateType<T>>

    /**
     * Group by Band.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BandGroupByArgs['orderBy'] }
        : { orderBy?: BandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Band model
   */
  readonly fields: BandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Band.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Band$membersArgs<ExtArgs> = {}>(args?: Subset<T, Band$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    setlists<T extends Band$setlistsArgs<ExtArgs> = {}>(args?: Subset<T, Band$setlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rehearsals<T extends Band$rehearsalsArgs<ExtArgs> = {}>(args?: Subset<T, Band$rehearsalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gigs<T extends Band$gigsArgs<ExtArgs> = {}>(args?: Subset<T, Band$gigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    songs<T extends Band$songsArgs<ExtArgs> = {}>(args?: Subset<T, Band$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Band model
   */
  interface BandFieldRefs {
    readonly id: FieldRef<"Band", 'String'>
    readonly name: FieldRef<"Band", 'String'>
    readonly description: FieldRef<"Band", 'String'>
    readonly imageUrl: FieldRef<"Band", 'String'>
    readonly createdAt: FieldRef<"Band", 'DateTime'>
    readonly updatedAt: FieldRef<"Band", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Band findUnique
   */
  export type BandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band findUniqueOrThrow
   */
  export type BandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band findFirst
   */
  export type BandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bands.
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bands.
     */
    distinct?: BandScalarFieldEnum | BandScalarFieldEnum[]
  }

  /**
   * Band findFirstOrThrow
   */
  export type BandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bands.
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bands.
     */
    distinct?: BandScalarFieldEnum | BandScalarFieldEnum[]
  }

  /**
   * Band findMany
   */
  export type BandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Bands to fetch.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bands.
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    distinct?: BandScalarFieldEnum | BandScalarFieldEnum[]
  }

  /**
   * Band create
   */
  export type BandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * The data needed to create a Band.
     */
    data: XOR<BandCreateInput, BandUncheckedCreateInput>
  }

  /**
   * Band createMany
   */
  export type BandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bands.
     */
    data: BandCreateManyInput | BandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Band createManyAndReturn
   */
  export type BandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * The data used to create many Bands.
     */
    data: BandCreateManyInput | BandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Band update
   */
  export type BandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * The data needed to update a Band.
     */
    data: XOR<BandUpdateInput, BandUncheckedUpdateInput>
    /**
     * Choose, which Band to update.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band updateMany
   */
  export type BandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bands.
     */
    data: XOR<BandUpdateManyMutationInput, BandUncheckedUpdateManyInput>
    /**
     * Filter which Bands to update
     */
    where?: BandWhereInput
    /**
     * Limit how many Bands to update.
     */
    limit?: number
  }

  /**
   * Band updateManyAndReturn
   */
  export type BandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * The data used to update Bands.
     */
    data: XOR<BandUpdateManyMutationInput, BandUncheckedUpdateManyInput>
    /**
     * Filter which Bands to update
     */
    where?: BandWhereInput
    /**
     * Limit how many Bands to update.
     */
    limit?: number
  }

  /**
   * Band upsert
   */
  export type BandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * The filter to search for the Band to update in case it exists.
     */
    where: BandWhereUniqueInput
    /**
     * In case the Band found by the `where` argument doesn't exist, create a new Band with this data.
     */
    create: XOR<BandCreateInput, BandUncheckedCreateInput>
    /**
     * In case the Band was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BandUpdateInput, BandUncheckedUpdateInput>
  }

  /**
   * Band delete
   */
  export type BandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter which Band to delete.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band deleteMany
   */
  export type BandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bands to delete
     */
    where?: BandWhereInput
    /**
     * Limit how many Bands to delete.
     */
    limit?: number
  }

  /**
   * Band.members
   */
  export type Band$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    where?: BandMemberWhereInput
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    cursor?: BandMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * Band.setlists
   */
  export type Band$setlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    where?: SetlistWhereInput
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    cursor?: SetlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }

  /**
   * Band.rehearsals
   */
  export type Band$rehearsalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    where?: RehearsalWhereInput
    orderBy?: RehearsalOrderByWithRelationInput | RehearsalOrderByWithRelationInput[]
    cursor?: RehearsalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehearsalScalarFieldEnum | RehearsalScalarFieldEnum[]
  }

  /**
   * Band.gigs
   */
  export type Band$gigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    where?: GigWhereInput
    orderBy?: GigOrderByWithRelationInput | GigOrderByWithRelationInput[]
    cursor?: GigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GigScalarFieldEnum | GigScalarFieldEnum[]
  }

  /**
   * Band.songs
   */
  export type Band$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Band without action
   */
  export type BandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
  }


  /**
   * Model BandMember
   */

  export type AggregateBandMember = {
    _count: BandMemberCountAggregateOutputType | null
    _min: BandMemberMinAggregateOutputType | null
    _max: BandMemberMaxAggregateOutputType | null
  }

  export type BandMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bandId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BandMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bandId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BandMemberCountAggregateOutputType = {
    id: number
    userId: number
    bandId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BandMemberMinAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BandMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BandMemberCountAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BandMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BandMember to aggregate.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BandMembers
    **/
    _count?: true | BandMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BandMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BandMemberMaxAggregateInputType
  }

  export type GetBandMemberAggregateType<T extends BandMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateBandMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBandMember[P]>
      : GetScalarType<T[P], AggregateBandMember[P]>
  }




  export type BandMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandMemberWhereInput
    orderBy?: BandMemberOrderByWithAggregationInput | BandMemberOrderByWithAggregationInput[]
    by: BandMemberScalarFieldEnum[] | BandMemberScalarFieldEnum
    having?: BandMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BandMemberCountAggregateInputType | true
    _min?: BandMemberMinAggregateInputType
    _max?: BandMemberMaxAggregateInputType
  }

  export type BandMemberGroupByOutputType = {
    id: string
    userId: string
    bandId: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: BandMemberCountAggregateOutputType | null
    _min: BandMemberMinAggregateOutputType | null
    _max: BandMemberMaxAggregateOutputType | null
  }

  type GetBandMemberGroupByPayload<T extends BandMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BandMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BandMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BandMemberGroupByOutputType[P]>
            : GetScalarType<T[P], BandMemberGroupByOutputType[P]>
        }
      >
    >


  export type BandMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bandId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bandMember"]>

  export type BandMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bandId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bandMember"]>

  export type BandMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bandId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bandMember"]>

  export type BandMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    bandId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BandMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bandId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["bandMember"]>
  export type BandMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type BandMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type BandMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }

  export type $BandMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BandMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      band: Prisma.$BandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bandId: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bandMember"]>
    composites: {}
  }

  type BandMemberGetPayload<S extends boolean | null | undefined | BandMemberDefaultArgs> = $Result.GetResult<Prisma.$BandMemberPayload, S>

  type BandMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BandMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BandMemberCountAggregateInputType | true
    }

  export interface BandMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BandMember'], meta: { name: 'BandMember' } }
    /**
     * Find zero or one BandMember that matches the filter.
     * @param {BandMemberFindUniqueArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BandMemberFindUniqueArgs>(args: SelectSubset<T, BandMemberFindUniqueArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BandMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BandMemberFindUniqueOrThrowArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BandMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, BandMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BandMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberFindFirstArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BandMemberFindFirstArgs>(args?: SelectSubset<T, BandMemberFindFirstArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BandMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberFindFirstOrThrowArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BandMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, BandMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BandMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BandMembers
     * const bandMembers = await prisma.bandMember.findMany()
     * 
     * // Get first 10 BandMembers
     * const bandMembers = await prisma.bandMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bandMemberWithIdOnly = await prisma.bandMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BandMemberFindManyArgs>(args?: SelectSubset<T, BandMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BandMember.
     * @param {BandMemberCreateArgs} args - Arguments to create a BandMember.
     * @example
     * // Create one BandMember
     * const BandMember = await prisma.bandMember.create({
     *   data: {
     *     // ... data to create a BandMember
     *   }
     * })
     * 
     */
    create<T extends BandMemberCreateArgs>(args: SelectSubset<T, BandMemberCreateArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BandMembers.
     * @param {BandMemberCreateManyArgs} args - Arguments to create many BandMembers.
     * @example
     * // Create many BandMembers
     * const bandMember = await prisma.bandMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BandMemberCreateManyArgs>(args?: SelectSubset<T, BandMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BandMembers and returns the data saved in the database.
     * @param {BandMemberCreateManyAndReturnArgs} args - Arguments to create many BandMembers.
     * @example
     * // Create many BandMembers
     * const bandMember = await prisma.bandMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BandMembers and only return the `id`
     * const bandMemberWithIdOnly = await prisma.bandMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BandMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, BandMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BandMember.
     * @param {BandMemberDeleteArgs} args - Arguments to delete one BandMember.
     * @example
     * // Delete one BandMember
     * const BandMember = await prisma.bandMember.delete({
     *   where: {
     *     // ... filter to delete one BandMember
     *   }
     * })
     * 
     */
    delete<T extends BandMemberDeleteArgs>(args: SelectSubset<T, BandMemberDeleteArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BandMember.
     * @param {BandMemberUpdateArgs} args - Arguments to update one BandMember.
     * @example
     * // Update one BandMember
     * const bandMember = await prisma.bandMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BandMemberUpdateArgs>(args: SelectSubset<T, BandMemberUpdateArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BandMembers.
     * @param {BandMemberDeleteManyArgs} args - Arguments to filter BandMembers to delete.
     * @example
     * // Delete a few BandMembers
     * const { count } = await prisma.bandMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BandMemberDeleteManyArgs>(args?: SelectSubset<T, BandMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BandMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BandMembers
     * const bandMember = await prisma.bandMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BandMemberUpdateManyArgs>(args: SelectSubset<T, BandMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BandMembers and returns the data updated in the database.
     * @param {BandMemberUpdateManyAndReturnArgs} args - Arguments to update many BandMembers.
     * @example
     * // Update many BandMembers
     * const bandMember = await prisma.bandMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BandMembers and only return the `id`
     * const bandMemberWithIdOnly = await prisma.bandMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BandMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, BandMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BandMember.
     * @param {BandMemberUpsertArgs} args - Arguments to update or create a BandMember.
     * @example
     * // Update or create a BandMember
     * const bandMember = await prisma.bandMember.upsert({
     *   create: {
     *     // ... data to create a BandMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BandMember we want to update
     *   }
     * })
     */
    upsert<T extends BandMemberUpsertArgs>(args: SelectSubset<T, BandMemberUpsertArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BandMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberCountArgs} args - Arguments to filter BandMembers to count.
     * @example
     * // Count the number of BandMembers
     * const count = await prisma.bandMember.count({
     *   where: {
     *     // ... the filter for the BandMembers we want to count
     *   }
     * })
    **/
    count<T extends BandMemberCountArgs>(
      args?: Subset<T, BandMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BandMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BandMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BandMemberAggregateArgs>(args: Subset<T, BandMemberAggregateArgs>): Prisma.PrismaPromise<GetBandMemberAggregateType<T>>

    /**
     * Group by BandMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BandMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BandMemberGroupByArgs['orderBy'] }
        : { orderBy?: BandMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BandMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBandMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BandMember model
   */
  readonly fields: BandMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BandMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BandMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    band<T extends BandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BandDefaultArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BandMember model
   */
  interface BandMemberFieldRefs {
    readonly id: FieldRef<"BandMember", 'String'>
    readonly userId: FieldRef<"BandMember", 'String'>
    readonly bandId: FieldRef<"BandMember", 'String'>
    readonly role: FieldRef<"BandMember", 'String'>
    readonly createdAt: FieldRef<"BandMember", 'DateTime'>
    readonly updatedAt: FieldRef<"BandMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BandMember findUnique
   */
  export type BandMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember findUniqueOrThrow
   */
  export type BandMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember findFirst
   */
  export type BandMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BandMembers.
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BandMembers.
     */
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * BandMember findFirstOrThrow
   */
  export type BandMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BandMembers.
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BandMembers.
     */
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * BandMember findMany
   */
  export type BandMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMembers to fetch.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BandMembers.
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * BandMember create
   */
  export type BandMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a BandMember.
     */
    data: XOR<BandMemberCreateInput, BandMemberUncheckedCreateInput>
  }

  /**
   * BandMember createMany
   */
  export type BandMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BandMembers.
     */
    data: BandMemberCreateManyInput | BandMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BandMember createManyAndReturn
   */
  export type BandMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * The data used to create many BandMembers.
     */
    data: BandMemberCreateManyInput | BandMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BandMember update
   */
  export type BandMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a BandMember.
     */
    data: XOR<BandMemberUpdateInput, BandMemberUncheckedUpdateInput>
    /**
     * Choose, which BandMember to update.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember updateMany
   */
  export type BandMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BandMembers.
     */
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyInput>
    /**
     * Filter which BandMembers to update
     */
    where?: BandMemberWhereInput
    /**
     * Limit how many BandMembers to update.
     */
    limit?: number
  }

  /**
   * BandMember updateManyAndReturn
   */
  export type BandMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * The data used to update BandMembers.
     */
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyInput>
    /**
     * Filter which BandMembers to update
     */
    where?: BandMemberWhereInput
    /**
     * Limit how many BandMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BandMember upsert
   */
  export type BandMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the BandMember to update in case it exists.
     */
    where: BandMemberWhereUniqueInput
    /**
     * In case the BandMember found by the `where` argument doesn't exist, create a new BandMember with this data.
     */
    create: XOR<BandMemberCreateInput, BandMemberUncheckedCreateInput>
    /**
     * In case the BandMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BandMemberUpdateInput, BandMemberUncheckedUpdateInput>
  }

  /**
   * BandMember delete
   */
  export type BandMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter which BandMember to delete.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember deleteMany
   */
  export type BandMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BandMembers to delete
     */
    where?: BandMemberWhereInput
    /**
     * Limit how many BandMembers to delete.
     */
    limit?: number
  }

  /**
   * BandMember without action
   */
  export type BandMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
  }


  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    duration: number | null
  }

  export type SongSumAggregateOutputType = {
    duration: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    artist: string | null
    duration: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    artist: string | null
    duration: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    bandId: number
    title: number
    artist: number
    duration: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    duration?: true
  }

  export type SongSumAggregateInputType = {
    duration?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    artist?: true
    duration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    artist?: true
    duration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    artist?: true
    duration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    bandId: string
    title: string
    artist: string | null
    duration: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
    setlistSongs?: boolean | Song$setlistSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    bandId?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bandId" | "title" | "artist" | "duration" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["song"]>
  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
    setlistSongs?: boolean | Song$setlistSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type SongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      band: Prisma.$BandPayload<ExtArgs>
      setlistSongs: Prisma.$SetlistSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bandId: string
      title: string
      artist: string | null
      duration: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    band<T extends BandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BandDefaultArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setlistSongs<T extends Song$setlistSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$setlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Song model
   */
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly bandId: FieldRef<"Song", 'String'>
    readonly title: FieldRef<"Song", 'String'>
    readonly artist: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'Int'>
    readonly notes: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song updateManyAndReturn
   */
  export type SongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to delete.
     */
    limit?: number
  }

  /**
   * Song.setlistSongs
   */
  export type Song$setlistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    where?: SetlistSongWhereInput
    orderBy?: SetlistSongOrderByWithRelationInput | SetlistSongOrderByWithRelationInput[]
    cursor?: SetlistSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistSongScalarFieldEnum | SetlistSongScalarFieldEnum[]
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model Setlist
   */

  export type AggregateSetlist = {
    _count: SetlistCountAggregateOutputType | null
    _min: SetlistMinAggregateOutputType | null
    _max: SetlistMaxAggregateOutputType | null
  }

  export type SetlistMinAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetlistMaxAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetlistCountAggregateOutputType = {
    id: number
    bandId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SetlistMinAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetlistMaxAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetlistCountAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SetlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setlist to aggregate.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setlists
    **/
    _count?: true | SetlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetlistMaxAggregateInputType
  }

  export type GetSetlistAggregateType<T extends SetlistAggregateArgs> = {
        [P in keyof T & keyof AggregateSetlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetlist[P]>
      : GetScalarType<T[P], AggregateSetlist[P]>
  }




  export type SetlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistWhereInput
    orderBy?: SetlistOrderByWithAggregationInput | SetlistOrderByWithAggregationInput[]
    by: SetlistScalarFieldEnum[] | SetlistScalarFieldEnum
    having?: SetlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetlistCountAggregateInputType | true
    _min?: SetlistMinAggregateInputType
    _max?: SetlistMaxAggregateInputType
  }

  export type SetlistGroupByOutputType = {
    id: string
    bandId: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SetlistCountAggregateOutputType | null
    _min: SetlistMinAggregateOutputType | null
    _max: SetlistMaxAggregateOutputType | null
  }

  type GetSetlistGroupByPayload<T extends SetlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetlistGroupByOutputType[P]>
            : GetScalarType<T[P], SetlistGroupByOutputType[P]>
        }
      >
    >


  export type SetlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
    songs?: boolean | Setlist$songsArgs<ExtArgs>
    _count?: boolean | SetlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlist"]>

  export type SetlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlist"]>

  export type SetlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlist"]>

  export type SetlistSelectScalar = {
    id?: boolean
    bandId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SetlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bandId" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["setlist"]>
  export type SetlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
    songs?: boolean | Setlist$songsArgs<ExtArgs>
    _count?: boolean | SetlistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SetlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type SetlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }

  export type $SetlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setlist"
    objects: {
      band: Prisma.$BandPayload<ExtArgs>
      songs: Prisma.$SetlistSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bandId: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["setlist"]>
    composites: {}
  }

  type SetlistGetPayload<S extends boolean | null | undefined | SetlistDefaultArgs> = $Result.GetResult<Prisma.$SetlistPayload, S>

  type SetlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetlistCountAggregateInputType | true
    }

  export interface SetlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setlist'], meta: { name: 'Setlist' } }
    /**
     * Find zero or one Setlist that matches the filter.
     * @param {SetlistFindUniqueArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetlistFindUniqueArgs>(args: SelectSubset<T, SetlistFindUniqueArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetlistFindUniqueOrThrowArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetlistFindUniqueOrThrowArgs>(args: SelectSubset<T, SetlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistFindFirstArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetlistFindFirstArgs>(args?: SelectSubset<T, SetlistFindFirstArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistFindFirstOrThrowArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetlistFindFirstOrThrowArgs>(args?: SelectSubset<T, SetlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setlists
     * const setlists = await prisma.setlist.findMany()
     * 
     * // Get first 10 Setlists
     * const setlists = await prisma.setlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setlistWithIdOnly = await prisma.setlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetlistFindManyArgs>(args?: SelectSubset<T, SetlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setlist.
     * @param {SetlistCreateArgs} args - Arguments to create a Setlist.
     * @example
     * // Create one Setlist
     * const Setlist = await prisma.setlist.create({
     *   data: {
     *     // ... data to create a Setlist
     *   }
     * })
     * 
     */
    create<T extends SetlistCreateArgs>(args: SelectSubset<T, SetlistCreateArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setlists.
     * @param {SetlistCreateManyArgs} args - Arguments to create many Setlists.
     * @example
     * // Create many Setlists
     * const setlist = await prisma.setlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetlistCreateManyArgs>(args?: SelectSubset<T, SetlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Setlists and returns the data saved in the database.
     * @param {SetlistCreateManyAndReturnArgs} args - Arguments to create many Setlists.
     * @example
     * // Create many Setlists
     * const setlist = await prisma.setlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Setlists and only return the `id`
     * const setlistWithIdOnly = await prisma.setlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetlistCreateManyAndReturnArgs>(args?: SelectSubset<T, SetlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setlist.
     * @param {SetlistDeleteArgs} args - Arguments to delete one Setlist.
     * @example
     * // Delete one Setlist
     * const Setlist = await prisma.setlist.delete({
     *   where: {
     *     // ... filter to delete one Setlist
     *   }
     * })
     * 
     */
    delete<T extends SetlistDeleteArgs>(args: SelectSubset<T, SetlistDeleteArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setlist.
     * @param {SetlistUpdateArgs} args - Arguments to update one Setlist.
     * @example
     * // Update one Setlist
     * const setlist = await prisma.setlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetlistUpdateArgs>(args: SelectSubset<T, SetlistUpdateArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setlists.
     * @param {SetlistDeleteManyArgs} args - Arguments to filter Setlists to delete.
     * @example
     * // Delete a few Setlists
     * const { count } = await prisma.setlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetlistDeleteManyArgs>(args?: SelectSubset<T, SetlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setlists
     * const setlist = await prisma.setlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetlistUpdateManyArgs>(args: SelectSubset<T, SetlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setlists and returns the data updated in the database.
     * @param {SetlistUpdateManyAndReturnArgs} args - Arguments to update many Setlists.
     * @example
     * // Update many Setlists
     * const setlist = await prisma.setlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Setlists and only return the `id`
     * const setlistWithIdOnly = await prisma.setlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetlistUpdateManyAndReturnArgs>(args: SelectSubset<T, SetlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setlist.
     * @param {SetlistUpsertArgs} args - Arguments to update or create a Setlist.
     * @example
     * // Update or create a Setlist
     * const setlist = await prisma.setlist.upsert({
     *   create: {
     *     // ... data to create a Setlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setlist we want to update
     *   }
     * })
     */
    upsert<T extends SetlistUpsertArgs>(args: SelectSubset<T, SetlistUpsertArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistCountArgs} args - Arguments to filter Setlists to count.
     * @example
     * // Count the number of Setlists
     * const count = await prisma.setlist.count({
     *   where: {
     *     // ... the filter for the Setlists we want to count
     *   }
     * })
    **/
    count<T extends SetlistCountArgs>(
      args?: Subset<T, SetlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetlistAggregateArgs>(args: Subset<T, SetlistAggregateArgs>): Prisma.PrismaPromise<GetSetlistAggregateType<T>>

    /**
     * Group by Setlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SetlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetlistGroupByArgs['orderBy'] }
        : { orderBy?: SetlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setlist model
   */
  readonly fields: SetlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    band<T extends BandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BandDefaultArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    songs<T extends Setlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Setlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setlist model
   */
  interface SetlistFieldRefs {
    readonly id: FieldRef<"Setlist", 'String'>
    readonly bandId: FieldRef<"Setlist", 'String'>
    readonly title: FieldRef<"Setlist", 'String'>
    readonly description: FieldRef<"Setlist", 'String'>
    readonly createdAt: FieldRef<"Setlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Setlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setlist findUnique
   */
  export type SetlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where: SetlistWhereUniqueInput
  }

  /**
   * Setlist findUniqueOrThrow
   */
  export type SetlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where: SetlistWhereUniqueInput
  }

  /**
   * Setlist findFirst
   */
  export type SetlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setlists.
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setlists.
     */
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }

  /**
   * Setlist findFirstOrThrow
   */
  export type SetlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setlists.
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setlists.
     */
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }

  /**
   * Setlist findMany
   */
  export type SetlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlists to fetch.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setlists.
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }

  /**
   * Setlist create
   */
  export type SetlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Setlist.
     */
    data: XOR<SetlistCreateInput, SetlistUncheckedCreateInput>
  }

  /**
   * Setlist createMany
   */
  export type SetlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setlists.
     */
    data: SetlistCreateManyInput | SetlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setlist createManyAndReturn
   */
  export type SetlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * The data used to create many Setlists.
     */
    data: SetlistCreateManyInput | SetlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setlist update
   */
  export type SetlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Setlist.
     */
    data: XOR<SetlistUpdateInput, SetlistUncheckedUpdateInput>
    /**
     * Choose, which Setlist to update.
     */
    where: SetlistWhereUniqueInput
  }

  /**
   * Setlist updateMany
   */
  export type SetlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setlists.
     */
    data: XOR<SetlistUpdateManyMutationInput, SetlistUncheckedUpdateManyInput>
    /**
     * Filter which Setlists to update
     */
    where?: SetlistWhereInput
    /**
     * Limit how many Setlists to update.
     */
    limit?: number
  }

  /**
   * Setlist updateManyAndReturn
   */
  export type SetlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * The data used to update Setlists.
     */
    data: XOR<SetlistUpdateManyMutationInput, SetlistUncheckedUpdateManyInput>
    /**
     * Filter which Setlists to update
     */
    where?: SetlistWhereInput
    /**
     * Limit how many Setlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setlist upsert
   */
  export type SetlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Setlist to update in case it exists.
     */
    where: SetlistWhereUniqueInput
    /**
     * In case the Setlist found by the `where` argument doesn't exist, create a new Setlist with this data.
     */
    create: XOR<SetlistCreateInput, SetlistUncheckedCreateInput>
    /**
     * In case the Setlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetlistUpdateInput, SetlistUncheckedUpdateInput>
  }

  /**
   * Setlist delete
   */
  export type SetlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter which Setlist to delete.
     */
    where: SetlistWhereUniqueInput
  }

  /**
   * Setlist deleteMany
   */
  export type SetlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setlists to delete
     */
    where?: SetlistWhereInput
    /**
     * Limit how many Setlists to delete.
     */
    limit?: number
  }

  /**
   * Setlist.songs
   */
  export type Setlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    where?: SetlistSongWhereInput
    orderBy?: SetlistSongOrderByWithRelationInput | SetlistSongOrderByWithRelationInput[]
    cursor?: SetlistSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistSongScalarFieldEnum | SetlistSongScalarFieldEnum[]
  }

  /**
   * Setlist without action
   */
  export type SetlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setlist
     */
    omit?: SetlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistInclude<ExtArgs> | null
  }


  /**
   * Model SetlistSong
   */

  export type AggregateSetlistSong = {
    _count: SetlistSongCountAggregateOutputType | null
    _avg: SetlistSongAvgAggregateOutputType | null
    _sum: SetlistSongSumAggregateOutputType | null
    _min: SetlistSongMinAggregateOutputType | null
    _max: SetlistSongMaxAggregateOutputType | null
  }

  export type SetlistSongAvgAggregateOutputType = {
    order: number | null
  }

  export type SetlistSongSumAggregateOutputType = {
    order: number | null
  }

  export type SetlistSongMinAggregateOutputType = {
    id: string | null
    setlistId: string | null
    songId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetlistSongMaxAggregateOutputType = {
    id: string | null
    setlistId: string | null
    songId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetlistSongCountAggregateOutputType = {
    id: number
    setlistId: number
    songId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SetlistSongAvgAggregateInputType = {
    order?: true
  }

  export type SetlistSongSumAggregateInputType = {
    order?: true
  }

  export type SetlistSongMinAggregateInputType = {
    id?: true
    setlistId?: true
    songId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetlistSongMaxAggregateInputType = {
    id?: true
    setlistId?: true
    songId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetlistSongCountAggregateInputType = {
    id?: true
    setlistId?: true
    songId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SetlistSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetlistSong to aggregate.
     */
    where?: SetlistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistSongs to fetch.
     */
    orderBy?: SetlistSongOrderByWithRelationInput | SetlistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetlistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SetlistSongs
    **/
    _count?: true | SetlistSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetlistSongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetlistSongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetlistSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetlistSongMaxAggregateInputType
  }

  export type GetSetlistSongAggregateType<T extends SetlistSongAggregateArgs> = {
        [P in keyof T & keyof AggregateSetlistSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetlistSong[P]>
      : GetScalarType<T[P], AggregateSetlistSong[P]>
  }




  export type SetlistSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistSongWhereInput
    orderBy?: SetlistSongOrderByWithAggregationInput | SetlistSongOrderByWithAggregationInput[]
    by: SetlistSongScalarFieldEnum[] | SetlistSongScalarFieldEnum
    having?: SetlistSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetlistSongCountAggregateInputType | true
    _avg?: SetlistSongAvgAggregateInputType
    _sum?: SetlistSongSumAggregateInputType
    _min?: SetlistSongMinAggregateInputType
    _max?: SetlistSongMaxAggregateInputType
  }

  export type SetlistSongGroupByOutputType = {
    id: string
    setlistId: string
    songId: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SetlistSongCountAggregateOutputType | null
    _avg: SetlistSongAvgAggregateOutputType | null
    _sum: SetlistSongSumAggregateOutputType | null
    _min: SetlistSongMinAggregateOutputType | null
    _max: SetlistSongMaxAggregateOutputType | null
  }

  type GetSetlistSongGroupByPayload<T extends SetlistSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetlistSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetlistSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetlistSongGroupByOutputType[P]>
            : GetScalarType<T[P], SetlistSongGroupByOutputType[P]>
        }
      >
    >


  export type SetlistSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setlistId?: boolean
    songId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlistSong"]>

  export type SetlistSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setlistId?: boolean
    songId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlistSong"]>

  export type SetlistSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setlistId?: boolean
    songId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlistSong"]>

  export type SetlistSongSelectScalar = {
    id?: boolean
    setlistId?: boolean
    songId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SetlistSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "setlistId" | "songId" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["setlistSong"]>
  export type SetlistSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SetlistSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SetlistSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $SetlistSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SetlistSong"
    objects: {
      setlist: Prisma.$SetlistPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      setlistId: string
      songId: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["setlistSong"]>
    composites: {}
  }

  type SetlistSongGetPayload<S extends boolean | null | undefined | SetlistSongDefaultArgs> = $Result.GetResult<Prisma.$SetlistSongPayload, S>

  type SetlistSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetlistSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetlistSongCountAggregateInputType | true
    }

  export interface SetlistSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SetlistSong'], meta: { name: 'SetlistSong' } }
    /**
     * Find zero or one SetlistSong that matches the filter.
     * @param {SetlistSongFindUniqueArgs} args - Arguments to find a SetlistSong
     * @example
     * // Get one SetlistSong
     * const setlistSong = await prisma.setlistSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetlistSongFindUniqueArgs>(args: SelectSubset<T, SetlistSongFindUniqueArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SetlistSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetlistSongFindUniqueOrThrowArgs} args - Arguments to find a SetlistSong
     * @example
     * // Get one SetlistSong
     * const setlistSong = await prisma.setlistSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetlistSongFindUniqueOrThrowArgs>(args: SelectSubset<T, SetlistSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetlistSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongFindFirstArgs} args - Arguments to find a SetlistSong
     * @example
     * // Get one SetlistSong
     * const setlistSong = await prisma.setlistSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetlistSongFindFirstArgs>(args?: SelectSubset<T, SetlistSongFindFirstArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetlistSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongFindFirstOrThrowArgs} args - Arguments to find a SetlistSong
     * @example
     * // Get one SetlistSong
     * const setlistSong = await prisma.setlistSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetlistSongFindFirstOrThrowArgs>(args?: SelectSubset<T, SetlistSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SetlistSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SetlistSongs
     * const setlistSongs = await prisma.setlistSong.findMany()
     * 
     * // Get first 10 SetlistSongs
     * const setlistSongs = await prisma.setlistSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setlistSongWithIdOnly = await prisma.setlistSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetlistSongFindManyArgs>(args?: SelectSubset<T, SetlistSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SetlistSong.
     * @param {SetlistSongCreateArgs} args - Arguments to create a SetlistSong.
     * @example
     * // Create one SetlistSong
     * const SetlistSong = await prisma.setlistSong.create({
     *   data: {
     *     // ... data to create a SetlistSong
     *   }
     * })
     * 
     */
    create<T extends SetlistSongCreateArgs>(args: SelectSubset<T, SetlistSongCreateArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SetlistSongs.
     * @param {SetlistSongCreateManyArgs} args - Arguments to create many SetlistSongs.
     * @example
     * // Create many SetlistSongs
     * const setlistSong = await prisma.setlistSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetlistSongCreateManyArgs>(args?: SelectSubset<T, SetlistSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SetlistSongs and returns the data saved in the database.
     * @param {SetlistSongCreateManyAndReturnArgs} args - Arguments to create many SetlistSongs.
     * @example
     * // Create many SetlistSongs
     * const setlistSong = await prisma.setlistSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SetlistSongs and only return the `id`
     * const setlistSongWithIdOnly = await prisma.setlistSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetlistSongCreateManyAndReturnArgs>(args?: SelectSubset<T, SetlistSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SetlistSong.
     * @param {SetlistSongDeleteArgs} args - Arguments to delete one SetlistSong.
     * @example
     * // Delete one SetlistSong
     * const SetlistSong = await prisma.setlistSong.delete({
     *   where: {
     *     // ... filter to delete one SetlistSong
     *   }
     * })
     * 
     */
    delete<T extends SetlistSongDeleteArgs>(args: SelectSubset<T, SetlistSongDeleteArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SetlistSong.
     * @param {SetlistSongUpdateArgs} args - Arguments to update one SetlistSong.
     * @example
     * // Update one SetlistSong
     * const setlistSong = await prisma.setlistSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetlistSongUpdateArgs>(args: SelectSubset<T, SetlistSongUpdateArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SetlistSongs.
     * @param {SetlistSongDeleteManyArgs} args - Arguments to filter SetlistSongs to delete.
     * @example
     * // Delete a few SetlistSongs
     * const { count } = await prisma.setlistSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetlistSongDeleteManyArgs>(args?: SelectSubset<T, SetlistSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetlistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SetlistSongs
     * const setlistSong = await prisma.setlistSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetlistSongUpdateManyArgs>(args: SelectSubset<T, SetlistSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetlistSongs and returns the data updated in the database.
     * @param {SetlistSongUpdateManyAndReturnArgs} args - Arguments to update many SetlistSongs.
     * @example
     * // Update many SetlistSongs
     * const setlistSong = await prisma.setlistSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SetlistSongs and only return the `id`
     * const setlistSongWithIdOnly = await prisma.setlistSong.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetlistSongUpdateManyAndReturnArgs>(args: SelectSubset<T, SetlistSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SetlistSong.
     * @param {SetlistSongUpsertArgs} args - Arguments to update or create a SetlistSong.
     * @example
     * // Update or create a SetlistSong
     * const setlistSong = await prisma.setlistSong.upsert({
     *   create: {
     *     // ... data to create a SetlistSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SetlistSong we want to update
     *   }
     * })
     */
    upsert<T extends SetlistSongUpsertArgs>(args: SelectSubset<T, SetlistSongUpsertArgs<ExtArgs>>): Prisma__SetlistSongClient<$Result.GetResult<Prisma.$SetlistSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SetlistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongCountArgs} args - Arguments to filter SetlistSongs to count.
     * @example
     * // Count the number of SetlistSongs
     * const count = await prisma.setlistSong.count({
     *   where: {
     *     // ... the filter for the SetlistSongs we want to count
     *   }
     * })
    **/
    count<T extends SetlistSongCountArgs>(
      args?: Subset<T, SetlistSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetlistSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SetlistSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetlistSongAggregateArgs>(args: Subset<T, SetlistSongAggregateArgs>): Prisma.PrismaPromise<GetSetlistSongAggregateType<T>>

    /**
     * Group by SetlistSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistSongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SetlistSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetlistSongGroupByArgs['orderBy'] }
        : { orderBy?: SetlistSongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetlistSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetlistSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SetlistSong model
   */
  readonly fields: SetlistSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SetlistSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetlistSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setlist<T extends SetlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetlistDefaultArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SetlistSong model
   */
  interface SetlistSongFieldRefs {
    readonly id: FieldRef<"SetlistSong", 'String'>
    readonly setlistId: FieldRef<"SetlistSong", 'String'>
    readonly songId: FieldRef<"SetlistSong", 'String'>
    readonly order: FieldRef<"SetlistSong", 'Int'>
    readonly createdAt: FieldRef<"SetlistSong", 'DateTime'>
    readonly updatedAt: FieldRef<"SetlistSong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SetlistSong findUnique
   */
  export type SetlistSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * Filter, which SetlistSong to fetch.
     */
    where: SetlistSongWhereUniqueInput
  }

  /**
   * SetlistSong findUniqueOrThrow
   */
  export type SetlistSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * Filter, which SetlistSong to fetch.
     */
    where: SetlistSongWhereUniqueInput
  }

  /**
   * SetlistSong findFirst
   */
  export type SetlistSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * Filter, which SetlistSong to fetch.
     */
    where?: SetlistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistSongs to fetch.
     */
    orderBy?: SetlistSongOrderByWithRelationInput | SetlistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetlistSongs.
     */
    cursor?: SetlistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetlistSongs.
     */
    distinct?: SetlistSongScalarFieldEnum | SetlistSongScalarFieldEnum[]
  }

  /**
   * SetlistSong findFirstOrThrow
   */
  export type SetlistSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * Filter, which SetlistSong to fetch.
     */
    where?: SetlistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistSongs to fetch.
     */
    orderBy?: SetlistSongOrderByWithRelationInput | SetlistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetlistSongs.
     */
    cursor?: SetlistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetlistSongs.
     */
    distinct?: SetlistSongScalarFieldEnum | SetlistSongScalarFieldEnum[]
  }

  /**
   * SetlistSong findMany
   */
  export type SetlistSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * Filter, which SetlistSongs to fetch.
     */
    where?: SetlistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistSongs to fetch.
     */
    orderBy?: SetlistSongOrderByWithRelationInput | SetlistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SetlistSongs.
     */
    cursor?: SetlistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistSongs.
     */
    skip?: number
    distinct?: SetlistSongScalarFieldEnum | SetlistSongScalarFieldEnum[]
  }

  /**
   * SetlistSong create
   */
  export type SetlistSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * The data needed to create a SetlistSong.
     */
    data: XOR<SetlistSongCreateInput, SetlistSongUncheckedCreateInput>
  }

  /**
   * SetlistSong createMany
   */
  export type SetlistSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SetlistSongs.
     */
    data: SetlistSongCreateManyInput | SetlistSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SetlistSong createManyAndReturn
   */
  export type SetlistSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * The data used to create many SetlistSongs.
     */
    data: SetlistSongCreateManyInput | SetlistSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetlistSong update
   */
  export type SetlistSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * The data needed to update a SetlistSong.
     */
    data: XOR<SetlistSongUpdateInput, SetlistSongUncheckedUpdateInput>
    /**
     * Choose, which SetlistSong to update.
     */
    where: SetlistSongWhereUniqueInput
  }

  /**
   * SetlistSong updateMany
   */
  export type SetlistSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SetlistSongs.
     */
    data: XOR<SetlistSongUpdateManyMutationInput, SetlistSongUncheckedUpdateManyInput>
    /**
     * Filter which SetlistSongs to update
     */
    where?: SetlistSongWhereInput
    /**
     * Limit how many SetlistSongs to update.
     */
    limit?: number
  }

  /**
   * SetlistSong updateManyAndReturn
   */
  export type SetlistSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * The data used to update SetlistSongs.
     */
    data: XOR<SetlistSongUpdateManyMutationInput, SetlistSongUncheckedUpdateManyInput>
    /**
     * Filter which SetlistSongs to update
     */
    where?: SetlistSongWhereInput
    /**
     * Limit how many SetlistSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetlistSong upsert
   */
  export type SetlistSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * The filter to search for the SetlistSong to update in case it exists.
     */
    where: SetlistSongWhereUniqueInput
    /**
     * In case the SetlistSong found by the `where` argument doesn't exist, create a new SetlistSong with this data.
     */
    create: XOR<SetlistSongCreateInput, SetlistSongUncheckedCreateInput>
    /**
     * In case the SetlistSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetlistSongUpdateInput, SetlistSongUncheckedUpdateInput>
  }

  /**
   * SetlistSong delete
   */
  export type SetlistSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
    /**
     * Filter which SetlistSong to delete.
     */
    where: SetlistSongWhereUniqueInput
  }

  /**
   * SetlistSong deleteMany
   */
  export type SetlistSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetlistSongs to delete
     */
    where?: SetlistSongWhereInput
    /**
     * Limit how many SetlistSongs to delete.
     */
    limit?: number
  }

  /**
   * SetlistSong without action
   */
  export type SetlistSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistSong
     */
    select?: SetlistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetlistSong
     */
    omit?: SetlistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetlistSongInclude<ExtArgs> | null
  }


  /**
   * Model Rehearsal
   */

  export type AggregateRehearsal = {
    _count: RehearsalCountAggregateOutputType | null
    _min: RehearsalMinAggregateOutputType | null
    _max: RehearsalMaxAggregateOutputType | null
  }

  export type RehearsalMinAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RehearsalMaxAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RehearsalCountAggregateOutputType = {
    id: number
    bandId: number
    title: number
    startTime: number
    endTime: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RehearsalMinAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    startTime?: true
    endTime?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RehearsalMaxAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    startTime?: true
    endTime?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RehearsalCountAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    startTime?: true
    endTime?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RehearsalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rehearsal to aggregate.
     */
    where?: RehearsalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehearsals to fetch.
     */
    orderBy?: RehearsalOrderByWithRelationInput | RehearsalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RehearsalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehearsals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehearsals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rehearsals
    **/
    _count?: true | RehearsalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RehearsalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RehearsalMaxAggregateInputType
  }

  export type GetRehearsalAggregateType<T extends RehearsalAggregateArgs> = {
        [P in keyof T & keyof AggregateRehearsal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRehearsal[P]>
      : GetScalarType<T[P], AggregateRehearsal[P]>
  }




  export type RehearsalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehearsalWhereInput
    orderBy?: RehearsalOrderByWithAggregationInput | RehearsalOrderByWithAggregationInput[]
    by: RehearsalScalarFieldEnum[] | RehearsalScalarFieldEnum
    having?: RehearsalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RehearsalCountAggregateInputType | true
    _min?: RehearsalMinAggregateInputType
    _max?: RehearsalMaxAggregateInputType
  }

  export type RehearsalGroupByOutputType = {
    id: string
    bandId: string
    title: string
    startTime: Date
    endTime: Date
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: RehearsalCountAggregateOutputType | null
    _min: RehearsalMinAggregateOutputType | null
    _max: RehearsalMaxAggregateOutputType | null
  }

  type GetRehearsalGroupByPayload<T extends RehearsalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RehearsalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RehearsalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RehearsalGroupByOutputType[P]>
            : GetScalarType<T[P], RehearsalGroupByOutputType[P]>
        }
      >
    >


  export type RehearsalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rehearsal"]>

  export type RehearsalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rehearsal"]>

  export type RehearsalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rehearsal"]>

  export type RehearsalSelectScalar = {
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RehearsalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bandId" | "title" | "startTime" | "endTime" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["rehearsal"]>
  export type RehearsalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type RehearsalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type RehearsalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }

  export type $RehearsalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rehearsal"
    objects: {
      band: Prisma.$BandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bandId: string
      title: string
      startTime: Date
      endTime: Date
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rehearsal"]>
    composites: {}
  }

  type RehearsalGetPayload<S extends boolean | null | undefined | RehearsalDefaultArgs> = $Result.GetResult<Prisma.$RehearsalPayload, S>

  type RehearsalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RehearsalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RehearsalCountAggregateInputType | true
    }

  export interface RehearsalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rehearsal'], meta: { name: 'Rehearsal' } }
    /**
     * Find zero or one Rehearsal that matches the filter.
     * @param {RehearsalFindUniqueArgs} args - Arguments to find a Rehearsal
     * @example
     * // Get one Rehearsal
     * const rehearsal = await prisma.rehearsal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RehearsalFindUniqueArgs>(args: SelectSubset<T, RehearsalFindUniqueArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rehearsal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RehearsalFindUniqueOrThrowArgs} args - Arguments to find a Rehearsal
     * @example
     * // Get one Rehearsal
     * const rehearsal = await prisma.rehearsal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RehearsalFindUniqueOrThrowArgs>(args: SelectSubset<T, RehearsalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rehearsal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalFindFirstArgs} args - Arguments to find a Rehearsal
     * @example
     * // Get one Rehearsal
     * const rehearsal = await prisma.rehearsal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RehearsalFindFirstArgs>(args?: SelectSubset<T, RehearsalFindFirstArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rehearsal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalFindFirstOrThrowArgs} args - Arguments to find a Rehearsal
     * @example
     * // Get one Rehearsal
     * const rehearsal = await prisma.rehearsal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RehearsalFindFirstOrThrowArgs>(args?: SelectSubset<T, RehearsalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rehearsals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rehearsals
     * const rehearsals = await prisma.rehearsal.findMany()
     * 
     * // Get first 10 Rehearsals
     * const rehearsals = await prisma.rehearsal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rehearsalWithIdOnly = await prisma.rehearsal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RehearsalFindManyArgs>(args?: SelectSubset<T, RehearsalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rehearsal.
     * @param {RehearsalCreateArgs} args - Arguments to create a Rehearsal.
     * @example
     * // Create one Rehearsal
     * const Rehearsal = await prisma.rehearsal.create({
     *   data: {
     *     // ... data to create a Rehearsal
     *   }
     * })
     * 
     */
    create<T extends RehearsalCreateArgs>(args: SelectSubset<T, RehearsalCreateArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rehearsals.
     * @param {RehearsalCreateManyArgs} args - Arguments to create many Rehearsals.
     * @example
     * // Create many Rehearsals
     * const rehearsal = await prisma.rehearsal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RehearsalCreateManyArgs>(args?: SelectSubset<T, RehearsalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rehearsals and returns the data saved in the database.
     * @param {RehearsalCreateManyAndReturnArgs} args - Arguments to create many Rehearsals.
     * @example
     * // Create many Rehearsals
     * const rehearsal = await prisma.rehearsal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rehearsals and only return the `id`
     * const rehearsalWithIdOnly = await prisma.rehearsal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RehearsalCreateManyAndReturnArgs>(args?: SelectSubset<T, RehearsalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rehearsal.
     * @param {RehearsalDeleteArgs} args - Arguments to delete one Rehearsal.
     * @example
     * // Delete one Rehearsal
     * const Rehearsal = await prisma.rehearsal.delete({
     *   where: {
     *     // ... filter to delete one Rehearsal
     *   }
     * })
     * 
     */
    delete<T extends RehearsalDeleteArgs>(args: SelectSubset<T, RehearsalDeleteArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rehearsal.
     * @param {RehearsalUpdateArgs} args - Arguments to update one Rehearsal.
     * @example
     * // Update one Rehearsal
     * const rehearsal = await prisma.rehearsal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RehearsalUpdateArgs>(args: SelectSubset<T, RehearsalUpdateArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rehearsals.
     * @param {RehearsalDeleteManyArgs} args - Arguments to filter Rehearsals to delete.
     * @example
     * // Delete a few Rehearsals
     * const { count } = await prisma.rehearsal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RehearsalDeleteManyArgs>(args?: SelectSubset<T, RehearsalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rehearsals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rehearsals
     * const rehearsal = await prisma.rehearsal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RehearsalUpdateManyArgs>(args: SelectSubset<T, RehearsalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rehearsals and returns the data updated in the database.
     * @param {RehearsalUpdateManyAndReturnArgs} args - Arguments to update many Rehearsals.
     * @example
     * // Update many Rehearsals
     * const rehearsal = await prisma.rehearsal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rehearsals and only return the `id`
     * const rehearsalWithIdOnly = await prisma.rehearsal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RehearsalUpdateManyAndReturnArgs>(args: SelectSubset<T, RehearsalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rehearsal.
     * @param {RehearsalUpsertArgs} args - Arguments to update or create a Rehearsal.
     * @example
     * // Update or create a Rehearsal
     * const rehearsal = await prisma.rehearsal.upsert({
     *   create: {
     *     // ... data to create a Rehearsal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rehearsal we want to update
     *   }
     * })
     */
    upsert<T extends RehearsalUpsertArgs>(args: SelectSubset<T, RehearsalUpsertArgs<ExtArgs>>): Prisma__RehearsalClient<$Result.GetResult<Prisma.$RehearsalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rehearsals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalCountArgs} args - Arguments to filter Rehearsals to count.
     * @example
     * // Count the number of Rehearsals
     * const count = await prisma.rehearsal.count({
     *   where: {
     *     // ... the filter for the Rehearsals we want to count
     *   }
     * })
    **/
    count<T extends RehearsalCountArgs>(
      args?: Subset<T, RehearsalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RehearsalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rehearsal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RehearsalAggregateArgs>(args: Subset<T, RehearsalAggregateArgs>): Prisma.PrismaPromise<GetRehearsalAggregateType<T>>

    /**
     * Group by Rehearsal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehearsalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RehearsalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RehearsalGroupByArgs['orderBy'] }
        : { orderBy?: RehearsalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RehearsalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRehearsalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rehearsal model
   */
  readonly fields: RehearsalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rehearsal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RehearsalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    band<T extends BandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BandDefaultArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rehearsal model
   */
  interface RehearsalFieldRefs {
    readonly id: FieldRef<"Rehearsal", 'String'>
    readonly bandId: FieldRef<"Rehearsal", 'String'>
    readonly title: FieldRef<"Rehearsal", 'String'>
    readonly startTime: FieldRef<"Rehearsal", 'DateTime'>
    readonly endTime: FieldRef<"Rehearsal", 'DateTime'>
    readonly location: FieldRef<"Rehearsal", 'String'>
    readonly createdAt: FieldRef<"Rehearsal", 'DateTime'>
    readonly updatedAt: FieldRef<"Rehearsal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rehearsal findUnique
   */
  export type RehearsalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * Filter, which Rehearsal to fetch.
     */
    where: RehearsalWhereUniqueInput
  }

  /**
   * Rehearsal findUniqueOrThrow
   */
  export type RehearsalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * Filter, which Rehearsal to fetch.
     */
    where: RehearsalWhereUniqueInput
  }

  /**
   * Rehearsal findFirst
   */
  export type RehearsalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * Filter, which Rehearsal to fetch.
     */
    where?: RehearsalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehearsals to fetch.
     */
    orderBy?: RehearsalOrderByWithRelationInput | RehearsalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rehearsals.
     */
    cursor?: RehearsalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehearsals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehearsals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rehearsals.
     */
    distinct?: RehearsalScalarFieldEnum | RehearsalScalarFieldEnum[]
  }

  /**
   * Rehearsal findFirstOrThrow
   */
  export type RehearsalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * Filter, which Rehearsal to fetch.
     */
    where?: RehearsalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehearsals to fetch.
     */
    orderBy?: RehearsalOrderByWithRelationInput | RehearsalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rehearsals.
     */
    cursor?: RehearsalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehearsals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehearsals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rehearsals.
     */
    distinct?: RehearsalScalarFieldEnum | RehearsalScalarFieldEnum[]
  }

  /**
   * Rehearsal findMany
   */
  export type RehearsalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * Filter, which Rehearsals to fetch.
     */
    where?: RehearsalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehearsals to fetch.
     */
    orderBy?: RehearsalOrderByWithRelationInput | RehearsalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rehearsals.
     */
    cursor?: RehearsalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehearsals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehearsals.
     */
    skip?: number
    distinct?: RehearsalScalarFieldEnum | RehearsalScalarFieldEnum[]
  }

  /**
   * Rehearsal create
   */
  export type RehearsalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rehearsal.
     */
    data: XOR<RehearsalCreateInput, RehearsalUncheckedCreateInput>
  }

  /**
   * Rehearsal createMany
   */
  export type RehearsalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rehearsals.
     */
    data: RehearsalCreateManyInput | RehearsalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rehearsal createManyAndReturn
   */
  export type RehearsalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * The data used to create many Rehearsals.
     */
    data: RehearsalCreateManyInput | RehearsalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rehearsal update
   */
  export type RehearsalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rehearsal.
     */
    data: XOR<RehearsalUpdateInput, RehearsalUncheckedUpdateInput>
    /**
     * Choose, which Rehearsal to update.
     */
    where: RehearsalWhereUniqueInput
  }

  /**
   * Rehearsal updateMany
   */
  export type RehearsalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rehearsals.
     */
    data: XOR<RehearsalUpdateManyMutationInput, RehearsalUncheckedUpdateManyInput>
    /**
     * Filter which Rehearsals to update
     */
    where?: RehearsalWhereInput
    /**
     * Limit how many Rehearsals to update.
     */
    limit?: number
  }

  /**
   * Rehearsal updateManyAndReturn
   */
  export type RehearsalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * The data used to update Rehearsals.
     */
    data: XOR<RehearsalUpdateManyMutationInput, RehearsalUncheckedUpdateManyInput>
    /**
     * Filter which Rehearsals to update
     */
    where?: RehearsalWhereInput
    /**
     * Limit how many Rehearsals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rehearsal upsert
   */
  export type RehearsalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rehearsal to update in case it exists.
     */
    where: RehearsalWhereUniqueInput
    /**
     * In case the Rehearsal found by the `where` argument doesn't exist, create a new Rehearsal with this data.
     */
    create: XOR<RehearsalCreateInput, RehearsalUncheckedCreateInput>
    /**
     * In case the Rehearsal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RehearsalUpdateInput, RehearsalUncheckedUpdateInput>
  }

  /**
   * Rehearsal delete
   */
  export type RehearsalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
    /**
     * Filter which Rehearsal to delete.
     */
    where: RehearsalWhereUniqueInput
  }

  /**
   * Rehearsal deleteMany
   */
  export type RehearsalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rehearsals to delete
     */
    where?: RehearsalWhereInput
    /**
     * Limit how many Rehearsals to delete.
     */
    limit?: number
  }

  /**
   * Rehearsal without action
   */
  export type RehearsalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehearsal
     */
    select?: RehearsalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehearsal
     */
    omit?: RehearsalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehearsalInclude<ExtArgs> | null
  }


  /**
   * Model Gig
   */

  export type AggregateGig = {
    _count: GigCountAggregateOutputType | null
    _avg: GigAvgAggregateOutputType | null
    _sum: GigSumAggregateOutputType | null
    _min: GigMinAggregateOutputType | null
    _max: GigMaxAggregateOutputType | null
  }

  export type GigAvgAggregateOutputType = {
    payRate: number | null
  }

  export type GigSumAggregateOutputType = {
    payRate: number | null
  }

  export type GigMinAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    venue: string | null
    address: string | null
    payRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GigMaxAggregateOutputType = {
    id: string | null
    bandId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    venue: string | null
    address: string | null
    payRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GigCountAggregateOutputType = {
    id: number
    bandId: number
    title: number
    startTime: number
    endTime: number
    venue: number
    address: number
    payRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GigAvgAggregateInputType = {
    payRate?: true
  }

  export type GigSumAggregateInputType = {
    payRate?: true
  }

  export type GigMinAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    startTime?: true
    endTime?: true
    venue?: true
    address?: true
    payRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GigMaxAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    startTime?: true
    endTime?: true
    venue?: true
    address?: true
    payRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GigCountAggregateInputType = {
    id?: true
    bandId?: true
    title?: true
    startTime?: true
    endTime?: true
    venue?: true
    address?: true
    payRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gig to aggregate.
     */
    where?: GigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: GigOrderByWithRelationInput | GigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gigs
    **/
    _count?: true | GigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GigMaxAggregateInputType
  }

  export type GetGigAggregateType<T extends GigAggregateArgs> = {
        [P in keyof T & keyof AggregateGig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGig[P]>
      : GetScalarType<T[P], AggregateGig[P]>
  }




  export type GigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GigWhereInput
    orderBy?: GigOrderByWithAggregationInput | GigOrderByWithAggregationInput[]
    by: GigScalarFieldEnum[] | GigScalarFieldEnum
    having?: GigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GigCountAggregateInputType | true
    _avg?: GigAvgAggregateInputType
    _sum?: GigSumAggregateInputType
    _min?: GigMinAggregateInputType
    _max?: GigMaxAggregateInputType
  }

  export type GigGroupByOutputType = {
    id: string
    bandId: string
    title: string
    startTime: Date
    endTime: Date
    venue: string | null
    address: string | null
    payRate: number | null
    createdAt: Date
    updatedAt: Date
    _count: GigCountAggregateOutputType | null
    _avg: GigAvgAggregateOutputType | null
    _sum: GigSumAggregateOutputType | null
    _min: GigMinAggregateOutputType | null
    _max: GigMaxAggregateOutputType | null
  }

  type GetGigGroupByPayload<T extends GigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GigGroupByOutputType[P]>
            : GetScalarType<T[P], GigGroupByOutputType[P]>
        }
      >
    >


  export type GigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    address?: boolean
    payRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gig"]>

  export type GigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    address?: boolean
    payRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gig"]>

  export type GigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    address?: boolean
    payRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gig"]>

  export type GigSelectScalar = {
    id?: boolean
    bandId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    address?: boolean
    payRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bandId" | "title" | "startTime" | "endTime" | "venue" | "address" | "payRate" | "createdAt" | "updatedAt", ExtArgs["result"]["gig"]>
  export type GigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type GigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type GigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    band?: boolean | BandDefaultArgs<ExtArgs>
  }

  export type $GigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gig"
    objects: {
      band: Prisma.$BandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bandId: string
      title: string
      startTime: Date
      endTime: Date
      venue: string | null
      address: string | null
      payRate: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gig"]>
    composites: {}
  }

  type GigGetPayload<S extends boolean | null | undefined | GigDefaultArgs> = $Result.GetResult<Prisma.$GigPayload, S>

  type GigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GigCountAggregateInputType | true
    }

  export interface GigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gig'], meta: { name: 'Gig' } }
    /**
     * Find zero or one Gig that matches the filter.
     * @param {GigFindUniqueArgs} args - Arguments to find a Gig
     * @example
     * // Get one Gig
     * const gig = await prisma.gig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GigFindUniqueArgs>(args: SelectSubset<T, GigFindUniqueArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GigFindUniqueOrThrowArgs} args - Arguments to find a Gig
     * @example
     * // Get one Gig
     * const gig = await prisma.gig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GigFindUniqueOrThrowArgs>(args: SelectSubset<T, GigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigFindFirstArgs} args - Arguments to find a Gig
     * @example
     * // Get one Gig
     * const gig = await prisma.gig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GigFindFirstArgs>(args?: SelectSubset<T, GigFindFirstArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigFindFirstOrThrowArgs} args - Arguments to find a Gig
     * @example
     * // Get one Gig
     * const gig = await prisma.gig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GigFindFirstOrThrowArgs>(args?: SelectSubset<T, GigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gigs
     * const gigs = await prisma.gig.findMany()
     * 
     * // Get first 10 Gigs
     * const gigs = await prisma.gig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gigWithIdOnly = await prisma.gig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GigFindManyArgs>(args?: SelectSubset<T, GigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gig.
     * @param {GigCreateArgs} args - Arguments to create a Gig.
     * @example
     * // Create one Gig
     * const Gig = await prisma.gig.create({
     *   data: {
     *     // ... data to create a Gig
     *   }
     * })
     * 
     */
    create<T extends GigCreateArgs>(args: SelectSubset<T, GigCreateArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gigs.
     * @param {GigCreateManyArgs} args - Arguments to create many Gigs.
     * @example
     * // Create many Gigs
     * const gig = await prisma.gig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GigCreateManyArgs>(args?: SelectSubset<T, GigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gigs and returns the data saved in the database.
     * @param {GigCreateManyAndReturnArgs} args - Arguments to create many Gigs.
     * @example
     * // Create many Gigs
     * const gig = await prisma.gig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gigs and only return the `id`
     * const gigWithIdOnly = await prisma.gig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GigCreateManyAndReturnArgs>(args?: SelectSubset<T, GigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gig.
     * @param {GigDeleteArgs} args - Arguments to delete one Gig.
     * @example
     * // Delete one Gig
     * const Gig = await prisma.gig.delete({
     *   where: {
     *     // ... filter to delete one Gig
     *   }
     * })
     * 
     */
    delete<T extends GigDeleteArgs>(args: SelectSubset<T, GigDeleteArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gig.
     * @param {GigUpdateArgs} args - Arguments to update one Gig.
     * @example
     * // Update one Gig
     * const gig = await prisma.gig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GigUpdateArgs>(args: SelectSubset<T, GigUpdateArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gigs.
     * @param {GigDeleteManyArgs} args - Arguments to filter Gigs to delete.
     * @example
     * // Delete a few Gigs
     * const { count } = await prisma.gig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GigDeleteManyArgs>(args?: SelectSubset<T, GigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gigs
     * const gig = await prisma.gig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GigUpdateManyArgs>(args: SelectSubset<T, GigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gigs and returns the data updated in the database.
     * @param {GigUpdateManyAndReturnArgs} args - Arguments to update many Gigs.
     * @example
     * // Update many Gigs
     * const gig = await prisma.gig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gigs and only return the `id`
     * const gigWithIdOnly = await prisma.gig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GigUpdateManyAndReturnArgs>(args: SelectSubset<T, GigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gig.
     * @param {GigUpsertArgs} args - Arguments to update or create a Gig.
     * @example
     * // Update or create a Gig
     * const gig = await prisma.gig.upsert({
     *   create: {
     *     // ... data to create a Gig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gig we want to update
     *   }
     * })
     */
    upsert<T extends GigUpsertArgs>(args: SelectSubset<T, GigUpsertArgs<ExtArgs>>): Prisma__GigClient<$Result.GetResult<Prisma.$GigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigCountArgs} args - Arguments to filter Gigs to count.
     * @example
     * // Count the number of Gigs
     * const count = await prisma.gig.count({
     *   where: {
     *     // ... the filter for the Gigs we want to count
     *   }
     * })
    **/
    count<T extends GigCountArgs>(
      args?: Subset<T, GigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GigAggregateArgs>(args: Subset<T, GigAggregateArgs>): Prisma.PrismaPromise<GetGigAggregateType<T>>

    /**
     * Group by Gig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GigGroupByArgs['orderBy'] }
        : { orderBy?: GigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gig model
   */
  readonly fields: GigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    band<T extends BandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BandDefaultArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gig model
   */
  interface GigFieldRefs {
    readonly id: FieldRef<"Gig", 'String'>
    readonly bandId: FieldRef<"Gig", 'String'>
    readonly title: FieldRef<"Gig", 'String'>
    readonly startTime: FieldRef<"Gig", 'DateTime'>
    readonly endTime: FieldRef<"Gig", 'DateTime'>
    readonly venue: FieldRef<"Gig", 'String'>
    readonly address: FieldRef<"Gig", 'String'>
    readonly payRate: FieldRef<"Gig", 'Float'>
    readonly createdAt: FieldRef<"Gig", 'DateTime'>
    readonly updatedAt: FieldRef<"Gig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gig findUnique
   */
  export type GigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * Filter, which Gig to fetch.
     */
    where: GigWhereUniqueInput
  }

  /**
   * Gig findUniqueOrThrow
   */
  export type GigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * Filter, which Gig to fetch.
     */
    where: GigWhereUniqueInput
  }

  /**
   * Gig findFirst
   */
  export type GigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * Filter, which Gig to fetch.
     */
    where?: GigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: GigOrderByWithRelationInput | GigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gigs.
     */
    cursor?: GigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gigs.
     */
    distinct?: GigScalarFieldEnum | GigScalarFieldEnum[]
  }

  /**
   * Gig findFirstOrThrow
   */
  export type GigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * Filter, which Gig to fetch.
     */
    where?: GigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: GigOrderByWithRelationInput | GigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gigs.
     */
    cursor?: GigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gigs.
     */
    distinct?: GigScalarFieldEnum | GigScalarFieldEnum[]
  }

  /**
   * Gig findMany
   */
  export type GigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * Filter, which Gigs to fetch.
     */
    where?: GigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gigs to fetch.
     */
    orderBy?: GigOrderByWithRelationInput | GigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gigs.
     */
    cursor?: GigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gigs.
     */
    skip?: number
    distinct?: GigScalarFieldEnum | GigScalarFieldEnum[]
  }

  /**
   * Gig create
   */
  export type GigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * The data needed to create a Gig.
     */
    data: XOR<GigCreateInput, GigUncheckedCreateInput>
  }

  /**
   * Gig createMany
   */
  export type GigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gigs.
     */
    data: GigCreateManyInput | GigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gig createManyAndReturn
   */
  export type GigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * The data used to create many Gigs.
     */
    data: GigCreateManyInput | GigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gig update
   */
  export type GigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * The data needed to update a Gig.
     */
    data: XOR<GigUpdateInput, GigUncheckedUpdateInput>
    /**
     * Choose, which Gig to update.
     */
    where: GigWhereUniqueInput
  }

  /**
   * Gig updateMany
   */
  export type GigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gigs.
     */
    data: XOR<GigUpdateManyMutationInput, GigUncheckedUpdateManyInput>
    /**
     * Filter which Gigs to update
     */
    where?: GigWhereInput
    /**
     * Limit how many Gigs to update.
     */
    limit?: number
  }

  /**
   * Gig updateManyAndReturn
   */
  export type GigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * The data used to update Gigs.
     */
    data: XOR<GigUpdateManyMutationInput, GigUncheckedUpdateManyInput>
    /**
     * Filter which Gigs to update
     */
    where?: GigWhereInput
    /**
     * Limit how many Gigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gig upsert
   */
  export type GigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * The filter to search for the Gig to update in case it exists.
     */
    where: GigWhereUniqueInput
    /**
     * In case the Gig found by the `where` argument doesn't exist, create a new Gig with this data.
     */
    create: XOR<GigCreateInput, GigUncheckedCreateInput>
    /**
     * In case the Gig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GigUpdateInput, GigUncheckedUpdateInput>
  }

  /**
   * Gig delete
   */
  export type GigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
    /**
     * Filter which Gig to delete.
     */
    where: GigWhereUniqueInput
  }

  /**
   * Gig deleteMany
   */
  export type GigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gigs to delete
     */
    where?: GigWhereInput
    /**
     * Limit how many Gigs to delete.
     */
    limit?: number
  }

  /**
   * Gig without action
   */
  export type GigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gig
     */
    select?: GigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gig
     */
    omit?: GigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GigInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firebaseId: 'firebaseId',
    email: 'email',
    displayName: 'displayName',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BandScalarFieldEnum = (typeof BandScalarFieldEnum)[keyof typeof BandScalarFieldEnum]


  export const BandMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bandId: 'bandId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BandMemberScalarFieldEnum = (typeof BandMemberScalarFieldEnum)[keyof typeof BandMemberScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    bandId: 'bandId',
    title: 'title',
    artist: 'artist',
    duration: 'duration',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const SetlistScalarFieldEnum: {
    id: 'id',
    bandId: 'bandId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SetlistScalarFieldEnum = (typeof SetlistScalarFieldEnum)[keyof typeof SetlistScalarFieldEnum]


  export const SetlistSongScalarFieldEnum: {
    id: 'id',
    setlistId: 'setlistId',
    songId: 'songId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SetlistSongScalarFieldEnum = (typeof SetlistSongScalarFieldEnum)[keyof typeof SetlistSongScalarFieldEnum]


  export const RehearsalScalarFieldEnum: {
    id: 'id',
    bandId: 'bandId',
    title: 'title',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RehearsalScalarFieldEnum = (typeof RehearsalScalarFieldEnum)[keyof typeof RehearsalScalarFieldEnum]


  export const GigScalarFieldEnum: {
    id: 'id',
    bandId: 'bandId',
    title: 'title',
    startTime: 'startTime',
    endTime: 'endTime',
    venue: 'venue',
    address: 'address',
    payRate: 'payRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GigScalarFieldEnum = (typeof GigScalarFieldEnum)[keyof typeof GigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firebaseId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bandMembers?: BandMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bandMembers?: BandMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firebaseId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bandMembers?: BandMemberListRelationFilter
  }, "id" | "firebaseId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firebaseId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BandWhereInput = {
    AND?: BandWhereInput | BandWhereInput[]
    OR?: BandWhereInput[]
    NOT?: BandWhereInput | BandWhereInput[]
    id?: StringFilter<"Band"> | string
    name?: StringFilter<"Band"> | string
    description?: StringNullableFilter<"Band"> | string | null
    imageUrl?: StringNullableFilter<"Band"> | string | null
    createdAt?: DateTimeFilter<"Band"> | Date | string
    updatedAt?: DateTimeFilter<"Band"> | Date | string
    members?: BandMemberListRelationFilter
    setlists?: SetlistListRelationFilter
    rehearsals?: RehearsalListRelationFilter
    gigs?: GigListRelationFilter
    songs?: SongListRelationFilter
  }

  export type BandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: BandMemberOrderByRelationAggregateInput
    setlists?: SetlistOrderByRelationAggregateInput
    rehearsals?: RehearsalOrderByRelationAggregateInput
    gigs?: GigOrderByRelationAggregateInput
    songs?: SongOrderByRelationAggregateInput
  }

  export type BandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BandWhereInput | BandWhereInput[]
    OR?: BandWhereInput[]
    NOT?: BandWhereInput | BandWhereInput[]
    name?: StringFilter<"Band"> | string
    description?: StringNullableFilter<"Band"> | string | null
    imageUrl?: StringNullableFilter<"Band"> | string | null
    createdAt?: DateTimeFilter<"Band"> | Date | string
    updatedAt?: DateTimeFilter<"Band"> | Date | string
    members?: BandMemberListRelationFilter
    setlists?: SetlistListRelationFilter
    rehearsals?: RehearsalListRelationFilter
    gigs?: GigListRelationFilter
    songs?: SongListRelationFilter
  }, "id">

  export type BandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BandCountOrderByAggregateInput
    _max?: BandMaxOrderByAggregateInput
    _min?: BandMinOrderByAggregateInput
  }

  export type BandScalarWhereWithAggregatesInput = {
    AND?: BandScalarWhereWithAggregatesInput | BandScalarWhereWithAggregatesInput[]
    OR?: BandScalarWhereWithAggregatesInput[]
    NOT?: BandScalarWhereWithAggregatesInput | BandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Band"> | string
    name?: StringWithAggregatesFilter<"Band"> | string
    description?: StringNullableWithAggregatesFilter<"Band"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Band"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Band"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Band"> | Date | string
  }

  export type BandMemberWhereInput = {
    AND?: BandMemberWhereInput | BandMemberWhereInput[]
    OR?: BandMemberWhereInput[]
    NOT?: BandMemberWhereInput | BandMemberWhereInput[]
    id?: StringFilter<"BandMember"> | string
    userId?: StringFilter<"BandMember"> | string
    bandId?: StringFilter<"BandMember"> | string
    role?: StringFilter<"BandMember"> | string
    createdAt?: DateTimeFilter<"BandMember"> | Date | string
    updatedAt?: DateTimeFilter<"BandMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }

  export type BandMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    band?: BandOrderByWithRelationInput
  }

  export type BandMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_bandId?: BandMemberUserIdBandIdCompoundUniqueInput
    AND?: BandMemberWhereInput | BandMemberWhereInput[]
    OR?: BandMemberWhereInput[]
    NOT?: BandMemberWhereInput | BandMemberWhereInput[]
    userId?: StringFilter<"BandMember"> | string
    bandId?: StringFilter<"BandMember"> | string
    role?: StringFilter<"BandMember"> | string
    createdAt?: DateTimeFilter<"BandMember"> | Date | string
    updatedAt?: DateTimeFilter<"BandMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }, "id" | "userId_bandId">

  export type BandMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BandMemberCountOrderByAggregateInput
    _max?: BandMemberMaxOrderByAggregateInput
    _min?: BandMemberMinOrderByAggregateInput
  }

  export type BandMemberScalarWhereWithAggregatesInput = {
    AND?: BandMemberScalarWhereWithAggregatesInput | BandMemberScalarWhereWithAggregatesInput[]
    OR?: BandMemberScalarWhereWithAggregatesInput[]
    NOT?: BandMemberScalarWhereWithAggregatesInput | BandMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BandMember"> | string
    userId?: StringWithAggregatesFilter<"BandMember"> | string
    bandId?: StringWithAggregatesFilter<"BandMember"> | string
    role?: StringWithAggregatesFilter<"BandMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BandMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BandMember"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    bandId?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    artist?: StringNullableFilter<"Song"> | string | null
    duration?: IntNullableFilter<"Song"> | number | null
    notes?: StringNullableFilter<"Song"> | string | null
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
    setlistSongs?: SetlistSongListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    artist?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    band?: BandOrderByWithRelationInput
    setlistSongs?: SetlistSongOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    bandId?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    artist?: StringNullableFilter<"Song"> | string | null
    duration?: IntNullableFilter<"Song"> | number | null
    notes?: StringNullableFilter<"Song"> | string | null
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
    setlistSongs?: SetlistSongListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    artist?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    bandId?: StringWithAggregatesFilter<"Song"> | string
    title?: StringWithAggregatesFilter<"Song"> | string
    artist?: StringNullableWithAggregatesFilter<"Song"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Song"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Song"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type SetlistWhereInput = {
    AND?: SetlistWhereInput | SetlistWhereInput[]
    OR?: SetlistWhereInput[]
    NOT?: SetlistWhereInput | SetlistWhereInput[]
    id?: StringFilter<"Setlist"> | string
    bandId?: StringFilter<"Setlist"> | string
    title?: StringFilter<"Setlist"> | string
    description?: StringNullableFilter<"Setlist"> | string | null
    createdAt?: DateTimeFilter<"Setlist"> | Date | string
    updatedAt?: DateTimeFilter<"Setlist"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
    songs?: SetlistSongListRelationFilter
  }

  export type SetlistOrderByWithRelationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    band?: BandOrderByWithRelationInput
    songs?: SetlistSongOrderByRelationAggregateInput
  }

  export type SetlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetlistWhereInput | SetlistWhereInput[]
    OR?: SetlistWhereInput[]
    NOT?: SetlistWhereInput | SetlistWhereInput[]
    bandId?: StringFilter<"Setlist"> | string
    title?: StringFilter<"Setlist"> | string
    description?: StringNullableFilter<"Setlist"> | string | null
    createdAt?: DateTimeFilter<"Setlist"> | Date | string
    updatedAt?: DateTimeFilter<"Setlist"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
    songs?: SetlistSongListRelationFilter
  }, "id">

  export type SetlistOrderByWithAggregationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SetlistCountOrderByAggregateInput
    _max?: SetlistMaxOrderByAggregateInput
    _min?: SetlistMinOrderByAggregateInput
  }

  export type SetlistScalarWhereWithAggregatesInput = {
    AND?: SetlistScalarWhereWithAggregatesInput | SetlistScalarWhereWithAggregatesInput[]
    OR?: SetlistScalarWhereWithAggregatesInput[]
    NOT?: SetlistScalarWhereWithAggregatesInput | SetlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setlist"> | string
    bandId?: StringWithAggregatesFilter<"Setlist"> | string
    title?: StringWithAggregatesFilter<"Setlist"> | string
    description?: StringNullableWithAggregatesFilter<"Setlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Setlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setlist"> | Date | string
  }

  export type SetlistSongWhereInput = {
    AND?: SetlistSongWhereInput | SetlistSongWhereInput[]
    OR?: SetlistSongWhereInput[]
    NOT?: SetlistSongWhereInput | SetlistSongWhereInput[]
    id?: StringFilter<"SetlistSong"> | string
    setlistId?: StringFilter<"SetlistSong"> | string
    songId?: StringFilter<"SetlistSong"> | string
    order?: IntFilter<"SetlistSong"> | number
    createdAt?: DateTimeFilter<"SetlistSong"> | Date | string
    updatedAt?: DateTimeFilter<"SetlistSong"> | Date | string
    setlist?: XOR<SetlistScalarRelationFilter, SetlistWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type SetlistSongOrderByWithRelationInput = {
    id?: SortOrder
    setlistId?: SortOrder
    songId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    setlist?: SetlistOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type SetlistSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    setlistId_songId?: SetlistSongSetlistIdSongIdCompoundUniqueInput
    AND?: SetlistSongWhereInput | SetlistSongWhereInput[]
    OR?: SetlistSongWhereInput[]
    NOT?: SetlistSongWhereInput | SetlistSongWhereInput[]
    setlistId?: StringFilter<"SetlistSong"> | string
    songId?: StringFilter<"SetlistSong"> | string
    order?: IntFilter<"SetlistSong"> | number
    createdAt?: DateTimeFilter<"SetlistSong"> | Date | string
    updatedAt?: DateTimeFilter<"SetlistSong"> | Date | string
    setlist?: XOR<SetlistScalarRelationFilter, SetlistWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id" | "setlistId_songId">

  export type SetlistSongOrderByWithAggregationInput = {
    id?: SortOrder
    setlistId?: SortOrder
    songId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SetlistSongCountOrderByAggregateInput
    _avg?: SetlistSongAvgOrderByAggregateInput
    _max?: SetlistSongMaxOrderByAggregateInput
    _min?: SetlistSongMinOrderByAggregateInput
    _sum?: SetlistSongSumOrderByAggregateInput
  }

  export type SetlistSongScalarWhereWithAggregatesInput = {
    AND?: SetlistSongScalarWhereWithAggregatesInput | SetlistSongScalarWhereWithAggregatesInput[]
    OR?: SetlistSongScalarWhereWithAggregatesInput[]
    NOT?: SetlistSongScalarWhereWithAggregatesInput | SetlistSongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SetlistSong"> | string
    setlistId?: StringWithAggregatesFilter<"SetlistSong"> | string
    songId?: StringWithAggregatesFilter<"SetlistSong"> | string
    order?: IntWithAggregatesFilter<"SetlistSong"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SetlistSong"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SetlistSong"> | Date | string
  }

  export type RehearsalWhereInput = {
    AND?: RehearsalWhereInput | RehearsalWhereInput[]
    OR?: RehearsalWhereInput[]
    NOT?: RehearsalWhereInput | RehearsalWhereInput[]
    id?: StringFilter<"Rehearsal"> | string
    bandId?: StringFilter<"Rehearsal"> | string
    title?: StringFilter<"Rehearsal"> | string
    startTime?: DateTimeFilter<"Rehearsal"> | Date | string
    endTime?: DateTimeFilter<"Rehearsal"> | Date | string
    location?: StringNullableFilter<"Rehearsal"> | string | null
    createdAt?: DateTimeFilter<"Rehearsal"> | Date | string
    updatedAt?: DateTimeFilter<"Rehearsal"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }

  export type RehearsalOrderByWithRelationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    band?: BandOrderByWithRelationInput
  }

  export type RehearsalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RehearsalWhereInput | RehearsalWhereInput[]
    OR?: RehearsalWhereInput[]
    NOT?: RehearsalWhereInput | RehearsalWhereInput[]
    bandId?: StringFilter<"Rehearsal"> | string
    title?: StringFilter<"Rehearsal"> | string
    startTime?: DateTimeFilter<"Rehearsal"> | Date | string
    endTime?: DateTimeFilter<"Rehearsal"> | Date | string
    location?: StringNullableFilter<"Rehearsal"> | string | null
    createdAt?: DateTimeFilter<"Rehearsal"> | Date | string
    updatedAt?: DateTimeFilter<"Rehearsal"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }, "id">

  export type RehearsalOrderByWithAggregationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RehearsalCountOrderByAggregateInput
    _max?: RehearsalMaxOrderByAggregateInput
    _min?: RehearsalMinOrderByAggregateInput
  }

  export type RehearsalScalarWhereWithAggregatesInput = {
    AND?: RehearsalScalarWhereWithAggregatesInput | RehearsalScalarWhereWithAggregatesInput[]
    OR?: RehearsalScalarWhereWithAggregatesInput[]
    NOT?: RehearsalScalarWhereWithAggregatesInput | RehearsalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rehearsal"> | string
    bandId?: StringWithAggregatesFilter<"Rehearsal"> | string
    title?: StringWithAggregatesFilter<"Rehearsal"> | string
    startTime?: DateTimeWithAggregatesFilter<"Rehearsal"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Rehearsal"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Rehearsal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rehearsal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rehearsal"> | Date | string
  }

  export type GigWhereInput = {
    AND?: GigWhereInput | GigWhereInput[]
    OR?: GigWhereInput[]
    NOT?: GigWhereInput | GigWhereInput[]
    id?: StringFilter<"Gig"> | string
    bandId?: StringFilter<"Gig"> | string
    title?: StringFilter<"Gig"> | string
    startTime?: DateTimeFilter<"Gig"> | Date | string
    endTime?: DateTimeFilter<"Gig"> | Date | string
    venue?: StringNullableFilter<"Gig"> | string | null
    address?: StringNullableFilter<"Gig"> | string | null
    payRate?: FloatNullableFilter<"Gig"> | number | null
    createdAt?: DateTimeFilter<"Gig"> | Date | string
    updatedAt?: DateTimeFilter<"Gig"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }

  export type GigOrderByWithRelationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    payRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    band?: BandOrderByWithRelationInput
  }

  export type GigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GigWhereInput | GigWhereInput[]
    OR?: GigWhereInput[]
    NOT?: GigWhereInput | GigWhereInput[]
    bandId?: StringFilter<"Gig"> | string
    title?: StringFilter<"Gig"> | string
    startTime?: DateTimeFilter<"Gig"> | Date | string
    endTime?: DateTimeFilter<"Gig"> | Date | string
    venue?: StringNullableFilter<"Gig"> | string | null
    address?: StringNullableFilter<"Gig"> | string | null
    payRate?: FloatNullableFilter<"Gig"> | number | null
    createdAt?: DateTimeFilter<"Gig"> | Date | string
    updatedAt?: DateTimeFilter<"Gig"> | Date | string
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }, "id">

  export type GigOrderByWithAggregationInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    payRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GigCountOrderByAggregateInput
    _avg?: GigAvgOrderByAggregateInput
    _max?: GigMaxOrderByAggregateInput
    _min?: GigMinOrderByAggregateInput
    _sum?: GigSumOrderByAggregateInput
  }

  export type GigScalarWhereWithAggregatesInput = {
    AND?: GigScalarWhereWithAggregatesInput | GigScalarWhereWithAggregatesInput[]
    OR?: GigScalarWhereWithAggregatesInput[]
    NOT?: GigScalarWhereWithAggregatesInput | GigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gig"> | string
    bandId?: StringWithAggregatesFilter<"Gig"> | string
    title?: StringWithAggregatesFilter<"Gig"> | string
    startTime?: DateTimeWithAggregatesFilter<"Gig"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Gig"> | Date | string
    venue?: StringNullableWithAggregatesFilter<"Gig"> | string | null
    address?: StringNullableWithAggregatesFilter<"Gig"> | string | null
    payRate?: FloatNullableWithAggregatesFilter<"Gig"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Gig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gig"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firebaseId: string
    email: string
    displayName?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bandMembers?: BandMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firebaseId: string
    email: string
    displayName?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bandMembers?: BandMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bandMembers?: BandMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bandMembers?: BandMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firebaseId: string
    email: string
    displayName?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberCreateNestedManyWithoutBandInput
    setlists?: SetlistCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalCreateNestedManyWithoutBandInput
    gigs?: GigCreateNestedManyWithoutBandInput
    songs?: SongCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberUncheckedCreateNestedManyWithoutBandInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalUncheckedCreateNestedManyWithoutBandInput
    gigs?: GigUncheckedCreateNestedManyWithoutBandInput
    songs?: SongUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUpdateManyWithoutBandNestedInput
    setlists?: SetlistUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUpdateManyWithoutBandNestedInput
    gigs?: GigUpdateManyWithoutBandNestedInput
    songs?: SongUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUncheckedUpdateManyWithoutBandNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUncheckedUpdateManyWithoutBandNestedInput
    gigs?: GigUncheckedUpdateManyWithoutBandNestedInput
    songs?: SongUncheckedUpdateManyWithoutBandNestedInput
  }

  export type BandCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandMemberCreateInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBandMembersInput
    band: BandCreateNestedOneWithoutMembersInput
  }

  export type BandMemberUncheckedCreateInput = {
    id?: string
    userId: string
    bandId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBandMembersNestedInput
    band?: BandUpdateOneRequiredWithoutMembersNestedInput
  }

  export type BandMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandMemberCreateManyInput = {
    id?: string
    userId: string
    bandId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    id?: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutSongsInput
    setlistSongs?: SetlistSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    bandId: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setlistSongs?: SetlistSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutSongsNestedInput
    setlistSongs?: SetlistSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlistSongs?: SetlistSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    bandId: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutSetlistsInput
    songs?: SetlistSongCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateInput = {
    id?: string
    bandId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SetlistSongUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutSetlistsNestedInput
    songs?: SetlistSongUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SetlistSongUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistCreateManyInput = {
    id?: string
    bandId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongCreateInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    setlist: SetlistCreateNestedOneWithoutSongsInput
    song: SongCreateNestedOneWithoutSetlistSongsInput
  }

  export type SetlistSongUncheckedCreateInput = {
    id?: string
    setlistId: string
    songId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistSongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlist?: SetlistUpdateOneRequiredWithoutSongsNestedInput
    song?: SongUpdateOneRequiredWithoutSetlistSongsNestedInput
  }

  export type SetlistSongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongCreateManyInput = {
    id?: string
    setlistId: string
    songId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistSongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RehearsalCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutRehearsalsInput
  }

  export type RehearsalUncheckedCreateInput = {
    id?: string
    bandId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RehearsalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutRehearsalsNestedInput
  }

  export type RehearsalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RehearsalCreateManyInput = {
    id?: string
    bandId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RehearsalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RehearsalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    venue?: string | null
    address?: string | null
    payRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutGigsInput
  }

  export type GigUncheckedCreateInput = {
    id?: string
    bandId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    venue?: string | null
    address?: string | null
    payRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutGigsNestedInput
  }

  export type GigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigCreateManyInput = {
    id?: string
    bandId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    venue?: string | null
    address?: string | null
    payRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BandMemberListRelationFilter = {
    every?: BandMemberWhereInput
    some?: BandMemberWhereInput
    none?: BandMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BandMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SetlistListRelationFilter = {
    every?: SetlistWhereInput
    some?: SetlistWhereInput
    none?: SetlistWhereInput
  }

  export type RehearsalListRelationFilter = {
    every?: RehearsalWhereInput
    some?: RehearsalWhereInput
    none?: RehearsalWhereInput
  }

  export type GigListRelationFilter = {
    every?: GigWhereInput
    some?: GigWhereInput
    none?: GigWhereInput
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type SetlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RehearsalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BandScalarRelationFilter = {
    is?: BandWhereInput
    isNot?: BandWhereInput
  }

  export type BandMemberUserIdBandIdCompoundUniqueInput = {
    userId: string
    bandId: string
  }

  export type BandMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BandMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BandMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SetlistSongListRelationFilter = {
    every?: SetlistSongWhereInput
    some?: SetlistSongWhereInput
    none?: SetlistSongWhereInput
  }

  export type SetlistSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SetlistCountOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetlistMaxOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetlistMinOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SetlistScalarRelationFilter = {
    is?: SetlistWhereInput
    isNot?: SetlistWhereInput
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type SetlistSongSetlistIdSongIdCompoundUniqueInput = {
    setlistId: string
    songId: string
  }

  export type SetlistSongCountOrderByAggregateInput = {
    id?: SortOrder
    setlistId?: SortOrder
    songId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetlistSongAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SetlistSongMaxOrderByAggregateInput = {
    id?: SortOrder
    setlistId?: SortOrder
    songId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetlistSongMinOrderByAggregateInput = {
    id?: SortOrder
    setlistId?: SortOrder
    songId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetlistSongSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RehearsalCountOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RehearsalMaxOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RehearsalMinOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GigCountOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    address?: SortOrder
    payRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GigAvgOrderByAggregateInput = {
    payRate?: SortOrder
  }

  export type GigMaxOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    address?: SortOrder
    payRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GigMinOrderByAggregateInput = {
    id?: SortOrder
    bandId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    address?: SortOrder
    payRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GigSumOrderByAggregateInput = {
    payRate?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BandMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type BandMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BandMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutUserInput | BandMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutUserInput | BandMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutUserInput | BandMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type BandMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutUserInput | BandMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutUserInput | BandMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutUserInput | BandMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type BandMemberCreateNestedManyWithoutBandInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type SetlistCreateNestedManyWithoutBandInput = {
    create?: XOR<SetlistCreateWithoutBandInput, SetlistUncheckedCreateWithoutBandInput> | SetlistCreateWithoutBandInput[] | SetlistUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutBandInput | SetlistCreateOrConnectWithoutBandInput[]
    createMany?: SetlistCreateManyBandInputEnvelope
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
  }

  export type RehearsalCreateNestedManyWithoutBandInput = {
    create?: XOR<RehearsalCreateWithoutBandInput, RehearsalUncheckedCreateWithoutBandInput> | RehearsalCreateWithoutBandInput[] | RehearsalUncheckedCreateWithoutBandInput[]
    connectOrCreate?: RehearsalCreateOrConnectWithoutBandInput | RehearsalCreateOrConnectWithoutBandInput[]
    createMany?: RehearsalCreateManyBandInputEnvelope
    connect?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
  }

  export type GigCreateNestedManyWithoutBandInput = {
    create?: XOR<GigCreateWithoutBandInput, GigUncheckedCreateWithoutBandInput> | GigCreateWithoutBandInput[] | GigUncheckedCreateWithoutBandInput[]
    connectOrCreate?: GigCreateOrConnectWithoutBandInput | GigCreateOrConnectWithoutBandInput[]
    createMany?: GigCreateManyBandInputEnvelope
    connect?: GigWhereUniqueInput | GigWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutBandInput = {
    create?: XOR<SongCreateWithoutBandInput, SongUncheckedCreateWithoutBandInput> | SongCreateWithoutBandInput[] | SongUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SongCreateOrConnectWithoutBandInput | SongCreateOrConnectWithoutBandInput[]
    createMany?: SongCreateManyBandInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type BandMemberUncheckedCreateNestedManyWithoutBandInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type SetlistUncheckedCreateNestedManyWithoutBandInput = {
    create?: XOR<SetlistCreateWithoutBandInput, SetlistUncheckedCreateWithoutBandInput> | SetlistCreateWithoutBandInput[] | SetlistUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutBandInput | SetlistCreateOrConnectWithoutBandInput[]
    createMany?: SetlistCreateManyBandInputEnvelope
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
  }

  export type RehearsalUncheckedCreateNestedManyWithoutBandInput = {
    create?: XOR<RehearsalCreateWithoutBandInput, RehearsalUncheckedCreateWithoutBandInput> | RehearsalCreateWithoutBandInput[] | RehearsalUncheckedCreateWithoutBandInput[]
    connectOrCreate?: RehearsalCreateOrConnectWithoutBandInput | RehearsalCreateOrConnectWithoutBandInput[]
    createMany?: RehearsalCreateManyBandInputEnvelope
    connect?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
  }

  export type GigUncheckedCreateNestedManyWithoutBandInput = {
    create?: XOR<GigCreateWithoutBandInput, GigUncheckedCreateWithoutBandInput> | GigCreateWithoutBandInput[] | GigUncheckedCreateWithoutBandInput[]
    connectOrCreate?: GigCreateOrConnectWithoutBandInput | GigCreateOrConnectWithoutBandInput[]
    createMany?: GigCreateManyBandInputEnvelope
    connect?: GigWhereUniqueInput | GigWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutBandInput = {
    create?: XOR<SongCreateWithoutBandInput, SongUncheckedCreateWithoutBandInput> | SongCreateWithoutBandInput[] | SongUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SongCreateOrConnectWithoutBandInput | SongCreateOrConnectWithoutBandInput[]
    createMany?: SongCreateManyBandInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type BandMemberUpdateManyWithoutBandNestedInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutBandInput | BandMemberUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutBandInput | BandMemberUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutBandInput | BandMemberUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type SetlistUpdateManyWithoutBandNestedInput = {
    create?: XOR<SetlistCreateWithoutBandInput, SetlistUncheckedCreateWithoutBandInput> | SetlistCreateWithoutBandInput[] | SetlistUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutBandInput | SetlistCreateOrConnectWithoutBandInput[]
    upsert?: SetlistUpsertWithWhereUniqueWithoutBandInput | SetlistUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: SetlistCreateManyBandInputEnvelope
    set?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    disconnect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    delete?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    update?: SetlistUpdateWithWhereUniqueWithoutBandInput | SetlistUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: SetlistUpdateManyWithWhereWithoutBandInput | SetlistUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
  }

  export type RehearsalUpdateManyWithoutBandNestedInput = {
    create?: XOR<RehearsalCreateWithoutBandInput, RehearsalUncheckedCreateWithoutBandInput> | RehearsalCreateWithoutBandInput[] | RehearsalUncheckedCreateWithoutBandInput[]
    connectOrCreate?: RehearsalCreateOrConnectWithoutBandInput | RehearsalCreateOrConnectWithoutBandInput[]
    upsert?: RehearsalUpsertWithWhereUniqueWithoutBandInput | RehearsalUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: RehearsalCreateManyBandInputEnvelope
    set?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    disconnect?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    delete?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    connect?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    update?: RehearsalUpdateWithWhereUniqueWithoutBandInput | RehearsalUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: RehearsalUpdateManyWithWhereWithoutBandInput | RehearsalUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: RehearsalScalarWhereInput | RehearsalScalarWhereInput[]
  }

  export type GigUpdateManyWithoutBandNestedInput = {
    create?: XOR<GigCreateWithoutBandInput, GigUncheckedCreateWithoutBandInput> | GigCreateWithoutBandInput[] | GigUncheckedCreateWithoutBandInput[]
    connectOrCreate?: GigCreateOrConnectWithoutBandInput | GigCreateOrConnectWithoutBandInput[]
    upsert?: GigUpsertWithWhereUniqueWithoutBandInput | GigUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: GigCreateManyBandInputEnvelope
    set?: GigWhereUniqueInput | GigWhereUniqueInput[]
    disconnect?: GigWhereUniqueInput | GigWhereUniqueInput[]
    delete?: GigWhereUniqueInput | GigWhereUniqueInput[]
    connect?: GigWhereUniqueInput | GigWhereUniqueInput[]
    update?: GigUpdateWithWhereUniqueWithoutBandInput | GigUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: GigUpdateManyWithWhereWithoutBandInput | GigUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: GigScalarWhereInput | GigScalarWhereInput[]
  }

  export type SongUpdateManyWithoutBandNestedInput = {
    create?: XOR<SongCreateWithoutBandInput, SongUncheckedCreateWithoutBandInput> | SongCreateWithoutBandInput[] | SongUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SongCreateOrConnectWithoutBandInput | SongCreateOrConnectWithoutBandInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutBandInput | SongUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: SongCreateManyBandInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutBandInput | SongUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: SongUpdateManyWithWhereWithoutBandInput | SongUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type BandMemberUncheckedUpdateManyWithoutBandNestedInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutBandInput | BandMemberUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutBandInput | BandMemberUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutBandInput | BandMemberUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type SetlistUncheckedUpdateManyWithoutBandNestedInput = {
    create?: XOR<SetlistCreateWithoutBandInput, SetlistUncheckedCreateWithoutBandInput> | SetlistCreateWithoutBandInput[] | SetlistUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutBandInput | SetlistCreateOrConnectWithoutBandInput[]
    upsert?: SetlistUpsertWithWhereUniqueWithoutBandInput | SetlistUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: SetlistCreateManyBandInputEnvelope
    set?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    disconnect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    delete?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    update?: SetlistUpdateWithWhereUniqueWithoutBandInput | SetlistUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: SetlistUpdateManyWithWhereWithoutBandInput | SetlistUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
  }

  export type RehearsalUncheckedUpdateManyWithoutBandNestedInput = {
    create?: XOR<RehearsalCreateWithoutBandInput, RehearsalUncheckedCreateWithoutBandInput> | RehearsalCreateWithoutBandInput[] | RehearsalUncheckedCreateWithoutBandInput[]
    connectOrCreate?: RehearsalCreateOrConnectWithoutBandInput | RehearsalCreateOrConnectWithoutBandInput[]
    upsert?: RehearsalUpsertWithWhereUniqueWithoutBandInput | RehearsalUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: RehearsalCreateManyBandInputEnvelope
    set?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    disconnect?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    delete?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    connect?: RehearsalWhereUniqueInput | RehearsalWhereUniqueInput[]
    update?: RehearsalUpdateWithWhereUniqueWithoutBandInput | RehearsalUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: RehearsalUpdateManyWithWhereWithoutBandInput | RehearsalUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: RehearsalScalarWhereInput | RehearsalScalarWhereInput[]
  }

  export type GigUncheckedUpdateManyWithoutBandNestedInput = {
    create?: XOR<GigCreateWithoutBandInput, GigUncheckedCreateWithoutBandInput> | GigCreateWithoutBandInput[] | GigUncheckedCreateWithoutBandInput[]
    connectOrCreate?: GigCreateOrConnectWithoutBandInput | GigCreateOrConnectWithoutBandInput[]
    upsert?: GigUpsertWithWhereUniqueWithoutBandInput | GigUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: GigCreateManyBandInputEnvelope
    set?: GigWhereUniqueInput | GigWhereUniqueInput[]
    disconnect?: GigWhereUniqueInput | GigWhereUniqueInput[]
    delete?: GigWhereUniqueInput | GigWhereUniqueInput[]
    connect?: GigWhereUniqueInput | GigWhereUniqueInput[]
    update?: GigUpdateWithWhereUniqueWithoutBandInput | GigUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: GigUpdateManyWithWhereWithoutBandInput | GigUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: GigScalarWhereInput | GigScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutBandNestedInput = {
    create?: XOR<SongCreateWithoutBandInput, SongUncheckedCreateWithoutBandInput> | SongCreateWithoutBandInput[] | SongUncheckedCreateWithoutBandInput[]
    connectOrCreate?: SongCreateOrConnectWithoutBandInput | SongCreateOrConnectWithoutBandInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutBandInput | SongUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: SongCreateManyBandInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutBandInput | SongUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: SongUpdateManyWithWhereWithoutBandInput | SongUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBandMembersInput = {
    create?: XOR<UserCreateWithoutBandMembersInput, UserUncheckedCreateWithoutBandMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBandMembersInput
    connect?: UserWhereUniqueInput
  }

  export type BandCreateNestedOneWithoutMembersInput = {
    create?: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BandCreateOrConnectWithoutMembersInput
    connect?: BandWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBandMembersNestedInput = {
    create?: XOR<UserCreateWithoutBandMembersInput, UserUncheckedCreateWithoutBandMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBandMembersInput
    upsert?: UserUpsertWithoutBandMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBandMembersInput, UserUpdateWithoutBandMembersInput>, UserUncheckedUpdateWithoutBandMembersInput>
  }

  export type BandUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BandCreateOrConnectWithoutMembersInput
    upsert?: BandUpsertWithoutMembersInput
    connect?: BandWhereUniqueInput
    update?: XOR<XOR<BandUpdateToOneWithWhereWithoutMembersInput, BandUpdateWithoutMembersInput>, BandUncheckedUpdateWithoutMembersInput>
  }

  export type BandCreateNestedOneWithoutSongsInput = {
    create?: XOR<BandCreateWithoutSongsInput, BandUncheckedCreateWithoutSongsInput>
    connectOrCreate?: BandCreateOrConnectWithoutSongsInput
    connect?: BandWhereUniqueInput
  }

  export type SetlistSongCreateNestedManyWithoutSongInput = {
    create?: XOR<SetlistSongCreateWithoutSongInput, SetlistSongUncheckedCreateWithoutSongInput> | SetlistSongCreateWithoutSongInput[] | SetlistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSongInput | SetlistSongCreateOrConnectWithoutSongInput[]
    createMany?: SetlistSongCreateManySongInputEnvelope
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
  }

  export type SetlistSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<SetlistSongCreateWithoutSongInput, SetlistSongUncheckedCreateWithoutSongInput> | SetlistSongCreateWithoutSongInput[] | SetlistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSongInput | SetlistSongCreateOrConnectWithoutSongInput[]
    createMany?: SetlistSongCreateManySongInputEnvelope
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BandUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<BandCreateWithoutSongsInput, BandUncheckedCreateWithoutSongsInput>
    connectOrCreate?: BandCreateOrConnectWithoutSongsInput
    upsert?: BandUpsertWithoutSongsInput
    connect?: BandWhereUniqueInput
    update?: XOR<XOR<BandUpdateToOneWithWhereWithoutSongsInput, BandUpdateWithoutSongsInput>, BandUncheckedUpdateWithoutSongsInput>
  }

  export type SetlistSongUpdateManyWithoutSongNestedInput = {
    create?: XOR<SetlistSongCreateWithoutSongInput, SetlistSongUncheckedCreateWithoutSongInput> | SetlistSongCreateWithoutSongInput[] | SetlistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSongInput | SetlistSongCreateOrConnectWithoutSongInput[]
    upsert?: SetlistSongUpsertWithWhereUniqueWithoutSongInput | SetlistSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: SetlistSongCreateManySongInputEnvelope
    set?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    disconnect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    delete?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    update?: SetlistSongUpdateWithWhereUniqueWithoutSongInput | SetlistSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: SetlistSongUpdateManyWithWhereWithoutSongInput | SetlistSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: SetlistSongScalarWhereInput | SetlistSongScalarWhereInput[]
  }

  export type SetlistSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<SetlistSongCreateWithoutSongInput, SetlistSongUncheckedCreateWithoutSongInput> | SetlistSongCreateWithoutSongInput[] | SetlistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSongInput | SetlistSongCreateOrConnectWithoutSongInput[]
    upsert?: SetlistSongUpsertWithWhereUniqueWithoutSongInput | SetlistSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: SetlistSongCreateManySongInputEnvelope
    set?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    disconnect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    delete?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    update?: SetlistSongUpdateWithWhereUniqueWithoutSongInput | SetlistSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: SetlistSongUpdateManyWithWhereWithoutSongInput | SetlistSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: SetlistSongScalarWhereInput | SetlistSongScalarWhereInput[]
  }

  export type BandCreateNestedOneWithoutSetlistsInput = {
    create?: XOR<BandCreateWithoutSetlistsInput, BandUncheckedCreateWithoutSetlistsInput>
    connectOrCreate?: BandCreateOrConnectWithoutSetlistsInput
    connect?: BandWhereUniqueInput
  }

  export type SetlistSongCreateNestedManyWithoutSetlistInput = {
    create?: XOR<SetlistSongCreateWithoutSetlistInput, SetlistSongUncheckedCreateWithoutSetlistInput> | SetlistSongCreateWithoutSetlistInput[] | SetlistSongUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSetlistInput | SetlistSongCreateOrConnectWithoutSetlistInput[]
    createMany?: SetlistSongCreateManySetlistInputEnvelope
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
  }

  export type SetlistSongUncheckedCreateNestedManyWithoutSetlistInput = {
    create?: XOR<SetlistSongCreateWithoutSetlistInput, SetlistSongUncheckedCreateWithoutSetlistInput> | SetlistSongCreateWithoutSetlistInput[] | SetlistSongUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSetlistInput | SetlistSongCreateOrConnectWithoutSetlistInput[]
    createMany?: SetlistSongCreateManySetlistInputEnvelope
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
  }

  export type BandUpdateOneRequiredWithoutSetlistsNestedInput = {
    create?: XOR<BandCreateWithoutSetlistsInput, BandUncheckedCreateWithoutSetlistsInput>
    connectOrCreate?: BandCreateOrConnectWithoutSetlistsInput
    upsert?: BandUpsertWithoutSetlistsInput
    connect?: BandWhereUniqueInput
    update?: XOR<XOR<BandUpdateToOneWithWhereWithoutSetlistsInput, BandUpdateWithoutSetlistsInput>, BandUncheckedUpdateWithoutSetlistsInput>
  }

  export type SetlistSongUpdateManyWithoutSetlistNestedInput = {
    create?: XOR<SetlistSongCreateWithoutSetlistInput, SetlistSongUncheckedCreateWithoutSetlistInput> | SetlistSongCreateWithoutSetlistInput[] | SetlistSongUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSetlistInput | SetlistSongCreateOrConnectWithoutSetlistInput[]
    upsert?: SetlistSongUpsertWithWhereUniqueWithoutSetlistInput | SetlistSongUpsertWithWhereUniqueWithoutSetlistInput[]
    createMany?: SetlistSongCreateManySetlistInputEnvelope
    set?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    disconnect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    delete?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    update?: SetlistSongUpdateWithWhereUniqueWithoutSetlistInput | SetlistSongUpdateWithWhereUniqueWithoutSetlistInput[]
    updateMany?: SetlistSongUpdateManyWithWhereWithoutSetlistInput | SetlistSongUpdateManyWithWhereWithoutSetlistInput[]
    deleteMany?: SetlistSongScalarWhereInput | SetlistSongScalarWhereInput[]
  }

  export type SetlistSongUncheckedUpdateManyWithoutSetlistNestedInput = {
    create?: XOR<SetlistSongCreateWithoutSetlistInput, SetlistSongUncheckedCreateWithoutSetlistInput> | SetlistSongCreateWithoutSetlistInput[] | SetlistSongUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistSongCreateOrConnectWithoutSetlistInput | SetlistSongCreateOrConnectWithoutSetlistInput[]
    upsert?: SetlistSongUpsertWithWhereUniqueWithoutSetlistInput | SetlistSongUpsertWithWhereUniqueWithoutSetlistInput[]
    createMany?: SetlistSongCreateManySetlistInputEnvelope
    set?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    disconnect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    delete?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    connect?: SetlistSongWhereUniqueInput | SetlistSongWhereUniqueInput[]
    update?: SetlistSongUpdateWithWhereUniqueWithoutSetlistInput | SetlistSongUpdateWithWhereUniqueWithoutSetlistInput[]
    updateMany?: SetlistSongUpdateManyWithWhereWithoutSetlistInput | SetlistSongUpdateManyWithWhereWithoutSetlistInput[]
    deleteMany?: SetlistSongScalarWhereInput | SetlistSongScalarWhereInput[]
  }

  export type SetlistCreateNestedOneWithoutSongsInput = {
    create?: XOR<SetlistCreateWithoutSongsInput, SetlistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: SetlistCreateOrConnectWithoutSongsInput
    connect?: SetlistWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutSetlistSongsInput = {
    create?: XOR<SongCreateWithoutSetlistSongsInput, SongUncheckedCreateWithoutSetlistSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutSetlistSongsInput
    connect?: SongWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SetlistUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<SetlistCreateWithoutSongsInput, SetlistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: SetlistCreateOrConnectWithoutSongsInput
    upsert?: SetlistUpsertWithoutSongsInput
    connect?: SetlistWhereUniqueInput
    update?: XOR<XOR<SetlistUpdateToOneWithWhereWithoutSongsInput, SetlistUpdateWithoutSongsInput>, SetlistUncheckedUpdateWithoutSongsInput>
  }

  export type SongUpdateOneRequiredWithoutSetlistSongsNestedInput = {
    create?: XOR<SongCreateWithoutSetlistSongsInput, SongUncheckedCreateWithoutSetlistSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutSetlistSongsInput
    upsert?: SongUpsertWithoutSetlistSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutSetlistSongsInput, SongUpdateWithoutSetlistSongsInput>, SongUncheckedUpdateWithoutSetlistSongsInput>
  }

  export type BandCreateNestedOneWithoutRehearsalsInput = {
    create?: XOR<BandCreateWithoutRehearsalsInput, BandUncheckedCreateWithoutRehearsalsInput>
    connectOrCreate?: BandCreateOrConnectWithoutRehearsalsInput
    connect?: BandWhereUniqueInput
  }

  export type BandUpdateOneRequiredWithoutRehearsalsNestedInput = {
    create?: XOR<BandCreateWithoutRehearsalsInput, BandUncheckedCreateWithoutRehearsalsInput>
    connectOrCreate?: BandCreateOrConnectWithoutRehearsalsInput
    upsert?: BandUpsertWithoutRehearsalsInput
    connect?: BandWhereUniqueInput
    update?: XOR<XOR<BandUpdateToOneWithWhereWithoutRehearsalsInput, BandUpdateWithoutRehearsalsInput>, BandUncheckedUpdateWithoutRehearsalsInput>
  }

  export type BandCreateNestedOneWithoutGigsInput = {
    create?: XOR<BandCreateWithoutGigsInput, BandUncheckedCreateWithoutGigsInput>
    connectOrCreate?: BandCreateOrConnectWithoutGigsInput
    connect?: BandWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BandUpdateOneRequiredWithoutGigsNestedInput = {
    create?: XOR<BandCreateWithoutGigsInput, BandUncheckedCreateWithoutGigsInput>
    connectOrCreate?: BandCreateOrConnectWithoutGigsInput
    upsert?: BandUpsertWithoutGigsInput
    connect?: BandWhereUniqueInput
    update?: XOR<XOR<BandUpdateToOneWithWhereWithoutGigsInput, BandUpdateWithoutGigsInput>, BandUncheckedUpdateWithoutGigsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BandMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutMembersInput
  }

  export type BandMemberUncheckedCreateWithoutUserInput = {
    id?: string
    bandId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandMemberCreateOrConnectWithoutUserInput = {
    where: BandMemberWhereUniqueInput
    create: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput>
  }

  export type BandMemberCreateManyUserInputEnvelope = {
    data: BandMemberCreateManyUserInput | BandMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BandMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: BandMemberWhereUniqueInput
    update: XOR<BandMemberUpdateWithoutUserInput, BandMemberUncheckedUpdateWithoutUserInput>
    create: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput>
  }

  export type BandMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: BandMemberWhereUniqueInput
    data: XOR<BandMemberUpdateWithoutUserInput, BandMemberUncheckedUpdateWithoutUserInput>
  }

  export type BandMemberUpdateManyWithWhereWithoutUserInput = {
    where: BandMemberScalarWhereInput
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type BandMemberScalarWhereInput = {
    AND?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
    OR?: BandMemberScalarWhereInput[]
    NOT?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
    id?: StringFilter<"BandMember"> | string
    userId?: StringFilter<"BandMember"> | string
    bandId?: StringFilter<"BandMember"> | string
    role?: StringFilter<"BandMember"> | string
    createdAt?: DateTimeFilter<"BandMember"> | Date | string
    updatedAt?: DateTimeFilter<"BandMember"> | Date | string
  }

  export type BandMemberCreateWithoutBandInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBandMembersInput
  }

  export type BandMemberUncheckedCreateWithoutBandInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandMemberCreateOrConnectWithoutBandInput = {
    where: BandMemberWhereUniqueInput
    create: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput>
  }

  export type BandMemberCreateManyBandInputEnvelope = {
    data: BandMemberCreateManyBandInput | BandMemberCreateManyBandInput[]
    skipDuplicates?: boolean
  }

  export type SetlistCreateWithoutBandInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SetlistSongCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateWithoutBandInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SetlistSongUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistCreateOrConnectWithoutBandInput = {
    where: SetlistWhereUniqueInput
    create: XOR<SetlistCreateWithoutBandInput, SetlistUncheckedCreateWithoutBandInput>
  }

  export type SetlistCreateManyBandInputEnvelope = {
    data: SetlistCreateManyBandInput | SetlistCreateManyBandInput[]
    skipDuplicates?: boolean
  }

  export type RehearsalCreateWithoutBandInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RehearsalUncheckedCreateWithoutBandInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RehearsalCreateOrConnectWithoutBandInput = {
    where: RehearsalWhereUniqueInput
    create: XOR<RehearsalCreateWithoutBandInput, RehearsalUncheckedCreateWithoutBandInput>
  }

  export type RehearsalCreateManyBandInputEnvelope = {
    data: RehearsalCreateManyBandInput | RehearsalCreateManyBandInput[]
    skipDuplicates?: boolean
  }

  export type GigCreateWithoutBandInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    venue?: string | null
    address?: string | null
    payRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GigUncheckedCreateWithoutBandInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    venue?: string | null
    address?: string | null
    payRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GigCreateOrConnectWithoutBandInput = {
    where: GigWhereUniqueInput
    create: XOR<GigCreateWithoutBandInput, GigUncheckedCreateWithoutBandInput>
  }

  export type GigCreateManyBandInputEnvelope = {
    data: GigCreateManyBandInput | GigCreateManyBandInput[]
    skipDuplicates?: boolean
  }

  export type SongCreateWithoutBandInput = {
    id?: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setlistSongs?: SetlistSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutBandInput = {
    id?: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setlistSongs?: SetlistSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutBandInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutBandInput, SongUncheckedCreateWithoutBandInput>
  }

  export type SongCreateManyBandInputEnvelope = {
    data: SongCreateManyBandInput | SongCreateManyBandInput[]
    skipDuplicates?: boolean
  }

  export type BandMemberUpsertWithWhereUniqueWithoutBandInput = {
    where: BandMemberWhereUniqueInput
    update: XOR<BandMemberUpdateWithoutBandInput, BandMemberUncheckedUpdateWithoutBandInput>
    create: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput>
  }

  export type BandMemberUpdateWithWhereUniqueWithoutBandInput = {
    where: BandMemberWhereUniqueInput
    data: XOR<BandMemberUpdateWithoutBandInput, BandMemberUncheckedUpdateWithoutBandInput>
  }

  export type BandMemberUpdateManyWithWhereWithoutBandInput = {
    where: BandMemberScalarWhereInput
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyWithoutBandInput>
  }

  export type SetlistUpsertWithWhereUniqueWithoutBandInput = {
    where: SetlistWhereUniqueInput
    update: XOR<SetlistUpdateWithoutBandInput, SetlistUncheckedUpdateWithoutBandInput>
    create: XOR<SetlistCreateWithoutBandInput, SetlistUncheckedCreateWithoutBandInput>
  }

  export type SetlistUpdateWithWhereUniqueWithoutBandInput = {
    where: SetlistWhereUniqueInput
    data: XOR<SetlistUpdateWithoutBandInput, SetlistUncheckedUpdateWithoutBandInput>
  }

  export type SetlistUpdateManyWithWhereWithoutBandInput = {
    where: SetlistScalarWhereInput
    data: XOR<SetlistUpdateManyMutationInput, SetlistUncheckedUpdateManyWithoutBandInput>
  }

  export type SetlistScalarWhereInput = {
    AND?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
    OR?: SetlistScalarWhereInput[]
    NOT?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
    id?: StringFilter<"Setlist"> | string
    bandId?: StringFilter<"Setlist"> | string
    title?: StringFilter<"Setlist"> | string
    description?: StringNullableFilter<"Setlist"> | string | null
    createdAt?: DateTimeFilter<"Setlist"> | Date | string
    updatedAt?: DateTimeFilter<"Setlist"> | Date | string
  }

  export type RehearsalUpsertWithWhereUniqueWithoutBandInput = {
    where: RehearsalWhereUniqueInput
    update: XOR<RehearsalUpdateWithoutBandInput, RehearsalUncheckedUpdateWithoutBandInput>
    create: XOR<RehearsalCreateWithoutBandInput, RehearsalUncheckedCreateWithoutBandInput>
  }

  export type RehearsalUpdateWithWhereUniqueWithoutBandInput = {
    where: RehearsalWhereUniqueInput
    data: XOR<RehearsalUpdateWithoutBandInput, RehearsalUncheckedUpdateWithoutBandInput>
  }

  export type RehearsalUpdateManyWithWhereWithoutBandInput = {
    where: RehearsalScalarWhereInput
    data: XOR<RehearsalUpdateManyMutationInput, RehearsalUncheckedUpdateManyWithoutBandInput>
  }

  export type RehearsalScalarWhereInput = {
    AND?: RehearsalScalarWhereInput | RehearsalScalarWhereInput[]
    OR?: RehearsalScalarWhereInput[]
    NOT?: RehearsalScalarWhereInput | RehearsalScalarWhereInput[]
    id?: StringFilter<"Rehearsal"> | string
    bandId?: StringFilter<"Rehearsal"> | string
    title?: StringFilter<"Rehearsal"> | string
    startTime?: DateTimeFilter<"Rehearsal"> | Date | string
    endTime?: DateTimeFilter<"Rehearsal"> | Date | string
    location?: StringNullableFilter<"Rehearsal"> | string | null
    createdAt?: DateTimeFilter<"Rehearsal"> | Date | string
    updatedAt?: DateTimeFilter<"Rehearsal"> | Date | string
  }

  export type GigUpsertWithWhereUniqueWithoutBandInput = {
    where: GigWhereUniqueInput
    update: XOR<GigUpdateWithoutBandInput, GigUncheckedUpdateWithoutBandInput>
    create: XOR<GigCreateWithoutBandInput, GigUncheckedCreateWithoutBandInput>
  }

  export type GigUpdateWithWhereUniqueWithoutBandInput = {
    where: GigWhereUniqueInput
    data: XOR<GigUpdateWithoutBandInput, GigUncheckedUpdateWithoutBandInput>
  }

  export type GigUpdateManyWithWhereWithoutBandInput = {
    where: GigScalarWhereInput
    data: XOR<GigUpdateManyMutationInput, GigUncheckedUpdateManyWithoutBandInput>
  }

  export type GigScalarWhereInput = {
    AND?: GigScalarWhereInput | GigScalarWhereInput[]
    OR?: GigScalarWhereInput[]
    NOT?: GigScalarWhereInput | GigScalarWhereInput[]
    id?: StringFilter<"Gig"> | string
    bandId?: StringFilter<"Gig"> | string
    title?: StringFilter<"Gig"> | string
    startTime?: DateTimeFilter<"Gig"> | Date | string
    endTime?: DateTimeFilter<"Gig"> | Date | string
    venue?: StringNullableFilter<"Gig"> | string | null
    address?: StringNullableFilter<"Gig"> | string | null
    payRate?: FloatNullableFilter<"Gig"> | number | null
    createdAt?: DateTimeFilter<"Gig"> | Date | string
    updatedAt?: DateTimeFilter<"Gig"> | Date | string
  }

  export type SongUpsertWithWhereUniqueWithoutBandInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutBandInput, SongUncheckedUpdateWithoutBandInput>
    create: XOR<SongCreateWithoutBandInput, SongUncheckedCreateWithoutBandInput>
  }

  export type SongUpdateWithWhereUniqueWithoutBandInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutBandInput, SongUncheckedUpdateWithoutBandInput>
  }

  export type SongUpdateManyWithWhereWithoutBandInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutBandInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: StringFilter<"Song"> | string
    bandId?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    artist?: StringNullableFilter<"Song"> | string | null
    duration?: IntNullableFilter<"Song"> | number | null
    notes?: StringNullableFilter<"Song"> | string | null
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
  }

  export type UserCreateWithoutBandMembersInput = {
    id?: string
    firebaseId: string
    email: string
    displayName?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBandMembersInput = {
    id?: string
    firebaseId: string
    email: string
    displayName?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBandMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBandMembersInput, UserUncheckedCreateWithoutBandMembersInput>
  }

  export type BandCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setlists?: SetlistCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalCreateNestedManyWithoutBandInput
    gigs?: GigCreateNestedManyWithoutBandInput
    songs?: SongCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setlists?: SetlistUncheckedCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalUncheckedCreateNestedManyWithoutBandInput
    gigs?: GigUncheckedCreateNestedManyWithoutBandInput
    songs?: SongUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandCreateOrConnectWithoutMembersInput = {
    where: BandWhereUniqueInput
    create: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutBandMembersInput = {
    update: XOR<UserUpdateWithoutBandMembersInput, UserUncheckedUpdateWithoutBandMembersInput>
    create: XOR<UserCreateWithoutBandMembersInput, UserUncheckedCreateWithoutBandMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBandMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBandMembersInput, UserUncheckedUpdateWithoutBandMembersInput>
  }

  export type UserUpdateWithoutBandMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBandMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandUpsertWithoutMembersInput = {
    update: XOR<BandUpdateWithoutMembersInput, BandUncheckedUpdateWithoutMembersInput>
    create: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
    where?: BandWhereInput
  }

  export type BandUpdateToOneWithWhereWithoutMembersInput = {
    where?: BandWhereInput
    data: XOR<BandUpdateWithoutMembersInput, BandUncheckedUpdateWithoutMembersInput>
  }

  export type BandUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlists?: SetlistUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUpdateManyWithoutBandNestedInput
    gigs?: GigUpdateManyWithoutBandNestedInput
    songs?: SongUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlists?: SetlistUncheckedUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUncheckedUpdateManyWithoutBandNestedInput
    gigs?: GigUncheckedUpdateManyWithoutBandNestedInput
    songs?: SongUncheckedUpdateManyWithoutBandNestedInput
  }

  export type BandCreateWithoutSongsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberCreateNestedManyWithoutBandInput
    setlists?: SetlistCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalCreateNestedManyWithoutBandInput
    gigs?: GigCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateWithoutSongsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberUncheckedCreateNestedManyWithoutBandInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalUncheckedCreateNestedManyWithoutBandInput
    gigs?: GigUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandCreateOrConnectWithoutSongsInput = {
    where: BandWhereUniqueInput
    create: XOR<BandCreateWithoutSongsInput, BandUncheckedCreateWithoutSongsInput>
  }

  export type SetlistSongCreateWithoutSongInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    setlist: SetlistCreateNestedOneWithoutSongsInput
  }

  export type SetlistSongUncheckedCreateWithoutSongInput = {
    id?: string
    setlistId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistSongCreateOrConnectWithoutSongInput = {
    where: SetlistSongWhereUniqueInput
    create: XOR<SetlistSongCreateWithoutSongInput, SetlistSongUncheckedCreateWithoutSongInput>
  }

  export type SetlistSongCreateManySongInputEnvelope = {
    data: SetlistSongCreateManySongInput | SetlistSongCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type BandUpsertWithoutSongsInput = {
    update: XOR<BandUpdateWithoutSongsInput, BandUncheckedUpdateWithoutSongsInput>
    create: XOR<BandCreateWithoutSongsInput, BandUncheckedCreateWithoutSongsInput>
    where?: BandWhereInput
  }

  export type BandUpdateToOneWithWhereWithoutSongsInput = {
    where?: BandWhereInput
    data: XOR<BandUpdateWithoutSongsInput, BandUncheckedUpdateWithoutSongsInput>
  }

  export type BandUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUpdateManyWithoutBandNestedInput
    setlists?: SetlistUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUpdateManyWithoutBandNestedInput
    gigs?: GigUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUncheckedUpdateManyWithoutBandNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUncheckedUpdateManyWithoutBandNestedInput
    gigs?: GigUncheckedUpdateManyWithoutBandNestedInput
  }

  export type SetlistSongUpsertWithWhereUniqueWithoutSongInput = {
    where: SetlistSongWhereUniqueInput
    update: XOR<SetlistSongUpdateWithoutSongInput, SetlistSongUncheckedUpdateWithoutSongInput>
    create: XOR<SetlistSongCreateWithoutSongInput, SetlistSongUncheckedCreateWithoutSongInput>
  }

  export type SetlistSongUpdateWithWhereUniqueWithoutSongInput = {
    where: SetlistSongWhereUniqueInput
    data: XOR<SetlistSongUpdateWithoutSongInput, SetlistSongUncheckedUpdateWithoutSongInput>
  }

  export type SetlistSongUpdateManyWithWhereWithoutSongInput = {
    where: SetlistSongScalarWhereInput
    data: XOR<SetlistSongUpdateManyMutationInput, SetlistSongUncheckedUpdateManyWithoutSongInput>
  }

  export type SetlistSongScalarWhereInput = {
    AND?: SetlistSongScalarWhereInput | SetlistSongScalarWhereInput[]
    OR?: SetlistSongScalarWhereInput[]
    NOT?: SetlistSongScalarWhereInput | SetlistSongScalarWhereInput[]
    id?: StringFilter<"SetlistSong"> | string
    setlistId?: StringFilter<"SetlistSong"> | string
    songId?: StringFilter<"SetlistSong"> | string
    order?: IntFilter<"SetlistSong"> | number
    createdAt?: DateTimeFilter<"SetlistSong"> | Date | string
    updatedAt?: DateTimeFilter<"SetlistSong"> | Date | string
  }

  export type BandCreateWithoutSetlistsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalCreateNestedManyWithoutBandInput
    gigs?: GigCreateNestedManyWithoutBandInput
    songs?: SongCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateWithoutSetlistsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberUncheckedCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalUncheckedCreateNestedManyWithoutBandInput
    gigs?: GigUncheckedCreateNestedManyWithoutBandInput
    songs?: SongUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandCreateOrConnectWithoutSetlistsInput = {
    where: BandWhereUniqueInput
    create: XOR<BandCreateWithoutSetlistsInput, BandUncheckedCreateWithoutSetlistsInput>
  }

  export type SetlistSongCreateWithoutSetlistInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    song: SongCreateNestedOneWithoutSetlistSongsInput
  }

  export type SetlistSongUncheckedCreateWithoutSetlistInput = {
    id?: string
    songId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistSongCreateOrConnectWithoutSetlistInput = {
    where: SetlistSongWhereUniqueInput
    create: XOR<SetlistSongCreateWithoutSetlistInput, SetlistSongUncheckedCreateWithoutSetlistInput>
  }

  export type SetlistSongCreateManySetlistInputEnvelope = {
    data: SetlistSongCreateManySetlistInput | SetlistSongCreateManySetlistInput[]
    skipDuplicates?: boolean
  }

  export type BandUpsertWithoutSetlistsInput = {
    update: XOR<BandUpdateWithoutSetlistsInput, BandUncheckedUpdateWithoutSetlistsInput>
    create: XOR<BandCreateWithoutSetlistsInput, BandUncheckedCreateWithoutSetlistsInput>
    where?: BandWhereInput
  }

  export type BandUpdateToOneWithWhereWithoutSetlistsInput = {
    where?: BandWhereInput
    data: XOR<BandUpdateWithoutSetlistsInput, BandUncheckedUpdateWithoutSetlistsInput>
  }

  export type BandUpdateWithoutSetlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUpdateManyWithoutBandNestedInput
    gigs?: GigUpdateManyWithoutBandNestedInput
    songs?: SongUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateWithoutSetlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUncheckedUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUncheckedUpdateManyWithoutBandNestedInput
    gigs?: GigUncheckedUpdateManyWithoutBandNestedInput
    songs?: SongUncheckedUpdateManyWithoutBandNestedInput
  }

  export type SetlistSongUpsertWithWhereUniqueWithoutSetlistInput = {
    where: SetlistSongWhereUniqueInput
    update: XOR<SetlistSongUpdateWithoutSetlistInput, SetlistSongUncheckedUpdateWithoutSetlistInput>
    create: XOR<SetlistSongCreateWithoutSetlistInput, SetlistSongUncheckedCreateWithoutSetlistInput>
  }

  export type SetlistSongUpdateWithWhereUniqueWithoutSetlistInput = {
    where: SetlistSongWhereUniqueInput
    data: XOR<SetlistSongUpdateWithoutSetlistInput, SetlistSongUncheckedUpdateWithoutSetlistInput>
  }

  export type SetlistSongUpdateManyWithWhereWithoutSetlistInput = {
    where: SetlistSongScalarWhereInput
    data: XOR<SetlistSongUpdateManyMutationInput, SetlistSongUncheckedUpdateManyWithoutSetlistInput>
  }

  export type SetlistCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutSetlistsInput
  }

  export type SetlistUncheckedCreateWithoutSongsInput = {
    id?: string
    bandId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistCreateOrConnectWithoutSongsInput = {
    where: SetlistWhereUniqueInput
    create: XOR<SetlistCreateWithoutSongsInput, SetlistUncheckedCreateWithoutSongsInput>
  }

  export type SongCreateWithoutSetlistSongsInput = {
    id?: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    band: BandCreateNestedOneWithoutSongsInput
  }

  export type SongUncheckedCreateWithoutSetlistSongsInput = {
    id?: string
    bandId: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongCreateOrConnectWithoutSetlistSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutSetlistSongsInput, SongUncheckedCreateWithoutSetlistSongsInput>
  }

  export type SetlistUpsertWithoutSongsInput = {
    update: XOR<SetlistUpdateWithoutSongsInput, SetlistUncheckedUpdateWithoutSongsInput>
    create: XOR<SetlistCreateWithoutSongsInput, SetlistUncheckedCreateWithoutSongsInput>
    where?: SetlistWhereInput
  }

  export type SetlistUpdateToOneWithWhereWithoutSongsInput = {
    where?: SetlistWhereInput
    data: XOR<SetlistUpdateWithoutSongsInput, SetlistUncheckedUpdateWithoutSongsInput>
  }

  export type SetlistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutSetlistsNestedInput
  }

  export type SetlistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpsertWithoutSetlistSongsInput = {
    update: XOR<SongUpdateWithoutSetlistSongsInput, SongUncheckedUpdateWithoutSetlistSongsInput>
    create: XOR<SongCreateWithoutSetlistSongsInput, SongUncheckedCreateWithoutSetlistSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutSetlistSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutSetlistSongsInput, SongUncheckedUpdateWithoutSetlistSongsInput>
  }

  export type SongUpdateWithoutSetlistSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongUncheckedUpdateWithoutSetlistSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandCreateWithoutRehearsalsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberCreateNestedManyWithoutBandInput
    setlists?: SetlistCreateNestedManyWithoutBandInput
    gigs?: GigCreateNestedManyWithoutBandInput
    songs?: SongCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateWithoutRehearsalsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberUncheckedCreateNestedManyWithoutBandInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutBandInput
    gigs?: GigUncheckedCreateNestedManyWithoutBandInput
    songs?: SongUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandCreateOrConnectWithoutRehearsalsInput = {
    where: BandWhereUniqueInput
    create: XOR<BandCreateWithoutRehearsalsInput, BandUncheckedCreateWithoutRehearsalsInput>
  }

  export type BandUpsertWithoutRehearsalsInput = {
    update: XOR<BandUpdateWithoutRehearsalsInput, BandUncheckedUpdateWithoutRehearsalsInput>
    create: XOR<BandCreateWithoutRehearsalsInput, BandUncheckedCreateWithoutRehearsalsInput>
    where?: BandWhereInput
  }

  export type BandUpdateToOneWithWhereWithoutRehearsalsInput = {
    where?: BandWhereInput
    data: XOR<BandUpdateWithoutRehearsalsInput, BandUncheckedUpdateWithoutRehearsalsInput>
  }

  export type BandUpdateWithoutRehearsalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUpdateManyWithoutBandNestedInput
    setlists?: SetlistUpdateManyWithoutBandNestedInput
    gigs?: GigUpdateManyWithoutBandNestedInput
    songs?: SongUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateWithoutRehearsalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUncheckedUpdateManyWithoutBandNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutBandNestedInput
    gigs?: GigUncheckedUpdateManyWithoutBandNestedInput
    songs?: SongUncheckedUpdateManyWithoutBandNestedInput
  }

  export type BandCreateWithoutGigsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberCreateNestedManyWithoutBandInput
    setlists?: SetlistCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalCreateNestedManyWithoutBandInput
    songs?: SongCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateWithoutGigsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BandMemberUncheckedCreateNestedManyWithoutBandInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutBandInput
    rehearsals?: RehearsalUncheckedCreateNestedManyWithoutBandInput
    songs?: SongUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandCreateOrConnectWithoutGigsInput = {
    where: BandWhereUniqueInput
    create: XOR<BandCreateWithoutGigsInput, BandUncheckedCreateWithoutGigsInput>
  }

  export type BandUpsertWithoutGigsInput = {
    update: XOR<BandUpdateWithoutGigsInput, BandUncheckedUpdateWithoutGigsInput>
    create: XOR<BandCreateWithoutGigsInput, BandUncheckedCreateWithoutGigsInput>
    where?: BandWhereInput
  }

  export type BandUpdateToOneWithWhereWithoutGigsInput = {
    where?: BandWhereInput
    data: XOR<BandUpdateWithoutGigsInput, BandUncheckedUpdateWithoutGigsInput>
  }

  export type BandUpdateWithoutGigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUpdateManyWithoutBandNestedInput
    setlists?: SetlistUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUpdateManyWithoutBandNestedInput
    songs?: SongUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateWithoutGigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BandMemberUncheckedUpdateManyWithoutBandNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutBandNestedInput
    rehearsals?: RehearsalUncheckedUpdateManyWithoutBandNestedInput
    songs?: SongUncheckedUpdateManyWithoutBandNestedInput
  }

  export type BandMemberCreateManyUserInput = {
    id?: string
    bandId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    band?: BandUpdateOneRequiredWithoutMembersNestedInput
  }

  export type BandMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bandId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandMemberCreateManyBandInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistCreateManyBandInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RehearsalCreateManyBandInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GigCreateManyBandInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    venue?: string | null
    address?: string | null
    payRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongCreateManyBandInput = {
    id?: string
    title: string
    artist?: string | null
    duration?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BandMemberUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBandMembersNestedInput
  }

  export type BandMemberUncheckedUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BandMemberUncheckedUpdateManyWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SetlistSongUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SetlistSongUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateManyWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RehearsalUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RehearsalUncheckedUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RehearsalUncheckedUpdateManyWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigUncheckedUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GigUncheckedUpdateManyWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    payRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlistSongs?: SetlistSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlistSongs?: SetlistSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutBandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongCreateManySongInput = {
    id?: string
    setlistId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistSongUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlist?: SetlistUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SetlistSongUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongCreateManySetlistInput = {
    id?: string
    songId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetlistSongUpdateWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutSetlistSongsNestedInput
  }

  export type SetlistSongUncheckedUpdateWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistSongUncheckedUpdateManyWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}