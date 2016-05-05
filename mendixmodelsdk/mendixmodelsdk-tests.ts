/// <reference path="./mendixmodelsdk.d.ts"/>

import {domainmodels, IModel, ModelSdkClient} from "mendixmodelsdk";


// This doesn't do anything useful, just for testing typings...

const client: ModelSdkClient = new ModelSdkClient({
	credentials: {
		username: "username",
		apikey: "apikey"
	}
});

client.createWorkingCopy({
	name: "workingCopy",
	template: "test.mpk"
}, (model:IModel) => {
	client.openWorkingCopy(model.id, (model:IModel) => {
		var domainModel:domainmodels.IDomainModel = model.allDomainModels()[0];
		domainModel.load((d:domainmodels.DomainModel) => {});

		domainModel = model.root.modules[0].domainModel;
		var entity:domainmodels.IEntity = model.findEntityByQualifiedName("x.y");
		model.exportMpk("test.mpk", () => {}, (err) => {})
	}, (err) => {});
}, (err) => {});
