anchors.add();
anchors.add('h1');
anchors.add().add('h2');

anchors.remove();
anchors.remove('h1');
anchors.remove().remove('h2');

anchors.removeAll();

const headerAnchors = new AnchorJS();

const footerAnchors = new AnchorJS({
    placement: 'right',
});
footerAnchors.remove('.links');
