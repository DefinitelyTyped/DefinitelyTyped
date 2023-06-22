import axios from "axios";
import { loadProgressBar } from "x-axios-progress-bar";

loadProgressBar();

loadProgressBar({}, axios);

// @ts-expect-error
loadProgressBar(null);

axios.get("https://www.example.com", { progress: false });
