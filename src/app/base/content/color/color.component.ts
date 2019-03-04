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
      contentName: 'Shining Green',
      contentValue: '#AFF7B5'
    },
    {
      color: 'secondary',
      contentName: 'Sky',
      contentValue: '#77ECFF'
    },
    {
      color: 'blue',
      contentName: 'Shadow Blue',
      contentValue: '#0C1B33'
    },
    {
      color: 'green',
      contentName: 'Layered Leaves',
      contentValue: '#BECE96'
    },
    {
      color: 'brown',
      contentName: 'Wood',
      contentValue: '#B29E5E'
    },
    {
      color: 'offWhite',
      contentName: 'Bright',
      contentValue: '#FCFCFF'
    },
    {
      color: 'selectedOffWhite',
      contentName: 'Silver Light',
      contentValue: '#DCDFDF'
    },
    {
      color: 'dark',
      contentName: 'Night',
      contentValue: '#1E1E24'
    }
  ];

  constructor() { }

  ngOnInit() { }

  colorSwatch(colors: any) {
    switch (colors) {
      case 'base':
        return '#AFF7B5';
      case 'secondary':
        return '#77ECFF';
      case 'blue':
        return '#0C1B33';
      case 'green':
        return '#BECE96';
      case 'brown':
        return '#B29E5E';
      case 'offWhite':
        return '#FCFCFF';
      case 'selectedOffWhite':
        return '#DCDFDF';
      case 'dark':
        return '#1E1E24';
    }
  }

}
