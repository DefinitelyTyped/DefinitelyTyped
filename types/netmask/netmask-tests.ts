import { Netmask } from 'netmask';

const block = new Netmask('10.0.0.0/12');
console.log('base', block.base);

if (block.contains('10.0.8.10')) {
    console.log('block contains 10.0.8.10');
}
