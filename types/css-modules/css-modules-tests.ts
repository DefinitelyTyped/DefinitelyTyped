import css from './styles.css';
import less from './styles.less';
import sass from './styles.sass';
import scss from './styles.scss';
import styl from './styles.styl';

css; // $ExpectType CSSModule

css.customCssClassName; // $ExpectType string

less; // $ExpectType CSSModule

less.customLessClassName; // $ExpectType string

sass; // $ExpectType CSSModule

sass.customSassClassName; // $ExpectType string

scss; // $ExpectType CSSModule

scss.customScssClassName; // $ExpectType string

styl; // $ExpectType CSSModule

styl.customStylClassName; // $ExpectType string
