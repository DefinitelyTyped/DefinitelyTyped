import * as cnpj from 'cnpj';

const valid: boolean = cnpj.validate('38.981.218/0001-47');
const formatted: string = cnpj.format(88415345000157);
const generated: string = cnpj.generate();
