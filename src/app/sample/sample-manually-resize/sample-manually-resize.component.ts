import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NgxScaleContainerDirective } from 'projects/ngx-scale/src/lib/ngx-scale-container.directive';


@Component({
  selector: 'app-sample-manually-resize',
  templateUrl: './sample-manually-resize.component.html',
  styleUrls: ['../sample.component.scss'],
})
export class SampleManuallyResizeComponent implements OnInit {

  @ViewChild('scaleContainer') scaleContainer: NgxScaleContainerDirective;

  form: FormGroup = new FormGroup({
    width: new FormControl(250),
    height: new FormControl(250),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((changes: { width: number, height: number }) => {
      this.scaleContainer.updateScale(changes);
    });
  }

}
