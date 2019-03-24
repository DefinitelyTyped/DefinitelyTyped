import voucherGenerator  = require('voucher-code-generator');
import { generatorConfig } from 'voucher-code-generator';

const config: generatorConfig = {
  length: 6,
  count: 3,
  charset: "0123456789",
  prefix: "offer-",
  postfix: "-2019",
  pattern: "######"
};

voucherGenerator.charset('numbers');
voucherGenerator.charset('alphabetic');
voucherGenerator.charset('alphanumeric');

voucherGenerator.generate();
voucherGenerator.generate(config);
