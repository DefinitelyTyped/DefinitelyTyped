import * as React from 'react';
import * as i18n from 'i18next';
import {
    setDefaults,
    reactI18nextModule,
    translate,
    I18nextProvider,
    Interpolate,
    InjectedTranslateProps,
    TranslationFunction,
    loadNamespaces,
    Trans,
    I18n,
    ReactI18NextOptions
} from 'react-i18next';
import { InjectedI18nProps } from 'react-i18next/src/props';

interface InnerAnotherComponentProps {
    _: TranslationFunction;
}

class InnerAnotherComponent extends React.Component<InnerAnotherComponentProps> {
    render() {
        const _ = this.props._;
        return <p>{_('content.text', {/* options t options */})}</p>;
    }
}

const AnotherComponent = translate<Key, "_">('view', {wait: true, translateFuncName: '_'})(InnerAnotherComponent);
const instanceWithoutRef = new AnotherComponent({});
instanceWithoutRef.componentWillReceiveProps!({
    i18n,
    initialI18nStore: { context: { text: "a message" } },
    initialLanguage: "en"
}, {});

translate.setDefaults({ wait: false });
translate.setI18n(i18n);

const AnotherComponentWithRef = translate<Key, "_">("view" as Key, { translateFuncName: "_", withRef: true })(InnerAnotherComponent);
const instanceWithRef = new AnotherComponentWithRef({});
const ref = instanceWithRef.getWrappedInstance();
instanceWithRef.componentWillReceiveProps!({
    i18n,
    initialI18nStore: { context: { text: "a message" } },
    initialLanguage: "en"
}, {});

class InnerYetAnotherComponent extends React.Component<InjectedTranslateProps> {
    render() {
        const t = this.props.t;
        return <p>{t('usingDefaultNS', {/* options t options */})}</p>;
    }
}

const YetAnotherComponent = translate()(InnerYetAnotherComponent);

const YetAnotherComponentWithRef =translate(undefined, { withRef: true })(InnerYetAnotherComponent);
new YetAnotherComponentWithRef({}).getWrappedInstance();
class TranslatableView extends React.Component<InjectedTranslateProps> {
    render() {
        const t = this.props.t;
        const interpolateComponent = <strong>"a interpolated component"</strong>;
        const options: i18n.InterpolationOptions = {};
        return (
            <div>
                <h1>{t('common:appName')}</h1>
                <AnotherComponent/>
                <YetAnotherComponent/>
                <Interpolate
                    parent='p'
                    i18nKey='common:interpolateSample'
                    value='"some value in props"'
                    component={interpolateComponent}
                />
                <Interpolate
                    parent='p'
                    options={options}
                    i18nKey='common:interpolateSample'
                    useDangerouslySetInnerHTML={true}
                    dangerouslySetInnerHTMLPartElement='span'
                    value='"some value in props"'
                    component={interpolateComponent}
                    i18n={i18n.init()}
                />
                <a href='https://github.com/i18next/react-i18next' target='_blank'>{t('nav:link1')}</a>
            </div>
        );
    }
}

const TranslatedView = translate(["view", "nav"] as Key[], { wait: true })(TranslatableView);

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <main>
          <TranslatedView />
        </main>
      </div>
    );
  }
}

<I18nextProvider i18n={i18n} initialLanguage={'en'} initialI18nStore={{}}>
    <App/>
</I18nextProvider>;

loadNamespaces({components: [App], i18n}).then(() => {
}).catch(error => {
});

<Trans count={5}/>;
<Trans count={5} i18nKey="key"/>;
<Trans parent={'span'}/>;
<Trans i18n={i18n.init()}/>;
<Trans t={i18n.getFixedT('en')}/>;
<Trans count={5}>
    <App/>
</Trans>;

type Key = "view" | "nav";

class GenericsTest extends React.Component<InjectedTranslateProps> {
    render() {
        return null;
    }
}

const TranslatedGenericsTest = translate(["view", "nav"] as Key[])(GenericsTest);
<TranslatedGenericsTest />;

class GenericsTest2 extends React.Component<InjectedTranslateProps> {
    render() {
        return null;
    }
}

const TranslatedGenericsTest2 = translate("view" as Key)(GenericsTest2);
<TranslatedGenericsTest2 />;

class ComponentWithInjectedI18n extends React.Component<InjectedI18nProps> {
  render() { return null; }
}

const TranslatedComponentWithInjectedI18n = translate()(ComponentWithInjectedI18n);
<TranslatedComponentWithInjectedI18n />;

function StatlessComponent(props: InjectedTranslateProps) {
  return <h1>{props.t("hy")}</h1>;
}

const TranslatedStatlessComponent = translate()(StatlessComponent);
<TranslatedStatlessComponent />;

interface CustomTranslateFunctionProps {
  _: TranslationFunction;
}

<I18n ns={['defaultNamespace', 'anotherNamespace']} wait={true} nsMode={'string'} bindI18n={'languageChanged loaded'}
      bindStore={'added removed'}>
    {
        (t, {i18n}) => (
            <div>
                <h1>{t('keyFromDefault')}</h1>
                <p>{t('anotherNamespace:key.from.another.namespace', {/* options t options */})}</p>
            </div>
        )
    }
</I18n>;

const defaults: ReactI18NextOptions = {
    wait: true,
    withRef: true,
    bindI18n: 'string',
    bindStore: 'string'
};
setDefaults(defaults);

reactI18nextModule.init(i18n.init());
