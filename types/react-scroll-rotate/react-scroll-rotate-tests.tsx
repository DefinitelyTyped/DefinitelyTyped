import * as React from "react";
import { ScrollRotate } from "react-scroll-rotate";

const elements = [
  <ScrollRotate>
    <span>content</span>
  </ScrollRotate>,
  <ScrollRotate
    target="target"
    throttle={0.25}
    from={0}
    to={360}
    method="prec"
    loops={1}
    animationDuration={0.25}
  >
    <span>content</span>
  </ScrollRotate>
];
