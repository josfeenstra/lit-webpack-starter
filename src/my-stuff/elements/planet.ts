import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class LitPlanet extends LightElement {

    // Define reactive properties--updating a reactive property causes
    // the component to update.
    @property({ type: String }) name = "Earth";
    destoyed = false;

    render() {

        console.log("render planet");

        return html`
            <button class="btn ${this.destoyed ? "btn-outline-danger" : "btn-outline-primary"}"
                @click=${() => {
                    this.togglePlanet();
                }}>
                ${this.name}
            </button>
        `;
    }

    // Event handlers can update the state of @properties on the element
    // instance, causing it to re-render
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