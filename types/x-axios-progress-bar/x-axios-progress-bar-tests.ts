import axios from "axios";
import { loadProgressBar } from "x-axios-progress-bar";

loadProgressBar();

loadProgressBar({}, axios);

// $ExpectError
loadProgressBar(null);
