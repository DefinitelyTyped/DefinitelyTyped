const options: MoveTo.MoveToOptions = {
    tolerance: 70,
    duration: 300,
    easing: "easeOutQuart",
    callback: () => {}
};

const easeFunctions: MoveTo.MoveToEaseFunctionsObject = {
    fun1: () => 123,
    fun2: t => t,
    fun3: (t, b) => t + b,
    fun4: (t, b, c) => t + b + c,
    fun5: (t, b, c, d) => t + b + c + d
};

const a = new MoveTo();
const b = new MoveTo(options);

const moveToInstance = new MoveTo(options, easeFunctions);

moveToInstance.move(123);

const element = document.getElementById("#anchor");

if (element) {
    moveToInstance.move(element, options);

    const unregister = moveToInstance.registerTrigger(element, () => {});

    unregister();
}

console.log(moveToInstance.options);
console.log(moveToInstance.easeFunctions);

moveToInstance.addEaseFunction("ease-out", (t, b, c, d) => t + b + c + d);
