import styles from './main.sass';
import * as classNames from 'classnames';

class App {
    private readonly theme: string;
    constructor(theme: string) {
        this.theme = theme;
    }

    render() {
        // as a style tag (using webpack's css-loader)
        const tpl = `<div style="${styles.toString()}"></div>`;
        // or as scoped unique classes, also latest typescript versions allow prop access using dot like styles.darkUI instead of styles['darkUI']
        return `
            <div class="${classNames((this.theme === 'dark') ?
                styles.darkUI :
                styles.lightUI.toString())}">
            </div>
        `;
    }
}
