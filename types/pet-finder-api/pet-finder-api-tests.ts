import petfinder = require("pet-finder-api");

let finder = petfinder("api-key", "api-secret", {});

finder.getBreedList('cat', (err, breeds) => { });

finder.getPet(13, {}, (err, pet) => { });
