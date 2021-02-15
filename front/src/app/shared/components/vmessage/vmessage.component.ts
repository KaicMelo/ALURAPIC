import { Component, Input } from "@angular/core";

@Component({
    selector:'ap-vmessage',
    templateUrl:'./Vmessage.component.html'
})
export class VMessageComponent{
    @Input() text = '';

}