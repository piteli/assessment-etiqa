import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlcDashboardComponent } from './components/flc-dashboard/flc-dashboard.component';
import { FlcFormComponent } from './components/flc-form/flc-form.component';
import { FlcFormCreateComponent } from './components/flc-form-create/flc-form-create.component';                               
import { FlcFormEditComponent } from './components/flc-form-edit/flc-form-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/freelancers', pathMatch: 'full' },
  { path: 'freelancers', component: FlcDashboardComponent },
  { path: 'freelancer', component: FlcFormComponent, children: [
    { path: 'create', component: FlcFormCreateComponent },
    { path: 'edit', component: FlcFormEditComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
