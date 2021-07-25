import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  
  hospitals: Array<any> = []
  displayedColumns: string[] = ['position', 'name', 'date','actions'];
  
  constructor(
    private generalServices : GeneralService,
    private router: Router
  ) { 
    this.generalServices.getHospital().subscribe((resp:any)=>{
    console.log(resp)
    this.hospitals = resp
  })
  }

  ngOnInit(): void {
  }

  

  navigateTo(row: any) {
    console.log(row)
    this.router.navigate(['/hospitals/'+row]);
  } 

}
