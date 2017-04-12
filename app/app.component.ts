import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `    <div class="row">
                     <h1>Bienvenue sur Lobbywatch !</h1>
                   </div>
                   <div class="row" style="border-style: solid; border-color: #ffffff; margin-left: 10%; margin-right: 10%">
                     <div class="row" style="margin: 2%">
                         <p style="text-align: justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                         </p>
                         <p style="text-align: justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                         </p>
                     </div>
                   </div>`
})
export class AppComponent { }