// Type definitions for barbellweights 0.4
// Project: https://github.com/toddhibbs/barbellweight#readme
// Definitions by: evelijn <https://github.com/evelijn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BarbellWeight {
    interface plates {
        fortyFive: number;
        thirtyFive: number;
        twentyFive: number;
        ten: number;
        five: number;
        twoPointFive: number;
        extra: number;
    }

    interface warmupSet {
        totalWeight: number;
        plateWeight: number;
        sideWeight: number;
        reps: number;
        sets: number;
        plates?: plates;
    }

    interface results {
        lift: string;
        program: string;
        workingWeight: number;
        sets: warmupSet[];
    }

    class BarbellWeight {
        constructor(workingWeight: number, lift: string, options?: object);
    
        getResults(): BarbellWeight.results;
    }
}

declare module "barbellweights" {
    export = BarbellWeight;
}
