import * as React from "react";
import * as ReactList from "react-list";

const renderItem = (index: number, key: number) =>
    <div key={key} className={'item' + (index % 2 ? '' : ' even')}>
        {index}
    </div>;

<ReactList
    className="react-list"
    itemRenderer={renderItem}
    type="uniform"
    length={1000}
/>;
