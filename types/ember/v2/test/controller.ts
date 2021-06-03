import Controller from '@ember/controller';

Controller.extend({
    queryParams: ['category'],
    category: null,
    isExpanded: false,

    toggleBody() {
        this.toggleProperty('isExpanded');
    },
});
