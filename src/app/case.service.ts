import { Injectable } from '@angular/core';
import { CaseComponent } from './case/case.component';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor() { }

  getCases() : CaseComponent[] {
    return [new CaseComponent(1001, "case1", "West Valley City, Utah", 0.0, 0.0, true, new Date()),
      new CaseComponent(1002, "case2", "Salt Lake City, Utah", 1.2, 2.4, false, new Date()),
      new CaseComponent(1003, "case3", "Provo, Utah", 3.2, 2.9, false, new Date()),
      new CaseComponent(1004, "case4", "Draper, Utah", 5.2, 7.4, false, new Date())];
  }
}
