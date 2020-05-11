import * as React from 'react';
import Button, { targets, types, widths, AvailableTargets, AvailableTypes, AvailableWidths } from '@hig/button';

/** Button */
const emptyFunc = () => {};
const disabled = true;
const icon = <div />;
const link = '';
const onClick = emptyFunc;
const onBlur = emptyFunc;
const onFocus = emptyFunc;
const onHover = emptyFunc;
const onMouseDown = emptyFunc;
const onMouseEnter = emptyFunc;
const onMouseLeave = emptyFunc;
const onMouseUp = emptyFunc;
const stylesheet = emptyFunc;
const target = targets.BLANK;
const title = '';
const type = types.FLAT;
const width = widths.GROW;

// Minimal props
<Button title="button" />;

// All props
<Button
    disabled={disabled}
    icon={icon}
    link={link}
    onClick={onClick}
    onBlur={onBlur}
    onFocus={onFocus}
    onHover={onHover}
    onMouseDown={onMouseDown}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onMouseUp={onMouseUp}
    stylesheet={stylesheet}
    target={target}
    title={title}
    type={type}
    width={width}
/>;

/** Targets */
const target1: AvailableTargets = targets.BLANK;
const target2: AvailableTargets = targets.PARENT;
const target3: AvailableTargets = targets.SELF;
const target4: AvailableTargets = targets.TOP;

/** Types */
const types1: AvailableTypes = types.FLAT;
const types2: AvailableTypes = types.OUTLINE;
const types3: AvailableTypes = types.PRIMARY;
const types4: AvailableTypes = types.SECONDARY;
const types5: AvailableTypes = types.SOLID;

/** Widths */
const widths1: AvailableWidths = widths.GROW;
const widths2: AvailableWidths = widths.SHRINK;
