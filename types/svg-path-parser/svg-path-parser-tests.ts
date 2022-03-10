/// <reference types="node" />

import { assert } from 'console';
import * as svgParser from 'svg-path-parser';

function isMoveToCommand(cmd: svgParser.Command): cmd is svgParser.MoveToCommand {
  return cmd.command === 'moveto';
}

function isLineToCommand(cmd: svgParser.Command): cmd is svgParser.LineToCommand {
  return cmd.command === 'lineto';
}

function isHorizontalLineToCommand(cmd: svgParser.Command): cmd is svgParser.HorizontalLineToCommand {
  return cmd.command === 'horizontal lineto';
}

function isVerticalLineToCommand(cmd: svgParser.Command): cmd is svgParser.VerticalLineToCommand {
  return cmd.command === 'vertical lineto';
}

function isClosePathCommand(cmd: svgParser.Command): cmd is svgParser.ClosePathCommand {
  return cmd.command === 'closepath';
}

function isCurveToCommand(cmd: svgParser.Command): cmd is svgParser.CurveToCommand {
  return cmd.command === 'curveto';
}

function isSmoothCurveToCommand(cmd: svgParser.Command): cmd is svgParser.SmoothCurveToCommand {
  return cmd.command === 'smooth curveto';
}

function isQuadraticCurveToCommand(cmd: svgParser.Command): cmd is svgParser.QuadraticCurveToCommand {
  return cmd.command === 'quadratic curveto';
}

function isSmoothQuadraticCurveToCommand(cmd: svgParser.Command): cmd is svgParser.SmoothQuadraticCurveToCommand {
  return cmd.command === 'smooth quadratic curveto';
}

function isEllipticalArcCommand(cmd: svgParser.Command): cmd is svgParser.EllipticalArcCommand {
  return cmd.command === 'elliptical arc';
}

function stringify(cmd: svgParser.Command) {
  if (isMoveToCommand(cmd)) {
    return `${cmd.code} ${cmd.x} ${cmd.y}`;
  } else if (isLineToCommand(cmd)) {
    return `${cmd.code} ${cmd.x} ${cmd.y}`;
  } else if (isHorizontalLineToCommand(cmd)) {
    return `${cmd.code} ${cmd.x}`;
  } else if (isVerticalLineToCommand(cmd)) {
    return `${cmd.code} ${cmd.y}`;
  } else if (isClosePathCommand(cmd)) {
    return `${cmd.code}`;
  } else if (isCurveToCommand(cmd)) {
    return `${cmd.code} ${cmd.x1} ${cmd.y1} ${cmd.x2} ${cmd.y2} ${cmd.x} ${cmd.y}`;
  } else if (isSmoothCurveToCommand(cmd)) {
    return `${cmd.code} ${cmd.x2} ${cmd.y2} ${cmd.x} ${cmd.y}`;
  } else if (isQuadraticCurveToCommand(cmd)) {
    return `${cmd.code} ${cmd.x1} ${cmd.y1} ${cmd.x} ${cmd.y}`;
  } else if (isSmoothQuadraticCurveToCommand(cmd)) {
    return `${cmd.code} ${cmd.x} ${cmd.y}`;
  } else if (isEllipticalArcCommand(cmd)) {
    return `${cmd.code} ${cmd.rx} ${cmd.ry} ${cmd.xAxisRotation} ${cmd.largeArc} ${cmd.sweep} ${cmd.x} ${cmd.y}`;
  }
  throw new Error(`unknown command: cmd = ${JSON.stringify(cmd)}`);
}

// Test that the discriminated union type works by using properties
// that only exist on each of the discriminated types.
function testUnion(cmd: svgParser.Command): number {
  switch (cmd.command) {
    case "moveto":
    case "lineto":
    case "smooth quadratic curveto":
      return cmd.x + cmd.y;
    case "horizontal lineto":
      return cmd.x;
    case "vertical lineto":
      return cmd.y;
    case "closepath":
      return 1;
    case "curveto":
    case "smooth curveto":
      return cmd.x2 + cmd.y2;
    case "quadratic curveto":
      return cmd.x1 + cmd.y1;
    case "elliptical arc":
      return cmd.rx + cmd.ry;
  }
}

const cmds: svgParser.Command[] = svgParser.parseSVG('M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80');
const cmds_made_absolute: svgParser.CommandMadeAbsolute[] = svgParser.makeAbsolute(cmds);
// `makeAbsolute()` modifies the argument in place and returns it.
// In TypeScript, the only way to modify the argument's type is to write
// `function f(cs: Command[]): asserts cs is CommandMadeAbsolute[];`, but then this makes the function return void.
// Hence, the only solution possible is to exploit the fact that this function returns the modified argument
// and make the return value be of type `CommandMadeAbsolute[]` and the argument to remain in `Command[]`.

assert(cmds.every(cmd => !cmd.relative)); // relative commands must not exist
cmds.forEach(testUnion);  // doesn't really do much, but the function itself must type-check
cmds.map(stringify).forEach(console.log); // could throw

// If we access the return value, `.x0` and `.y0` are guaranteed to exist
cmds_made_absolute.forEach(a => a.x0);
cmds_made_absolute.forEach(a => a.y0);
