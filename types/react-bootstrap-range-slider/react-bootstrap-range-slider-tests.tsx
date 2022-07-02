import * as React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

// Valid examples

const ref = React.createRef<HTMLInputElement>();
const validStringTooltip = (
    <RangeSlider
        value={5}
        onChange={(_, n) => {}}
        onAfterChange={(_, n) => {}}
        min={-5}
        max={5}
        step={1}
        disabled={false}
        size="lg"
        variant="primary"
        tooltip="auto"
        tooltipPlacement="top"
        tooltipLabel={n => `Value is ${n}`}
        tooltipStyle={{ fontSize: '1.5rem' }}
        tooltipProps={{ className: 'text-center' }}
        inputProps={{ onMouseEnter: () => {} }}
        ref={ref}
        bsPrefix="custom-prefix-"
    />
);

const validCustomTooltip = <RangeSlider tooltipLabel={n => <p>Value is {n}</p>} />;

// Invalid examples

// @ts-expect-error
const invalidVariant = <RangeSlider variant="large" />;

// @ts-expect-error
const invalidTooltipPlacement = <RangeSlider tooltipPlacement="left" />;

const providingChildren = (
    // @ts-expect-error
    <RangeSlider>
        <span>I'm a child</span>
    </RangeSlider>
);

// @ts-expect-error
const stringValue = <RangeSlider value="5" />;

// @ts-expect-error
const invalidTooltipStyle = <RangeSlider tooltipStyle={{ textSize: 'big' }} />;

// @ts-expect-error
const invalidInputProps = <RangeSlider inputProps={{ someInvalidProp: 'value' }} />;

// @ts-expect-error
const invalidTooltipProps = <RangeSlider tooltipProps={{ someInvalidProp: 'value' }} />;
