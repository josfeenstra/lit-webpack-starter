import { Container } from "./elements/container";

declare global {
    interface HTMLElementTagNameMap {
        "bs-container": Container;
    }
}

/**
 * a bootstrap lit-library
 */
export namespace Bootstrap {

    export function define() {
        Container.defineAs("bs-container");
    }
}

