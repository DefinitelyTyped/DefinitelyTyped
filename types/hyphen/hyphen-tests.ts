// Main factory function
import createHyphenator = require('hyphen');

// Language specific hyphenation functions created by the factory
import { hyphenateSync as hyphenateAf } from 'hyphen/af';
import { hyphenateSync as hyphenateAs } from 'hyphen/as';
import { hyphenateSync as hyphenateBe } from 'hyphen/be';
import { hyphenateSync as hyphenateBg } from 'hyphen/bg';
import { hyphenateSync as hyphenateBn } from 'hyphen/bn';
import { hyphenateSync as hyphenateCa } from 'hyphen/ca';
import { hyphenateSync as hyphenateCop } from 'hyphen/cop';
import { hyphenateSync as hyphenateCs } from 'hyphen/cs';
import { hyphenateSync as hyphenateCu } from 'hyphen/cu';
import { hyphenateSync as hyphenateCy } from 'hyphen/cy';
import { hyphenateSync as hyphenateDa } from 'hyphen/da';
import { hyphenateSync as hyphenateDe1901 } from 'hyphen/de-1901';
import { hyphenateSync as hyphenateDe1996 } from 'hyphen/de-1996';
import { hyphenateSync as hyphenateDeCh1901 } from 'hyphen/de-ch-1901';
import { hyphenateSync as hyphenateElMonoton } from 'hyphen/el-monoton';
import { hyphenateSync as hyphenateElPolyton } from 'hyphen/el-polyton';
import { hyphenateSync as hyphenateEnGb } from 'hyphen/en-gb';
import { hyphenateSync as hyphenateEnUs } from 'hyphen/en-us';
import { hyphenateSync as hyphenateEs } from 'hyphen/es';
import { hyphenateSync as hyphenateEt } from 'hyphen/et';
import { hyphenateSync as hyphenateEu } from 'hyphen/eu';
import { hyphenateSync as hyphenateFi } from 'hyphen/fi';
import { hyphenateSync as hyphenateFr } from 'hyphen/fr';
import { hyphenateSync as hyphenateFur } from 'hyphen/fur';
import { hyphenateSync as hyphenateGa } from 'hyphen/ga';
import { hyphenateSync as hyphenateGl } from 'hyphen/gl';
import { hyphenateSync as hyphenateGrc } from 'hyphen/grc';
import { hyphenateSync as hyphenateGu } from 'hyphen/gu';
import { hyphenateSync as hyphenateHi } from 'hyphen/hi';
import { hyphenateSync as hyphenateHr } from 'hyphen/hr';
import { hyphenateSync as hyphenateHsb } from 'hyphen/hsb';
import { hyphenateSync as hyphenateHu } from 'hyphen/hu';
import { hyphenateSync as hyphenateHy } from 'hyphen/hy';
import { hyphenateSync as hyphenateIa } from 'hyphen/ia';
import { hyphenateSync as hyphenateId } from 'hyphen/id';
import { hyphenateSync as hyphenateIs } from 'hyphen/is';
import { hyphenateSync as hyphenateIt } from 'hyphen/it';
import { hyphenateSync as hyphenateKa } from 'hyphen/ka';
import { hyphenateSync as hyphenateKmr } from 'hyphen/kmr';
import { hyphenateSync as hyphenateKn } from 'hyphen/kn';
import { hyphenateSync as hyphenateLaXClassic } from 'hyphen/la-x-classic';
import { hyphenateSync as hyphenateLaxLiturgic } from 'hyphen/la-x-liturgic';
import { hyphenateSync as hyphenateLa } from 'hyphen/la';
import { hyphenateSync as hyphenateLt } from 'hyphen/lt';
import { hyphenateSync as hyphenateLv } from 'hyphen/lv';
import { hyphenateSync as hyphenateMl } from 'hyphen/ml';
import { hyphenateSync as hyphenateMnCyrlXLmc } from 'hyphen/mn-cyrl-x-lmc';
import { hyphenateSync as hyphenateMnCyrl } from 'hyphen/mn-cyrl';
import { hyphenateSync as hyphenateMr } from 'hyphen/mr';
import { hyphenateSync as hyphenateMulEthi } from 'hyphen/mul-ethi';
import { hyphenateSync as hyphenateNb } from 'hyphen/nb';
import { hyphenateSync as hyphenateNl } from 'hyphen/nl';
import { hyphenateSync as hyphenateNn } from 'hyphen/nn';
import { hyphenateSync as hyphenateNo } from 'hyphen/no';
import { hyphenateSync as hyphenateOc } from 'hyphen/oc';
import { hyphenateSync as hyphenateOr } from 'hyphen/or';
import { hyphenateSync as hyphenatePa } from 'hyphen/pa';
import { hyphenateSync as hyphenatePi } from 'hyphen/pi';
import { hyphenateSync as hyphenatePl } from 'hyphen/pl';
import { hyphenateSync as hyphenatePms } from 'hyphen/pms';
import { hyphenateSync as hyphenatePt } from 'hyphen/pt';
import { hyphenateSync as hyphenateRm } from 'hyphen/rm';
import { hyphenateSync as hyphenateRo } from 'hyphen/ro';
import { hyphenateSync as hyphenateRu } from 'hyphen/ru';
import { hyphenateSync as hyphenateSa } from 'hyphen/sa';
import { hyphenateSync as hyphenateShCyrl } from 'hyphen/sh-cyrl';
import { hyphenateSync as hyphenateShLatn } from 'hyphen/sh-latn';
import { hyphenateSync as hyphenateSk } from 'hyphen/sk';
import { hyphenateSync as hyphenateSl } from 'hyphen/sl';
import { hyphenateSync as hyphenateSrCyrl } from 'hyphen/sr-cyrl';
import { hyphenateSync as hyphenateSv } from 'hyphen/sv';
import { hyphenateSync as hyphenateTa } from 'hyphen/ta';
import { hyphenateSync as hyphenateTe } from 'hyphen/te';
import { hyphenateSync as hyphenateTh } from 'hyphen/th';
import { hyphenateSync as hyphenateTk } from 'hyphen/tk';
import { hyphenateSync as hyphenateTr } from 'hyphen/tr';
import { hyphenateSync as hyphenateUk } from 'hyphen/uk';
import { hyphenateSync as hyphenateZhLatnPinyin } from 'hyphen/zh-latn-pinyin';

// Pattern definitions
import hyphenationPatternsEnGb = require('hyphen/patterns/en-gb');

// Sync tests
if (hyphenateDe1996('Silbentrennung') !== 'Sil-ben-tren-nung') {
    throw new Error('Test failed');
}

if (hyphenateHu('szóelválasztás', { hyphenChar: '|' }) !== 'szó|el|vá|lasz|tás') {
    throw new Error('Test failed');
}

// Async tests
const hyphenateEnGbAsync = createHyphenator(hyphenationPatternsEnGb, { async: true });
(hyphenateEnGbAsync('hyphenation', { hyphenChar: '#' }) as Promise<string>).then(result => {
    if (result !== 'hy#phen#a#tion') {
        throw new Error('Test failed');
    }
});
