
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class LitSolarSystem extends LightElement {
    
    render() {
        console.log("render system");

        let names = [
            "Mercurius",
            "Venus",
            "Earth",
            "Mars",
            "Jupyter",
            "Saturn",
            "Uranus",
            "Neptune",
        ];

        return html`
            <div>
                ${names.map((name) => {
                    let planet = document.createElement("lit-planet");
                    planet.name = name;
                    return html`${planet}`;
                })}
                <br />
                <lit-message/>
                <br />
            </div>
        `;
    }
}