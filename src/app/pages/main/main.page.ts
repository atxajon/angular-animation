import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public currentState: string = 'initial';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.currentState = (this.currentState === 'initial') ? 'final' : 'initial'; 
  }

  processChildStateChange(childCalledState) {
    this.currentState = childCalledState;
  }

}
