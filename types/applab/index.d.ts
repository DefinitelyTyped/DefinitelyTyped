// Type definitions for App Lab API
// Project: https://studio.code.org/docs/applab/
// Definitions by: Coin Hunter <https://github.com/Jonster5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
type event =
    | 'click'
    | 'change'
    | 'mouseover'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'keydown'
    | 'keyup'
    | 'keypress'
    | 'input';
type property =
    | 'width'
    | 'height'
    | 'x'
    | 'y'
    | 'text-color'
    | 'background-color'
    | 'font-size'
    | 'font-family'
    | 'text-align'
    | 'hidden'
    | 'text'
    | 'placeholder'
    | 'image'
    | 'group-id'
    | 'checked'
    | 'readonly'
    | 'options'
    | 'value'
    | 'min'
    | 'max'
    | 'step';
type ID = string;
type group = string;

// * UI controls
declare function onEvent(id: ID, event: event, callback: Function): void;

declare function getText(id: ID): string;
declare function getNumber(id: ID): number;
declare function getChecked(id: ID): boolean;
declare function getImageURL(id: ID): string;
declare function getProperty(id: ID, property: property): any;
declare function getXPosition(id: ID): number;
declare function getYPosition(id: ID): number;

declare function setText(id: ID, text: string): void;
declare function setNumber(id: ID, number: number): void;
declare function setChecked(id: ID, checked: boolean): void;
declare function setImageURL(id: ID, url: string): void;
declare function setPosition(id: ID, x: number, y: number, width?: number, height?: number): void;
declare function setSize(id: ID, width: number, height: number): void;
declare function setProperty(id: ID, property: property, value: string | number | boolean): void;
declare function setScreen(id: ID): void;

declare function button(id: ID, text: string): void;
declare function textInput(id: ID, text: string): void;
declare function textLabel(id: ID, text: string, forId?: ID): void;
declare function dropdown(id: ID, ...options: Array<string>): void;
declare function checkbox(id: ID, checked: boolean): void;
declare function radioButton(id: ID, checked: boolean, group: group): void;
declare function image(id: ID, url: string): void;

declare function playSound(url: string): void;
declare function showElement(id: ID): void;
declare function hideElement(id: ID): void;
declare function deleteElement(id: ID): void;
declare function write(text: string): void;
declare function rgb(r: number, g?: number, b?: number, a?: number): string;

// * canvas
declare function createCanvas(id: ID, width?: number, height?: number): void;
declare function setActiveCanvas(id: ID): void;

declare function line(x1: number, y1: number, x2: number, y2: number): void;
declare function circle(x: number, y: number, radius: number): void;
declare function rect(x: number, y: number, width: number, height: number): void;
declare function drawImage(id: ID, x: number, y: number, width?: number, height?: number): void;
declare function drawImageURL(URL: string): void;
declare function putImageData(imgData: {}, x: number, y: number): void;
declare function clearCanvas(): void;

declare function setStrokeWidth(width: number): void;
declare function setStrokeColor(color: string): void;
declare function setFillColor(color: string): void;

declare function getImageData(startX: number, startY: number, endX: number, endY: number): {};
declare function getRed(imageData: {}, x: number, y: number): number;
declare function getGreen(imageData: {}, x: number, y: number): number;
declare function getBlue(imageData: {}, x: number, y: number): number;
declare function getAlpha(imageData: {}, x: number, y: number): number;

declare function setRed(imageData: {}, x: number, y: number, redValue: number): void;
declare function setGreen(imageData: {}, x: number, y: number, greenValue: number): void;
declare function setBlue(imageData: {}, x: number, y: number, blueValue: number): void;
declare function setAlpha(imageData: {}, x: number, y: number, alphaValue: number): void;
declare function setRGB(
    imageData: {},
    x: number,
    y: number,
    red: number,
    green: number,
    blue: number,
    alpha?: number,
): void;

// ! Data
declare function startWebRequest(url: string, callback: Function): any;

declare function setKeyValue(key: string, value: any, callback?: Function): any;

declare function getKeyValue(key: string, callback: Function): any;

declare function createRecord(table: string, record: {}, callback?: Function): Array<object>;
declare function readRecords(table: string, terms: {}, callback: Function): Array<object>;
declare function updateRecord(table: string, record: {}, callback: Function): void;
declare function deleteRecord(table: string, record: {}, callback: Function): void;
declare function onRecordEvent(table: string, callback: Function, includeAll?: boolean): void;
declare function getUserId(): any;
declare function drawChart(
    chartId: string,
    chartType: string,
    chartData: Array<object>,
    options?: {},
    callback?: Function,
): void;
declare function drawChartFromrecords(
    chartId: string,
    chartType: string,
    tableName: string,
    columns: Array<string>,
    options?: {},
    callback?: Function,
): void;

// * Turtle
declare function moveForward(pixels?: number): void;
declare function moveBackward(pixels?: number): void;
declare function move(x: number, y: number): void;
declare function moveTo(x: number, y: number): void;
declare function turnRight(angle?: number): void;
declare function turnLeft(angle?: number): void;
declare function turnTo(angle: number): void;
declare function arcRight(angle: number, radius: number): void;
declare function arcLeft(angle: number, radius: number): void;
declare function penUp(): void;
declare function penDown(): void;
declare function penWidth(width: number): void;
declare function speed(value: number): void;

declare function getX(): number;
declare function getY(): number;
declare function getDirection(): number;

declare function penColor(color: string): void;
declare function penRGB(red: number, green: number, blue: number, alpha?: number): void;

declare function dot(radius: number): void;
declare function show(): void;
declare function hide(): void;

/*
! Control
! This one was really weird because it just has for loops and stuff in it as well as the normal code
TODO: maybe include the loops and whatever
*/
declare function getTime(): number;
declare function timedLoop(ms: number, callback: Function): {};
declare function stopTimedLoop(loop?: number): void;
declare function setTimeout(callback: Function, ms: number): number;
declare function clearTimeout(timeout: number): void;
declare function setInterval(callback: Function, ms: number): number;
declare function clearInterval(interval: number): void;

// * Math
declare function randomNumber(min?: number, max?: number): number;
declare function round(n: number): number;
declare function abs(n: number): number;
declare function max(...n: number[]): number;
declare function min(...n: number[]): number;
declare function random(): number;

// * Variables
declare function log(message: any): any;
declare function substring(start: number, end: number): string;
declare function indexOf(searchValue: string): number;
declare function includes(searchValue: string): boolean;
declare function toUpperCase(): string;
declare function toLowerCase(): string;
declare function join(separator?: string): Array<any>;
declare function insertItem(list: any, index: number, item: any): void;
declare function appendItem(list: any, item: any): boolean;
declare function removeItem(list: any, index: number): void;
