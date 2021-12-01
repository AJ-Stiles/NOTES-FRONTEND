import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  //@ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
    //work out if there is a text overflow and if not, then hide the truncator
    console.log(this.truncator);
  }

}
