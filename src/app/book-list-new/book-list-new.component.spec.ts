import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListNewComponent } from './book-list-new.component';

describe('BookListNewComponent', () => {
  let component: BookListNewComponent;
  let fixture: ComponentFixture<BookListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
