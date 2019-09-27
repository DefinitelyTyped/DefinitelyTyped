import Sequelize = require('sequelize');
import withPagination = require('sequelize-cursor-pagination');

interface Data {
    id: number;
    name: string;
}
interface DataInstance extends Sequelize.Instance<Data>, Data {}

type DataModel = Sequelize.Model<DataInstance, Data>;

const model: DataModel = {} as any ;

/************************************/
/*  use default pagination options  */
/************************************/

const WithPaginationModel = withPagination({
    methodName: 'paginate',
    primaryKeyField: 'id'
})<DataModel, DataInstance, Data>(model);

// @CAVEAT: function withPagination has no return value, in order to get the augmented type,
// we need to temporarily store the return value (actually is undefined) to later cast
// the original model to the augmented type to acquire additional paginate function.
const withPaginationModel = (model as typeof WithPaginationModel);

withPaginationModel.paginate();
withPaginationModel.paginate({
    where: {
        id: 1,
        name: 'hello'
    },
    attributes: ['id', 'name'],
    include: [],
    before: 'beforeCursor',
    after: 'afterCursor',
    limit: 10,
    desc: true,
    paginationField: 'id',
    raw: false,
    subQuery: false
});

// when 'raw' option is false or undefined

const insts = withPaginationModel.paginate({
    raw: false
});

insts.cursors; // cursors => { after, before, hasNext, hasPrevious }
insts.cursors.after;
insts.cursors.before;
insts.cursors.hasNext;
insts.cursors.hasPrevious;

insts.results; // results => DataInstance[]
insts.results.forEach((inst) => {
    const data = inst.get({ plain: true });
    const { id, name } = data;
});

// when 'raw' option is true

const raws = withPaginationModel.paginate({
    raw: true
});

raws.cursors; // cursors => { after, before, hasNext, hasPrevious }
raws.cursors.after;
raws.cursors.before;
raws.cursors.hasNext;
raws.cursors.hasPrevious;

raws.results; // results => Data[]
raws.results.forEach((data) => {
    const { id, name } = data;
});

/***********************************/
/*  use custom pagination options  */
/***********************************/

const WithPaginationCustomModel = withPagination({
    methodName: 'customPaginate',
})<DataModel, DataInstance, Data>(model);

const withPaginationCustomModel = (model as typeof WithPaginationCustomModel);

withPaginationCustomModel.customPaginate();
withPaginationCustomModel.customPaginate({
    where: {
        id: 1,
        name: 'hello'
    },
    attributes: ['id', 'name'],
    include: [],
    before: 'beforeCursor',
    after: 'afterCursor',
    limit: 10,
    desc: true,
    paginationField: 'id',
    raw: false,
    subQuery: false
});
