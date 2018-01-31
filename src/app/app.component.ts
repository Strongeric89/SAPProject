import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Project Management Saprello';
  card = 'Card Name';

  options: any={
    removeOnSpill: true
  }

  constructor(private dragulaService: DragulaService) {


   }
 }
