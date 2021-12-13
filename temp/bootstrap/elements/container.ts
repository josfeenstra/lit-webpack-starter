import { html } from "lit";
import { BootstrapElement } from "../base/bootstrap-element";

export class Container extends BootstrapElement {
    render() {
        return html`
            <div class="container">
                <slot></slot>
            </div>
        `;
    }
}