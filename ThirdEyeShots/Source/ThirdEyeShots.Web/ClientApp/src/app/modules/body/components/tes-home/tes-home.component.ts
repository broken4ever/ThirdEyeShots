import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-tes-home',
  templateUrl: './tes-home.component.html',
  styleUrls: ['./tes-home.component.css']
})
export class TesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
      strings: ['SOFTWARE ENGINEER.', 'PHOTOGRAPHER.', 'TRAVELLER.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }

}
