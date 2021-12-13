import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class MainView extends LightElement {

    constructor() {
        super();
        
    }

    render() {
        return html`
        <div class="container">
            <h1 class= "pt-3">Click a planet to destroy it!</h1>
            <br />
            <lit-solar-system/>
            <br />
        </div>
        `;
    }
}
