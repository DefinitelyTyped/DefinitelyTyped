import JSON2CSVBase from './BaseParser';

export default class JSON2CSVParser extends JSON2CSVBase {
    parse(data: any): string;
    preprocessData(data: any): any[];
    processData(data: any[]): string;
}
