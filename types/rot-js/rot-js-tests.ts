import * as ROT from 'rot-js';

// All the documentation uses a function called `SHOW` to do results; stubbing it out here
// so that I can copy/paste directly.
function SHOW(...something: any[]): any {
    console.log(something);
}

let w = 80;
let h = 40;
let display: ROT.Display;

// Introduction / Browser Support

SHOW(
    ROT.isSupported()
);

// JS Enhancements / Array

SHOW(
    ["apples", "oranges", "zombies"].random(),
    ["apples", "oranges", "zombies"].randomize()
);

// JS Enhancements / String

SHOW(
    "hello world".capitalize(),
    "hello %s, this is %s".format("world", "sparta"),
    "7".lpad("0", 3),
    "123".rpad(".", 6)
);

// JS Enhancements / Number

SHOW(
    (15) % 7,
    (-15) % 7,
    (15).mod(7),
    (-15).mod(7)
);

// JS Enhancements / (Object | Function) not included, as TS does that for us

// JS Enhancements / String formatting
SHOW(
    String.format("%s %s", "hello", "world"),
    "%s %s".format("hello", "world")
);
// ----

const myObj = {
    foo() { return "bar"; }
};
String.format.map['f'] = "foo";

SHOW("%f".format(myObj));
// ----

class Item {
    constructor(private name: string) { }

    a() {
        const first = self.name.charAt(0);
        return `${first.match(/[aeiouy]/i) ? "an" : "a"} ${this.name}`;
    }

    the() {
        return `the ${this.name}`;
    }
}

String.format.map['a'] = "a";
String.format.map['the'] = "the";

const apple = new Item("apple");
const banana = new Item("banana");
let template = "You eat %a. %The was delicious.";

SHOW(template.format(apple, apple));
SHOW(template.format(banana, banana));
// ----

class Animal {
    constructor(private name: string) { }
    adjective(x: string) {
        return `${x} ${this.name}`;
    }
}

String.format.map['adjective'] = "adjective";

const cat = new Animal("cat");
template = "You see a %{adjective,black}.";

SHOW(template.format(cat));

// Keyboard Handling not included, as nothing ROT specific in there

// RNG / Generating random values

SHOW(
    ROT.RNG.getUniform(),
    ROT.RNG.getNormal(0, 10),
    ROT.RNG.getPercentage()
);
// ----

const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 200;
SHOW(canvas);

const ctx = canvas.getContext("2d");
ctx!.fillStyle = "#fff";
ctx!.fillRect(0, 0, canvas.width, canvas.height);
ctx!.fillStyle = "#f00";

const data = new Array<any>();
for (let i = 0; i < 40000; i++) {       /* generate histogram */
    const num = Math.round(ROT.RNG.getNormal(250, 100));
    data[num] = (data[num] || 0) + 1;
}

for (let i = 0; i < data.length; i++) { /* plot histogram */
    ctx!.fillRect(i, canvas.height - data[i], 1, data[i]);
}

// RNG / Working with RNG state
const state = ROT.RNG.getState();
SHOW(ROT.RNG.getUniform());

ROT.RNG.setState(state);
SHOW(ROT.RNG.getUniform());
// ----

const seed = ROT.RNG.getSeed();

ROT.RNG.setSeed(12345);
SHOW(
    ROT.RNG.getUniform(),
    ROT.RNG.getUniform()
);

ROT.RNG.setSeed(12345);
SHOW(
    ROT.RNG.getUniform(),
    ROT.RNG.getUniform()
);

// RNG / Cloning a RNG

const clone = ROT.RNG.clone();

SHOW(ROT.RNG.getUniform());
SHOW(clone.getUniform());

ROT.RNG.setSeed(123);
SHOW(ROT.RNG.getUniform());
SHOW(clone.getUniform());

// RNG / Picking a weighted value
const monsters = {
    orc: 3,
    ogre: 1,
    rat: 5
};

for (let i = 0; i < 20; i++) {
    SHOW(ROT.RNG.getWeightedValue(monsters));
}

// Console Display / Creating a display

display = new ROT.Display({ width: 20, height: 5 });
SHOW(display.getContainer()); /* do not forget to append to page! */

// Console Display / Configuring the display
display = new ROT.Display({ width: 20, height: 5 });
SHOW(display.getContainer());
display.setOptions({
    width: 30,
    fontSize: 8,
    fontStyle: "bold",
    bg: "#a00"
});

// Console Display / Drawing individual characters

display = new ROT.Display({ width: 40, height: 9 });
SHOW(display.getContainer());

display.draw(5, 4, "@");
display.draw(15, 4, "%", "#0f0");          /* foreground color */
display.draw(25, 4, "#", "#f00", "#009");  /* and background color */

// Console Display / Drawing strings

display = new ROT.Display({ width: 40, height: 20 });
SHOW(display.getContainer());

display.drawText(5, 2, "Hello world");

/* last argument specifies maximum length */
display.drawText(20, 5, "This line of text is very long.", 16);

/* lines are broken at word boundaries; lines are trimmed */
const words = ["lorem", "ipsum", "dolor", "sit", "amet"];
const long: string[] = [];
for (let i = 0; i < 30; i++) { long.push(words.random()); }
const longer = long.join(" ");

display.drawText(1, 10, longer, 38);

// Console Display / Specifying foreground/background color in strings

display = new ROT.Display({ width: 40, height: 5 });
SHOW(display.getContainer());

let str = "Goodbye %c{red}cr%b{blue}u%b{}el %c{}world";
display.drawText(5, 2, str);

// Console Display / Forced square aspect ratio
let options: ROT.DisplayOptions = {
    width: 20,
    height: 8,
    fontSize: 18,
    forceSquareRatio: true
};
display = new ROT.Display(options);
SHOW(display.getContainer());

str = "Using a regular grid\n@....%b{blue}#%b{}##.%b{red}.%b{}.$$$";
display.drawText(2, 2, str);

// Console display / graphical tiles

let tileSet = document.createElement("img");
tileSet.src = "tiles.png";

options = {
    layout: "tile",
    bg: "transparent",
    tileWidth: 64,
    tileHeight: 64,
    tileSet,
    tileMap: {
        "@": [0, 0],
        "#": [0, 64],
        a: [64, 0],
        "!": [64, 64]
    },
    width: 3,
    height: 3
};
display = new ROT.Display(options);
SHOW(display.getContainer());

tileSet.onload = () => {
    display.draw(1, 1, "@");
    display.draw(0, 0, "#");
    display.draw(0, 1, "#");
    display.draw(1, 0, "#");
    display.draw(0, 2, "#");
    display.draw(2, 2, "a");
    display.draw(2, 0, "!");
    display.draw(2, 1, "!");
};

// Console display / graphical tiles / Multiple tiles at one place
tileSet = document.createElement("img");
tileSet.src = "tiles.png";

options = {
    layout: "tile",
    bg: "transparent",
    tileWidth: 64,
    tileHeight: 64,
    tileSet,
    tileMap: {
        "@": [0, 0],
        "#": [0, 64]
    },
    width: 1,
    height: 1
};
display = new ROT.Display(options);
SHOW(display.getContainer());

tileSet.onload = () => {
    display.draw(0, 0, ["#", "@"]);
};

// Console display / graphical tiles / Colorizing tiles

tileSet = document.createElement("img");
tileSet.src = "tiles.png";

options = {
    layout: "tile",
    tileWidth: 64,
    tileHeight: 64,
    tileSet,
    tileMap: {
        "@": [0, 0],
        "#": [0, 64],
        a: [64, 0],
        "!": [64, 64]
    },
    width: 3,
    height: 2,
    tileColorize: true
};
display = new ROT.Display(options);
SHOW(display.getContainer());

tileSet.onload = () => {
    display.draw(0, 0, "@", "transparent");
    display.draw(1, 0, "@", "green", "red");
    display.draw(2, 0, "@", "rgba(30, 200, 30, 0.5)", "red");
    display.draw(0, 1, "#", "transparent");
    display.draw(1, 1, "#", "white");
    display.draw(2, 1, "#", "transparent", "rgba(250, 250, 0, 0.5)");
};

// Map creation
let map = new ROT.Map.Arena(3, 3);
const userCallback = (x: number, y: number, value: number) => {
    SHOW("Value %s generated at [%s,%s]".format(value, x, y));
};
map.create(userCallback);
map = new ROT.Map.Arena(10, 5);

const display1 = new ROT.Display({ width: 10, height: 5, fontSize: 18 });
SHOW(display1.getContainer());

map.create((x, y, wall) => {
    display1.draw(x, y, wall ? "#" : ".");
});

/* debugging with small font */
const display2 = new ROT.Display({ width: 10, height: 5, fontSize: 8 });
SHOW(display2.getContainer());
map.create(display2.DEBUG);

// Map creation / Maze / DividedMaze
const dm = new ROT.Map.DividedMaze(w, h);

for (let i = 0; i < 4; i++) {
    display = new ROT.Display({ width: w, height: h, fontSize: 6 });
    SHOW(display.getContainer());

    dm.create(display.DEBUG);
}

// Map creation / Maze / Icey's Maze

for (let i = 0; i < 4; i++) {
    display = new ROT.Display({ width: w, height: h, fontSize: 6 });
    SHOW(display.getContainer());

    const maze = new ROT.Map.IceyMaze(w, h, 4 * i);
    maze.create(display.DEBUG);
}

// Map creation / Maze / Eller's Perfect Maze

const em = new ROT.Map.EllerMaze(w, h);

for (let i = 0; i < 4; i++) {
    display = new ROT.Display({ width: w, height: h, fontSize: 6 });
    SHOW(display.getContainer());

    em.create(display.DEBUG);
}

// Map creation / Cellular
let cellular = new ROT.Map.Cellular(w, h);

/* cells with 1/2 probability */
cellular.randomize(0.5);

/* generate and show four generations */
for (let i = 0; i < 4; i++) {
    display = new ROT.Display({ width: w, height: h, fontSize: 4 });
    SHOW(display.getContainer());
    cellular.create(display.DEBUG);
}
// ----

w = 100; h = 60;
display = new ROT.Display({ width: w, height: h, fontSize: 6 });
SHOW(display.getContainer());

/* custom born/survive rules */
cellular = new ROT.Map.Cellular(w, h, {
    born: [4, 5, 6, 7, 8],
    survive: [2, 3, 4, 5]
});

cellular.randomize(0.9);

/* generate fifty iterations, show the last one */
for (let i = 49; i >= 0; i--) {
    cellular.create(i ? undefined : display.DEBUG);
}
// ----

/* create a connected map where the player can reach all non-wall sections */
cellular = new ROT.Map.Cellular(w, h, { connected: true });

/* cells with 1/2 probability */
cellular.randomize(0.5);

/* make a few generations */
for (let i = 0; i < 4; i++) cellular.create();

/* display only the final map */
display = new ROT.Display({ width: w, height: h, fontSize: 4 });
SHOW(display.getContainer());
cellular.create(display.DEBUG);

/* now connect the maze */
display = new ROT.Display({ width: w, height: h, fontSize: 4 });
SHOW(display.getContainer());
cellular.connect(display.DEBUG);
// ----

/* create a connected map where the player can reach all non-wall sections */
cellular = new ROT.Map.Cellular(w, h, { connected: true });

/* cells with 1/2 probability */
cellular.randomize(0.5);

/* make a few generations */
for (let i = 0; i < 4; i++) cellular.create();

/* display only the final map */
display = new ROT.Display({ width: w, height: h, fontSize: 4 });
SHOW(display.getContainer());
cellular.create(display.DEBUG);

/* now connect the maze */
display = new ROT.Display({ width: w, height: h, fontSize: 4 });
SHOW(display.getContainer());
cellular.connect(display.DEBUG, 1);
// ----

/* create a connected map where the player can reach all non-wall sections */
cellular = new ROT.Map.Cellular(w, h, { connected: true });

/* cells with 1/2 probability */
cellular.randomize(0.5);

/* make a few generations */
for (let i = 0; i < 4; i++) cellular.create();

/* display only the final map */
display = new ROT.Display({ width: w, height: h, fontSize: 4 });
SHOW(display.getContainer());
cellular.create(display.DEBUG);

/* now connect the maze */
display = new ROT.Display({ width: w, height: h, fontSize: 4 });
SHOW(display.getContainer());
cellular.connect(display.DEBUG, 0, (from, to) => {
    SHOW(`Connection was made ${from} to ${to}`);
});

// Map creation / Dungeon

ROT.RNG.setSeed(1234);
let dungeon = new ROT.Map.Digger();
display = new ROT.Display({ fontSize: 8 });
SHOW(display.getContainer());
dungeon.create(display.DEBUG);

const drawDoor = (x: number, y: number) => {
    display.draw(x, y, "", "", "red");
};

const rooms = dungeon.getRooms();
for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i];
    SHOW("Room #%s: [%s, %s] => [%s, %s]".format(
        (i + 1),
        room.getLeft(), room.getTop(),
        room.getRight(), room.getBottom()
    ));

    room.getDoors(drawDoor);
}

// Map creation / Dungeon / Digger
dungeon = new ROT.Map.Digger(w, h);

for (let i = 0; i < 4; i++) {
    display = new ROT.Display({ width: w, height: h, fontSize: 6 });
    SHOW(display.getContainer());
    dungeon.create(display.DEBUG);
}

// Map creation / Dungeon / Uniform

const uniform = new ROT.Map.Uniform(w, h);

for (let i = 0; i < 4; i++) {
    display = new ROT.Display({ width: w, height: h, fontSize: 6 });
    SHOW(display.getContainer());
    uniform.create(display.DEBUG);
}

// Map creation / Dungeon / Rogue

const rogue = new ROT.Map.Rogue(w, h);
display = new ROT.Display({ width: w, height: h, fontSize: 6 });
SHOW(display.getContainer());
rogue.create(display.DEBUG);

// FOV computation / Precise shadowcasting

ROT.RNG.setSeed(12345);
// Not supported in ES6/TS2
// ROT.DEFAULT_WIDTH = 80;
// ROT.DEFAULT_HEIGHT = 30;

display = new ROT.Display({ fontSize: 2 });
SHOW(display.getContainer());

/* create a map */
let data_uniform: any = {};
new ROT.Map.Uniform().create((x: number, y: number, type: number) => {
    data_uniform[`${x},${y}`] = type;
    display.DEBUG(x, y, type);
});

/* input callback */
let lightPasses = (x: number, y: number) => {
    const key = `${x},${y}`;
    if (key in data_uniform) { return (data_uniform[key] === 0); }
    return false;
};

let fov = new ROT.FOV.PreciseShadowcasting(lightPasses);

/* output callback */
fov.compute(50, 22, 10, (x, y, r, visibility) => {
    const ch = (r ? "" : "@");
    const color = (data_uniform[`${x},${y}`] ? "#aa0" : "#660");
    display.draw(x, y, ch, "#fff", color);
});

// FOV computation / Recursive shadowcasting

ROT.RNG.setSeed(12345);
const DIR_NORTH = 0;
const DIR_WEST = 6;

display = new ROT.Display({ fontSize: 12 });
SHOW(display.getContainer());

/* create a map */
data_uniform = {};
new ROT.Map.Uniform().create((x: number, y: number, type: number) => {
    data_uniform[`${x},${y}`] = type;
    display.DEBUG(x, y, type);
});

/* input callback */
lightPasses = (x: number, y: number) => {
    const key = `${x},${y}`;
    if (key in data_uniform) { return (data_uniform[key] === 0); }
    return false;
};

const fov2 = new ROT.FOV.RecursiveShadowcasting(lightPasses);

/* output callback for mob with bad vision */
fov2.compute90(50, 22, 10, DIR_WEST, (x: number, y: number, r: number, visibility: number) => {
    const ch = (r ? "1" : "@");
    const color = (data_uniform[`${x},${y}`] ? "#aa0" : "#660");
    display.draw(x, y, ch, "#fff", color);
});

/* output callback for second mob with better vision */
fov2.compute180(57, 14, 10, DIR_NORTH, (x: number, y: number, r: number, visibility: number) => {
    const ch = (r ? "2" : "@");
    const color = (data_uniform[`${x},${y}`] ? "#aa0" : "#660");
    display.draw(x, y, ch, "#fff", color);
});

/* output callback for third mob with supernatural vision */
fov2.compute(65, 5, 10, (x: number, y: number, r: number, visibility: number) => {
    const ch = (r ? "3" : "@");
    const color = (data_uniform[`${x},${y}`] ? "#aa0" : "#660");
    display.draw(x, y, ch, "#fff", color);
});

// Color / Converting string → array
SHOW(
    ROT.Color.fromString("rgb(10, 128, 230)"),
    ROT.Color.fromString("#faa"),
    ROT.Color.fromString("#83fcc4"),
    ROT.Color.fromString("goldenrod")
);

// Color / Converting array → string
SHOW(
    ROT.Color.toRGB([10, 128, 230]),
    ROT.Color.toHex([10, 128, 230])
);

// Color / Converting between RGB and HSL
SHOW(
    ROT.Color.rgb2hsl([51, 102, 51]),
    ROT.Color.hsl2rgb([0.333, 0.333, 0.3])
);

// Color / Adding and mixing colors
SHOW(/* addition = lightening */
    ROT.Color.add([10, 128, 230], [200, 10, 15], [30, 30, 100]),
    ROT.Color.add_([10, 128, 230], [200, 10, 15])
);
SHOW(/* multiplication = darkening */
    ROT.Color.multiply([10, 128, 230], [200, 10, 15]),
    ROT.Color.multiply_([10, 128, 230], [200, 10, 15])
);

// Color / Interpolating between two colors
SHOW(
    /* computed in RGB space */
    ROT.Color.interpolate([10, 128, 230], [30, 255, 255], 0.3),

    /* computed in HSL space */
    ROT.Color.interpolateHSL([10, 128, 230], [30, 255, 255], 0.3)
);

// Color / Creating random letiants
SHOW(
    ROT.Color.randomize([100, 128, 230], [30, 10, 20]),
    ROT.Color.randomize([100, 128, 230], [30, 10, 20]),
    ROT.Color.randomize([100, 128, 230], [30, 10, 20])
);

// Color / Lighting
ROT.RNG.setSeed(12345);

const mapData: any = {};
const lightData: { [key: string]: [number, number, number] } = {};

/* build a map */
cellular = new ROT.Map.Cellular().randomize(0.5);
const createCallback = (x: number, y: number, value: number) => {
    mapData[`${x},${y}`] = value;
};
for (let i = 0; i < 4; i++) {
    cellular.create(createCallback);
}

/* prepare a FOV algorithm */
lightPasses = (x: number, y: number) => {
    return (mapData[`${x},${y}`] === 1);
};
fov = new ROT.FOV.PreciseShadowcasting(lightPasses, { topology: 4 });

/* prepare a lighting algorithm */
const reflectivity = (x: number, y: number) => {
    return (mapData[`${x},${y}`] === 1 ? 0.3 : 0);
};
const lighting = new ROT.Lighting(reflectivity, { range: 12, passes: 2 });
lighting.setFOV(fov);
lighting.setLight(12, 12, [240, 240, 30]);
lighting.setLight(20, 20, [240, 60, 60]);
lighting.setLight(45, 25, [200, 200, 200]);

const lightingCallback = (x: number, y: number, color: [number, number, number]) => {
    lightData[`${x},${y}`] = color;
};
lighting.compute(lightingCallback);

/* draw the resulting mix of mapData and lightData */
display = new ROT.Display({ fontSize: 8 });
SHOW(display.getContainer());

/* all cells are lit by ambient light; some are also lit by light sources */
const ambientLight: ROT.ColorArray = [100, 100, 100];
for (const id in mapData) {
    const parts = id.split(",");
    const x = parseInt(parts[0], 10);
    const y = parseInt(parts[1], 10);

    const baseColor: ROT.ColorArray = (mapData[id] ? [100, 100, 100] : [50, 50, 50]);
    let light = ambientLight;

    if (id in lightData) { /* add light from our computation */
        light = ROT.Color.add(light, lightData[id]);
    }

    const finalColor = ROT.Color.multiply(baseColor, light);
    display.draw(x, y, "@", "white", ROT.Color.toRGB(finalColor));
}

// Pathfinding / Dijkstra's algorithm

ROT.RNG.setSeed(12345);
display = new ROT.Display({ width: w, height: h, fontSize: 6 });
SHOW(display.getContainer());

/* generate map and store its data */
const uni_data: any = {};
let uni_map = new ROT.Map.Uniform(w, h);
uni_map.create((x, y, value) => {
    uni_data[`${x},${y}`] = value;
    display.DEBUG(x, y, value);
});

/* input callback informs about map structure */
let passableCallback = (x: number, y: number) => {
    return (uni_data[`${x},${y}`] === 0);
};

/* prepare path to given coords */
let dijkstra = new ROT.Path.Dijkstra(98, 38, passableCallback);

/* compute from given coords #1 */
dijkstra.compute(8, 45, (x: number, y: number) => {
    display.draw(x, y, "", "", "#800");
});

/* compute from given coords #2 */
dijkstra.compute(130, 8, (x: number, y: number) => {
    display.draw(x, y, "", "", "#800");
});

/* highlight */
display.draw(8, 45, "", "", "#3f3");
display.draw(130, 8, "", "", "#3f3");
display.draw(98, 38, "", "", "#f33");

// Pathfinding / A* algorithm

ROT.RNG.setSeed(12345);
display = new ROT.Display({ width: w, height: h, fontSize: 6 });
SHOW(display.getContainer());

/* generate map and store its data */
uni_map = new ROT.Map.Uniform(w, h);
uni_map.create((x: number, y: number, value: number) => {
    uni_data[`${x},${y}`] = value;
    display.DEBUG(x, y, value);
});

/* input callback informs about map structure */
passableCallback = (x: number, y: number) => {
    return (uni_data[`${x},${y}`] === 0);
};

/* prepare path to given coords */
const astar = new ROT.Path.AStar(98, 38, passableCallback);

/* compute from given coords #1 */
astar.compute(8, 45, (x: number, y: number) => {
    display.draw(x, y, "", "", "#800");
});

/* compute from given coords #2 */
astar.compute(130, 8, (x: number, y: number) => {
    display.draw(x, y, "", "", "#800");
});

/* highlight */
display.draw(8, 45, "", "", "#3f3");
display.draw(130, 8, "", "", "#3f3");
display.draw(98, 38, "", "", "#f33");

// Noise Generation
let noise = new ROT.Noise.Simplex();

display = new ROT.Display({ width: w, height: h, fontSize: 3 });
SHOW(display.getContainer());

for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
        const val = noise.get(i / 20, j / 20) * 255;

        const r = ~~(val > 0 ? val : 0);
        const g = ~~(val < 0 ? -val : 0);
        display.draw(i, j, "", "", `rgb(${r},${g},0)`);
    }
}
// ----
noise = new ROT.Noise.Simplex();

display = new ROT.Display({ width: w, height: h, fontSize: 12, layout: "hex" });
SHOW(display.getContainer());

for (let j = 0; j < h; j++) {
    for (let i = j % 2; i < w; i += 2) {
        const val = noise.get(i / 60, j / 60) * 255;

        const r = ~~(val > 0 ? val : 0);
        const g = ~~(val < 0 ? -val : 0);
        display.draw(i, j, "", "", `rgb(${r},${g},0)`);
    }
}

// Timing & scheduling / event queue

const queue = new ROT.EventQueue();

queue.add("event 1", 100); /* queued after 100 time units */
queue.add("event 2", 10);  /* queued after 10 time units */
queue.add("event 3", 50);  /* queued after 50 time units */

queue.remove("event 2");
SHOW(
    queue.get(),
    queue.get(),
    queue.getTime()
);

// Timing & scheduling / Simple scheduler

let scheduler = new ROT.Scheduler.Simple();

/* generate some actors */
for (let i = 0; i < 4; i++) {
    scheduler.add(i + 1, true); /* true = recurring actor */
}

/* simulate several turns */
let turns: any = [];
for (let i = 0; i < 20; i++) {
    const current = scheduler.next();
    turns.push(current);
}

SHOW("\nGenerated order of actors:");
SHOW(turns.join(" ") + " ...");

// Timing & scheduling / Speed scheduler

scheduler = new ROT.Scheduler.Speed();

class Actor {
    constructor(public speed: number, public number: number) { }

    getSpeed() { return this.speed; }
}

/* generate some actors */
for (let i = 0; i < 4; i++) {
    const actor = new Actor(ROT.RNG.getPercentage(), i + 1);
    scheduler.add(actor, true);
    SHOW("Object #%s has speed %s.".format(actor.number, actor.speed));
}

/* simulate several turns */
turns = [];
for (let i = 0; i < 40; i++) {
    const current = scheduler.next();
    turns.push(current.number);
}

SHOW("\nGenerated order of turns:");
SHOW(turns.join(" ") + " ...");

// Timing & scheduling / Action-duration scheduler

const act_scheduler = new ROT.Scheduler.Action();

/* generate some actors */
for (let i = 0; i < 4; i++) {
    act_scheduler.add(i + 1, true, i); /* last argument - initial delay */
}

/* simulate several turns */
template = "Actor %s performing action for %s time units (current time: %s)";
for (let i = 0; i < 20; i++) {
    const current = act_scheduler.next();

    const actionDuration = Math.ceil(ROT.RNG.getUniform() * 20);
    act_scheduler.setDuration(actionDuration);

    const padded = actionDuration.toString().lpad("0");
    SHOW(template.format(current, padded, act_scheduler.getTime()));
}

// Timing & scheduling / Engine / Asynchronous game engine
scheduler = new ROT.Scheduler.Simple();
let engine = new ROT.Engine(scheduler);
let output: any = [];

class Actor1 {
    constructor(public lives: number) { }

    act() {
        output.push(".");
        this.lives--;
        if (!this.lives) {
            scheduler.remove(actor1);
            engine.lock();              /* pause execution */
            setTimeout(unlock, 500);    /* wait for 500ms */
        }
    }
}

/* sample actor: pauses the execution when dead */
const actor1 = new Actor1(3);
scheduler.add(actor1, true);

class Actor2 {
    act() {
        output.push("@");
    }
}

const unlock = () => {               /* called asynchronously */
    const actor2 = new Actor2();

    output = [];
    scheduler.add(actor2, false);       /* add second (non-repeating) actor */
    engine.unlock();                    /* continue execution */
    SHOW(output.join(""));
};

engine.start();
SHOW(output.join(""));

// Timing & scheduling / Engine / Promises

scheduler = new ROT.Scheduler.Simple();
engine = new ROT.Engine(scheduler);
output = [];

/* sample actor: pauses the execution when dead */
class Actor3 {
    constructor(public lives: number) { }

    act() {
        let done: any = null;
        const promise = {
            then(cb: any) { done = cb; }
        };

        output.push(".");
        SHOW(output.join(""));
        this.lives--;

        /* if alive, wait for 500ms for next turn */
        if (this.lives) {
            setTimeout(() => { done(); }, 500);
        }

        return promise;
    }
}
const actor3 = new Actor3(3);

scheduler.add(actor3, true);

engine.start();

// String generator

const sg = new ROT.StringGenerator();

const req = new XMLHttpRequest();
req.open("get", "java.txt", true);
req.send();

req.onreadystatechange = () => {
    if (req.readyState !== 4) { return; }

    const lines = req.responseText.split("\n");
    while (lines.length) {
        const line = lines.pop()!.trim();
        if (!line) { continue; }
        sg.observe(line);
    }

    for (let i = 0; i < 20; i++) { SHOW(sg.generate()); }
};

// Hex support / Displaying hexes
display = new ROT.Display({ width: 8, height: 5 });
SHOW(display.getContainer());

for (let y = 0; y < 5; y++) {
    for (let x = y % 2; x < 8; x += 2) {
        display.draw(x, y, "•");
    }
}
// ----

display = new ROT.Display({ width: 8, height: 5, layout: "hex" });
SHOW(display.getContainer());

for (let y = 0; y < 5; y++) {
    for (let x = y % 2; x < 8; x += 2) {
        const bg = ["#333", "#666", "#999", "#ccc", "#fff"].random();
        display.draw(x, y, "•", "#000", bg);
    }
}
// ----

display = new ROT.Display({
    width: 10, height: 4, spacing: 2.5,
    layout: "hex", transpose: true
});
SHOW(display.getContainer());

for (let y = 0; y < 4; y++) {
    for (let x = y % 2; x < 10; x += 2) {
        const bg = ["#333", "#666", "#999", "#ccc", "#fff"].random();
        display.draw(x, y, `${x},${y}`, "#000", bg);
    }
}

// Hex support / Cellular dungeon generator

display = new ROT.Display({ width: w, height: h, fontSize: 10, layout: "hex" });
SHOW(display.getContainer());

/* hexagonal map and rules */
let cell_map = new ROT.Map.Cellular(w, h, {
    topology: 6,
    born: [4, 5, 6],
    survive: [3, 4, 5, 6]
});

/* initialize with irregularly random values */
for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
        const dx = i / w - 0.5;
        const dy = j / h - 0.5;
        const dist = Math.pow(dx * dx + dy * dy, 0.3);
        if (ROT.RNG.getUniform() < dist) { cell_map.set(i, j, 1); }
    }
}

/* generate four iterations, show the last one */
for (let i = 4; i >= 0; i--) {
    cell_map.create(i ? undefined : display.DEBUG);
}

// Hex support / Pathfinding

ROT.RNG.setSeed(12345);
display = new ROT.Display({ width: w, height: h, fontSize: 6, layout: "hex" });
SHOW(display.getContainer());

/* generate map and store its data */
let cell_data: any = {};
cell_map = new ROT.Map.Cellular(w, h, {
    topology: 6,
    born: [4, 5, 6],
    survive: [3, 4, 5, 6]
});
cell_map.randomize(0.48);
cell_map.create(); /* two iterations */
cell_map.create((x: number, y: number, value: number) => {
    cell_data[`${x},${y}`] = value;
    display.DEBUG(x, y, value);
});

/* input callback informs about map structure */
passableCallback = (x: number, y: number) => {
    return (cell_data[`${x},${y}`] === 0);
};

/* prepare path to given coords */
dijkstra = new ROT.Path.Dijkstra(120, 64, passableCallback, { topology: 6 });

/* compute from given coords */
dijkstra.compute(30, 16, (x: number, y: number) => {
    display.draw(x, y, "", "", "#800");
});

/* highlight */
display.draw(30, 16, "", "", "#3f3");
display.draw(120, 64, "", "", "#f33");

// Hex support / Field of view

ROT.RNG.setSeed(12345);

display = new ROT.Display({ fontSize: 12, layout: "hex" });
SHOW(display.getContainer());

/* generate map and store its data */
cell_data = {};
cell_map = new ROT.Map.Cellular(undefined, undefined, {
    topology: 6,
    born: [4, 5, 6],
    survive: [3, 4, 5, 6]
});
cell_map.randomize(0.4);
cell_map.create((x: number, y: number, value: number) => {
    cell_data[`${x},${y}`] = value;
    display.DEBUG(x, y, value);
});

/* input callback */
lightPasses = (x: number, y: number) => {
    const key = `${x},${y}`;
    if (key in cell_data) { return (cell_data[key] === 0); }
    return false;
};

fov = new ROT.FOV.PreciseShadowcasting(lightPasses, { topology: 6 });

/* output callback */
fov.compute(20, 14, 6, (x, y, r, vis) => {
    const ch = (r ? "" : "@");
    const color = (cell_data[`${x},${y}`] ? "#aa0" : "#660");
    display.draw(x, y, ch, "#fff", color);
});
