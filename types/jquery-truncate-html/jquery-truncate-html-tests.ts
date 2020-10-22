function truncateHtmlString(): string {
    return $.truncate('<p>Stuff and <i>Nonsense</i></p>', {
        length: 13
    });
}

function truncateVirtualElement (): JQuery {
    return $('<p>Stuff and <i>Nonsense</i></p>').truncate({
        length: 13
    });
}
