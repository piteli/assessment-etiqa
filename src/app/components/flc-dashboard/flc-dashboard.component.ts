import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Freelancers } from 'src/app/models/freelancers.model';
import { ApiService } from 'src/app/services/api.service';
import { ShareService } from 'src/app/services/share.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flc-dashboard',
  templateUrl: './flc-dashboard.component.html',
  styleUrls: ['./flc-dashboard.component.css']
})
export class FlcDashboardComponent implements OnInit {

  freelancers: any[] = [];
  subscription?: Subscription;
  subShare?: Subscription;
  subDelete?: Subscription;

  constructor(
    private router: Router, 
    private shareService: ShareService,
    private apiService: ApiService,
    ) {}

  ngOnInit(): void {
    this.reloadDashboard();
  }

  reloadDashboard() {
    // this is where you load dashboard data
    this.subscription = this.apiService.get(environment.api.freelancers)
      .subscribe((resJson: Freelancers[]) => {
        if(resJson.length > 0) {
          const freelancers = resJson.map((item: Freelancers) => {
            const skillsets = item.skillsets.split(',');
            return {...item, skillsets};
          });
        this.freelancers = freelancers;
        }
      }, (error: HttpErrorResponse) => {
        //we can create modal and add refresh button to let user have control. I will just normal alert instead.
        alert(error.message);
      });
  }

  edit(data: Freelancers) {
    this.router.navigateByUrl('/freelancer/edit');
    this.shareService.passingParamsForEdit.next(data);
  }

  delete(data: Freelancers) {
    //we can show up the delete modal for confirmation. But.. I will do instant delete instead.
    this.subDelete = this.apiService.delete(environment.api.freelancerDelete + '/' + data._id)
      .subscribe(() => {
        alert('Successfully delete freelancers');
        window.location.reload();
      }, (error: HttpErrorResponse) => {
        //we can create modal and add refresh button to let user have control. I will just normal alert instead.
        alert(error.message);
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subShare?.unsubscribe();
  }
}
