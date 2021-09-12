import * as nodeAbi from 'node-abi';

nodeAbi.getAbi('7.2.0', 'electron'); // $ExpectType string
nodeAbi.getAbi('1.4.10'); // $ExpectType string
nodeAbi.getTarget('51', 'node'); // $ExpectType string
nodeAbi.getTarget('50'); // $ExpectType string
nodeAbi.getTarget(null); // $ExpectType string
nodeAbi.getTarget(); // $ExpectType string
nodeAbi._getNextTarget('electron', nodeAbi.allTargets); // $ExpectType string | null

nodeAbi.allTargets; // $ExpectType Target[]
nodeAbi.deprecatedTargets; // $ExpectType Target[]
nodeAbi.supportedTargets; // $ExpectType Target[]
nodeAbi.additionalTargets; // $ExpectType Target[]
nodeAbi.futureTargets; // $ExpectType Target[]
