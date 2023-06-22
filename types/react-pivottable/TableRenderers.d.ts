import { PivotTableProps } from './PivotTable';

export interface TableRenderers {
    [k: string]: React.ComponentType<PivotTableProps>;
}
export type BuildInRenderersNames =
    | 'Table'
    | 'Table Heatmap'
    | 'Table Col Heatmap'
    | 'Table Row Heatmap'
    | 'Exportable TSV';

declare const defaultRenderers: Record<BuildInRenderersNames, React.ComponentType<PivotTableProps>>;
export default defaultRenderers;
