import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childInputProperty: any;
  @Input() childInputProperty11: any;
  @Output() passDataToParent = new EventEmitter<any>(); // Pass data child to parent

  constructor() { }

  ngOnInit(): void {
  }

  PassDataToParentComp() {
    debugger

    let abc = {
      "jigar":"fds",
      "dasdsa":"fddsadsads",
      childInputProperty : this.childInputProperty
    }

    let list =[
      {
        "jigar":"fds",
        "dasdsa":"fddsadsads",
        childInputProperty : this.childInputProperty
      },
      {
        "jigar":"fds",
        "dasdsa":"fddsadsads",
        childInputProperty : this.childInputProperty
      }
    ]


    this.passDataToParent.emit(list);
  }
}
