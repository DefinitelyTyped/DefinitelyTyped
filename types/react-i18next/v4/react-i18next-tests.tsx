import * as React from 'react';
import * as i18n from 'i18next';
import { translate, I18nextProvider, Interpolate, InjectedTranslateProps, TranslationFunction, loadNamespaces, Trans } from 'react-i18next';

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

class InnerYetAnotherComponent extends React.Component<InjectedTranslateProps> {
  render() {
    const t = this.props.t!;
    return <p>{t('usingDefaultNS', { /* options t options */ })}</p>;
  }
}

const YetAnotherComponent = translate()(InnerYetAnotherComponent);

@translate(['view', 'nav'], { wait: true })
class TranslatableView extends React.Component<InjectedTranslateProps> {
  render() {
    const t = this.props.t!;
    const interpolateComponent = <strong>"a interpolated component"</strong>;

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
    );
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

<I18nextProvider i18n={i18n}>
  <App />
</I18nextProvider>;

loadNamespaces({ components: [App], i18n }).then(() => { }).catch(error => { });

<Trans count={5} />;
<Trans count={5} i18nKey="key" />;
<Trans count={5}>
  <App />
</Trans>;

type Key = "view" | "nav";

@translate<Key>(['view', 'nav'])
class GenericsTest extends React.Component<InjectedTranslateProps> {
  render() { return null; }
}

@translate<Key>('view')
class GenericsTest2 extends React.Component<InjectedTranslateProps> {
  render() { return null; }
}
