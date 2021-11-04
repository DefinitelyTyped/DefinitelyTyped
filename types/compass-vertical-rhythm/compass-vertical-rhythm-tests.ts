import compassVerticalRhythm = require('compass-vertical-rhythm');
import { Options, VerticalRhythm, VerticalRhythmStyles } from 'compass-vertical-rhythm';

// $ExpectType VerticalRhythm
compassVerticalRhythm({});
// $ExpectError
compassVerticalRhythm();

compassVerticalRhythm({ baseFontSize: '16px' });
compassVerticalRhythm({ baseLineHeight: 1.5 });
compassVerticalRhythm({ baseLineHeight: '16px' });
compassVerticalRhythm({ rhythmUnit: '%' });
compassVerticalRhythm({ rhythmUnit: 'ch' });
compassVerticalRhythm({ rhythmUnit: 'em' });
compassVerticalRhythm({ rhythmUnit: 'ex' });
compassVerticalRhythm({ rhythmUnit: 'px' });
compassVerticalRhythm({ rhythmUnit: 'rem' });
compassVerticalRhythm({ rhythmUnit: 'vh' });
compassVerticalRhythm({ rhythmUnit: 'vmin' });
compassVerticalRhythm({ rhythmUnit: 'vw' });
compassVerticalRhythm({ defaultRhythmBorderWidth: '16px' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'solid' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'none' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'hidden' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'dashed' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'dotted' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'double' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'groove' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'ridge' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'inset' });
compassVerticalRhythm({ defaultRhythmBorderStyle: 'outset' });
compassVerticalRhythm({ roundToNearestHalfLine: true });
compassVerticalRhythm({ minLinePadding: '2px' });

// $ExpectType VerticalRhythm
const cvr = compassVerticalRhythm({
    baseFontSize: '16px',
    baseLineHeight: 1.5,
    rhythmUnit: 'rem',
    defaultRhythmBorderWidth: '1px',
    defaultRhythmBorderStyle: 'solid',
    roundToNearestHalfLine: true,
    minLinePadding: '2px',
});

// $ExpectType number
cvr.rhythm();
// $ExpectType number
cvr.rhythm(1);
// $ExpectType number
cvr.rhythm(1, '16px');
// $ExpectType number
cvr.rhythm(1, '16px', 4);

// $ExpectType VerticalRhythmStyles
cvr.establishBaseline();
// $ExpectType string
cvr.establishBaseline().fontSize;
// $ExpectType string
cvr.establishBaseline().lineHeight;

// $ExpectType number
cvr.linesForFontSize('16px');

// $ExpectType string
cvr.adjustFontSizeTo('32px', 1, '16px').fontSize;
// $ExpectType string
cvr.adjustFontSizeTo('32px', 1, '16px').lineHeight;
// $ExpectType VerticalRhythmStyles
cvr.adjustFontSizeTo('32px', 'auto', '16px');
// $ExpectType VerticalRhythmStyles
cvr.adjustFontSizeTo('32px', null, '16px');
// $ExpectType VerticalRhythmStyles
cvr.adjustFontSizeTo('32px', 1);
// $ExpectType VerticalRhythmStyles
cvr.adjustFontSizeTo('32px');
