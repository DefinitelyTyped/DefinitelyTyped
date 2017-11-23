import * as React from 'react';
import { Table, TBody, TR } from 'oy-vey';
import oy from 'oy-vey';
const { renderTemplate, TD } = oy;

const Component = () => {
  return (
    <Table width="100%">
      <TBody>
        <TR>
          <TD align="center" vAlign="center">
            Tada!
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};

renderTemplate(<Component />, { title: 'title', previewText: 'previewText' });
