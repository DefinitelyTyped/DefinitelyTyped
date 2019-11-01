import cstruct, { Struct } from 'struct';

interface Fields {
    dwMagic: number;
    dwType: number;
    dwFrom: number;
    dwTo: number;
    dwArg1: number;
    dwArg2: number;
    dwMsgLen: number;
}

const fooStruct = cstruct<Fields>()
    .word32Ube('dwMagic')
    .word32Ube('dwType')
    .word32Ube('dwFrom')
    .word32Ube('dwTo')
    .word32Ube('dwArg1')
    .word32Ube('dwArg2')
    .word32Ube('dwMsgLen')
    .allocate();

const bazStruct = new Struct<Fields>()
    .word32Ube('dwMagic')
    .word32Ube('dwType')
    .word32Ube('dwFrom')
    .word32Ube('dwTo')
    .word32Ube('dwArg1')
    .word32Ube('dwArg2')
    .word32Ube('dwMsgLen')
    .allocate();
