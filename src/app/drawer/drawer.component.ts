import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { mapDrawerAnim } from './../animations/index';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [mapDrawerAnim]
})
export class DrawerComponent implements OnInit {

  @Input() drawerCurrentState: string;
  @Output() childStateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeState() {
    this.drawerCurrentState = this.drawerCurrentState === 'initial' ? 'final' : 'initial';
    this.childStateChange.emit(this.drawerCurrentState);
  }
}
