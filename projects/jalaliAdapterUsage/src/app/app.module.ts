import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialJalaliMomentAdapterModule } from 'material-jalali-moment-adapter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MaterialJalaliMomentAdapterModule } from 'projects/material-jalali-moment-adapter/src/lib/adaptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatInputModule,
    MaterialJalaliMomentAdapterModule, // <--- add this module
    // MatLuxonDateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
