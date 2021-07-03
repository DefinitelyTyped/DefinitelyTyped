import * as React from "react";

export interface OrderedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
    isExpressive?: boolean;
    native?: boolean,
    nested?: boolean,
}

declare const OrderedList: React.FC<OrderedListProps>;

export default OrderedList;
