import * as plugins from '@wordpress/plugins';

plugins.registerPlugin('my-plugin', {
    icon: 'welcome-learn-more',
    render: () => <h1>Hello World</h1>,
});

plugins.getPlugins();

plugins.getPlugin('my-plugin');

plugins.unregisterPlugin('my-plugin');

interface OwnProps {
    foobar: number;
}

interface ContextProps {
    iconName: string;
}

type Props = OwnProps & ContextProps;

const Foo = ({ iconName, foobar }: Props) => (
    <ul>
        <li>{iconName}</li>
        <li>{foobar}</li>
        <plugins.PluginArea />
    </ul>
);

const Foobar = plugins.withPluginContext<ContextProps, OwnProps>(({ icon }) => ({ iconName: icon.toString() }))(Foo);
