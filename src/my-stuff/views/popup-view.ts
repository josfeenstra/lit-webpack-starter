import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class PopupView extends LightElement {

    constructor() {
        super();
        
    }

    render() {
        return html`
        <div class="container">
            <h1>Hallo ik ben een popup</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut expedita dolor totam beatae, 
            isi reiciendis modi. Esse odit tempore unde saepe labore magni non amet nihil perferendis 
            voluptatem, recusandae, harum mollitia rerum doloremque officiis assumenda voluptas deleniti, 
            placeat at vero ipsa alias! Hic eius quia, voluptates tempore magni quam officiis?
            </p>
        </div>
        `;
    }
}
