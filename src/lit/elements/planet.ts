import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { WebElement } from "../element";

export class LitPlanet extends WebElement {
    // Styles are scoped to this element: they won't conflict with styles
    // on the main page or in other components. Styling API can be exposed
    // via CSS custom properties.
    static styles = css`
        :host {
            display: inline-block;
            padding: 10px;
            background: lightgray;
        }
    `;

    // Define reactive properties--updating a reactive property causes
    // the component to update.
    @property({ type: String }) name = "Earth";
    @property() whenChange = () => {};
    
    render() {

        console.log("render planet");

        return html`
            <span
                @click=${() => {
                    this.togglePlanet();
                    this.whenChange();
                }}
            >
                ${this.name}
            </span>
        `;
    }

    // Event handlers can update the state of @properties on the element
    // instance, causing it to re-render
    togglePlanet() {
        this.requestUpdate();
        let message = "";
        if (this.name == "boom!") {
            message = "its already destroyed...";
        } else {
            message = `you maniac..., you destroyed ${this.name} !`;
        }
        this.dispatchMessageEvent(message, 'maniac-message');
        this.name = "boom!";
    }
}