import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleComponent } from './sample.component';
import { SampleManuallyResizeComponent } from './sample-manually-resize/sample-manually-resize.component';
import { SampleAutoResizeComponent } from './sample-auto-resize/sample-auto-resize.component';


const routes: Routes = [
  { path: '', component: SampleComponent,
    children: [
      { path: 'auto-resize', component: SampleAutoResizeComponent },
      { path: 'manually-resize', component: SampleManuallyResizeComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
