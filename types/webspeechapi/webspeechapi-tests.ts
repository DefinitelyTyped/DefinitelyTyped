/*
Examples from the spec:
https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#examples-recognition
*/

// 6.1 Speech Recognition Examples

// Example 1
declare var q: HTMLInputElement;
{
    const recognition = new SpeechRecognition();
    recognition.onresult = event => {
        if (event.results.length > 0) {
            q.value = event.results[0][0].transcript;
            q.form.submit();
        }
    };
}

// Example 2
declare const select: HTMLSelectElement;
{
    const recognition = new SpeechRecognition();
    recognition.maxAlternatives = 10;
    recognition.onresult = event => {
        if (event.results.length > 0) {
            const result = event.results[0];
            for (let i = 0; i < result.length; ++i) {
                const text = result[i].transcript;
                select.options[i] = new Option(text, text);
            }
        }
    };

    function start() {
        const x: number = select.options.length;
        recognition.start();
    }
}

// Example 3
/*
This example has some changes from the one in spec.
`const i = resultIndex` -> `const i = event.resultIndex` (Recorded as Errata 16)
`event.results.final` -> `event.results[i].isFinal` (Recorded as Errata 02)
*/
declare const textarea: HTMLTextAreaElement;
declare const button: HTMLButtonElement;
{
    let recognizing: boolean;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = event => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                textarea.value += event.results[i][0].transcript;
            }
        }
    };

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
declare const final_span: HTMLSpanElement;
declare const interim_span: HTMLSpanElement;
() => {
    let recognizing: boolean;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = event => {
        let final = "";
        let interim = "";
        // tslint:disable-next-line prefer-for-of (not an Iterable?)
        for (let i = 0; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final += event.results[i][0].transcript;
            } else {
                interim += event.results[i][0].transcript;
            }
        }
        final_span.innerHTML = final;
        interim_span.innerHTML = interim;
    };

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
};

// 6.2 Speech Synthesis Examples

// Example 1
/*
This example has a change from the one in spec.
`SpeechSynthesisUtterance('Hello World')` -> `new SpeechSynthesisUtterance('Hello World')` (Recorded as Errata 09)
*/
{
    speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
}

// Example 2
{
    const u = new SpeechSynthesisUtterance();
    u.text = 'Hello World';
    u.lang = 'en-US';
    u.rate = 1.2;
    // TODO: https://github.com/Microsoft/TSJS-lib-generator/issues/232
    u.onend = event => { alert(`Finished in ${(event as any).elapsedTime} seconds.`); };
    speechSynthesis.speak(u);
}
