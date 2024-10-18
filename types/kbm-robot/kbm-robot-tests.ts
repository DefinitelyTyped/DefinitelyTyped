import * as robot from "kbm-robot";

robot.startJar();
robot.startJar(6);
robot.stopJar();
(async () => {
    await robot
        .press(",")
        .release("-")
        .type(".")
        .type("/", 10)
        .typeString("str")
        .typeString("str", 10)
        .typeString("str", 10, 10)
        .sleep(10)
        .mouseMove(10, 10)
        .mousePress("1")
        .mouseRelease("11")
        .mouseClick("111")
        .mouseScroll(1)
        .go();
})();
