import useDeepCompareEffect, { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

useDeepCompareEffect(() => {
  return () => { };
});

useDeepCompareEffect(() => {
});

useDeepCompareEffectNoCheck(() => {
  return () => { };
});

useDeepCompareEffectNoCheck(() => {
});
