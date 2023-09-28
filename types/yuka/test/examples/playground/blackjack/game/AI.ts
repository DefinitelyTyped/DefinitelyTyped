import { ACTIONS, BlackjackEnvironment } from "../monteCarloSimulation/BlackjackEnvironment";
import { Simulator } from "../monteCarloSimulation/Simulator";
import { Player } from "./Player";

/**
 * Representing the AI player.
 *
 * @author {@link https://github.com/Mugen87|Mugen87}
 */
export class AI extends Player {
    dealer: Player;
    policy: { [k: string]: number };

    constructor(dealer: Player) {
        super();
        this.dealer = dealer;
        const env = new BlackjackEnvironment();
        const episodes = 1000000;
        const mcs = new Simulator(env, episodes);
        this.policy = mcs.predict();
    }

    getAction(): number {
        const sum = this.getSum();
        if (sum < 12) {
            return ACTIONS.HIT;
        } else {
            const usableAce = this.hasUsableAce();
            const sumDealer = this.dealer.getSum();
            const state = `${sum}-${sumDealer === 11 ? 1 : sumDealer}-${Number(usableAce)}`;
            return this.policy[state];
        }
    }
}
