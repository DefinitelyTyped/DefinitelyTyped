declare global {
    namespace Chai {
        interface Deep {
            equalInAnyOrder: Equal;
        }
    }
}

declare const deepEqualInAnyOrder: Chai.ChaiPlugin;
export = deepEqualInAnyOrder;
