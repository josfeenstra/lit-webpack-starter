import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { WebElement } from "../element";

export class MainView extends WebElement {

    constructor() {
        super();
        
    }

    render() {
        return html`
            <h1>Click a planet to destroy it!</h1>
            <br />
            <lit-solar-system></lit-solar-system>
            <br />
        `;
    }
}
