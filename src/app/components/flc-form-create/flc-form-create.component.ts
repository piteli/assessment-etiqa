import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FreelancerCreatedResponseApi } from 'src/app/models/api-response.model';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flc-form-create',
  templateUrl: './flc-form-create.component.html',
  styleUrls: ['./flc-form-create.component.css']
})
export class FlcFormCreateComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  subscription?: Subscription;

  constructor(private apiService: ApiService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      skillsets: new FormControl('', [Validators.required]),
      hobby: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }

  ngOnInit(): void {}

  create() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;
    this.subscription = this.apiService.post(environment.api.freelancerCreate, formData)
      .subscribe((resJson: FreelancerCreatedResponseApi) => {
        alert('Successfully created freelancer!');
        this.router.navigateByUrl('/');
      }, (error: HttpErrorResponse) => {
        //we can create custom modal here to show any error message. I will just use normal alert
        alert(error.message);
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
