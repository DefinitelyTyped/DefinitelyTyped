import * as React from "react";
import SplitterLayout, { SplitterLayoutProps } from "react-splitter-layout";

<SplitterLayout />;

<SplitterLayout customClassName="custom-class" />;

<SplitterLayout vertical />;

<SplitterLayout percentage />;

<SplitterLayout primaryIndex={1} />;

<SplitterLayout primaryMinSize={25} />;

<SplitterLayout secondaryMinSize={25} />;

<SplitterLayout secondaryInitialSize={25} />;

<SplitterLayout onDragStart={() => {}} />;

<SplitterLayout onDragEnd={() => {}} />;

<SplitterLayout
    onSecondaryPaneSizeChange={(value) => {
        // $ExpectType number
        value;
    }}
/>;

<SplitterLayout>
    <div>1st</div>
</SplitterLayout>;

<SplitterLayout>
    <div>1st</div>
    <div>2nd</div>
</SplitterLayout>;
