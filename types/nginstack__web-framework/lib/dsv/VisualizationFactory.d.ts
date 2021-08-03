export = VisualizationFactory;
declare function VisualizationFactory(): void;
declare namespace VisualizationFactory {
    export { constructors_, register, create, getVisualizationPath, Visualization };
}
declare var constructors_: Record<string, (arg0: any) => any>;
declare function register(typeName: string, constructor: (arg0: any) => any): void;
declare function create(typeOrKey: string | number, opt_def?: any): Visualization;
declare function getVisualizationPath(key: number): string;
type Visualization = import('./Visualization');
