import browserLang from "browser-lang";

const Lang = browserLang({ languages: ["en", "ko", "ja"], fallback: "en" });
const SystemLang = browserLang();

console.log("Lang:", Lang);
console.log("SystemLang:", SystemLang);
