import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { ContentComponent } from './content/content.component';
import { HospitalDetailComponent } from './hospital-detail/hospital-detail.component';

const routes: Routes = [
  {path:'doctors',component:DoctorsComponent},
  {path:'',component:ContentComponent},
  {path:'patients',component:PatientsComponent},
  {path:'specialties',component:SpecialtiesComponent},
  {path:'hospitals',component:HospitalsComponent},
  {path:'hospitals/:id',component:HospitalDetailComponent},  
  {path:'appointment',component:AppointmentComponent},  
];
export const routingComponents = [DoctorsComponent,PatientsComponent
  ,SpecialtiesComponent,HospitalsComponent,AppointmentComponent,ContentComponent,
  HospitalDetailComponent];
// Doctors
// Doctor_detail
// Patients
// Patient_detail
// Specialties
// Specialty_detail
// Hospitals
// Hospital_detail
// Content (main)
// Appointments
// Appointment_detail
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
}) 
export class AppRoutingModule { }
