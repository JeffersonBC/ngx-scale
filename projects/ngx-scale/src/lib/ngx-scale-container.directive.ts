import { Directive, OnInit, Input, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

import { ResizeSensor } from 'css-element-queries';

@Directive({
  selector: '[ngxScaleContainer]',
  exportAs: 'ngxScaleContainerDirective',
})
export class NgxScaleContainerDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input() ngxScaleContainer: {
    width: number,
    height: number,
    resizeManually?: boolean,
  } = { width: 1, height: 1 };

  private _resizeSensor: ResizeSensor;


  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  ngOnInit() {
    if (this.ngxScaleContainer.resizeManually !== true) {
      this._resizeSensor = new ResizeSensor(this.element.nativeElement, () => this.updateScale());
    }

    this.renderer.setStyle(
      this.element.nativeElement.children[0],
      'width',
      `${this.ngxScaleContainer.width}px`,
    );

    this.renderer.setStyle(
      this.element.nativeElement.children[0],
      'height',
      `${this.ngxScaleContainer.height}px`,
    );
  }

  ngOnDestroy() {
    if (this._resizeSensor) {
      this._resizeSensor.detach();
    }
  }

  ngAfterViewInit() {
    this.updateScale();
  }

  public updateScale(scale: { width?: number, height?: number } = {}) {
    // Calculates the scale of the internal element
    const calculatedScale = Math.min(
      (scale.width  || this.element.nativeElement.offsetWidth)  / Math.max(this.ngxScaleContainer.width , 1),
      (scale.height || this.element.nativeElement.offsetHeight) / Math.max(this.ngxScaleContainer.height, 1),
    );

    this.renderer.setStyle(
      this.element.nativeElement.children[0],
      'transform',
      `translate(
        ${-50 * (1 - calculatedScale)}%,
        ${-50 * (1 - calculatedScale)}%
      )
      scale(${calculatedScale})`
    );

    // Calculates the padding of the container
    const heightThreshold =
      ((scale.width  || this.element.nativeElement.offsetWidth) * this.ngxScaleContainer.height) / this.ngxScaleContainer.width;

    let paddingTop = 0;
    let paddingLeft = 0;

    (scale.height || this.element.nativeElement.offsetHeight) > heightThreshold
      ? paddingTop  = Math.floor(((scale.height || this.element.nativeElement.offsetHeight)
        - this.ngxScaleContainer.height * calculatedScale) / 2)

      : paddingLeft = Math.floor(((scale.width  || this.element.nativeElement.offsetWidth)
        - this.ngxScaleContainer.width  * calculatedScale) / 2);

    this.renderer.setStyle(this.element.nativeElement, 'padding-top' , `${paddingTop }px`);
    this.renderer.setStyle(this.element.nativeElement, 'padding-left', `${paddingLeft}px`);
  }

}
