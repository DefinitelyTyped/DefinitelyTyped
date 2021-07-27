import * as yuka from "yuka";

yuka.MathUtils.choice([1, 2, 3]);

const astar = new yuka.AStar();
astar.heuristic = yuka.HeuristicPolicyEuclid;

astar.heuristic = {
    calculate(graph: yuka.Graph<yuka.Node, yuka.Edge>, source: number, target: number): number {
        return 0;
    },
};
