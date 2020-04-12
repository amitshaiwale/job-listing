import { Component, OnInit } from '@angular/core';
import { JobListService } from '../job-list.service';
import { JobList } from '../job-list.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  jobList: JobList[];
  showLanguage: boolean = false;
  languageArray: string[] = [];

  constructor(private jobListService: JobListService) {}

  ngOnInit(): void {
    this.jobListService.language.subscribe(
      lang => {
        if(!this.languageArray.includes(lang)){
          this.showLanguage = true;
          this.languageArray.push(lang);
        } else if(this.languageArray.length > 0){
          this.showLanguage = true;
        }
      }
    );
  }

  clearFiters(){
    this.showLanguage = false;
    this.jobListService.backupJobList.emit(this.jobListService.getBackupList());
    this.languageArray = [];    
  }

  closeThislanguage(lang){
    const filteredLanguages = this.languageArray.filter(
      item => {
        if(item != lang) { return true }
      }
    );
    this.languageArray = filteredLanguages;
    this.jobListService.reverseFilterList(this.languageArray);
  }
}
