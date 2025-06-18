const n: number = Template.size;

Template.add("str", "str");
Template.add("str", ["s", "t", "r"]);
Template.add("str", function() {
    return this.name + "a";
});
Template.add("str", [function() {
    return this.name + "a";
}]);

Template.delete("a");
Template.delete(["a", "b"]);

Template.get("name");

const b: boolean = Template.has("name");

export {};
