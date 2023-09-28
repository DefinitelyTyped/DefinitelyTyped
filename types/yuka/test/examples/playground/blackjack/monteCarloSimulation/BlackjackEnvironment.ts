import { MathUtils } from "yuka";

/**
 * Controls the flow of Blackjack games.
 *
 * @author {@link https://github.com/Mugen87|Mugen87}
 */
export class BlackjackEnvironment {
    actionSpace: number[];
    observationSpace: string[];
    player: number[] | null;
    dealer: number[] | null;
    natural: boolean;

    constructor(natural = false) {
        this.actionSpace = [ACTIONS.STICK, ACTIONS.HIT];
        this.observationSpace = generateObservationSpace();

        this.player = null;
        this.dealer = null;

        this.natural = natural;

        this.reset();
    }

    reset() {
        this.player = drawHand();
        this.dealer = drawHand();

        return getState(this.player, this.dealer);
    }

    step(action: number): { state: [number, number, boolean]; reward: number; done: boolean } {
        const player = this.player;
        if (!player) {
            throw new Error();
        }
        const dealer = this.dealer;
        if (!dealer) {
            throw new Error();
        }
        let done = false;
        let reward = 0;
        if (-1 !== this.actionSpace.indexOf(action)) {
            throw new Error("Invalid Action");
        }
        if (action === ACTIONS.HIT) {
            // hit: add a card to players hand and return

            player.push(drawCard());
            if (isBust(player)) {
                done = true;
                reward = -1;
            }
        } else {
            // stick: play out the dealers hand, and score
            done = true;
            while (sumHand(dealer) < 17) {
                dealer.push(drawCard());
            }

            const scorePlayer = score(player);
            const scoreDealer = score(dealer);

            reward = compare(scorePlayer, scoreDealer);

            if (this.natural && isNatural(player) && reward === 1) {
                reward = 1.5;
            }
        }

        const state = getState(player, dealer);

        return { state, reward, done };
    }
}

// private

const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]; // 1 = ace, 2-10 = number cards, jack/queen/king = 10
const playerStates = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; // player sum
const dealerStates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // dealer sum
const aceStates = [0, 1]; // unusable / usable

function compare(a: number, b: number): number {
    return Number(a > b) - Number(a < b);
}

function drawCard() {
    const index = MathUtils.randInt(0, deck.length - 1);
    return deck[index];
}

function drawHand() {
    return [drawCard(), drawCard()];
}

function generateObservationSpace() {
    const space = [];
    for (const playerState of playerStates) {
        for (const dealerState of dealerStates) {
            for (const aceState of aceStates) {
                space.push(`${playerState}-${dealerState}-${aceState}`);
            }
        }
    }

    return space;
}

function getState(player: number[], dealer: number[]): [number, number, boolean] {
    return [sumHand(player), dealer[0], isUsableAce(player)];
}

function isBust(hand: number[]): boolean {
    return sumHand(hand) > 21;
}

function isNatural(hand: number[]): boolean {
    return (-1 !== hand.indexOf(1)) && (-1 !== hand.indexOf(10));
}

function isUsableAce(hand: number[]): boolean {
    return (-1 !== hand.indexOf(1)) && sum(hand) + 10 <= 21;
}

function score(hand: number[]): number {
    return isBust(hand) ? 0 : sumHand(hand);
}

function sum(hand: number[]): number {
    return hand.reduce((a, c) => a + c);
}

function sumHand(hand: number[]): number {
    const s = sum(hand);

    return isUsableAce(hand) ? s + 10 : s;
}

export const ACTIONS = Object.freeze({
    STICK: 0,
    HIT: 1,
});
