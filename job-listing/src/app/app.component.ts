import { Component } from '@angular/core';
import { JobListService } from './job-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'job-listing';
  constructor(private jobListService: JobListService){}
}
