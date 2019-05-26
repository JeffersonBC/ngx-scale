import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  form: FormGroup = new FormGroup({
    width: new FormControl(50),
    height: new FormControl(250),
  });

}
