(function() {
    var gr = new GlideRecord('incident');
    var el = gr.getElement('active');
    var b = el.changes();
    b = el.changesFrom(true);
    b = el.changesTo(false);
    var s = el.getAttribute('tree_picker');
    var sa = el.getChoices();
    s = el.getChoiceValue();
    s = el.getDecryptedValue();
    s = el.getDisplayValue();
    var ed = el.getED();
})();
