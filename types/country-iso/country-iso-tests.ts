import { get } from "country-iso";

// $ExpectType string[]
const results = get(51.5074, -0.1278);
