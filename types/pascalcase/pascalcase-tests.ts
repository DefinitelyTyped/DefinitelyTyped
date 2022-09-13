import pascalcase from "pascalcase";

pascalcase(""); // $ExpectType string
pascalcase(3); // $ExpectType string
pascalcase(null); // $ExpectType string
pascalcase({ toString: () => "water" }); // $ExpectType string
pascalcase(); // $ExpectType string
pascalcase([]); // $ExpectType string
