# README for TypeScript Type Generation

This folder contains scripts for generating TypeScript types for the `facebook-nodejs-business-sdk` package. The process automates most of the work but requires some manual fixes to ensure the types meet the required standards.

## How to Generate the Types

**Run the Generation Script**
   Use the following command to generate the types:
   ```bash
   pnpm run gen-types
   ```
   This command should be run from the root of the repository.

   This will execute the script that:
   - Cleans up old generated files
   - Copies the SDK source files
   - Converts `.es6` files to `.js`
   - Transforms Flow types to TypeScript
   - Fixes common syntax issues
   - Generates `.d.ts` files
   - Extracts `bundle.d.ts` to `index.d.ts`
   - Copies the `src` folder to the root directory

## Notes

- The generation process is designed to handle most of the work, but manual intervention is necessary for edge cases.
- Keep track of the manual fixes you make, as they may need to be reapplied if the types are regenerated.
