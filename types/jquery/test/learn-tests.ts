// From https://learn.jquery.com/plugins/basic-plugin-creation/

// Basic Plugin Authoring

interface JQuery {
    greenify: GreenifyPlugin;
}

interface GreenifyPlugin {
   (this: JQuery): void;
}

jQuery.fn.greenify = function() {
    this.css( "color", "green" );
};

jQuery( "a" ).greenify(); // Makes all the links green.
