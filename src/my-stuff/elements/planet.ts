import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class LitPlanet extends LightElement {
    
    destoyed = false;
    @property({ type: String }) name = "Earth";
    @query('#btn')  _button: any;

    render() {
        let stuff =  html`
            <button id="btn" class="btn ${this.destoyed ? "btn-outline-danger" : "btn-outline-primary"}"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Don't you dare!"
                @click=${() => {
                    this.togglePlanet();
                }}>
                ${this.name}
            </button>
        `;

        return stuff;
    }

    firstUpdated() {
        // add nice-looking tooltip
        //@ts-ignore
        return new bootstrap.Tooltip(this._button);
    }

    togglePlanet() {
        this.requestUpdate();
        let message = "";
        if (this.name == "boom!") {
            message = "Stop... its already destroyed...";
        } else {
            message = `You maniac..., you destroyed ${this.name} !`;
        }
        this.dispatchMessageEvent(message, 'maniac-message');
        this.name = "boom!";
        this.destoyed = true;
    }
}