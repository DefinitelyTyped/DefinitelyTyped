import * as React from "react";

import { Tiles } from "@rebass/layout";

export default () => (
    <>
        <Tiles width={[96, null, 128]}>
            <div />
        </Tiles>

        <Tiles columns={[2, null, 4]} gap={12}>
            <div />
        </Tiles>

        <Tiles columns={[2, null, 4]} p={5} color="white" bg="primary">
            <div />
        </Tiles>
    </>
);
