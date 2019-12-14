import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule, AppRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwebpComponent } from './awebp/awebp.component';
import { JavaComponent } from './java/java.component';
import { SpringcoreComponent } from './springcore/springcore.component';
import { ProjectrefComponent } from './projectref/projectref.component';
import { MeanComponent } from './mean/mean.component';
import { AdvjavaComponent } from './advjava/advjava.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponents,
    AwebpComponent,
    JavaComponent,
    SpringcoreComponent,
    ProjectrefComponent,
    MeanComponent,
    AdvjavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
