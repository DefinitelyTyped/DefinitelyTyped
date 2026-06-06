import { Random } from "something-random-on-discord";

const random = new Random();

// $ExpectType Promise<object>
random.getAdvice();

// $ExpectType Promise<string>
random.getAnimeImgURL("pat");
