import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName: string = "Jigar";
  lastName: any = [];
  id = "txtId";
  isAvtive = true;

  constructor() { }

  ngOnInit(): void {

    // const temp = 10;
    // temp  = 15;

    // let temp = 10;
    // temp = 15;

    // var and let 


  }

  onSaveClick() {
    debugger
    console.log(this.firstName);
    // alert(1);
  }

  // onMouseenter() {
  //   debugger
  //   alert("onMouseenter ENTER");
  // }

}

// x = 10;

// var x;

// function GetData() {



//   if(true)
//     {
//     var x = 10;
//     let y = 10;

//   }
//   console.log(x);
//   console.log(y);

// }
