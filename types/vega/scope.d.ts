import { Axis } from './axis';
import { Data } from './data';
import { Layout } from './layout';
import { Legend } from './legend';
import { Mark } from './mark';
import { Projection } from './projection';
import { Scale } from './scale';
import { Signal } from './signal';
import { Title } from './title';
export interface Scope {
    title?: Title;
    layout?: Layout;
    signals?: Signal[];
    projections?: Projection[];
    data?: Data[];
    scales?: Scale[];
    axes?: Axis[];
    legends?: Legend[];
    marks?: Mark[];
}
