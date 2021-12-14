import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LightElement } from "../../lit/element";

export class MainView extends LightElement {

    constructor() {
        super();
        
    }

    render() {
        return html`

        <!-- OffCanvas Left -->
        <div style="width: min(100vw, 800px)" class="offcanvas offcanvas-start" tabindex="-1" id="ocLeft" aria-labelledby="ocLeftTitle">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="ocLeftTitle">Hallo ik ben een Offcanvas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr/>
            <div class="offcanvas-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
            </div>
        </div>

        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Hallo ik ben een Modal</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="container">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut expedita dolor totam beatae, 
                            isi reiciendis modi. Esse odit tempore unde saepe labore magni non amet nihil perferendis 
                            voluptatem, recusandae, harum mollitia rerum doloremque officiis assumenda voluptas deleniti, 
                            placeat at vero ipsa alias! Hic eius quia, voluptates tempore magni quam officiis?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- OffCanvas Right -->
        <div style="width: min(100vw, 800px)" class="offcanvas offcanvas-end" tabindex="-1" id="ocRight" aria-labelledby="ocRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="ocRightLabel">Hallo ik ben een Offcanvas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr/>
            <div class="offcanvas-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
                 Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Non ipsum, alias quam expedita, provident 
                rem molestias doloremque totam delectus nostrum aspernatur suscipit 
                placeat repellat quia modi! Et, qui sunt? Possimus cumque aperiam quaerat 
                eius, velit necessitatibus inventore illo placeat. Optio labore delectus voluptas 
                veniam ipsam, blanditiis ut reiciendis et aperiam nobis magnam esse, accusamus ad quidem 
                error rerum laborum? Voluptate assumenda quo aperiam sit accusamus, eum consequatur aut inventore optio, 
                laudantium reprehenderit. Sed facere iste quos harum rem tempore impedit deserunt eveniet, nobis maxime
                 ut amet dignissimos quisquam, atque beatae nulla ea, assumenda eius optio. Dolorem perspiciatis assumenda pariatur similique.
            </div>
        </div>

        <div class="container text-center">
            <h1 class="pt-5">Click a planet to destroy it!</h1>
            <br />
            <lit-solar-system></lit-solar-system>
            <br/>
            <br/>
            <br/>
            <p>This can also be handy:</p>
            <div class="container">
                <button class="btn-lg btn-primary" data-bs-toggle="offcanvas" data-bs-target="#ocLeft">< Offcanvas</button>
                <button class="btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Modal</button>
                <button class="btn-lg btn-primary" data-bs-toggle="offcanvas" data-bs-target="#ocRight">Offcanvas ></button>
            </div>
            <br/>
        </div>
        `;
    }
}
