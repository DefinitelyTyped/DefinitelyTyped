import TLV = require('node-tlv');
import assert = require('assert');

// Examples directly from the source page. @see https://github.com/coolbong/node-tlv#readme

// GPO Example

// parse TLV
const resp = '770E8202580094080801010010010301';
const tlv = TLV.parse(resp);

// response message template
assert(tlv.getTag() === '77');
assert(tlv.getLength() === 14);
assert(tlv.getValue() === '8202580094080801010010010301');

// get TLV array
const child = tlv.getChild();
assert(child.length === 2);

const first = child[0];
assert(first.getTag() === '82');

// find API
const aip = tlv.find(0x82);
assert(aip.getTag() === '82');
assert(aip.getLength() === 2);
assert(aip.getValue() === '5800');

// you can also use a string tag value
const afl = tlv.find('94');
assert(afl.getTag() === '94');
assert(afl.getLength() === 0x08);
assert(afl.getValue() === '0801010010010301');

// Example for build PPSE FCI

// EMV Contactless Book B Entry Point Specification
// Table 3-2: SELECT Response Message Data Field (FCI) of the PPSE
// '6F' FCI Template M
//    '84' DF Name (‘2PAY.SYS.DDF01’) O
//    'A5' FCI Proprietary Template M
//        'BF0C' FCI Issuer Discretionary Data M
//        '61' Directory Entry M
//            '4F'   ADF Name M
//            '50'   Application Label O
// example for my credit card real data
// CAPDU: 00A404000E325041592E5359532E4444463031
// RAPDU: 6F2C840E325041592E5359532E4444463031A51ABF0C1761154F07A0000000031010500A56495341435245444954
// 6F  2C(44) [FCI Template]
//     84  0E(14) [DF Name]: 325041592E5359532E4444463031
//     A5  1A(26) [FCI Proprietary Template]
//         BF0C  17(23) [FCI Issuer Discretionary Data]
//            61  15(21) [Directory Entry]
//                4F  07( 7) [ADF Name]: A0000000031010
//                50  0A(10) [Application Label]: VISACREDIT

// step 1 build leaf
const df_name = new TLV('84', '325041592E5359532E4444463031'); // DF name for PPSE
const adf_nameEx1 = new TLV('4F', 'A0000000031010'); // aid for visa
const app_labelEx1 = new TLV('50', '56495341435245444954'); // VISACREDIT

// step 2 build directory entry '61'
const dir_encty = new TLV('61', adf_nameEx1.getTLV() + app_labelEx1.getTLV());

// step 3 build FCI Issuer Discretionary data ' BF0C'
const issuer_discretionary_data = new TLV('BF0C', dir_encty.getTLV());

// step 4 build FCI Proprietary Template 'A5'
const fci_proprietary_template = new TLV('A5', issuer_discretionary_data.getTLV());

// step 5 build FCI template '6F'
const fci_template = new TLV('6F', df_name.getTLV() + fci_proprietary_template.getTLV());

assert(
    fci_template.getTLV() ===
        '6F2C840E325041592E5359532E4444463031A51ABF0C1761154F07A0000000031010500A56495341435245444954',
);

// Example for build PSE record

// EMV 4.3 Book 1
// Table 46: Payment System Directory Record Format
// Tag '70'  | Data Length (L) | Tag '61' | Length | Directory entry 1 (ADF)
// EMV 4.3 Book 1
// Table 47: ADF Directory Entry Format
// '4F'   5–16 ADF Name M
// '50'   1–16 Application Label M
// '9F12' 1–16 Application Preferred Name O
// '87'   1    Application Priority Indicator O
// '73'   var. Directory Discretionary Template O
// CAPDU: 00B2010C00
// RAPDU: 702861264F07A0000000041010870101500A4D4153544552434152449F120B43495449204D4153544552
// 70   28(40) [READ RECORD Response Message Template]
//    61   26(38) [Directory Entry]
//        4F   07( 7) [ADF Name]: A0000000041010
//        87   01( 1) [Application Priority Indicator]: 01
//        50   0A(10) [Application Label]: MASTERCARD
//        9F12 0B(11) [Application Preferred Name]: CITI MASTER

// step 1 build leaf
const adf_name = new TLV('4F', 'A0000000041010'); // aid for mastercard
const app_priority = new TLV('87', '01');
const app_label = new TLV('50', '4D415354455243415244'); // MASTERCARD
const app_pref_name = new TLV('9F12', '43495449204D4153544552'); // CITI MASTER

// step 2 build directory entry '61'
const dir_entry = new TLV('61', `${adf_name}${app_priority}${app_label}${app_pref_name}`);

// step 3 build read record response message template
const record_template = new TLV('70', dir_entry.getTLV());

assert(
    record_template.toString() ===
        '702861264F07A0000000041010870101500A4D4153544552434152449F120B43495449204D4153544552',
);
