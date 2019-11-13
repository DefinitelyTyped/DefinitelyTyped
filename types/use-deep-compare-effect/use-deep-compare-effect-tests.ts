import useDeeCompareEffect, { useDeepCompareNoEffect } from 'use-deep-compare-effect';

useDeeCompareEffect(() => {
  return () => { };
});

useDeeCompareEffect(() => {
});

useDeepCompareNoEffect(() => {
  return () => { };
});

useDeepCompareNoEffect(() => {
});
