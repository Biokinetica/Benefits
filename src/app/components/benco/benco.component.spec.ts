import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BencoComponent } from './benco.component';

describe('BencoComponent', () => {
  let component: BencoComponent;
  let fixture: ComponentFixture<BencoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BencoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
