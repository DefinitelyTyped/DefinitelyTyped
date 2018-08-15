import { createLoader } from "redux-storage";
import createUrlEngine from "redux-storage-engine-jsurl";

const urlStorageEngine = createUrlEngine();

createLoader(urlStorageEngine);
