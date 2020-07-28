import {
    AggregatedFilters,
    Filter,
    Page,
    Params, PermissionMiddlewareCreator,
    PUBLIC_ROUTES, RecordCreator,
    RecordGetter, RecordRemover, RecordsCounter, RecordSerializer,
    RecordsGetter, RecordsRemover, RecordUpdater, StatSerialized, StatSerializer,
} from 'forest-express-mongoose';
import { RequestHandler } from 'express';

const MY_PUBLIC_ROUTES = PUBLIC_ROUTES;

const model = {
    name: 'my-model',
};

const page: Page = {
    number: '1',
    size: '10',
};

const filter: Filter = {
    field: 'my-field',
    operator: 'is',
    value: 'empty',
};

const params: Params = {
    timezone: 'EU',
    search: '',
    fields: {
        users: 'createdAt,firstname,id,lastname,updatedAt',
    },
    sort: 'ASC',
    filters: filter,
    page,
    searchExtended: '0',
};

const recordGetter = new RecordGetter(model);
recordGetter.get('1234');

const recordsGetter = new RecordsGetter(model);
recordsGetter.getAll(params);

const recordsCounter = new RecordsCounter(model);
recordsCounter.count(params);

const recordUpdater = new RecordUpdater(model);
recordUpdater.update({}, '1234');

const recordCreator = new RecordCreator(model);
recordCreator.create({});

const recordRemover = new RecordRemover(model);
recordRemover.remove('1234');

const recordsRemover = new RecordsRemover(model);
recordsRemover.remove(['1234', '5678']);

const recordSerializer = new RecordSerializer(model);
recordSerializer.serialize([{}, {}]);

let requestHandler: RequestHandler;
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('users');
requestHandler = permissionMiddlewareCreator.list();
requestHandler = permissionMiddlewareCreator.export();
requestHandler = permissionMiddlewareCreator.details();
requestHandler = permissionMiddlewareCreator.create();
requestHandler = permissionMiddlewareCreator.update();
requestHandler = permissionMiddlewareCreator.delete();
requestHandler = permissionMiddlewareCreator.smartAction();

let statSerialized: StatSerialized;
const stats = {
    value: [1, 2, 3],
};
const statSerializer = new StatSerializer(stats);
statSerialized = statSerializer.perform();
