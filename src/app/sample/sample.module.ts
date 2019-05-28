import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgxScaleModule } from 'projects/ngx-scale/src/public_api';

import { SampleRoutingModule } from './sample-routing.module';

import { SampleComponent } from './sample.component';
import { SampleAutoResizeComponent } from './sample-auto-resize/sample-auto-resize.component';
import { SampleManuallyResizeComponent } from './sample-manually-resize/sample-manually-resize.component';


@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxScaleModule,
  ],
  declarations: [
    SampleComponent,
    SampleAutoResizeComponent,
    SampleManuallyResizeComponent,
  ],
})
export class SampleModule { }
