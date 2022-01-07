import pSBC from "shade-blend-color";


let color1 = "rgb(20,60,200)";
let color2 = "rgba(20,60,200,0.67423)";
let color3 = "#67DAF0";
let color4 = "#5567DAF0";
let color5 = "#F3A";
let color6 = "#F3A9";
let color7 = "rgb(200,60,20)";
let color8 = "rgba(200,60,20,0.98631)";

pSBC ( 0.42, color1 ); // $ExpectType string
pSBC ( -0.4, color5 ); // $ExpectType string
pSBC ( 0.42, color8 ); // $ExpectType string


pSBC ( 0.42, color2, "c" ); // $ExpectType string

pSBC ( 0, color6, "c" ); // $ExpectType string

pSBC ( -0.5, color2, color8 ); // $ExpectType string
pSBC ( 0.7, color2, color7 ); // $ExpectType string
pSBC ( 0.25, color3, color7 ); // $ExpectType string
pSBC ( 0.75, color7, color3 ); // $ExpectType string

pSBC ( 0.42, "#FFBAA" ); // $ExpectType null
pSBC ( 42, color1, color5 ); // $ExpectType null
pSBC ( 0.42, {} ); // $ExpectType null
pSBC ( "42", color1 ); // $ExpectType null
pSBC ( 0.42, "salt" ); // $ExpectType null