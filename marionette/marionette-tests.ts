/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="marionette.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

class Link extends Backbone.Model {
    defaults() {
        return {
            path: '',
            name: ''
        }
    }
}

class Links extends Backbone.Collection<Link> {
}

class SingleLink extends Marionette.ItemView<Link> {
    tagName = 'li';
    template = _.template('<a href="<%-path%>"><%-name%></a>');
}

class ListView extends Marionette.CollectionView<Backbone.Model, Links> {
    tagName = 'ul';
    childView = SingleLink;
}


function test_collectionView() {

    var link1 = new Link({path: 'http://google.com', name: 'Google'});
    var list = new Links([
        link1,
        {path: 'http://mojotech.com', name: 'MojoTech'}
    ]);

    var listView = new ListView({
        collection: list,
        el: '.link-area'
    });

    listView.render();
    var firstLink: Link = listView.children.findByModel(link1);

}

class Page extends Backbone.Model {
    defaults() {
        return {
            title: ''
        }
    }
}

class ListCompositeView extends Marionette.CompositeView<Page, Links> {
    childView = SingleLink;
    childViewContainer = 'ul';
    template = _.template('<h1><%-title%></h1><ul></ul>');
}


function test_compositeView() {
    var page = new Page({title: 'Test'});

    var link1 = new Link({path: 'http://google.com', name: 'Google'});
    var list = new Links([
        link1,
        {path: 'http://mojotech.com', name: 'MojoTech'}
    ]);

    var listCompositeView = new ListCompositeView({
        model: page,
        collection: list
    });

    var model: Link = listCompositeView.collection.at(0);

    listCompositeView.render();
    listCompositeView.destroy();

    return listCompositeView.isDestroyed;
}