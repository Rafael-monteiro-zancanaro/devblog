import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JstdComponent } from './jstd.component';

describe('JstdComponent', () => {
  let component: JstdComponent;
  let fixture: ComponentFixture<JstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JstdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
