import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.scss']
})
export class HospitalDetailComponent implements OnInit {

  routeSub: Subscription;
  // form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private generalServices : GeneralService,
    ) { 
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id

    });
  }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.generalServices.getHospitalById(params['id']).subscribe((resp:any)=>{
        console.log(resp)
        // this.hospitals = resp
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
