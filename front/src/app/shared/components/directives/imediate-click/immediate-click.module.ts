import {NgModule} from "@angular/core";
import { CommonModule }  from "@angular/common";
import { immediateClickDirective } from './imediate-click.directive';

@NgModule({
    declarations: [immediateClickDirective],
    exports: [immediateClickDirective],
    imports: [CommonModule]
})
export class ImmediateClickModule { }
