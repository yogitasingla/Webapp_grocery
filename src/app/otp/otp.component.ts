import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) {
    
   }
  
   verifyotp(){
    this.router.navigate(['/', 'location']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) 
    });
  }

  ngOnInit() {
  }

}
