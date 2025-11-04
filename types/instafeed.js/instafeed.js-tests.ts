import Instafeed = require("instafeed.js");
import { type InstafeedDefaultItem } from "instafeed.js";

// $ExpectType Instafeed<InstafeedDefaultItem>
new Instafeed({ accessToken: "aa" });

// @ts-expect-error
new Instafeed("token");

// @ts-expect-error
new Instafeed({});

// @ts-expect-error
new Instafeed();

// test if transform return type is passed to other hooks
new Instafeed({ 
  accessToken: "aa";
  transform(item) { 
    return { ...item, extra: 'foo' }
  },
  filter(item) {
    // $ExpectType (InstafeedDefaultItem & { extra: string })
    item;
    // $ExpectType string
    item.extra;
    
    return true;
  }
});

interface CustomInstafeedItem extends InstafeedDefaultItem {
  extra: string;
}

// test if omiting expected extra field breaks compiler as expected
new Instafeed<CustomInstafeedItem>({ 
  accessToken: "aa";
  // @ts-expect-error
  transform(item) { 
    return item;
  }
});
