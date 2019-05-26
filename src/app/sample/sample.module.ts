import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxScaleModule } from '../ngx-scale/ngx-scale.module';

import { SampleRoutingModule } from './sample-routing.module';

import { SampleComponent } from './sample.component';


@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule,
    ReactiveFormsModule,
    NgxScaleModule,
  ],
  declarations: [
    SampleComponent,
  ],
})
export class SampleModule { }
