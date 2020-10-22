import { Options } from "jquery-formatdatetime";

// basic usage
$('#example').formatDateTime('mm/dd/y g:ii a');

const date = new Date('2012/07/05 09:55:03');

$.formatDateTime('mm/dd/y g:ii a', date);

// with options
const options: Options = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    dayNames: [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
    ],
    ampmNames: ['AM', 'PM']
};

$.formatDateTime('mm/dd/y g:ii a', date, options);

$('#example').formatDateTime('mm/dd/y g:ii a', options);
