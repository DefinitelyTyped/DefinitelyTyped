import Blackjack from "simply-blackjack";
import Card from "simply-blackjack/cards";

const game = new Blackjack({
    decks: 1,
    payouts: {
        blackjack: 1.5,
        default: 1,
    },
});

game.on("end", (table) => {
    console.log(table);
});

game.start();
game.bet(100);
game.hit();
game.stand();
