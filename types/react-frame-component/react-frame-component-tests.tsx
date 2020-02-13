import * as React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

<div>
  <Frame>
    <span>content</span>
  </Frame>
  <Frame
    head={<span>head</span>}
    mountTarget='#mountHere'
    contentDidMount={() => {}}
    contentDidUpdate={() => {}}
    initialContent='<!DOCTYPE html><html><head></head><body><h1>i wont be changed</h1><div id="mountHere"></div></body></html>'
  >
    <span>content</span>
  </Frame>
  <Frame>
    <FrameContextConsumer>
      {({ document, window }) => <span>content</span>}
    </FrameContextConsumer>
  </Frame>
</div>;
