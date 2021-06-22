import { Node } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';

import invisibles, { hardBreak, paragraph, space, Builder, character, node } from '@guardian/prosemirror-invisibles';

const plugin1: Plugin = invisibles([hardBreak((node: Node) => true), paragraph(), space((char: string) => false)]);

const a: Builder = character('letter-a')(char => char === 'a');

const someNode: Builder = node('some-node', (node: Node, pos: number) => 1)((node: Node) => true);

const plugin2: Plugin = invisibles([hardBreak(), paragraph((node: Node) => false), space(), a, someNode]);
