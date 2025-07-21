declare global {
    var Elm: ElmInstance<{}, {}>;
}

Elm.Main.init();

// https://gist.github.com/evancz/8521339
declare var Shanghai: ElmModule<
    ShanghaiPorts,
    ShanghaiFlags,
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    ["Shanghai"]
>;

interface ShanghaiFlags {
    coordinates: [number, number];
    incomingShip: Ship;
    outgoingShip: string;
}

interface ShanghaiPorts {
    coordinates: PortToElm<[number, number]>;
    incomingShip: PortToElm<Ship>;
    outgoingShip: PortToElm<string>;
    totalCapacity: PortFromElm<number>;
}

interface Ship {
    name: string;
    capacity: number;
}

// initialize the Shanghai component which keeps track of
// shipping data in and out of the Port of Shanghai.
var shanghai = Shanghai.Elm.Shanghai.init({
    flags: {
        coordinates: [0, 0],
        incomingShip: { name: "", capacity: 0 },
        outgoingShip: "",
    },
});

function logger(x: number) {
    console.log(x);
}
shanghai.ports.totalCapacity.subscribe(logger);
// send some ships to the port of Shanghai
shanghai.ports.incomingShip.send({
    name: "Mary Mærsk",
    capacity: 18270,
});
shanghai.ports.incomingShip.send({
    name: "Emma Mærsk",
    capacity: 15500,
});
// have those ships leave the port of Shanghai
shanghai.ports.outgoingShip.send("Mary Mærsk");
shanghai.ports.outgoingShip.send("Emma Mærsk");

declare var Trio:
    & ElmInstance<
        {},
        {}
    >
    & // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    ElmInstance<{}, {}, ["Foo"]>
    & ElmInstance<{}, {}, ["Foo", "Bar"]>;

Trio.Main.init();
Trio.Foo.init();
Trio.Foo.Bar.init();
