import humanizeDuration from "humanize-duration";

humanizeDuration(3000);      // '3 seconds'
humanizeDuration(2250);      // '2.25 seconds'
humanizeDuration(97320000);  // '1 day, 3 hours, 2 minutes'

humanizeDuration(3000, { language: "es" });  // '3 segundos'
humanizeDuration(5000, { language: "ko" });  // '5 초'

humanizeDuration(3000, { language: "en", fallbacks: ["en"] });  // '3 seconds'
humanizeDuration(3000, { language: "bad language", fallbacks: ["bad language", "es"] });  // '3 segundos'

humanizeDuration(22140000, { delimiter: " and " });  // '6 hours and 9 minutes'
humanizeDuration(22140000, { delimiter: "--" });     // '6 hours--9 minutes'

humanizeDuration(260040000, { spacer: " whole " });  // '3 whole days, 14 whole minutes'
humanizeDuration(260040000, { spacer: "" });         // '3days, 14minutes'

humanizeDuration(1000000000000);                  // '31 years, 8 months, 1 week, 19 hours, 46 minutes, 40 seconds'
humanizeDuration(1000000000000, { largest: 2 });  // '31 years, 8 month'

humanizeDuration(3600000, { units: ["h"] });       // '1 hour'
humanizeDuration(3600000, { units: ["m"] });       // '60 minutes'
humanizeDuration(3600000, { units: ["d", "h"] });  // '1 hour'

humanizeDuration(1200);                   // '1.2 seconds'
humanizeDuration(1200, { round: true });  // '1 second'
humanizeDuration(1600, { round: true });  // '2 seconds'

humanizeDuration(1200);                          // '1.2 seconds'
humanizeDuration(1200, { decimal: " point " });  // '1 point 2 seconds'

humanizeDuration(22140000, { conjunction: " and " });                      // '6 hours and 9 minutes'
humanizeDuration(22141000, { conjunction: " and " });                      // '6 hours, 9 minutes, and 1 second'
humanizeDuration(22140000, { conjunction: " and ", serialComma: false });  // '6 hours and 9 minutes'
humanizeDuration(22141000, { conjunction: " and ", serialComma: false });  // '6 hours, 9 minutes and 1 second'

humanizeDuration(8123.456789); // 8.12 seconds
humanizeDuration(8123.456789, { maxDecimalPoints: 3 }); // 8.123 seconds
humanizeDuration(8123.456789, { maxDecimalPoints: 6 }); // 8.123456 seconds
humanizeDuration(8123.45, { maxDecimalPoints: 6 }); // 8.12345 seconds
humanizeDuration(8000, { maxDecimalPoints: 6 }); // 8 seconds

humanizeDuration(400);    // '0.4 seconds'
humanizeDuration(400, {  // '1 year, 1 month, 5 days'
  unitMeasures: {
    d: 1,
    mo: 30,
    w: 7,
    y: 365,
  },
});

humanizeDuration(3602000, {
  language: "es",
  round: true,
  spacer: " glorioso ",
  units: ["m"],
}); // '60 glorioso minutos'

const spanishHumanizer = humanizeDuration.humanizer({
  language: "es",
  units: ["y", "mo", "d"],
});

spanishHumanizer(71177400000);  // '2 años, 3 meses, 2 días'
spanishHumanizer(71177400000, { units: ["d", "h"] });  // '823 días, 19.5 horas'

const shortEnglishHumanizer = humanizeDuration.humanizer({
  language: "shortEn",
  languages: {
    shortEn: {
      d: () => "d",
      h: () => "h",
      m: () => "m",
      mo: () => "mo",
      ms: () => "ms",
      s: () => "s",
      w: () => "w",
      y: () => "y",
    },
  },
});

shortEnglishHumanizer(15600000);  // '4 h, 20 m'

const humanizer = humanizeDuration.humanizer();

humanizer.languages.shortEn = {
  y: () => "y",
};

humanizeDuration.getSupportedLanguages();
