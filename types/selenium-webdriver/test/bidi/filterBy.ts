import { FilterBy } from "selenium-webdriver/bidi/filterBy";

let filterBy: FilterBy;

filterBy = new FilterBy("debug");
filterBy = new FilterBy("error");
filterBy = new FilterBy("info");
filterBy = new FilterBy("warning");
filterBy = new FilterBy();

filterBy = FilterBy.logLevel("debug");
filterBy = FilterBy.logLevel("error");
filterBy = FilterBy.logLevel("info");
filterBy = FilterBy.logLevel("warning");
filterBy = FilterBy.logLevel();

// $ExpectType FilterByLevel
filterBy.getLevel();
