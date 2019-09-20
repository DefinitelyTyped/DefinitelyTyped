import HttpDataSource from 'falcor-http-datasource';
import { Model } from 'falcor';

const model = new Model({
    source: new HttpDataSource('/model.json')
});
