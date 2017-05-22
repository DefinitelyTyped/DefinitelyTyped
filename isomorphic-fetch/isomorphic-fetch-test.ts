/// <reference path="./isomorphic-fetch.d.ts"/>

import * as fetch from 'isomorphic-fetch';

fetch('https://www.reddit.com/r/reactjs.json')
  .then((response:any) => response.json())
  .then((json:any) => {
     console.log(json);
    }
  );

fetch('https://www.reddit.com/r/a.json')
  .then((response:any) => response.json())
  .catch((err:any) => {
    console.log(err);
  });
