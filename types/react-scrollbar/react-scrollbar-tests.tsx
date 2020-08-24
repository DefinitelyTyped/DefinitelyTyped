import ScrollArea = require('react-scrollbar');
import * as React from 'react';

const scrollAreraRef = React.createRef<ScrollArea>();

let scrollArea =  <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    ref={scrollAreraRef}
                    >
                      <div>Some long content.</div>
                  </ScrollArea>;

scrollAreraRef.current.refresh();
scrollAreraRef.current.scrollTop();
scrollAreraRef.current.scrollBottom();
scrollAreraRef.current.scrollYTo(1);
scrollAreraRef.current.scrollLeft();
scrollAreraRef.current.scrollRight();
scrollAreraRef.current.scrollXTo(100);
