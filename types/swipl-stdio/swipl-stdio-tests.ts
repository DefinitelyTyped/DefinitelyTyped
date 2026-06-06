import { Engine, ResultEntry, term } from "swipl-stdio";

const engine = new Engine();

(async () => {
    // Calling query using "engine.call"
    const result = await engine.call("member(X, [1,2,3,4])");
    if (result) {
        // $ExpectType ResultEntry
        result.X;
    }

    // Calling query using "engine.createQuery"
    const query = await engine.createQuery("member(X, [1,2,3,4])");
    try {
        const result = await query.next();
        if (result) {
            // $ExpectType ResultEntry
            result.X;
        }
    } finally {
        await query.close();
    }

    engine.close();
})();

// Serialize

// $ExpectType string
const safe = term.serialize(term.compound("member", [term.variable("X"), term.list([1, 2, 3, 4])]));
