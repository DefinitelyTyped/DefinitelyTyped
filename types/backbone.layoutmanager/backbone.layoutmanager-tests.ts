import * as Backbone from 'backbone';

// Example code.
class DisplayView extends Backbone.View<Backbone.Model> {
    constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
        super(options);
        this.manage = true;
        this.template = "#display";
    }
    manage: boolean;
    template: string;
}

// Create a View to be used with the Layout below.
class View extends Backbone.Layout<Backbone.Model> {
    constructor(options?: Backbone.LayoutOptions<Backbone.Model>) {
        super(options);
        this.template = "#view";

        // When you click the View contents, it will wrap them in a bold tag.
        this.events = <any>{
            "click": "wrapElement",
            "mouseenter": "insertElement",
            "mouseleave": "removeElement"
        }
    }

    wrapElement(): void {
        this.$el.wrap("<b>");
    }

    insertElement(): void {
        this.insertView(new DisplayView()).render();
    }

    removeElement(): void {
        // Removes the inserted DisplayView.
        this.removeView("");
    }
}

// Create a new Layout.
var layout = new Backbone.Layout<Backbone.Model>({
    // Attach the Layout to the main container.
    el: ".main",

    // Use the previous defined template.
    template: "#layout",

    // Declaratively bind a nested View to the Layout.
    views: {
        "p": new View()
    }
});

// Render the Layout.
layout.render();
