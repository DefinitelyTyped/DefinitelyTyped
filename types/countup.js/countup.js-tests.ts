const b = new CountUp();

const options: countUp.CountUpOptions = {
  decimal: ",",
  useGrouping: true,
  suffix: "-",
  prefix: "=",
  separator: "/",
  useEasing: true,
  formattingFn: number => number + "-",
  easingFn: (t, b, c, d) => t + b + c + d,
  numerals: ["q", 2, "e", [3], "t", 0, "u", 7, "o", "p"]
};

const element = document.getElementById("#id");
if (element) {
  const instance2 = new CountUp(element, 2, "3", 0, "5", options);
}

const instance = new CountUp(".js-target", 2, "3", 0, "5", options);

instance.start();

instance.start(() => {
  console.log(instance.version());
});

instance.update(999);

instance.pauseResume();

if (instance.paused) instance.reset();
