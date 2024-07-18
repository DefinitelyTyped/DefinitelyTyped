import * as IClauseSelect from "@nginstack/iquery/lib/IClauseSelect";
import * as IQuery from "@nginstack/iquery/lib/IQuery";

const iquery = new IQuery();
const clauseSelect = new IClauseSelect(iquery);

iquery.clauseFrom; // $ExpectType IClauseFrom
iquery.joinManager; // $ExpectType IJoinManager
iquery.whereClauseCount; // $ExpectType number
iquery.validatePermission; // $ExpectType number

iquery.column(clauseSelect); // $ExpectType IClauseSelect
iquery.from(1, ""); // $ExpectType IQuery
iquery.innerJoin(iquery); // $ExpectType IClauseJoin
iquery.leftOuterJoin(iquery); // $ExpectType IClauseJoin
iquery.where([""]); // $ExpectType IQuery
iquery.uncheckPermission(); // $ExpectType IQuery
iquery.checkPermission(); // $ExpectType IQuery
iquery.getLeftJoinIQuery(); // $ExpectType IClauseJoin
iquery.getWhereSql(true); // $ExpectType string
iquery.toSql(); // $ExpectType string

function getVersion(): string {
    return "71.0.132";
}
getVersion(); // $ExpectType string
