import Filter from './Filter';

export default abstract class Comparison extends Filter {
    constructor(tagName: string, propertyName: string);
}
