import { MathUtils } from "yuka";
import { BlackjackEnvironment } from "./BlackjackEnvironment";

/**
 * Implementation of a Monte Carlo simulation for Blackjack.
 *
 * Used Algorithm: First-Visit Constant-α GLIE MC Control.
 *
 * @author {@link https://github.com/Mugen87|Mugen87}
 */
export class Simulator {
    env: BlackjackEnvironment;
    episodes: number;
    alpha: number;
    epsilon: number;
    minEpsilon: number;
    decay: number;

    constructor(env: BlackjackEnvironment, episodes: number) {
        this.env = env;
        this.episodes = episodes;
        this.alpha = 0.001; // constant-α / learning rate
        this.epsilon = 1;
        this.minEpsilon = 0.01;
        this.decay = 0.9999;
    }

    predict() {
        const env = this.env;
        const Q: { [k: string]: number[] } = {};
        init(Q, env);
        for (let i = 0; i < this.episodes; i++) {
            // The implementation starts with a large epsilon so action selection will focus on
            // exploration. By playing more episodes, the epsilon will decrease and the probability
            // of taking the best action will increase (focus on exploitation).

            this.epsilon = Math.max(this.epsilon * this.decay, this.minEpsilon);
            const episode = playEpisode(env, Q, this.epsilon);
            updateQ(env, episode, Q, this.alpha);
        }

        return getBestPolicy(Q);
    }
}

function getBestPolicy(Q: { [k: string]: number[] }): { [k: string]: number } {
    const policy: { [k: string]: number } = {};
    for (const key in Q) {
        const actionValues = Q[key];
        const bestAction = MathUtils.argmax(actionValues)[0];
        policy[key] = bestAction;
    }

    return policy;
}

function getKey(state: [number, number, boolean]): string {
    return `${state[0]}-${state[1]}-${Number(state[2])}`;
}

function getProbabilities(Q: { [k: string]: number[] }, state: [number, number, boolean], epsilon: number, nA: number) {
    const key = getKey(state);
    const actionValues = Q[key];
    const probabilities = actionValues.map(() => epsilon / nA);
    const bestAction = MathUtils.argmax(actionValues)[0];
    probabilities[bestAction] = 1 - epsilon + (epsilon / nA);
    return probabilities;
}

function init(Q: { [k: string]: number[] }, env: BlackjackEnvironment) {
    const actionSpace = env.actionSpace;
    const observationSpace = env.observationSpace;

    // initialize all state-action pairs with 0
    for (const state of observationSpace) {
        Q[state] = actionSpace.map(() => 0);
    }
}

function playEpisode(env: BlackjackEnvironment, Q: { [k: string]: number[] }, epsilon: number) {
    const episode = [];
    const actionSpace = env.actionSpace;
    const nA = actionSpace.length;

    let currentState = env.reset();
    while (true) {
        // Notes about policies:
        //
        // 1. Action selection is based on ε-soft policies (meaning they select all actions in all states with nonzero probability).
        // 2. The policies are ε-greedy (meaning most of the time they choose an action that has maximal estimated action value,
        //    but with probability ε they instead select an action at random).

        const probabilities = getProbabilities(Q, currentState, epsilon, nA);
        const action = MathUtils.choice(actionSpace, probabilities);

        // When the action was sampled, interact with the environment and generate new state

        const { state, reward, done } = env.step(action);

        episode.push({ state: currentState, action, reward });

        currentState = state;

        if (done) break;
    }

    return episode;
}

function updateQ(
    env: BlackjackEnvironment,
    episode: Array<{ state: [number, number, boolean]; action: number; reward: number }>,
    Q: { [k: string]: number[] },
    alpha: number,
) {
    let G = 0;
    for (let t = episode.length - 1; t >= 0; t--) {
        const { state, action, reward } = episode[t];
        const key = getKey(state);
        G += reward;
        Q[key][action] += alpha * (G - Q[key][action]);
    }
}
