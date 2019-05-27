import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleContainerDirective } from './scale-container.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScaleContainerDirective,
  ],
  exports: [
    ScaleContainerDirective,
  ],
})
export class NgxScaleModule { }
