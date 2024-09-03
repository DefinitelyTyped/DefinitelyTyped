import * as React from "react";
import Retool from "react-retool";

<>
    <Retool url="http://test.com" />

    <Retool url="http://test.com" width={10} />
    <Retool url="http://test.com" width={"10px"} height={10} />

    <Retool url="http://test.com" sandbox={true} />
    <Retool url="http://test.com" sandbox={"allow-scripts"} />

    <Retool url="http://test.com" allow="fullscreen" />

    <Retool url="http://test.com" styling={{ width: "100%" }} />

    <Retool url="http://test.com" data={{ anyProperty: "100%" }} />

    <Retool url="http://test.com" onData={(data: unknown) => {}} />
</>;
