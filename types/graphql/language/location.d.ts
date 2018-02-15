import { Source } from './source';

export interface SourceLocation {
  line: number;
  column: number;
}

export function getLocation(source: Source, position: number): SourceLocation;
