
import Loki = require("lokijs");


interface EarthLocation {
    longitude: number;
    latitude: number;
}

interface User {
    name: string;
    age: number;
}


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
    location: EarthLocation;
    ants: Loki.Collection<Ant>;
    queens: Loki.Collection<QueenAnt>;

    constructor(location: EarthLocation, ants: Loki.Collection<Ant>, queens: Loki.Collection<QueenAnt>) {
        this.location = location;
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

        Test.events(lokiInst);
        Test.insertUpdateRemove(lokiInst);
        Test.dynamicViews(lokiInst);
        Test.transform(lokiInst);
    }


    static events(lokiInst: Loki) {
        var coll = new Loki.Collection<Ant>("anotherCollection", {});
        var onUpdate: (t: any) => void;

        coll.on("update", onUpdate = function (target) {
            console.log("update", target);
        });

        coll.on("error", function (target) {
            console.log("error", target);
        });

        coll.emit("update", { data: "abc" });

        coll.removeListener("update", onUpdate);
    }


    static insertUpdateRemove(lokiInst: Loki) {
        var coll = new Loki.Collection<Ant>("anotherCollection", {
            unique: <["id"]>["id"],
            indices: <["dob"]>["dob"],
            autoupdate: true
        });

        coll.insert({
            id: 127,
            dob: new Date(2012, 9, 1),
            health: 1.0,
            lengthMm: 3.5,
            weightMg: 0.4,
        });

        var doc = coll.by("id", 127);
        if (doc) doc.health -= 0.25;

        // untyped collection (collection type should default to 'any')
        var tmpColl = lokiInst.addCollection("_temp");
        tmpColl.insert(coll.find());
        var res = tmpColl.findOne({ id: 127 });
        if (res) res.health -= 0.25;

        coll.clear({ removeIndices: true });

        tmpColl.removeWhere({ id: 127 });

        if(doc) coll.add(doc);

        coll.remove(1);
        coll.removeDataOnly();
    }


    static dynamicViews(lokiInst: Loki) {
        var users = lokiInst.addCollection<User>("users");

        users.insert({ name: "joe", age: 39 });
        users.insert({ name: "jack", age: 20 });
        users.insert({ name: "jim", age: 40 });
        users.insert([
            { name: "dave", age: 33 },
            { name: "eric", age: 29 },
            { name: "dave", age: 21 }
        ]);

        var dv = users.addDynamicView("testview");
        dv.applyWhere(function (obj) {
            return obj.name.length > 3;
        });

        console.log("expect 2 == " + dv.data().length);

        users.removeWhere(function (obj: User) {
            return obj.age > 35;
        });

        console.log("expect 0 == " + dv.data().length);
    }


    static transform(lokiInst: Loki) {
        var ants = lokiInst.addCollection<Ant>("tmpAnts");
        var len = ants.chain().transform(<Transform[]>[{ property: "id" }]).data().length;
        ants.addTransform("tmpAnts", [{ type: "map", mapFun: (a: any) => a, desc: true }]);
    }


    static createAntColony(lokiInst: Loki, antCount: number, queenCount: number = 1) {
        var ants = lokiInst.addCollection<Ant>("ants", { indices: "id" });
        var queens = lokiInst.addCollection<QueenAnt>("queenAnts", { indices: "id" });
        var antColony = new AntColony({ latitude: 0, longitude: 0 }, ants, queens);

        for (var i = 0; i < antCount; i++) {
            ants.add(Ant.createAnt());
        }

        for (var i = 0; i < antCount; i++) {
            queens.add(QueenAnt.createQueenAnt());
        }

        return antColony;
    }

}
