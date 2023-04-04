import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
// import { JalaliMomentDateModule } from 'material-jalali-moment-adapter';
import { JalaliMomentDateModule } from 'projects/material-jalali-moment-adapter/src/lib/adaptor';
import { GregComponent } from './greg/greg.component';
import { JalaliComponent } from './jalali/jalali.component';
import { MulticalendarRoutingModule } from './multicalendar-routing.module';



@NgModule({
  declarations: [
    GregComponent,
    JalaliComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    JalaliMomentDateModule,
    MulticalendarRoutingModule
  ]
})
export class MulticalendarModule { }
