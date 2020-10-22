// borrowed from the Backbone.Associations tutorials
// separated out into modules to avoid namespace clashes

import * as Backbone from 'backbone';

// one-to-one tests
class EmployeeWithManager extends Backbone.AssociatedModel {
    constructor(options?) {
        super(options);
        this.relations = [
            {
                type: Backbone.One, //nature of the relationship
                key: 'manager', // attribute of Employee
                relatedModel: 'Employee' //AssociatedModel for attribute key
            }
        ];
    }

    defaults() {
        return {
            age: 0,
            fname: "",
            lname: "",
            manager: null
        };
    }
}

// one-to-many tests
class Location extends Backbone.AssociatedModel {
    defaults() {
        return {
            add1: "",
            add2: null,
            zip: "",
            state: ""
        };
    }
}

class Locations extends Backbone.Collection<Location> {
    comparator = (c: Backbone.Model) => {
        return c.get("Number");
    }
}

class Project extends Backbone.AssociatedModel {
    constructor(options?) {
        super(options);
        this.relations = [
            {
                type: Backbone.Many, //nature of the relation
                key: 'locations', //attribute of Project
                collectionType: Locations, //Collection to be used.
                relatedModel: Location //Optional
            }
        ];
    }

    defaults() {
        return {
            name: "",
            number: 0,
            locations: []
        }
    }
}

function reverseAssociationTest() {
    var local = new Location({ state: "Hertfordshire" });
    var project = new Project({ name: "The Old Pond Project" });
    local.set("oddRelationTo", project);
    var parents = project.parents;
}
