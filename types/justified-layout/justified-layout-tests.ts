import createJustifiedLayout = require('justified-layout');

// $ExpectType JustifiedLayoutResult
createJustifiedLayout(
    [
        {width: 1, height: 2},
        {width: 3, height: 4},
    ],
    {containerPadding: {top: 1, bottom: 2, left: 3, right: 4}},
);


createJustifiedLayout(
    [
        {width: 1, height: 2},
        {width: 3, height: 4},
    ],
    {forcedAspectRatio: 3, containerPadding: {top: 1, bottom: 2, left: 3, right: 4, }},
);
