import {Injectable} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Freelancers } from '../models/freelancers.model';
import { DEFAULT_PASSING_PARAMS_EDIT } from '../shared/constants';

@Injectable({
    providedIn: 'root'
})
export class ShareService {
    
    reloadDashboard = new Subject<boolean>();
    passingParamsForEdit = new BehaviorSubject<Freelancers>(DEFAULT_PASSING_PARAMS_EDIT);
    constructor() {}

}
