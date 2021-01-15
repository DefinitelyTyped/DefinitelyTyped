import { DatePipeYears, NumberMaskOptions, createAutoCorrectedDatePipe, createNumberMask } from 'text-mask-addons';

function testCreateAutoCorrectedDatePipe() {
    const datePipeYears: DatePipeYears = { minYear: 1, maxYear: 1 };
    createAutoCorrectedDatePipe();
    createAutoCorrectedDatePipe('dd-mm-yyy');
    createAutoCorrectedDatePipe('dd-mm-yyy', undefined);
    createAutoCorrectedDatePipe('dd-mm-yyy', datePipeYears);
}

function testCreateNumberMask() {
    const maskOptions: NumberMaskOptions = {
        prefix: '$',
        suffix: '-hi',
        includeThousandsSeparator: false,
        thousandsSeparatorSymbol: '|',
        allowDecimal: false,
        decimalSymbol: ':',
        decimalLimit: 3,
        requireDecimal: true,
        allowNegative: true,
        allowLeadingZeroes: false,
        integerLimit: 11,
    };
    createNumberMask();
    createNumberMask(undefined);
    createNumberMask(maskOptions);
}

testCreateAutoCorrectedDatePipe();
testCreateNumberMask();
