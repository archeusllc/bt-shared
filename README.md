# bt-shared

Shared types, utilities, and Prisma client for Band Together.

This module provides a configured `PrismaClient` (via PrismaPg for PostgreSQL), shared types/utilities, and a committed generated client under `generated/prisma-client/` so consumers can install from GitHub or use a local workspace link.

## Install

```bash
# In bt-api or bt-client
bun add @band-together/shared
```

## Environment

Create `shared/.env` (or provide `DATABASE_URL` in your environment):

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/band_together"
```

This is loaded by `dotenv` in `index.ts`.

## Usage

```ts
import { PrismaClient } from '@band-together/shared'

const prisma = PrismaClient()
// or pass PrismaClientOptions
// const prisma = PrismaClient({ log: ['query'] })
```

## Development

The Prisma client is generated from the `db` module and copied here:

```bash
# In db/
bun run generate
# This writes to shared/generated/prisma-client/
```

During development, prefer workspace linking in `api/package.json`:

```json
{
  "dependencies": {
    "@band-together/shared": "workspace:../shared"
  }
}
```

For CI/deployments, installing from GitHub works because `@prisma/client` is a dependency of this package.

## Structure

```
shared/
  index.ts                 # Exports configured PrismaClient
  generated/
    prisma-client/         # Committed Prisma client output
  .env(.example)           # DATABASE_URL for adapter
  package.json             # Declares @prisma/client
  tsconfig.json
```

## Notes

- Uses NodeNext module resolution; ensure explicit extensions when importing internally.
- `@prisma/client` is declared as a dependency so consumers don't manage Prisma internals.
