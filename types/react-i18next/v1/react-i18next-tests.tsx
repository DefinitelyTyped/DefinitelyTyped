import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as i18n from 'i18next';
import { translate, I18nextProvider, Interpolate, InjectedTranslateProps, TranslationFunction } from 'react-i18next';


i18n
    .init({
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        }
    });


interface InnerAnotherComponentProps {
    _?: TranslationFunction;
}

class InnerAnotherComponent extends React.Component<InnerAnotherComponentProps> {
    render() {
        const _ = this.props._!;

        return <p>{_('content.text', { /* options t options */ })}</p>;
    }
}

const AnotherComponent = translate('view', { wait: true, translateFuncName: '_' })(InnerAnotherComponent);



interface InnerYetAnotherComponentProps extends InjectedTranslateProps {
}

class InnerYetAnotherComponent extends React.Component<InnerYetAnotherComponentProps> {
    render() {
        const t = this.props.t!;

        return <p>{t('usingDefaultNS', { /* options t options */ })}</p>;
    }
}
const YetAnotherComponent = translate()(InnerYetAnotherComponent);


interface TranslatableViewProps extends InjectedTranslateProps {
}

@translate(['view', 'nav'], { wait: true })
class TranslatableView extends React.Component<TranslatableViewProps> {
    render() {
        const t = this.props.t!;

        let interpolateComponent = <strong>"a interpolated component"</strong>;

        return (
            <div>
                <h1>{t('common:appName')}</h1>
                <AnotherComponent />
                <YetAnotherComponent />
                <Interpolate
                    parent='p'
                    i18nKey='common:interpolateSample'
                    value='"some value in props"'
                    component={interpolateComponent}
                />
                <Interpolate
                    parent='p'
                    i18nKey='common:interpolateSample'
                    useDangerouslySetInnerHTML={true}
                    dangerouslySetInnerHTMLPartElement='span'
                    value='"some value in props"'
                    component={interpolateComponent}
                />
                <a href='https://github.com/i18next/react-i18next' target='_blank'>{t('nav:link1')}</a>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <main>
                    <TranslatableView />
                </main>
            </div>
        );
    }
}


ReactDOM.render(
    <I18nextProvider i18n={ i18n }><App /></I18nextProvider>,
    document.getElementById('app')
);
