import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
 usId:string
 tm:string
 otp:string

  constructor(private acrt:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.acrt.params.subscribe(
      prm=>this.usId=prm['usId'])

      this.acrt.queryParams.subscribe(prm=>{
 this.tm=prm['tm']
 this.otp=prm['otp']

      })
  }

}
