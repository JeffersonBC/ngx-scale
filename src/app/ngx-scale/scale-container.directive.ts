import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { ResizeSensor } from 'css-element-queries';

@Directive({
  selector: '[scaleContainer]',
})
export class ScaleContainerDirective implements OnInit {

  @Input() scaleContainer: { width: number, height: number } = { width: 1, height: 1 };


  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement.children[0],
      'width',
      `${this.scaleContainer.width}px`,
    );

    this.renderer.setStyle(
      this.element.nativeElement.children[0],
      'height',
      `${this.scaleContainer.height}px`,
    );

    new ResizeSensor(this.element.nativeElement, () => this.updateScale());
    this.updateScale();
  }

  public updateScale() {
    // Calculates the scale of the internal element
    const calculatedScale = Math.min(
      this.element.nativeElement.offsetWidth / Math.max(this.scaleContainer.width, 1),
      this.element.nativeElement.offsetHeight / Math.max(this.scaleContainer.height, 1),
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
      (this.element.nativeElement.offsetWidth * this.scaleContainer.height) / this.scaleContainer.width;

    let paddingTop = 0;
    let paddingLeft = 0;

    this.element.nativeElement.offsetHeight > heightThreshold
      ? paddingTop  = Math.floor((this.element.nativeElement.offsetHeight - this.scaleContainer.height * calculatedScale) / 2)
      : paddingLeft = Math.floor((this.element.nativeElement.offsetWidth  - this.scaleContainer.width  * calculatedScale) / 2);

    this.renderer.setStyle(this.element.nativeElement, 'padding-top' , `${paddingTop }px`);
    this.renderer.setStyle(this.element.nativeElement, 'padding-left', `${paddingLeft}px`);
  }

}
