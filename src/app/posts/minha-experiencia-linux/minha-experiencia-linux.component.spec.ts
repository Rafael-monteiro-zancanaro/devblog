import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaExperienciaLinuxComponent } from './minha-experiencia-linux.component';

describe('MinhaExperienciaLinuxComponent', () => {
  let component: MinhaExperienciaLinuxComponent;
  let fixture: ComponentFixture<MinhaExperienciaLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaExperienciaLinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaExperienciaLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
