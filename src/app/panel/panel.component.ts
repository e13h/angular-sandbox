import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input('listItems') private _listItems: any;
  @Input('topImageUrl') private _imageUrl: string;
  private _dateTimeUpdated: Date;
  private _range: number;

  constructor() {
    this._dateTimeUpdated = new Date();
  }

  ngOnInit(): void {
    let imageTopRatio = 3.5;
    let placeholderHeight = document.getElementById("card").offsetWidth / imageTopRatio;
    let imageTop = <HTMLImageElement> document.getElementById("imageTop");
    imageTop.height = placeholderHeight;
    imageTop.addEventListener("load", () => {
      console.log("image loaded!");
      imageTop.style.height = "100%";
    });

    document.getElementById("footer").addEventListener("mouseenter", () => {
      document.getElementById("timeSinceUpdate").textContent = `Last updated ${ this.formatTimeSinceUpdate(this.calculateTimeSinceLastUpdate()) } ago`;
    });
  }

  calculateTimeSinceLastUpdate() {
    return Date.now() - this._dateTimeUpdated.getTime();
  }

  formatTimeSinceUpdate(millis: number) {
    let seconds = millis / 1000;
    if (seconds < 1.5) {
      return `${seconds.toFixed(0)} sec`;
    }
    if (seconds < 60) {
      return `${seconds.toFixed(0)} secs`;
    }
    let minutes = seconds / 60;
    if (minutes < 1.5) {
      return `${minutes.toFixed(0)} min`;
    }
    if (minutes < 60) {
      return `${minutes.toFixed(0)} mins`;
    }
    let hours = minutes / 60;
    if (hours < 1.5) {
      return `${hours.toFixed(0)} hr`;
    }
    if (hours < 24) {
      return `${hours.toFixed(0)} hrs`;
    }
    let days = hours / 24;
    if (days < 1.5) {
      return `${days.toFixed(0)} day`;
    }
    return `${days.toFixed(0)} days`;
  }
}
