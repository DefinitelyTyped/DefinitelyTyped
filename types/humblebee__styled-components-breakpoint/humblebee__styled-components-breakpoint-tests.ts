import getMedia from "@humblebee/styled-components-breakpoint";

const breakpoint = getMedia({
    small: 0,
    medium: 640,
    large: 1023,
    xlarge: 1200,
    xxlarge: 1440
});

breakpoint.down("small");
breakpoint.down("medium");
breakpoint.down("large");
breakpoint.down("xlarge");
breakpoint.down("xxlarge");
// @ts-expect-error
breakpoint.down();
// @ts-expect-error
breakpoint.down(55);

breakpoint.up("small");
breakpoint.up("medium");
breakpoint.up("large");
breakpoint.up("xlarge");
breakpoint.up("xxlarge");
// @ts-expect-error
breakpoint.up();
// @ts-expect-error
breakpoint.up(55);

breakpoint.only("small");
breakpoint.only("medium");
breakpoint.only("large");
breakpoint.only("xlarge");
breakpoint.only("xxlarge");
// @ts-expect-error
breakpoint.only();
// @ts-expect-error
breakpoint.only(55);

breakpoint.only("small", "large");
breakpoint.only("medium", "large");
breakpoint.only("large", "xxlarge");
breakpoint.only("xlarge", "xxlarge");
// @ts-expect-error
breakpoint.only();
// @ts-expect-error
breakpoint.only(55);

breakpoint.list;
breakpoint.list.length === 5;
