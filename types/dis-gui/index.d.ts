import * as React from 'react';
type GUIProps = Partial<{
    style : React.CSSProperties,
    expanded : boolean,
    alwaysOpen : boolean,
    className : string
}>;
type FolderProps = Partial<{
    expanded : boolean,
    label : string,
    onChange(expanded : boolean) : void
    onFinishChange(expanded : boolean) : void
}>;
interface ButtonProps {
    label : string,
    onClick?() : void
}
type CheckboxProps = Partial<{
    checked : boolean,
    label : string,
    onChange(value : boolean) : void,
    onFinishChange(value : boolean) : void
}>;
interface ColorSet {red : number, green : number, blue : number}
type ColorProps = Partial<{
    red : number,
    green : number,
    blue : number,
    expanded : boolean,
    label : string,
    onChange(color : ColorSet) : void,
    onFinishChange(color : ColorSet) : void
}>;
interface Stop extends ColorSet {stop : number}
type GradientProps = Partial<{
    expanded : boolean,
    stops : Array<Stop>,
    label : string,
    onChange(stops : Array<Stop>) : void,
    onFinishChange(stops : Array<Stop>) : void
}>;
type NumberProps = Partial<{
    value : number,
    min : number,
    max : number,
    step : number,
    label : string,
    onChange(value : number) : void,
    onFinishChange(value : number) : void
}>;
interface SelectProps {
    options : Array<string>,
    label? : string,
    onChange?(value : string) : void,
    onFinishChange?(value : string) : void
}
type TextProps = Partial<{
    value : string,
    label : string,
    onChange(value : string) : void
    onFinishChange(value : string) : void
}>;
export class GUI extends React.PureComponent<GUIProps>{}
export class Folder extends React.PureComponent<FolderProps>{}
export class Button extends React.PureComponent<ButtonProps>{}
export class Checkbox extends React.PureComponent<CheckboxProps>{}
export class Color extends React.PureComponent<ColorProps>{}
export class Gradient extends React.PureComponent<GradientProps>{}
export class Number extends React.PureComponent<NumberProps>{}
export class Select extends React.PureComponent<SelectProps>{}
export class Text extends React.PureComponent<TextProps>{}
