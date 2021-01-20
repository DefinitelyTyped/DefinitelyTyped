export interface ddpBaseFilterOptions {
    skip: number;
    limit: number;
}
/**
 * Skip and limit are numbers or Infinity, sort is a standard js array sort function.
 */
export interface ddpFilterOptions extends Partial<ddpBaseFilterOptions> {
    sort?: typeof Array.prototype.sort;
}
