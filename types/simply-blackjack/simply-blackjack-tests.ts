import Blackjack = require("simply-blackjack");

const game = new Blackjack({
    decks: 1,
    payouts: {
        blackjack: 1.5,
        default: 1,
    },
});

game.on("end", table => {
    console.log(table);
});

game.start();
game.bet(100);
game.hit();
game.stand();
