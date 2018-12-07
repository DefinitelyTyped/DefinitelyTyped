import ScrollArea = require('react-scrollbar');
import * as React from 'react';

let scrollArea =  <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    >
                      <div>Some long content.</div>
                  </ScrollArea>;
