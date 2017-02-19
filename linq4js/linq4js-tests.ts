import * as linq from "linq4js";

let array: Array<string> = ["test", "test2", "test3", "test4", "test5"];

array.Add("test6").Remove("test3").Insert("test3", 2).Distinct().OrderBy(x => x).OrderByDescending(x => x).Select(x => x.length).Average();