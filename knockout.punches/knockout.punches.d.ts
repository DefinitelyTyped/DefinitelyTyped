
interface PunchesStatic {
    enableAll(): void;
}

declare var punches: PunchesStatic;
declare module "knockout.punches" {
    export = punches;
}