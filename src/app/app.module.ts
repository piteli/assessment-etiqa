import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlcDashboardComponent } from './components/flc-dashboard/flc-dashboard.component';
import { FlcFormCreateComponent } from './components/flc-form-create/flc-form-create.component';
import { FlcFormEditComponent } from './components/flc-form-edit/flc-form-edit.component';
import { FlcFormComponent } from './components/flc-form/flc-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlcFormDeleteComponent } from './components/modals/flc-form-delete/flc-form-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    FlcDashboardComponent,
    FlcFormCreateComponent,
    FlcFormEditComponent,
    FlcFormComponent,
    FlcFormDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
