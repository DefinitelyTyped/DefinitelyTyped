import cstruct from 'struct';

cstruct()
    .word32Ube('dwMagic')
    .word32Ube('dwType')
    .word32Ube('dwFrom')
    .word32Ube('dwTo')
    .word32Ube('dwArg1')
    .word32Ube('dwArg2')
    .word32Ube('dwMsgLen')
    .allocate();
