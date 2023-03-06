import { ComponentType, Options } from 'babel-plugin-react-docgen';

declare const Button: ComponentType;
Button.__docgenInfo;

const pluginOptions: Options = {
    DOC_GEN_COLLECTION_NAME: 'MY_REACT_DOCS',
    resolver: 'findAllComponentDefinitions', // optional (default: findAllExportedComponentDefinitions)
    removeMethods: true, // optional (default: false)
    handlers: ['react-docgen-deprecation-handler'], // optional array of custom handlers
};
