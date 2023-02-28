// Tests from https://github.com/jlmakes/scrollreveal.js

// 1.2
var sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');

// 1.3
sr = ScrollReveal().reveal('.foo, .bar');

// 1.4
sr.clean('.foo');
sr.destroy();

// 2.1
sr = ScrollReveal({ reset: true });
sr.reveal('.foo', { duration: 200 });

// 3.1
sr = ScrollReveal({ duration: 2000 });
sr.reveal('.box', 50);

sr = ScrollReveal();
sr.reveal('.box', { duration: 2000 }, 50);

// 3.2
var fooReveal = {
    delay: 200,
    distance: '90px',
    easing: 'ease-in-out',
    rotate: { z: 10 },
    scale: 1.1,
};

sr = ScrollReveal();
sr.reveal('.foo', fooReveal);
sr.reveal('#chocolate', { delay: 500, scale: 0.9 });

// 3.3
sr.reveal(document.getElementById('foo'));
sr.reveal(document.querySelectorAll('.bar'));

// 3.4
sr = ScrollReveal();
var fooContainer = document.getElementById('fooContainer');
sr.reveal('.foo', { container: fooContainer });
sr.reveal('.bar', { container: '#barContainer' });

// 3.5
fooContainer = document.getElementById('fooContainer');

sr = ScrollReveal();
sr.reveal('.foo', { container: fooContainer });
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            // Turn our response into HTML...
            var content = document.createElement('div');
            content.innerHTML = xmlhttp.responseText;

            // Add each element to the DOM...
            for (var i = 0; i < content.childNodes.length; i++) {
                fooContainer.appendChild(content.childNodes[i]);
            }

            // Finally!
            sr.sync();
        }
    }
};

xmlhttp.open('GET', 'ajax.html', true);
xmlhttp.send();

sr.reveal('#one-matching-element', {
    beforeReveal: (element: HTMLElement) => {
        // ...
    },
});

sr.reveal('.many-matching-elements', {
    beforeReveal: (element: NodeListOf<HTMLElement>) => {
        // ...
    },
});
