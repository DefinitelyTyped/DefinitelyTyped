import createJustifiedLayout from 'justified-layout';

// Testcase 1: aspect ratios without options

// $ExpectType JustifiedLayoutResult
const layout1 = createJustifiedLayout([1, 2, 3]);

// Testcase 2: sizes without options

// $ExpectType JustifiedLayoutResult
const layout2 = createJustifiedLayout([
    { width: 1, height: 2 },
    { width: 3, height: 4 },
]);

// Testcase 3: sizes with equidistant padding

// $ExpectType JustifiedLayoutResult
const layout3 = createJustifiedLayout(
    [
        { width: 1, height: 2 },
        { width: 3, height: 4 },
    ],
    { containerPadding: 10 },
);

// Testcase 4: sizes with non-equidistant padding

// $ExpectType JustifiedLayoutResult
const layout4 = createJustifiedLayout(
    [
        { width: 1, height: 2 },
        { width: 3, height: 4 },
    ],
    { containerPadding: { top: 1, bottom: 2, left: 3, right: 4 } },
);
