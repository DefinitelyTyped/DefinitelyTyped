import asap from "fitbit-asap/companion";

asap.send("See you later, alligator.");

asap.send("See you later, alligator.", { timeout: 1000 });

asap.onmessage = message => {
    const m: string = message;
};

asap.cancel();

asap.cancel(1);
