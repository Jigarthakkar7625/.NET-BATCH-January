import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    let id =  this.ar.snapshot.params["id"]
    if(id){
      //EDIT
    }
    else{
      //ADD
    }
  }

}
