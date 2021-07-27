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
breakpoint.down(); // $ExpectError
breakpoint.down(55); // $ExpectError

breakpoint.up("small");
breakpoint.up("medium");
breakpoint.up("large");
breakpoint.up("xlarge");
breakpoint.up("xxlarge");
breakpoint.up(); // $ExpectError
breakpoint.up(55); // $ExpectError

breakpoint.only("small");
breakpoint.only("medium");
breakpoint.only("large");
breakpoint.only("xlarge");
breakpoint.only("xxlarge");
breakpoint.only(); // $ExpectError
breakpoint.only(55); // $ExpectError

breakpoint.only("small", "large");
breakpoint.only("medium", "large");
breakpoint.only("large", "xxlarge");
breakpoint.only("xlarge", "xxlarge");
breakpoint.only(); // $ExpectError
breakpoint.only(55); // $ExpectError

breakpoint.list;
breakpoint.list.length === 5;
