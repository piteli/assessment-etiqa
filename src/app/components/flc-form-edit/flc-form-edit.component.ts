import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FreelancerCreatedResponseApi } from 'src/app/models/api-response.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Freelancers } from 'src/app/models/freelancers.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flc-form-edit',
  templateUrl: './flc-form-edit.component.html',
  styleUrls: ['./flc-form-edit.component.css']
})
export class FlcFormEditComponent {
  form: FormGroup;
  submitted: boolean = false;
  subFormUpdate?: Subscription;
  subParamsPass?: Subscription;
  data?: Freelancers;
  dataId?: string;

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private shareService: ShareService
    ) {
    this.form = new FormGroup({
      phoneNumber: new FormControl('', [Validators.required]),
      skillsets: new FormControl('', [Validators.required]),
      hobby: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }

  ngOnInit(): void {
    this.subParamsPass = this.shareService.passingParamsForEdit
      .subscribe((data: any) => {
        this.dataId = data._id;
        delete data._id;
        delete data.username;
        delete data.email;
        this.form.setValue(data);
      }, () => {
        this.router.navigateByUrl('/');
      })
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  update() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }

    const phoneNumber = this.form.get('phoneNumber')?.value;
    const skills = this.form.get('skillsets')?.value;
    const hobby = this.form.get('hobby')?.value;
    let skillsets = skills?.join();

    const payload = { phoneNumber, skillsets, hobby };

    this.subFormUpdate = this.apiService.put(environment.api.freelancerUpdate + '/' + this.dataId, payload)
      .subscribe((resJson: FreelancerCreatedResponseApi) => {
        alert("Successfully updated!");
        this.router.navigateByUrl('/');
      }, (error: HttpErrorResponse) => {
        //we can create custom modal here to show any error message. I will just use normal alert
        alert(error.message);
      })
  }

  ngOnDestroy(): void {
    this.subFormUpdate?.unsubscribe();
  }
}
