import { Config } from "@cyberblast/config";

const c = new Config(""); // $ExpectType Config
c.load(); // $ExpectType Promise<any>
c.settings(); // $ExpectType any
