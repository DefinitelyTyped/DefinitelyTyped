import { GraphHopper, GHInput } from "graphhopper-js-api-client";

// case from documentation
const ghRouting: GraphHopper.Routing  = new GraphHopper.Routing({
    key: "[Sign-up for free and get your own key: https://www.graphhopper.com/products/]",
    vehicle: "car",
    elevation: false,
    host: "localhost"
});

ghRouting.addPoint(new GHInput(47.400905, 8.534317));
ghRouting.addPoint(new GHInput(47.394108, 8.538265));

ghRouting.doRequest()
.then((json: string) => {
    console.log(json);
})
.catch((err) => {
    console.error(err.message);
});
