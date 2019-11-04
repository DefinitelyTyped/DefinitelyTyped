import {
    getDescription,
    getCode,
    getDescriptions,
    getCodes,
    getDescriptionList,
    getCodeList,
    getData,
    overwrite,
} from './index';

const description: string | undefined = getDescription('1');

const code: string | undefined = getCode('1234');

const descriptions: string[] = getDescriptions();
