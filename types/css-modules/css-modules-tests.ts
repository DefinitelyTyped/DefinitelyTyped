import * as css from './styles.css';
import * as less from './styles.less';
import * as sass from './styles.sass';
import * as scss from './styles.scss';
import * as styl from './styles.styl';

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
