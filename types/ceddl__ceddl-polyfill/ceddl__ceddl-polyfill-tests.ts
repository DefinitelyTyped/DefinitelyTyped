import { ceddl, ModelConfig } from '@ceddl/ceddl-polyfill';

const myModel: ModelConfig = {
    key: 'product',
    root: true,
    fields: {
        name: {
            type: ceddl.modelFactory.fields.StringField,
            required: true,
        },
        sale: {
            type: ceddl.modelFactory.fields.BooleanField,
            required: true,
        },
        shortName: {
            type: ceddl.modelFactory.fields.StringField,
            required: true,
        },
        priceOnce: {
            type: ceddl.modelFactory.fields.NumberField,
            required: true,
        },
        priceMonth: {
            type: ceddl.modelFactory.fields.NumberField,
            required: true,
        }
    }
};

ceddl.modelFactory.create(myModel);

ceddl.initialize();

const callback = (data: any) => {
 // receive message
};

ceddl.eventbus.on('jproduct', callback);

ceddl.eventbus.emit('jproduct', {
	name: "Pencil words - Orange",
	sale: false,
	shortName: "Paper",
	priceOnce: 27,
	priceMonth: 39,
});

ceddl.emitModel('jproduct', {
	name: "Pencil words - Orange",
	sale: false,
	shortName: "Paper",
	priceOnce: 25,
	priceMonth: 34,
});

ceddl.emitEvent('jproduct:click', {
	name: "klick trigger"
});

ceddl.eventbus.off('jproduct', callback);
ceddl.eventbus.once('jproduct', callback);

const models = ceddl.getModels();
const events = ceddl.getEvents();
