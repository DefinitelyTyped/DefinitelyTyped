import {
  assign,
  merge
} from "@stamp/core";

interface Dst {
  prop1: number;
}

interface Src1 {
  prop1: number;
  prop2: string[];
}

interface Src2 {
  prop1: string;
  prop2: string[];
  prop3: boolean;
}

interface Src3 {
  prop1: Src2;
}

interface Src4 {
  prop1: boolean;
  prop2: object;
}

const src1: Src1 = { prop1: 2, prop2: ['foo'] };
const src2: Src2 = { prop1: 'bar', prop2: ['baz'], prop3: false };
const src3: Src3 = { prop1: src2 };
const src4: Src4 = { prop1: true, prop2: { test: true } };

// Test with single source
(() => {
  const assignDst: Dst = { prop1: 1 };
  const mergeDst: Dst = { prop1: 1 };

  assign(assignDst, src1); // $ExpectType Dst & Src1
  merge(mergeDst, src1); // $ExpectType Dst & Src1
})();

// Test with two sources
(() => {
  const assignDst: Dst = { prop1: 1 };
  const mergeDst: Dst = { prop1: 1 };

  assign(assignDst, src1, src2); // $ExpectType Dst & Src1 & Src2
  merge(mergeDst, src1, src2); // $ExpectType Dst & Src1 & Src2
})();

// Test with three sources
(() => {
  const assignDst: Dst = { prop1: 1 };
  const mergeDst: Dst = { prop1: 1 };

  assign(assignDst, src1, src2, src3); // $ExpectType Dst & Src1 & Src2 & Src3
  merge(mergeDst, src1, src2, src3); // $ExpectType Dst & Src1 & Src2 & Src3
})();

// Test assign with > 3 sources
(() => {
  const assignDst: Dst = { prop1: 1 };
  const mergeDst: Dst = { prop1: 1 };

  assign(assignDst, src1, src2, src3, src4); // $ExpectType any
  assign(mergeDst, src1, src2, src3, src4); // $ExpectType any
})();
