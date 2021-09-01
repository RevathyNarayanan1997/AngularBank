import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComfirmationComponent } from './delete-comfirmation.component';

describe('DeleteComfirmationComponent', () => {
  let component: DeleteComfirmationComponent;
  let fixture: ComponentFixture<DeleteComfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
