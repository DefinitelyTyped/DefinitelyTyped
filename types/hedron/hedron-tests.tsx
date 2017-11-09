import * as React from 'react';
import * as hedron from 'hedron';

<hedron.BreakpointProvider breakpoints={{ lg: 1, md: 2 }}>
    <hedron.Page debug fluid tagName="div" width="10px">
        <hedron.Row debug tagName="div">
            <hedron.Column debug divisions={3} fluid lg={3} smShift={2}>test</hedron.Column>
        </hedron.Row>
    </hedron.Page>
</hedron.BreakpointProvider>;
