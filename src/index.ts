import { Lit } from "./lit/init";

/**
 * Entry point
 */
function main() {
    console.log("loaded!");
    Lit.init(document.body);
}

window.addEventListener("load", main, false);
