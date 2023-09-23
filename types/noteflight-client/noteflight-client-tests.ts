NFClient.init(info => {
    console.log(info);
});

const scoreView = new NFClient.ScoreView("score1", "fcfd6d0bc0770f67cdbe1b8129456521fec090a0", {
    viewParams: {
        role: "template",
    },
});

scoreView.addEventListener("playbackRequest", event => {
    console.log(event.index);
    scoreView.printScore();
    scoreView.getScore().done(result => console.log(result));
});

scoreView.addEventListener("selectionChange", event => {
    console.log(event.endIndex);
});
