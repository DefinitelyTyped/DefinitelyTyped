import vfile = require('vfile');
import * as Unist from 'unist';
import vfileMessage = require('vfile-message');

// Instantiation
const file: vfile.VFile = vfile();
vfile('string');
vfile(Buffer.from('string'));
vfile(vfile());
vfile({ stem: 'readme', extname: '.md' });

vfile({ path: 1234 }); // $ExpectError

file.path = '~/test.txt';
file.dirname = '~';
file.extname = '.md';
file.basename = 'test.text';
file.history = ['~/test.txt']; // => ['~/example.txt', '~/example.md', '~/index.text']
file.messages = [vfileMessage('random error')];

const startPoint: Unist.Point = {
    line: 1,
    column: 1,
};
const position: Unist.Position = {
    start: startPoint,
    end: {
        line: 2,
        column: 2,
    },
};

const message: vfileMessage.VFileMessage = file.message('test', startPoint, 'test origin');
file.message('test', position);
file.message('test', {
    type: 'ramdom node',
    position,
    extraValue: 'extra tango',
});

file.message('test', { start: 'invalid point' }); // $ExpectError

file.fail('test');

const infoMessage: vfileMessage.VFileMessage = file.info('test');

// Using `data` prop
interface CustomData {
    message: string;
}
function isCustomData(data: any): data is CustomData {
    return data != null && typeof data.message === 'string';
}
function doSomethingWithCustomData(data: CustomData) {
}
const customData: CustomData = {
    message: 'tango'
};
const fileWithData = vfile({
    data: customData
});

if (isCustomData(fileWithData.data)) {
    doSomethingWithCustomData(fileWithData.data);
}
doSomethingWithCustomData(fileWithData.data); // $ExpectError

// Extending vfile
interface CustomVFile extends vfile.VFile {
    custom: string;
    data: {
        custom: number;
    };
}

const customVFile = vfile<CustomVFile>({
    path: '~/example.txt',
    contents: 'Alpha *braavo* charlie.',
    custom: 'Custom tango',
    data: {
        custom: 12345
    }
});

customVFile.custom = 'test';
customVFile.data.custom = 1234;

const copiedFile: CustomVFile = vfile(customVFile);
