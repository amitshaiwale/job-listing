import { Component, OnInit } from '@angular/core';
import { JobListService } from '../job-list.service';
import { JobList } from '../job-list.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobListArray: JobList[];

  constructor(private jobList: JobListService) { }

  ngOnInit(): void {
    this.jobListArray = this.jobList.getJobList();
    this.jobList.backupJobList.subscribe(
      item => this.jobListArray = item
    )
  }

  getLanguage(lang) {
    this.jobList.language.emit(lang);
    this.jobListArray =  this.jobList.filterList(lang);
  }

}
