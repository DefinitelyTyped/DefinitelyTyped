import * as DomUtils from 'domutils';

const elem = { name: 'elem' };
const next = { name: 'next' };
const child = { name: 'child' };

DomUtils.append(elem, next);
DomUtils.appendChild(elem, child);
DomUtils.getName(elem);
