import { NgxScaleModule } from './ngx-scale.module';

describe('NgxScaleModule', () => {
  let ngxScaleModule: NgxScaleModule;

  beforeEach(() => {
    ngxScaleModule = new NgxScaleModule();
  });

  it('should create an instance', () => {
    expect(ngxScaleModule).toBeTruthy();
  });
});
