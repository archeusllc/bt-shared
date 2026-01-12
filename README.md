# bt-shared

Shared types, schemas, and utilities for Band Together. Contains TypeScript interfaces, API contracts, and common utilities used across bt-api and bt-client.

## Contents

- **Types**: Shared TypeScript interfaces and types
- **Schemas**: Data validation schemas (e.g., Zod, Yup)
- **Constants**: Shared constants and enums
- **Utilities**: Common helper functions

## Installation

```bash
# In bt-api or bt-client
bun add @band-together/shared
```

## Usage

```typescript
import { User, Band } from '@band-together/shared'
import { validateUserInput } from '@band-together/shared/schemas'
```

## Project Structure

```
src/
  types/
  schemas/
  constants/
  utils/
```

## Contributing

When adding new shared types or utilities:
1. Keep them agnostic to implementation details
2. Update both dependent packages when making breaking changes
3. Add appropriate exports to main index

## License

MIT
