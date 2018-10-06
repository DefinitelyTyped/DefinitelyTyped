export type Renderable = React.ComponentType | JSX.Element;
export type RenderFunction = () => Renderable | Renderable[];
export type Readme = string | string[];

export type DecoratorPattern = (
    story: RenderFunction,
    context: { kind: string; story: string }
) => Renderable | null;

export type HOCPattern = (
    context: { kind: string; story: string }
) => Renderable | null;
