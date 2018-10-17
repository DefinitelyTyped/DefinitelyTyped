import * as React from 'react';
import * as i18n from 'i18next';
import {
    setDefaults,
    reactI18nextModule,
    I18nextProvider,
    Interpolate,
    InjectedTranslateProps,
    TranslationFunction,
    loadNamespaces,
    Trans,
    I18n,
    ReactI18NextOptions,
    withContext,
    withI18n,
    withNamespaces
} from 'react-i18next';
import { InjectedI18nProps } from 'react-i18next/src/props';

interface InnerAnotherComponentProps extends InjectedTranslateProps {
    message?: string;
}

class InnerAnotherComponent extends React.Component<InnerAnotherComponentProps> {
    render() {
        const { t, message = 'message' } = this.props;
        return <p>{t('content.text', { message })}</p>;
    }
}

const AnotherComponent = withNamespaces<Key>('view', {wait: true})(InnerAnotherComponent);
const instanceWithoutRef = new AnotherComponent({});
instanceWithoutRef.componentWillReceiveProps!({
    i18n,
    initialI18nStore: { context: { text: "a message" } },
    initialLanguage: "en"
}, {});

withNamespaces.setDefaults({ wait: false });
withNamespaces.setI18n(i18n);

const innerAnotherComponentRef = React.createRef<InnerAnotherComponent>();
const anotherComponentRef = React.createRef<typeof AnotherComponentWithRef>();
const AnotherComponentWithRef = withNamespaces<Key>("view" as Key)(InnerAnotherComponent);

<AnotherComponentWithRef innerRef={innerAnotherComponentRef}/>;
// The 'ref' should not be assignable to prevent mistakenly saving a ref to react-i18next's generated class
// $ExpectError
<AnotherComponentWithRef ref={innerAnotherComponentRef}/>;

<AnotherComponentWithRef
    i18n={i18n}
    initialI18nStore={{ context: { text: "a {{message}}" } }}
    initialLanguage='en'
    message='test message'
/>;

class InnerYetAnotherComponent extends React.Component<InjectedTranslateProps> {
    render() {
        const t = this.props.t;
        return <p>{t('usingDefaultNS', {/* options t options */})}</p>;
    }
}

const YetAnotherComponent = withI18n()(InnerYetAnotherComponent);

const YetAnotherComponentWithRef = withI18n()(InnerYetAnotherComponent);
const innerYetAnotherComponentRef = React.createRef<InnerYetAnotherComponent>();

// It's a current bug that innerRef doesn't work with anything besides withNamespaces
// $ExpectError
<YetAnotherComponentWithRef innerRef={innerYetAnotherComponentRef}/>;

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

const TranslatedView = withNamespaces(["view", "nav"] as Key[], { wait: true })(TranslatableView);

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

<I18nextProvider i18n={i18n} initialLanguage={'en'} initialI18nStore={{}}>
    123
</I18nextProvider>;

loadNamespaces({components: [App], i18n}).then(() => {
}).catch(error => {
});

<Trans count={5}/>;
<Trans count={5} i18nKey="key"/>;
<Trans parent={'span'}/>;
<Trans parent={<div />}/>;
<Trans parent={() => <div />}/>;
<Trans i18n={i18n.init()}/>;
<Trans t={i18n.getFixedT('en')}/>;
<Trans count={5}>
    <App/>
</Trans>;
<Trans i18nKey="hello" tOptions={{hello: "world", count: 42}}/>;
<Trans
    defaults="Hello <0>{{universe}}</0>!"
    components={[
        <strong>placeholder</strong>
    ]}
    values={{
        universe: "World"
    }}
/>;

type Key = "view" | "nav";

class GenericsTest extends React.Component<InjectedTranslateProps> {
    render() {
        return null;
    }
}

const TranslatedGenericsTest = withNamespaces(["view", "nav"] as Key[])(GenericsTest);
<TranslatedGenericsTest />;

class GenericsTest2 extends React.Component<InjectedTranslateProps> {
    render() {
        return null;
    }
}

const TranslatedGenericsTest2 = withNamespaces("view" as Key)(GenericsTest2);
<TranslatedGenericsTest2 />;

class ComponentWithInjectedI18n extends React.Component<InjectedI18nProps> {
  render() { return null; }
}

const TranslatedComponentWithInjectedI18n = withI18n()(ComponentWithInjectedI18n);
<TranslatedComponentWithInjectedI18n />;

function StatlessComponent(props: InjectedTranslateProps) {
  return <h1>{props.t("hy")}</h1>;
}

const TranslatedStatlessComponent = withI18n()(StatlessComponent);
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

<I18n>
    {t => '123'}
</I18n>;

const defaults: ReactI18NextOptions = {
    wait: true,
    withRef: true,
    bindI18n: 'string',
    bindStore: 'string'
};
setDefaults(defaults);

reactI18nextModule.init(i18n.init());
