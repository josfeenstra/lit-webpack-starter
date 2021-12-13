import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { WebElement } from "../element";

export class LitSolarSystem extends WebElement {
    
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
                <lit-message />
                <br />
            </div>
        `;
    }
}