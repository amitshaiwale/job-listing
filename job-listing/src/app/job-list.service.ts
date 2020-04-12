import { Injectable, EventEmitter } from '@angular/core';
import { JobList } from './job-list.model';
import * as Data from '../app/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  jobList: JobList[];
  backupJobList = new EventEmitter<JobList[]>();
  lst: JobList[];
  clearList: boolean = false;
  language = new EventEmitter<string>();

  constructor() { 
    this.jobList = (Data as any).default;
  }

  getJobList() {
      return this.jobList;
  }

  getBackupList(){
    this.lst = (Data as any).default;
    return this.lst;
  }

  filterList(lang){
    const fltr = this.jobList.filter(
      item => {
        if(item['languages'] != undefined){
          if(item.languages.includes(lang)){
            return true;
          }
        }
      }
    );
    this.jobList = fltr;
    console.log(this.jobList);
    
    return this.jobList;
  }

  reverseFilterList(languageArray){
    console.log(languageArray);
    
    let originalData = (Data as any).default;
    if(languageArray.length > 0){
      languageArray.map(
        item => {
          const filterList = originalData.filter(
            itm => {
              if(itm['languages'] != undefined){
                if(itm.languages.includes(item)){
                  return true;
                }
              }
            }
          )
          console.log(filterList);
          this.backupJobList.emit(filterList);
        }
      )
    }
     
  }

}
