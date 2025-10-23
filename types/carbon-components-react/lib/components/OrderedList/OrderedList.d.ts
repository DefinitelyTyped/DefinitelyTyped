import React = require("react");

export interface OrderedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
    isExpressive?: boolean | undefined;
    native?: boolean | undefined;
    nested?: boolean | undefined;
}

declare const OrderedList: React.FC<OrderedListProps>;

export default OrderedList;
