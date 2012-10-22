/// <reference path="../Definitions/backbone-0.9.d.ts" />

declare var _, $;

// Events
///////////////////////////////////////////////////////

var object = new Backbone.Events();
object.on("alert", (msg) => alert("Triggered " + msg));

object.trigger("alert", "an event");


var onChange = () => alert('whatever');
var context: any;

object.off("change", onChange);
object.off("change");
object.off(null, onChange);
object.off(null, null, context);
object.off();

// Models
//////////////////////////////////////////////////////

var Sidebar = Backbone.Model.extend({
    promptColor: function () {
        var cssColor = prompt("Please enter a CSS color:");
        this.set({ color: cssColor });
    }
});

var sidebar = new Sidebar();
sidebar.on('change:color', (model, color) => $('#sidebar').css({ background: color }));
sidebar.set({ color: 'white' });
sidebar.promptColor();

////////

var Note = Backbone.Model.extend({
    initialize: () => { },
    author: () => { },
    coordinates: () => { },
    allowedToEdit: (account) => {
        return true;
    }
});

var PrivateNote = Note.extend({

    allowedToEdit: function (account) {
        return account.owns(this);
    }

});


//////////

var note = Backbone.Model.extend({
    set: function (attributes, options) {
        Backbone.Model.prototype.set.call(this, attributes, options);
    }
});

note.get("title")

note.set({ title: "March 20", content: "In his eyes she eclipses..." });

note.set("title", "A Scandal in Bohemia");

//////////

class Employee extends Backbone.Model {
    reports: EmployeeCollection;

    constructor (options? ) {
        super(options);
        this.reports = new EmployeeCollection();
        this.reports.url = '../api/employees/' + this.id + '/reports';
    }
}

class EmployeeCollection extends Backbone.Collection {

    url: string = "../api/employees";
    model = Employee;
    findByName(key) { }
}

//////////

Backbone.history.start();