import * as React from "react";
import ReactList = require("react-list");

const renderItem = (index: number, key: number) =>
    <div key={key} className={'item' + (index % 2 ? '' : ' even')}>
        {index}
    </div>;

<ReactList
    itemRenderer={renderItem}
    type="uniform"
    length={1000}
/>;
