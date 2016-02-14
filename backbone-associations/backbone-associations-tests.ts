/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="backbone-associations.d.ts" />

// borrowed from the Backbone.Associations tutorials
// separated out into modules to avoid namespace clashes
module Backbone.Associations.Tests {
    module OneToOne {
        class EmployeeWithManager extends Backbone.AssociatedModel {
            constructor(options?) {
                this.relations = [
                    {
                        type: Backbone.One, //nature of the relationship
                        key: 'manager', // attribute of Employee
                        relatedModel: 'Employee' //AssociatedModel for attribute key
                    }
                ];
                super(options);
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
    }

    module OneToMany {
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
            comparator(c: Backbone.Model) {
                return c.get("Number");
            }
        }

        class Project extends Backbone.AssociatedModel {
            constructor(options?) {
                this.relations = [
                    {
                        type: Backbone.Many, //nature of the relation
                        key: 'locations', //attribute of Project
                        collectionType: Locations, //Collection to be used.
                        relatedModel: Location //Optional
                    }
                ];
                super(options);
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
    }

}