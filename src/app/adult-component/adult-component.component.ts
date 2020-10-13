import { Component, Input, OnInit } from '@angular/core';
import {Data} from '../reddit-interface';

@Component({
  selector: 'app-adult-component',
  templateUrl: './adult-component.component.html',
  styleUrls: ['./adult-component.component.css']
})
export class AdultComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  @Input() thePost: Data;

}
