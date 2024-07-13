import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { SelectPlanComponent } from './pages/select-plan/select-plan.component';
import { PickAddOnsComponent } from './pages/pick-add-ons/pick-add-ons.component';
import { FinishingUpComponent } from './pages/finishing-up/finishing-up.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SelectPlanComponent,
    PickAddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent,
    CapitalizePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
