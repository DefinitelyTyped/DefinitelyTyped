/// <reference types="node" />

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
  } else {
    throw new Error(`${cmd.code} command is unknown command: cmd = ${JSON.stringify(cmd)}`);
  }
}

let cmds = svgParser.parseSVG('M 0 0 L 50 50');
// makeAbsolute() changes cmds inplacely
cmds = svgParser.makeAbsolute(cmds);

cmds.filter((cmd: svgParser.Command) => !cmd.relative)    // relative commands must not exist
    .map(stringify)
    .forEach(console.log);
