import { LitElement } from "lit";

/**
 * Light as in: not using the shadow dom
 */
export class LightElement extends LitElement {
    
    static enabledWarnings = [];

    createRenderRoot() {
        return this;
    }

    ///////////////////////////////////////////////////////////////////////////
    
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
