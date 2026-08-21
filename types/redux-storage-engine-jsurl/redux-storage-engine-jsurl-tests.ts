import { createLoader } from "redux-storage";
import createUrlEngine = require("redux-storage-engine-jsurl");

const urlStorageEngine = createUrlEngine();

createLoader(urlStorageEngine);
