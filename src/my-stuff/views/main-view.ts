import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class MainView extends LightElement {

    constructor() {
        super();
        
    }

    render() {
        return html`

        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">

                <!-- Modal Header -->
                <!-- <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                </div> -->

                <!-- Modal body -->
                <div class="modal-body">
                    <div class="container">
                        <h1>Hallo ik ben een popup</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut expedita dolor totam beatae, 
                        isi reiciendis modi. Esse odit tempore unde saepe labore magni non amet nihil perferendis 
                        voluptatem, recusandae, harum mollitia rerum doloremque officiis assumenda voluptas deleniti, 
                        placeat at vero ipsa alias! Hic eius quia, voluptates tempore magni quam officiis?
                        </p>
                    </div>
                </div>

                <!-- Modal footer -->
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div> -->

                </div>
            </div>
        </div>


        <div class="container text-center">
            <h1 class="pt-5">Click a planet to destroy it!</h1>
            <br />
            <lit-solar-system></lit-solar-system>
            <br/>
            <br/>
            <br/>
            <button class="btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">toggle</button>
            <br/>
        </div>
        `;
    }
}
