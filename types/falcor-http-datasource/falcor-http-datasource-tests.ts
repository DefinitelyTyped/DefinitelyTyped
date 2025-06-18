import { Model } from "falcor";
import HttpDataSource from "falcor-http-datasource";

const model = new Model({
    source: new HttpDataSource("/model.json"),
});
