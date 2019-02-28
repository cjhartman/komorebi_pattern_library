import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  colors: any[] = [
    {
      color: 'base',
      contentName: 'Fall',
      contentValue: '#963A59'
    },
    {
      color: 'secondary',
      contentName: 'Sky',
      contentValue: '#03B5AA'
    },
    {
      color: 'blue',
      contentName: 'Shadow Blue',
      contentValue: '#0C1B33'
    },
    {
      color: 'green',
      contentName: 'Sunsoaked Green',
      contentValue: '#DBFE87'
    },
    {
      color: 'brown',
      contentName: 'Shimmering Gold',
      contentValue: '#C2BA51'
    },
    {
      color: 'offWhite',
      contentName: 'Bright',
      contentValue: '#F0F0F0'
    },
    {
      color: 'selectedOffWhite',
      contentName: 'Silver Light',
      contentValue: '#DCDFDF'
    },
    {
      color: 'dark',
      contentName: 'Night',
      contentValue: '#161616'
    }
  ];

  constructor() { }

  ngOnInit() { }

  colorSwatch(colors: any) {
    switch (colors) {
      case 'base':
        return '#963A59';
      case 'secondary':
        return '#03B5AA';
      case 'blue':
        return '#0C1B33';
      case 'green':
        return '#DBFE87';
      case 'brown':
        return '#C2BA51';
      case 'offWhite':
        return '#F0F0F0';
      case 'selectedOffWhite':
        return '#DCDFDF';
      case 'dark':
        return '#161616';
    }
  }

}
