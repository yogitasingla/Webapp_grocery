import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhVerifyComponent } from './ph-verify/ph-verify.component';
import{MatInputModule,MatCardModule,MatButtonModule,MatAutocompleteModule,MatSelectModule,MatRadioModule,
  MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatIconModule,MatToolbarModule,
  MatListModule,MatExpansionModule, MatMenuModule,MatDividerModule,MatStepperModule,MatTableModule,
  MatPaginatorModule,MatSortModule,MatDialogModule,MatSnackBarModule,MatGridListModule} from '@angular/material';
  
  import {FormsModule} from "@angular/forms";
  import { NgOtpInputModule } from  'ng-otp-input';
  import { RouterModule, Routes } from '@angular/router';
  import{ReactiveFormsModule} from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    PhVerifyComponent,
    OtpComponent,
    LocationComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    NgOtpInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdSAnHIs9l4jTCGgB0hPTKJqLMSzZODyE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
