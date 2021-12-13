import { MyStuff } from "./my-stuff/my-stuff";

/**
 * Entry point
 */
function main() {
    // Bootstrap.define();
    MyStuff.define();
    document.body.innerHTML = `<main-view></main-view>`;
}

window.addEventListener("load", main, false);
