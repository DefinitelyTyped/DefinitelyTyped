# video.js typing

This directory provides typings in `index.d.ts` for the main distribution file that can be imported with:

```typescript
import videojs from 'video.js';
```

It also provides typings for the alternative distribution without WebVTT that can be imported with:

```typescript
import videojs from 'video.js/dist/alt/video.core.novtt.js';
```

When modifying the video.js typings, just change things in `index.d.ts` and adjust tests accordingly.
Then replace the content of alternative distributions files in `dist/alt/*` with the content of `index.d.ts`. Take care of keeping alternative distributions file headers though, it should be different from `index.d.ts` because only the `index.d.ts` can have the special type definition header.
