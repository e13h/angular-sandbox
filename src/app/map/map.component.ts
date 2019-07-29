import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LeafletMouseEvent } from 'leaflet';

@Component({
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map = new L.Map('map', {
    center: new L.LatLng(40.731253, -73.996139),
    zoom: 12,
  });

  constructor() {
    this.map.on('click', (e: LeafletMouseEvent) => {
      let marker = L.marker(e.latlng)
      .bindPopup('Popup')
      .addTo(this.map)
      .openPopup();
    });
  }
  ngOnInit() {
  }

}
