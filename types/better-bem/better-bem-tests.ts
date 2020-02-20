import BEM from 'better-bem';

BEM('block').cn;
BEM('block').mod('modifier').cn;
BEM('block').mod(['modifier']).cn;
BEM('block').mod(['modifier', {}]).cn;
BEM('block').mod(['modifier', { a: false, b: 5, c: 'c', d: null, e: undefined }]).cn;

BEM('block').el('element').cn;
BEM('block')
    .el('element')
    .mod('modifier').cn;
BEM('block')
    .el('element')
    .mod(['modifier']).cn;
BEM('block')
    .el('element')
    .mod(['modifier', {}]).cn;
BEM('block')
    .el('element')
    .mod(['modifier', { a: false, b: 5, c: 'c', d: null, e: undefined }]).cn;

BEM('block').el(['element1', 'element2']).cn;
BEM('block')
    .el(['element1', 'element2'])
    .mod('modifier').cn;
BEM('block')
    .el(['element1', 'element2'])
    .mod(['modifier']).cn;
BEM('block')
    .el(['element1', 'element2'])
    .mod(['modifier', {}]).cn;
BEM('block')
    .el(['element1', 'element2'])
    .mod(['modifier', { a: false, b: 5, c: 'c', d: null, e: undefined }]).cn;

BEM(['block1', 'block2']).cn;
BEM(['block1', 'block2']).mod('modifier').cn;
BEM(['block1', 'block2']).mod(['modifier']).cn;
BEM(['block1', 'block2']).mod(['modifier', {}]).cn;
BEM(['block1', 'block2']).mod(['modifier', { a: false, b: 5, c: 'c', d: null, e: undefined }]).cn;

BEM(['block1', 'block2']).el('element').cn;
BEM(['block1', 'block2'])
    .el('element')
    .mod('modifier').cn;
BEM(['block1', 'block2'])
    .el('element')
    .mod(['modifier']).cn;
BEM(['block1', 'block2'])
    .el('element')
    .mod(['modifier', {}]).cn;
BEM(['block1', 'block2'])
    .el('element')
    .mod(['modifier', { a: false, b: 5, c: 'c', d: null, e: undefined }]).cn;

BEM(['block1', 'block2']).el(['element1', 'element2']).cn;
BEM(['block1', 'block2'])
    .el(['element1', 'element2'])
    .mod('modifier').cn;
BEM(['block1', 'block2'])
    .el(['element1', 'element2'])
    .mod(['modifier']).cn;
BEM(['block1', 'block2'])
    .el(['element1', 'element2'])
    .mod(['modifier', {}]).cn;
BEM(['block1', 'block2'])
    .el(['element1', 'element2'])
    .mod(['modifier', { a: false, b: 5, c: 'c', d: null, e: undefined }]).cn;

BEM('block')
    .el('element')
    .el('element')
    .el('element').cn;
BEM('block')
    .mod('modifier')
    .mod('modifier')
    .mod('modifier').cn;
BEM('block')
    .el('element')
    .mod('modifier')
    .mod('modifier')
    .mod('modifier').cn;
BEM('block')
    .el('element')
    .mod('modifier')
    .el('element')
    .mod('modifier').cn;
BEM('block')
    .mod('modifier')
    .el('element')
    .mod('modifier')
    .el('element').cn;

// From https://github.com/LuudJacobs/better-bem#chaining
const block = BEM('block');
block.cn;

const element = block.el('element');
element.cn;

const modifiers = ['error', { color: 'red', valid: false }];

const modifiedBlock = block.mod(modifiers);
modifiedBlock.cn;

const modifiedElement = element.mod(modifiers);
modifiedElement.cn;
