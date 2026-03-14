import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoDevblogComponent } from './criacao-devblog.component';

describe('CriacaoDevblogComponent', () => {
  let component: CriacaoDevblogComponent;
  let fixture: ComponentFixture<CriacaoDevblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoDevblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoDevblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
