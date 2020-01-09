import Filter from './Filter';

export default abstract class LogicalNary extends Filter {
    constructor(tagName: string, conditions: Filter[]);
}
