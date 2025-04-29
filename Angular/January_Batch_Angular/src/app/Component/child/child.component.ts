import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() childInputProperty: any; // Property Decorator
  @Input() childInputProperty11: any; // Property Decorator
  @Output() passDataToParent = new EventEmitter<any>(); // Pass data child to parent
  @Output() passDataToParent1 = new EventEmitter<any>(); // Pass data child to parent

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   debugger
  //   console.log("CALLED ngOnChanges" + changes);
  // }

  ngOnInit(): void {
   // console.log("CALLED ngOnInit")
  }

  // ngDoCheck(){
  //   console.log("CALLED ngDoCheck")
  // }

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


    this.passDataToParent.emit(this.childInputProperty);
  }

  ngOnDestroy(){
    debugger
    console.log("called ngOnDestroy")
  }
}
