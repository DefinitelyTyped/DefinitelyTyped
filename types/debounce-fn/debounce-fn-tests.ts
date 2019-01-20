import debounceFn = require('debounce-fn');

const debounced = debounceFn((s: string) => true);
debounced; // $ExpectType ((s: string) => boolean | undefined) & { cancel(): void; }

debounceFn((s: string) => true);
debounceFn((s: string) => true, { wait: 100 });
debounceFn((s: string) => true, { immediate: true });

debounced.cancel();
