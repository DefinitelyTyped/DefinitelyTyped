import * as React from "react";
import MorphingScroll, {
  IntersectionTracker,
  ResizeTracker,
} from "morphing-scroll";

const TestIntersectionTracker: React.FC = () => (
  <IntersectionTracker
    root={null}
    threshold={0.5}
    rootMargin={[10, 20, 30, 40]}
    style={{ backgroundColor: "red" }}
    visibleContent={true}
    onVisible={() => console.log("Content is visible")}
    intersectionDeley={300}
  >
    <div>Tracked content</div>
  </IntersectionTracker>
);

const TestMorphingScroll: React.FC = () => (
  <MorphingScroll
    scrollID="scroll-1"
    className="custom-scroll"
    scrollXY={[0, 0]}
    objectXY={[100, 200]}
    gap={10}
    padding={[20, 30]}
    xDirection={true}
    contentAlignCenter={true}
    wrapAlignCenter={false}
    scrollReverse={false}
    scrollTrigger="←→"
    scrollVisibility="<O>"
    scrollTop={0}
    lazyRender={true}
    infiniteScroll={false}
    rootMargin={[10, 20]}
    suspending={false}
    fallback={<div>Loading...</div>}
    thumbElement={<div>Thumb</div>}
    edgeGradient={true}
    objectsWrapperMinSize={500}
    onScrollValue={[
      [(scrollTop) => scrollTop > 100, () => console.log("Scrolled over 100")],
    ]}
  >
    <div>Scrollable content</div>
  </MorphingScroll>
);

const TestResizeTracker: React.FC = () => (
  <ResizeTracker
    onResize={(width, height) => console.log(`Resized to ${width}x${height}`)}
    style={{ backgroundColor: "blue" }}
  >
    {(width, height) => (
      <div>
        Width: {width}, Height: {height}
      </div>
    )}
  </ResizeTracker>
);

const tests = (
  <div>
    <TestIntersectionTracker />
    <TestMorphingScroll />
    <TestResizeTracker />
  </div>
);

export default tests;
