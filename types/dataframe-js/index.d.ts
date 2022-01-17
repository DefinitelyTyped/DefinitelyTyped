// Type definitions for dataframe-js 1.4
// Project: https://github.com/Gmousse/dataframe-js#readme
// Definitions by: Alzemiro Iago de Moraes Thomaz <https://github.com/alzemiro-iago>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import DataFrame from './dataframe';
import Row from './row';
import * as Errors from './errors';
import * as Reusables from './reusables';
import * as Io from './io';
import * as Symbol from './symbol';
import { GroupedDataFrame } from './group';
import SQL from './modules/sql';
import Matrix from './modules/matrix';
import Stat from './modules/stat';
import sqlParser from './modules/sql/sqlEngine';
export { Row, Errors, SQL, DataFrame, GroupedDataFrame, Io, Reusables, Symbol, sqlParser, Matrix, Stat };
export default DataFrame;
