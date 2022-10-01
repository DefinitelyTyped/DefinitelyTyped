import Color, { ColorObject } from './color';
import ColorSpace from './space';

export default function getAll(color: Color | ColorObject, space: string | ColorSpace): [number, number, number];
