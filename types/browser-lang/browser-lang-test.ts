import browserLang from './';

const Lang = browserLang({ languages: [], fallback: 'en' });
const SystemLang = browserLang();

console.log("Lang:", Lang);
console.log("SystemLang:", SystemLang);