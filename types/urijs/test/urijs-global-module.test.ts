// test: Usage of UMD Globals should be prohibited inside modules

export {}; // dummy export to mark this file as a module

const uri = new URI(); // $ExpectError
