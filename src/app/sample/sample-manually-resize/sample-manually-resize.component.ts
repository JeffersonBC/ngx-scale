import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ScaleContainerDirective } from '../../ngx-scale/scale-container.directive';


@Component({
  selector: 'app-sample-manually-resize',
  templateUrl: './sample-manually-resize.component.html',
  styleUrls: ['../sample.component.scss'],
})
export class SampleManuallyResizeComponent implements OnInit {

  @ViewChild('scaleContainer') scaleContainer: ScaleContainerDirective;

  form: FormGroup = new FormGroup({
    width: new FormControl(250),
    height: new FormControl(250),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((changes: { width: number, height: number }) => {
      this.scaleContainer.updateScale({ width: changes.width, height: changes.height });
    });
  }

}
