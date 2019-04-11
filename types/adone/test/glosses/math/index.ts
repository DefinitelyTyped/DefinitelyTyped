namespace mathTests {
    const {
        math
    } = adone;

    namespace randomTests {
        const { random } = math;
        random();
        random(100);
        random(0, 10);
    }

    namespace maxTests {
        const { max } = math;
        max([]);
        { const a: number = max([1, 2, 3]); }
        { const a: string = max(["1", "2", "3"]); }
        { const a: string = max(["1", "2", "3"], (a) => a.length); }
        { const a: number = max([1, 2, 3], (a) => a.toExponential()); }
    }

    namespace minTests {
        const { min } = math;
        min([]);
        { const a: number = min([1, 2, 3]); }
        { const a: string = min(["1", "2", "3"]); }
        { const a: string = min(["1", "2", "3"], (a) => a.length); }
        { const a: number = min([1, 2, 3], (a) => a.toExponential()); }
    }
}
