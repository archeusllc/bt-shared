# bt-shared

Shared types, utilities, and Prisma client for [Band Together](https://github.com/archeusllc/band-together).

## Quick Start

### Install

```bash
# In bt-api or bt-client
bun add @band-together/shared
```

### Environment

Create `shared/.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/band_together"
```

### Usage

```ts
import { PrismaClient } from '@band-together/shared'

const prisma = PrismaClient()
```

## Documentation

See the [wiki](https://github.com/archeusllc/band-together/wiki) for full project documentation and architecture.
