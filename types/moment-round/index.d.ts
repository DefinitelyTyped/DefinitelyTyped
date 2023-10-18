import * as moment from "moment";

export = moment;

declare module "moment" {
    interface Moment {
        round(precision: number, key: string, direction?: "round" | "ceil" | "floor"): Moment;
        ceil(precision: number, key: string): Moment;
        floor(precision: number, key: string): Moment;
    }
}
