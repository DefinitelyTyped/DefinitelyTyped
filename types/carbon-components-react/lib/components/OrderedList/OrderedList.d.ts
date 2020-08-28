import * as React from "react";

interface InheritedProps extends React.OlHTMLAttributes<HTMLOListElement> { }

export interface OrderedListProps extends InheritedProps {
    nested?: boolean,
}

declare const OrderedList: React.FC<OrderedListProps>;

export default OrderedList;
