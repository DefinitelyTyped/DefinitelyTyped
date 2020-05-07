import {
    getDescription,
    getCode,
    getDescriptions,
    getCodes,
    getDescriptionList,
    getCodeList,
    getData,
    overwrite,
} from 'sic-list';

const description: string | undefined = getDescription('');

const code: string | undefined = getCode('1234');

const descriptions: string[] = getDescriptions();

const codes: string[] = getCodes();

const descriptionList: { [description: string]: string } = getDescriptionList();

const codeList: { [code: string]: string } = getCodeList();

const data: Array<{ code: string; description: string }> = getData();

overwrite([{ code: '1234', description: '' }]);
