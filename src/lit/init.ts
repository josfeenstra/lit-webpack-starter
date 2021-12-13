import { html } from "lit";
import { LitMessage } from "./elements/message";
import { LitPlanet } from "./elements/planet";
import { LitSolarSystem } from "./elements/solar-system";
import { MainView as LitMainView } from "./views/view";

declare global {
    interface HTMLElementTagNameMap {
        "lit-planet": LitPlanet;
        "view-main": LitMainView;
        "lit-solar-system": LitSolarSystem;
    }

    interface WindowEventMap {
        "maniac-message": CustomEvent;
    }
}

export namespace Lit {
    let Context: HTMLElement;

    function define() {
        LitPlanet.defineAs("lit-planet");
        LitMainView.defineAs("view-main");
        LitMessage.defineAs("lit-message");
        LitSolarSystem.defineAs("lit-solar-system");
    }

    export function init(context: HTMLElement) {
        define();
        Context = context;
        Context.innerHTML = `<view-main><view-main>`;
    }
}
