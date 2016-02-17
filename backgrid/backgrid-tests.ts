/// <reference path="backgrid.d.ts" />
/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />


/*
  Uses getters and setters and requires ES >= 5

  $ tsc --target ES5 backgrid-tests.ts
*/

class TestModel extends Backbone.Model {
      
    get Id(): number { return this.get('id'); }
    set Id(value: number) { this.set('id', value); }
    get FirstName(): string { return this.get('FirstName'); }
    set FirstName(value: string) { this.set('FirstName', value); }
    set LastName(value: string) { this.set('LastName', value); }
    get LastName(): string { return this.get('LastName'); }
    set EMail(value: string) { this.set('EMail', value); }
    get EMail(): string { return this.get('EMail'); }
    

}

class TestCollection extends Backbone.Collection<TestModel> {

    constructor(models?: any, options?: any) {
	this.model = TestModel;
	super(models, options);
    }

    initialize() {

	this.on("change", this.modelChanged, this)
    }

    modelChanged(model: Backbone.Model, val: any, options: any){

	model.save();
    }
}

class TestView extends Backbone.View<TestModel> {
    gridView: Backgrid.Grid;
    testCollection: TestCollection;
    
    constructor(viewOptions?: Backbone.ViewOptions<TestModel>) {
	this.testCollection = new TestCollection();
	this.gridView = new Backgrid.Grid({
            columns: [new Backgrid.Column({name: "FirstName", cell: "string", label: "First Name"}), 
		      new Backgrid.Column({name: "LastName", cell: "string", label: "Last Name"}),
		      new Backgrid.Column({name: "EMail", cell: "string", label: "E-Mail"})],
		      collection:this.testCollection,
		     });
					  
	super(viewOptions);
	
    }
    
    initialize() {
    }
    
    render() {
	this.$el.empty();
	this.$el.append(this.gridView.render().$el);
	//this.testCollection.fetch();
	return this;
    }
    
}


function test_grid() {

    var view = new TestView();
    view.render();
 }