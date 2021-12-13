import { html } from "lit";
import { LitMessage } from "./elements/message";
import { LitPlanet } from "./elements/planet";
import { LitSolarSystem } from "./elements/solar-system";
import { MainView } from "./views/view";

declare global {
    interface HTMLElementTagNameMap {
        "lit-planet": LitPlanet;
        "main-view": MainView;
        "lit-solar-system": LitSolarSystem;
    }

    interface WindowEventMap {
        "maniac-message": CustomEvent;
    }
}

export namespace MyStuff {

    export function define() {
        LitPlanet.defineAs("lit-planet");
        MainView.defineAs("main-view");
        LitMessage.defineAs("lit-message");
        LitSolarSystem.defineAs("lit-solar-system");
    }
}
