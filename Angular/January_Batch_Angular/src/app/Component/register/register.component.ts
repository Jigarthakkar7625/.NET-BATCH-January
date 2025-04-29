import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Validation >> Form Control >> Reactive form
  // 1. Form Control
  // 2. Form Group >> Multiple Form Control 
  // 3. Form Builder>> DynaMIC control,

  isSubmit  = false;
  form: FormGroup

  constructor(private ar: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void { // Initianlization

    this.form = this.fb.group({
      userName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],

      password: ["", [Validators.required, Validators.maxLength(10),  Validators.minLength(6)]]
    })


    debugger
    let id = this.ar.snapshot.params["id"]
    if (id) {
      //EDIT
    }
    else {
      //ADD
    }
  }

  Save() {
    console.log(this.form);
    if (this.form.valid) {
      this.isSubmit = false;
      let a = this.form.controls["userName"].value;

      this.form.get("userName")?.errors;


    }
    else{
      this.isSubmit = true;
    }
    debugger
  }

}
