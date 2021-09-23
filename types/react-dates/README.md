# @types/react-dates

## Adding a new entry

When a new component or util has been published by `react-dates`:

- Add the type to `index.d.ts`
- Add your entry import/re-export in `esm` & `lib` folders
- Add `esm/<type>.d.ts` & `lib/<type>.d.ts` to `OTHER_FILES.txt`
- Add tests for the type in `react-dates-tests.tsx`
