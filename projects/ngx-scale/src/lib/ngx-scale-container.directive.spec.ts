import { ElementRef, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';

import { NgxScaleContainerDirective } from './ngx-scale-container.directive';


describe('NgxScaleDirective', () => {
  it('should create an instance', () => {
    inject([ElementRef, Renderer2], (element: ElementRef, renderer: Renderer2) => {
      const directive = new NgxScaleContainerDirective(element, renderer);
      expect(directive).toBeTruthy();
    });
  });
});
