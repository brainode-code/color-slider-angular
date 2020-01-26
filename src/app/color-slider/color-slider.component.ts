import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements OnInit {
  hues = [...Array(360).keys()];
  hue = 200;
  saturation = 100;
  lightness = 50;

  constructor() { }

  ngOnInit() {
  }

  getColor(hue: number) {
    return `hsl(${hue}, 100%, 50%)`;
  }

  getSelectedColor() {
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  }

}
