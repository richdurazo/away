import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarnavLinksComponent } from './sidbarnav-links.component';

describe('SidbarnavLinksComponent', () => {
  let component: SidbarnavLinksComponent;
  let fixture: ComponentFixture<SidbarnavLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidbarnavLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidbarnavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
