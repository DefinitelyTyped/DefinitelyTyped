// This line is deleted at compile time
import { OnConnectedCallback, OnAttributeChangedCallback, HasAttributes } from "w3c-customelements";

class CountUpElement extends HTMLElement implements OnConnectedCallback, OnAttributeChangedCallback {
    static get observedAttributes() {
        return ["count"];
    }

    readonly counter: HTMLElement;
    readonly button: HTMLButtonElement;

    get count(): number {
        return parseInt(this.getAttribute("count") || "0", 10) || 0;
    }
    set count(v: number) {
        this.setAttribute("count", String(v));
    }

    constructor() {
        super();

        this.counter = document.createElement("div");
        this.button = document.createElement("button");
        this.button.innerText = "Count up";
        this.button.addEventListener("click", () => this.count++);

        this.innerHTML = "";
        this.appendChild(this.counter);
        this.appendChild(this.button);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attr: string, _oldValue: any, _newValue: any) {
        if (attr === "count") {
            this.render();
        }
    }

    render() {
        this.counter.textContent = `Count: ${this.count}`;
    }
}

// Check implementation of static property
void (CountUpElement as HasAttributes);

customElements.define("x-countup", CountUpElement);

{
    const el = new CountUpElement();
    el.count = 42;
    document.querySelector("#countup2") !.appendChild(el);
}
