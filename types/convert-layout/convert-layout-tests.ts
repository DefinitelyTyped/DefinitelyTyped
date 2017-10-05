import layouts from 'convert-layout'
import ru from 'convert-layout/ru'

const s = 'Lorem ipsum dolor sit amet.';
console.log(ru.toEn(s));
console.log(ru.fromEn(s));

layout = layouts["de"];
console.log(layout.fromEn(s));
