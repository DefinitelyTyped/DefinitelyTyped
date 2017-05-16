import * as babel from 'babel-core';

export default function(context: Pick<typeof babel, 'types'|'template'>): { visitor: any };
