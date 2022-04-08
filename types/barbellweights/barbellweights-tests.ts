import { BarbellWeight } from "barbellweights";

let calculator: BarbellWeight;
let results: any;

calculator = new BarbellWeight(200, "bench press");
results = calculator.getResults();

calculator = new BarbellWeight(500, "deadlift");
results = calculator.getResults();

calculator = new BarbellWeight(400, "squat");
results = calculator.getResults();

calculator = new BarbellWeight(400, "deadlift", { program: "QUARTER" });
results = calculator.getResults();

calculator = new BarbellWeight(400, "deadlift", { bar: 45 });
results = calculator.getResults();

calculator = new BarbellWeight(400, "deadlift", { plates: [45, 10, 5] });
results = calculator.getResults();

calculator = new BarbellWeight(400, "deadlift", { warmup_round_to: 5 });
results = calculator.getResults();

calculator = new BarbellWeight(300, "squat", {
    program: "STARTING_STRENGTH",
    bar: 45,
    plates: [45, 25, 10, 5],
    warmup_round_to: 5
});
results = calculator.getResults();
