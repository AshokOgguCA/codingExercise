import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FavoriteJobsComponent } from './favorite-jobs/favorite-jobs.component';
import { JobService } from './job.service';
import { RouterModule } from '@angular/router';
import { CompactJobViewComponent } from './compact-job-view/compact-job-view.component';
import { BookListNewComponent } from './book-list-new/book-list-new.component';
//import { BookListComponent } from './book-list/book-list.component';
//import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    JobListComponent,
    JobDetailsComponent,
    FavoriteJobsComponent,
    CompactJobViewComponent,
    BookListNewComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
