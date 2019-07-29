import { Component, OnInit } from '@angular/core';
import { CaseComponent } from '../case/case.component';
import { CaseService } from '../case.service';

@Component({
  selector: 'case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  cases: CaseComponent[];

  constructor(service: CaseService) {
    this.cases = service.getCases();
  }

  ngOnInit() {
  }

}
