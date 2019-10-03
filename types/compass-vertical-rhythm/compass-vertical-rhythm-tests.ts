import compassVerticalRhythm = require('compass-vertical-rhythm');

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

const cvr = compassVerticalRhythm({
    baseFontSize: '16px',
    baseLineHeight: 1.5,
    rhythmUnit: 'rem',
    defaultRhythmBorderWidth: '1px',
    defaultRhythmBorderStyle: 'solid',
    roundToNearestHalfLine: true,
    minLinePadding: '2px',
});

cvr.rhythm();
cvr.rhythm(1);
cvr.rhythm(1, '16px');
cvr.rhythm(1, '16px', 4);

cvr.establishBaseline().fontSize;
cvr.establishBaseline().lineHeight;

cvr.linesForFontSize('16px');

cvr.adjustFontSizeTo('32px', 1, '16px').fontSize;
cvr.adjustFontSizeTo('32px', 1, '16px').lineHeight;
cvr.adjustFontSizeTo('32px', 'auto', '16px');
cvr.adjustFontSizeTo('32px', null, '16px');
cvr.adjustFontSizeTo('32px', 1);
cvr.adjustFontSizeTo('32px');
