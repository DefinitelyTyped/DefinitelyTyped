export = ipInt;

declare function ipInt(value: string): {
    toInt: () => number;
    toIP: () => string;
};
