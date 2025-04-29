import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

  list: any = []

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    debugger
    this._userService.GetUser().subscribe(
      (res) => {
        debugger
        this.list = res;
        localStorage.setItem("token", "sdfjkshfhsfjksdkfhdjskfdfsfsdfkkfds")
        localStorage.getItem("token");
        //this.people123 = res;
      },
      (error) => {
      }
    );

    // Login > Token > 

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
