import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({ // Class decorator
  selector: 'app-parent', //Name
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("txtDate") txtDate1: ElementRef;
  parentProperty: any;
  isVisible = true;
  money = 10;
  day = 10;
  UserList: any = []
  color = 'red';

  constructor() {
    console.log("CALLED constructor")
  }

  // Directived : 
  // Component directives
  // Structure directives >> ngIf, ngfor, ngSwitch >>layout
  // Attribute directives >> NgClass, NGStyle >> HTML Control 


  ngOnInit(): void {
    this.parentProperty = "fd"
    //API call, Initialize

    this.UserList=[
      {
        FirstName : "J",
        LastName : "T",


      },
      {
        FirstName : "B",
        LastName : "P",


      }
      ,
      {
        FirstName : "H",
        LastName : "SHAH",


      }
    ]

    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
      
    // }

    console.log("CALLED ngOnInit")
    // console.log(this.txtDate1)
  }

  ngDoCheck(): void {
    // this.parentProperty = "fd"
    //API call, Initialize

    console.log("CALLED ngDoCheck")
    // console.log(this.txtDate1)
  }

  ngAfterContentInit() {
    console.log("CALLED ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("CALLED ngAfterContentChecked")
  }

  getDataFromChild(e: any) {
    // debugger
    // var a = document.getElementById("txtDate")
    // $("#txtDate").val()
    this.parentProperty = e;
  }

  ngAfterViewInit() { // After HTML rendered
    console.log("CALLED ngAfterViewInit")
    // debugger
    // this.txtDate1.nativeElement.value = "BINA"
  }

  ngAfterViewChecked() { // After HTML rendered
    console.log("CALLED ngAfterViewChecked")
    // debugger
    // this.txtDate1.nativeElement.value = "BINA"
  }

  // ngDestroy(){
  //   console.log("parent called ngDestroy")
  // }

  // Parent > Child
  // Child > Parent
}
