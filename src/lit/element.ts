import { LitElement } from "lit";

export class WebElement extends LitElement {
    static enabledWarnings = [];

    static defineAs(tag: string) {
        customElements.define(tag, this);
    }

    dispatchMessageEvent(message: string, type="message") {
        console.log("dispatching:", type);
        let event = new CustomEvent(type, {
            detail: {
                message,
                bubbles: true,
                composed: true 
            }
        });
        window.dispatchEvent(event);
    }
}
