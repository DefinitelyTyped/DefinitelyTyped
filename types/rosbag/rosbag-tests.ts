import Bag, {
    open,
    Callback,
    TimeUtil,
    BagReader,
    MessageReader,
    MessageWriter,
    parseMessageDefinition,
    rosPrimitiveTypes,
    extractFields,
    extractTime,
} from 'rosbag';

import rosbag = require('rosbag');

// $ExpectType Promise<Bag>
open('file.bag');

// $ExpectType Promise<Bag>
open(
    new File(['file'], 'file.bag', {
        type: 'text/plain',
    }),
);

// $ExpectType Promise<Bag>
open(new Blob(['abc'], { type: 'text/plain' }));

// $ExpectType Date
TimeUtil.toDate({ sec: 0, nsec: 0 });

// $ExpectType Time
TimeUtil.fromDate(new Date());

// $ExpectType Time
TimeUtil.add({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType boolean
TimeUtil.areSame({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType number
TimeUtil.compare({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType boolean
TimeUtil.isGreaterThan({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType boolean
TimeUtil.isLessThan({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

const reader = {
    read: (offset: number, length: number, cb: Callback<Buffer>): void => {},
    size: (): number => {
        return 0;
    },
};

const bag = new Bag(new BagReader(reader));

bag.startTime; // $ExpectType Time | undefined
bag.endTime; // $ExpectType Time | undefined
bag.chunkInfos; // $ExpectType ChunkInfo[]
bag.connections; // $ExpectType { [conn: number]: Connection; }
bag.header; // $ExpectType BagHeader
bag.reader; // $ExpectType BagReader
bag.open(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
bag.readMessages(
    {
        noParse: false,
        topics: ['/1'],
        decompress: {
            bz2: (buffer: Buffer, size: number): Buffer => {
                return Buffer.from('abc');
            },
            lz4: (buffer: Buffer, size: number): Buffer => {
                return Buffer.from('abc');
            },
        },
        startTime: { sec: 0, nsec: 0 },
        endTime: { sec: 1, nsec: 1 },
        freeze: false,
    },
    msg => {
        msg;
    },
);

const msgReader = new MessageReader(
    [
        {
            name: 'msg',
            definitions: [
                {
                    type: 'type',
                    name: 'name',
                    isComplex: false,
                    isArray: false,
                    arrayLength: 0,
                    isConstant: true,
                    value: 'value',
                },
            ],
        },
    ],
    { freeze: false },
);

// $ExpectType any
msgReader.readMessage(Buffer.from('abc'));

// $ExpectType any
msgReader.reader(Buffer.from('abc'));

const msgWriter = new MessageWriter([
    {
        name: 'msg',
        definitions: [
            {
                type: 'type',
                name: 'name',
                isComplex: false,
                isArray: false,
                arrayLength: 0,
                isConstant: true,
                value: 'value',
            },
        ],
    },
]);

// $ExpectType Buffer
msgWriter.writer('msg', Buffer.from('abc'));

// $ExpectType Buffer
msgWriter.writeMessage('msg', Buffer.from('abc'));

// $ExpectType number
msgWriter.bufferSizeCalculator('msg');

// $ExpectType number
msgWriter.calculateBufferSize('msg');

// $ExpectType RosMsgDefinition[]
parseMessageDefinition('msg-def');

// $ExpectType { [key: string]: Buffer; }
extractFields(Buffer.from('abc'));

// $ExpectType Time
extractTime(Buffer.from('abc'), 10);

// $ExpectType Promise<Bag>
rosbag.open('file.bag');

// $ExpectType Promise<Bag>
rosbag.open(
    new File(['file'], 'file.bag', {
        type: 'text/plain',
    }),
);

// $ExpectType Promise<Bag>
rosbag.open(new Blob(['abc'], { type: 'text/plain' }));

// $ExpectType Date
rosbag.TimeUtil.toDate({ sec: 0, nsec: 0 });

// $ExpectType Time
rosbag.TimeUtil.fromDate(new Date());

// $ExpectType Time
rosbag.TimeUtil.add({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType boolean
rosbag.TimeUtil.areSame({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType number
rosbag.TimeUtil.compare({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType boolean
rosbag.TimeUtil.isGreaterThan({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

// $ExpectType boolean
rosbag.TimeUtil.isLessThan({ sec: 0, nsec: 0 }, { sec: 1, nsec: 1 });

const msgReader2 = new rosbag.MessageReader(
    [
        {
            name: 'msg',
            definitions: [
                {
                    type: 'type',
                    name: 'name',
                    isComplex: false,
                    isArray: false,
                    arrayLength: 0,
                    isConstant: true,
                    value: 'value',
                },
            ],
        },
    ],
    { freeze: false },
);

// $ExpectType any
msgReader2.readMessage(Buffer.from('abc'));

// $ExpectType any
msgReader2.reader(Buffer.from('abc'));

const msgWriter2 = new rosbag.MessageWriter([
    {
        name: 'msg',
        definitions: [
            {
                type: 'type',
                name: 'name',
                isComplex: false,
                isArray: false,
                arrayLength: 0,
                isConstant: true,
                value: 'value',
            },
        ],
    },
]);

// $ExpectType Buffer
msgWriter2.writer('msg', Buffer.from('abc'));

// $ExpectType Buffer
msgWriter2.writeMessage('msg', Buffer.from('abc'));

// $ExpectType number
msgWriter2.bufferSizeCalculator('msg');

// $ExpectType number
msgWriter2.calculateBufferSize('msg');

// $ExpectType RosMsgDefinition[]
rosbag.parseMessageDefinition('msg-def');

// $ExpectType { [key: string]: Buffer; }
rosbag.extractFields(Buffer.from('abc'));

// $ExpectType Time
rosbag.extractTime(Buffer.from('abc'), 10);
