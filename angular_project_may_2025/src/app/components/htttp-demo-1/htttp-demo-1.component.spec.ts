import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtttpDemo1Component } from './htttp-demo-1.component';

describe('HtttpDemo1Component', () => {
  let component: HtttpDemo1Component;
  let fixture: ComponentFixture<HtttpDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtttpDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtttpDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
