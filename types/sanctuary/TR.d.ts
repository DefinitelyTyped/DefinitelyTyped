// TI = Type Identifier
// TK = Type Representative
export interface TItoTR<A> { }
export interface TItoTR2<L, R> { }

export type TIS = keyof TItoTR<any>;
export type TIS2 = keyof TItoTR2<any, any>;

export type TR<TI extends TIS, A> = TI extends TIS ? TItoTR<A>[TI] : any;
export type TR2<TI extends TIS2, L, R> = TI extends TIS2 ? TItoTR2<L, R>[TI] : any;
