

import Loki = require("lokijs");

class Ant {
    static uniqueId = 1;

    id: number;
    dob: Date;
    health: number; // range [0.0, 1.0]
    lengthMm: number; // in millimeters
    weightMg: number; // in milligrams

    constructor(id: number) {
        this.id = id;
    }

    static createAnt() {
        return new Ant(Ant.uniqueId++);
    }

}


class QueenAnt extends Ant {
    eggsBirthed: number;

    constructor(id: number) {
        super(id);
    }

    static createQueenAnt() {
        return new QueenAnt(Ant.uniqueId++);
    }

}


class AntColony {
    ants: Loki.Collection<Ant>;
    queens: Loki.Collection<QueenAnt>;

    constructor(ants: Loki.Collection<Ant>, queens: Loki.Collection<QueenAnt>) {
        this.ants = ants;
        this.queens = queens;
    }
}


class Test {

    static runAllTests() {
        var lokiInst = new Loki("ant-colony", { autosave: false });
        var colony = Test.createAntColony(lokiInst, 250);
        var topAnts = colony.ants.addDynamicView("top-ants");
        var topAntAry = topAnts.applyFind({ $gt: { health: 0.75 } }).data();

        if (colony.ants.binaryIndices["id"] == null) {
            throw new Error("missing 'id' binary index");
        }

        if (lokiInst.getCollection<Ant>("ants") != colony.ants) {
            throw new Error("ant collections don't match");
        }

        var collNames = lokiInst.listCollections().map((coll) => coll.name);
        if (collNames.length != 2 || collNames.indexOf("ants") < 0 || collNames.indexOf("queenAnts") < 0) {
            throw new Error("collections [" + collNames + "] does not equal expected ['ants', 'queenAnts']");
        }

        var firstQueenId = (<any>colony.queens.findOne({}))["$loki"];
        if (firstQueenId == null || colony.queens.get(firstQueenId) == null) {
            throw new Error("queen object's '.$loki' property lookup failed");
        }

        var anotherColl = new Loki.Collection("anotherCollection");

    }


    static createAntColony(lokiInst: Loki, antCount: number, queenCount: number = 1) {
        var ants = lokiInst.addCollection<Ant>("ants", { indices: "id" });
        var queens = lokiInst.addCollection<QueenAnt>("queenAnts", { indices: "id" });
        var antColony = new AntColony(ants, queens);

        for (var i = 0; i < antCount; i++) {
            ants.add(Ant.createAnt());
        }

        for (var i = 0; i < antCount; i++) {
            queens.add(QueenAnt.createQueenAnt());
        }

        return antColony;
    }

}
