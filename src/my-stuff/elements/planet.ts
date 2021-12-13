import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class LitPlanet extends LightElement {

    // Define reactive properties--updating a reactive property causes
    // the component to update.
    @property({ type: String }) name = "Earth";
    destoyed = false;

    @query('#btn')
    _button: any;

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

        // TODO fancy tooltips...
        // if (this._button) {
        //     // @ts-ignore
        //     let tt = new bootstrap.Tooltip(this._button);
        // }

        return stuff;
    }

    firstUpdated() {
        // add nice-looking tooltip
        //@ts-ignore
        return new bootstrap.Tooltip(this._button);
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