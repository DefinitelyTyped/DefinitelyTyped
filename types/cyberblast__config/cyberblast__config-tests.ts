import { Config } from "@cyberblast/config";

const c = new Config(""); // $ExpectType Config
c.load(); // $ExpectType Promise<{ [key: string]: any; }>
c.settings; // $ExpectType { [key: string]: any; }
