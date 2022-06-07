type EnumValues<T> = T[keyof T];
type EnumValuesOrKeys<T> = T[keyof T] | keyof T;
