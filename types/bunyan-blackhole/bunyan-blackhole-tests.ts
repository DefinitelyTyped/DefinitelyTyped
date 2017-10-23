import blackhole = require("bunyan-blackhole");

const logsLaboursLost = blackhole("lost");

const rotten = new Error("Something is rotten in the state of Denmark");

logsLaboursLost.info(rotten, "Play %s", "Hamlet");
logsLaboursLost.debug(rotten, "Play %s", "King Lear");
logsLaboursLost.trace(rotten, "Play %s", "Much Ado About Nothing");
logsLaboursLost.warn(rotten, "Play %s", "All's Well That Ends Well");
logsLaboursLost.error(rotten, "Play %s", "Romeo and Juliet");

logsLaboursLost.error("Something is rotten in the state of Denmark");

logsLaboursLost.debug({character: "Marcellus", play: "King Lear"}, "Friends of my soul, you twain");
logsLaboursLost.trace({play: "All's Well That Ends Well"}, "Love all, trust a few, do wrong to none");
logsLaboursLost.info({play: "Much Ado About Nothing"}, "Let me be that I am and seek not to alter me.");
logsLaboursLost.warn({play: "All's Well That Ends Well"}, "Love all, trust a few, do wrong to none");
logsLaboursLost.error({play: "All's Well That Ends Well"}, "Love all, trust a few, do wrong to none");

const hamlet = logsLaboursLost.child({play: "Hamlet"});
hamlet.info({character: "Polonius"}, "Though this be madness, yet there is method in't");
