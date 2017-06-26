import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BarGraphComponent } from './d3-bar-graph.component';

describe('D3BarGraphComponent', () => {
  let component: D3BarGraphComponent;
  let fixture: ComponentFixture<D3BarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
