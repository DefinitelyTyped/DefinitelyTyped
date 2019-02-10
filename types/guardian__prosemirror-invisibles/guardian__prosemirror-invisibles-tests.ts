import { Node } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';

import invisibles, { hardBreak, paragraph, space, Builder } from 'guardian__prosemirror-invisibles';

const plugin1: Plugin = invisibles([hardBreak((node: Node) => true), paragraph(), space((char: string) => false)]);

const plugin2: Plugin = invisibles([hardBreak(), paragraph((node: Node) => false), space()]);
