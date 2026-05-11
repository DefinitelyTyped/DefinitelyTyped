import sleep from "sleep";

// $ExpectType void
sleep.sleep(1);
// $ExpectType void
sleep.usleep(5000);
// $ExpectType void
sleep.msleep(1000);
