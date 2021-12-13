import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { WebElement } from "../element";

export class LitMessage extends WebElement {
    
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('maniac-message', (e) => this._onSetMessage(e));
    }

    disconnectedCallback() {
        window.removeEventListener('maniac-message', (e) => this._onSetMessage(e));
        super.disconnectedCallback();
    }

    @property({type: String}) message = "";

    render() {
        console.log("render message");
        return html`
            <div>
                <p>${this.message}</p>
            </div>
        `;
    }
    
    _onSetMessage(e: CustomEvent) {
        let message: string = e.detail.message;
        this.message = message;
    }
}