import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './mustmatch';
import { UserModel } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService:AuthService,
              public router:Router) { }

  userItem = new UserModel("","",""); 
  formdata = new FormData();

  user={uname:'',
  password:''}
  

  loginUser () {
    
    this.authService.loginUser(this.user)
    .subscribe(
      res => {
        alert("successfull Login!!")
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/home'])
      }
    ) 
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else{

      this.authService.newUser(this.registerForm.value);
      alert('Signup Successfull!!')
      this.router.navigate(['/books']);

    }
  }
}
