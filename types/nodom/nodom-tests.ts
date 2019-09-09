import { Document } from 'nodom';

const doc = new Document();
const div = doc.createElement('div');
div.setAttribute('data-test', 'foo');
