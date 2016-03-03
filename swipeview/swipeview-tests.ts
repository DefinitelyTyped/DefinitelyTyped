/// <reference path="swipeview.d.ts" />

function demo1() {
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

var
    el,
    i,
    page,
    dots = document.querySelectorAll('#nav li'),
    slides = [
        {
            img: 'images/pic01.jpg',
            width: 300,
            height: 213,
            desc: 'Piazza del Duomo, Florence, Italy'
        },
        {
            img: 'images/pic02.jpg',
            width: 300,
            height: 164,
            desc: 'Tuscan Landscape'
        }
    ];

    var gallery = new SwipeView('#wrapper', { numberOfPages: slides.length });

    // Load initial data
    for (i = 0; i < 3; i++) {
        page = i == 0 ? slides.length - 1 : i - 1;
        el = document.createElement('img');
        el.className = 'loading';
        el.src = slides[page].img;
        el.width = slides[page].width;
        el.height = slides[page].height;
        el.onload = function () { this.className = ''; }
        gallery.masterPages[i].appendChild(el);

        el = document.createElement('span');
        el.innerHTML = slides[page].desc;
        gallery.masterPages[i].appendChild(el)
    }

    gallery.onFlip(function () {
        var el,
            upcoming,
            i;

        for (i = 0; i < 3; i++) {
            upcoming = (<any>gallery.masterPages[i].dataset).upcomingPageIndex;

            if (upcoming != (<any>gallery.masterPages[i].dataset).pageIndex) {
                el = gallery.masterPages[i].querySelector('img');
                el.className = 'loading';
                el.src = slides[upcoming].img;
                el.width = slides[upcoming].width;
                el.height = slides[upcoming].height;

                el = gallery.masterPages[i].querySelector('span');
                el.innerHTML = slides[upcoming].desc;
            }
        }
    });

    gallery.onMoveOut(function () {
        gallery.masterPages[gallery.currentMasterPage].className = gallery.masterPages[gallery.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
    });

    gallery.onMoveIn(function () {
        var className = gallery.masterPages[gallery.currentMasterPage].className;
        /(^|\s)swipeview-active(\s|$)/.test(className) || (gallery.masterPages[gallery.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
    });
}

function demo2() {
var carousel: SwipeView,
    el,
    i,
    page,
    slides = [
        '<strong>Swipe</strong> to know more &gt;&gt;&gt;<br>Or scroll down for <em>Lorem Ipsum</em>',
        '1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
        '2. A robot must obey the orders given to it by human beings, except where such orders would conflict with the First Law.',
        '3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.'
    ];

    carousel = new SwipeView('#wrapper', {
        numberOfPages: slides.length,
        hastyPageFlip: true
    });

    // Load initial data
    for (i = 0; i < 3; i++) {
        page = i == 0 ? slides.length - 1 : i - 1;

        el = document.createElement('span');
        el.innerHTML = slides[page];
        carousel.masterPages[i].appendChild(el)
    }

    carousel.onFlip(function () {
        var el,
            upcoming,
            i;

        for (i = 0; i < 3; i++) {
            upcoming = (<any>carousel.masterPages[i].dataset).upcomingPageIndex;

            if (upcoming != (<any>carousel.masterPages[i].dataset).pageIndex) {
                el = carousel.masterPages[i].querySelector('span');
                el.innerHTML = slides[upcoming];
            }
        }
    });
}

function demo3() {
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    window.addEventListener('load', function () {
        var ereader: SwipeView,
            el,
            i,
            pageIndex,
            pages = [],
            req = new XMLHttpRequest();

        ereader = new SwipeView('#wrapper', { hastyPageFlip: true });

        // Ajax request
        req.open('GET', 'flowers.txt', true);
        req.onreadystatechange = function () {
            if (req.readyState != 4) return;

            paginate(req.status != 200 && (req.status != 304 ? false : <any>req.responseText));

            req = null;
        }
        req.send(null);

        function paginate(book) {
            var that = this,
                container,
                helper,
                words = [],
                segment,
                wordCount = 80,
                avgWordCount = 0,
                progressTotal = 0,
                progressCurrent = 0,
                progressMaxWidth = document.getElementById('progressbar').clientWidth,
                progressToBookRatio = 0,
                progressBar = <HTMLElement>document.querySelector('#progressbar > span'),
                size;

            if (!book) return;

            book = book.replace(/\n\n/g, ' <br><br>').replace(/\n/g, ' ');
            progressTotal = book.length;
            progressToBookRatio = progressMaxWidth / book.length;

            container = document.createElement('div');
            container.style.visibility = 'hidden';
            container.innerHTML = '<div id="ereader-helper"></div>';
            ereader.slider.appendChild(container);
            helper = document.getElementById('ereader-helper');
            helper.innerHTML = '';

            var loopy = function () {
                words = book.split(' ', wordCount);
                segment = words.join(' ');
                helper.innerHTML = segment;

                if (helper.offsetHeight > ereader.wrapperHeight) {
                    if (size == -1) {
                        words.pop();
                        segment = words.join(' ');

                        pages.push(segment);
                        book = book.substr(segment.length);
                        avgWordCount = Math.round((wordCount + avgWordCount) / 2);
                        wordCount = avgWordCount;
                        size = 0;
                        progressTotal -= segment.length;
                    } else {
                        size = 1;
                        wordCount--;
                    }
                } else {
                    if (size == 1) {
                        pages.push(segment);
                        book = book.substr(segment.length);
                        avgWordCount = Math.round((wordCount + avgWordCount) / 2);
                        wordCount = avgWordCount;
                        size = 0;
                        progressTotal -= segment.length;
                    } else {
                        if (segment == book) {
                            pages.push(segment);
                            book = '';
                        }

                        size = -1;
                        wordCount++;
                    }
                }

                if (book) {
                    progressBar.style.width = 150 - Math.round(progressToBookRatio * progressTotal) + 'px';
                    setTimeout(loopy, 1);
                } else {
                    book = null;
                    words = null;
                    segment = null;
                    helper.innerHTML = '';
                    ereader.slider.removeChild(container);

                    ereader.updatePageCount(pages.length);
                    (<any>ereader.masterPages[0].dataset).pageIndex = pages.length - 1;
                    (<any>ereader.masterPages[0].dataset).upcomingPageIndex = (<any>ereader.masterPages[0].dataset).pageIndex;

                    // Load initial data
                    for (i = 0; i < 3; i++) {
                        pageIndex = i == 0 ? pages.length - 1 : i - 1;
                        el = document.createElement('div');
                        el.innerHTML = pages[pageIndex];
                        ereader.masterPages[i].appendChild(el)
                    }

                    document.getElementById('loading').style.display = 'none';
                }
            }

            loopy();
        }

        ereader.onFlip(function () {
            var el,
                upcoming,
                i;

            for (i = 0; i < 3; i++) {
                upcoming = (<any>ereader.masterPages[i].dataset).upcomingPageIndex;

                if (upcoming != (<any>ereader.masterPages[i].dataset).pageIndex) {
                    el = ereader.masterPages[i].querySelector('div');
                    el.innerHTML = pages[upcoming];
                }
            }
        });
    }, false);
}