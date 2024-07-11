import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { SelectPlanComponent } from './pages/select-plan/select-plan.component';
import { PickAddOnsComponent } from './pages/pick-add-ons/pick-add-ons.component';
import { FinishingUpComponent } from './pages/finishing-up/finishing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SelectPlanComponent,
    PickAddOnsComponent,
    FinishingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
