import * as Entities from './entities';

export interface Block {
  xref?: any;
  name: string;
  x?: number;
  y?: number;
  z?: number;
  entities?: Entities.Entity[];
}
