# NgxScale
NgxScale implements an Angular directive to easily scale up/ down HTML elements inside a container, keeping the original aspect ratio.

## Demo
You can find a demo of the directive being used [here](https://jeffersonbc.github.io/ngx-scale). The code for the demo can be found at the project's [repository](https://github.com/JeffersonBC/ngx-scale/tree/master/src/app/sample).

## Installation
You can add `ngx-scale` to your project using:
```bash
$ npm install ngx-scale --save
```

## Usage
Import the `NgxScaleModule` in the module you want to use the directive.

```ts
import { NgxScaleModule } from 'ngx-scale';

@NgModule({
  imports: [ NgxScaleModule ],
})
export class SampleModule { }
```

### Automatically updating the size of the content
Add the `ngxScaleContainer` directive to the HTML element you want to use as the container that will scale up/ down the content, and bind to it an object with width and height as properties. These properties set the default size for the content to be scaled.

```html
<div [ngxScaleContainer]="{ width: 500, height: 250 }">
  <div>
    <h1>Title</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer venenatis massa vitae ultricies molestie.
    </p>
  </div>
</div>
```

**Only the first child of the container will be scaled up/ down, so for most cases you should wrap the content inside a single HTML tag.*

### Manually updating the size of the content
For some cases, if the size of the scaling container will change as a result of operations made in the script of a component, there may be a delay between changing the size of the container and the content. In such cases, this can be fixed by manually calling the `updateScale()` function of the directive.

To do so, first add a reference to the directive. It's exported as `ngxScaleContainerDirective`, so you can add a reference to that. Add a property `resizeManually: true` to the object bound to `ngxScaleContainer`.

```html
<div #scaleContainer=ngxScaleContainerDirective
  [ngxScaleContainer]="{ width: 500, height: 250, resizeManually: true }"
  [style.width.px]="form.value.width"
  [style.height.px]="form.value.height"
>
  <div>...</div>
</div>
```
```ts
export class SampleManuallyResizeComponent implements OnInit {
  @ViewChild('scaleContainer') scaleContainer: NgxScaleContainerDirective;

  form: FormGroup = new FormGroup({
    width: new FormControl(250),
    height: new FormControl(250),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe(
      (changes: { width: number, height: number }) =>
        this.scaleContainer.updateScale(changes)
    );
  }
}
```
