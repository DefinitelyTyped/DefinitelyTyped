/*
Examples from the spec:
https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#examples-recognition
*/

// 6.1 Speech Recognition Examples

// Example 1
declare var q: HTMLInputElement;
() => {
    var recognition = new SpeechRecognition();
    recognition.onresult = function (event) {
        if (event.results.length > 0) {
            q.value = event.results[0][0].transcript;
            q.form.submit();
        }
    }
}

// Example 2
declare var select: HTMLSelectElement;
() => {
    var recognition = new SpeechRecognition();
    recognition.maxAlternatives = 10;
    recognition.onresult = function (event) {
        if (event.results.length > 0) {
            var result = event.results[0];
            for (var i = 0; i < result.length; ++i) {
                var text = result[i].transcript;
                select.options[i] = new Option(text, text);
            }
        }
    }

    function start() {
        let x: number = select.options.length;
        recognition.start();
    }
}

// Example 3
/*
This example has some changes from the one in spec.
`var i = resultIndex` -> `var i = event.resultIndex` (Recorded as Errata 16)
`event.results.final` -> `event.results[i].isFinal` (Recorded as Errata 02)
*/
declare var textarea: HTMLTextAreaElement;
declare var button: HTMLButtonElement;
() => {
    var recognizing: boolean;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                textarea.value += event.results[i][0].transcript;
            }
        }
    }

    function reset() {
        recognizing = false;
        button.innerHTML = "Click to Speak";
    }

    function toggleStartStop() {
        if (recognizing) {
            recognition.stop();
            reset();
        } else {
            recognition.start();
            recognizing = true;
            button.innerHTML = "Click to Stop";
        }
    }
}

// Example 4
/*
This example has a change from the one in spec.
`recognition.interim = true;` -> `recognition.interimResults = true;` (Recorded as Errata 01)
`event.results[i].final` -> `event.results[i].isFinal` (Recorded as Errata 02)
*/
declare var button: HTMLButtonElement;
declare var final_span: HTMLSpanElement;
declare var interim_span: HTMLSpanElement;
() => {
    var recognizing: boolean;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (event) {
        var final = "";
        var interim = "";
        for (var i = 0; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final += event.results[i][0].transcript;
            } else {
                interim += event.results[i][0].transcript;
            }
        }
        final_span.innerHTML = final;
        interim_span.innerHTML = interim;
    }

    function reset() {
        recognizing = false;
        button.innerHTML = "Click to Speak";
    }

    function toggleStartStop() {
        if (recognizing) {
            recognition.stop();
            reset();
        } else {
            recognition.start();
            recognizing = true;
            button.innerHTML = "Click to Stop";
            final_span.innerHTML = "";
            interim_span.innerHTML = "";
        }
    }
}


// 6.2 Speech Synthesis Examples

// Example 1
/*
This example has a change from the one in spec.
`SpeechSynthesisUtterance('Hello World')` -> `new SpeechSynthesisUtterance('Hello World')` (Recorded as Errata 09)
*/
() => {
    speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
}

//Example 2
() => {
    var u = new SpeechSynthesisUtterance();
    u.text = 'Hello World';
    u.lang = 'en-US';
    u.rate = 1.2;
    u.onend = function (event) { alert('Finished in ' + event.elapsedTime + ' seconds.'); }
    speechSynthesis.speak(u);
}