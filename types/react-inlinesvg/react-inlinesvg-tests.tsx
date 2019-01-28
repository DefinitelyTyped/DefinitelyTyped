import * as React from "react";
import SVG from 'react-inlinesvg';

function Loader() {
    return null;
}

function myOnLoadHandler(src: string | URL) {
}

<SVG
    src="/path/to/myfile.svg"
    preloader={<Loader />}
    onLoad={(src) => {
        myOnLoadHandler(src);
    }}
>
  <img src="/path/to/myfile.png" />
</SVG>;
