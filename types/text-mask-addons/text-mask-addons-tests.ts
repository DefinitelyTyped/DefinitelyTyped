import { DatePipeYears, createAutoCorrectedDatePipe } from 'text-mask-addons';

function test() {
    const datePipeYears: DatePipeYears = { minYear: 1, maxYear: 1 };
    createAutoCorrectedDatePipe();
    createAutoCorrectedDatePipe('dd-mm-yyy');
    createAutoCorrectedDatePipe('dd-mm-yyy', undefined);
    createAutoCorrectedDatePipe('dd-mm-yyy', datePipeYears);
}
