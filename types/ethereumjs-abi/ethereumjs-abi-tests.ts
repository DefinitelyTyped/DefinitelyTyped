import { methodID, soliditySHA256, soliditySHA3 } from 'ethereumjs-abi';

methodID('foo', ['uint256', 'string']);
soliditySHA3(['uint256', 'string'], [0, 'Alice']);
soliditySHA256(['uint256', 'string'], [0, 'Alice']);
