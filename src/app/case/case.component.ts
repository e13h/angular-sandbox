import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  constructor(private caseNumber: number,
    private name: string,
    private location: string,
    private latitude: number,
    private longitude: number,
    private isSelected: boolean,
    private dateOccurredOn: Date) {}
    
  ngOnInit() {
  }

}
