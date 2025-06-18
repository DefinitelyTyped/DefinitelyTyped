import { Beijing, Moscow, SaintPetersburg, Tokyo } from "metrostations";

// Московско-Петроградская

// $ExpectType Station[]
const MoscowStations = Moscow.stations;
// $ExpectType Line[]
const MoscowLines = Moscow.lines;

// $ExpectType Station[]
const SaintPetersburgStations = SaintPetersburg.stations;
// $ExpectType Line[]
const SaintPetersburgLines = SaintPetersburg.lines;

MoscowStations[0].geo_lat; // $ExpectType string
MoscowStations[0].geo_lon; // $ExpectType string
MoscowStations[0].id; // $ExpectType number
MoscowStations[0].intl_name; // $ExpectType string
MoscowStations[0].line; // $ExpectType number
MoscowStations[0].lineTransfers; // $ExpectType number[]
MoscowStations[0].stationTransfers; // $ExpectType number[]

MoscowLines[0]; // $ExpectType Line
MoscowLines[0].color; // $ExpectType string
MoscowLines[0].id; // $ExpectType number
MoscowLines[0].intl_name; // $ExpectType string
MoscowLines[0].lineTransfers; // $ExpectType number[]
MoscowLines[0].local_name; // $ExpectType string

Beijing; // $ExpectType MetroStations
Tokyo; // $ExpectType MetroStations
