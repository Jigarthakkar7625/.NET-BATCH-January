import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent', //Name
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("txtDate") txtDate1 : ElementRef;
  parentProperty: any = "Jigar123456";
  constructor() { }

  ngOnInit(): void {
    console.log(this.txtDate1)
  }

  getDataFromChild(e: any) {
    debugger
    // var a = document.getElementById("txtDate")
    // $("#txtDate").val()
    this.parentProperty = e;
  }

  ngAfterViewInit() {
    debugger
    this.txtDate1.nativeElement.value = "BINA"
  }

  // Parent > Child
  // Child > Parent
}
