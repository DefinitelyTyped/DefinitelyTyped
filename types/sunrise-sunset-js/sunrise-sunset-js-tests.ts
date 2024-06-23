import { getSunrise, getSunset } from "sunrise-sunset-js";

const sunset = getSunset(51.4541, -2.592);
const sunrise = getSunrise(51.1788, -1.8262, new Date("2000-06-21"));
