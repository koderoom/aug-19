import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DacexamComponent } from './dacexam/dacexam.component';
import { AwebpComponent } from 'src/app/awebp/awebp.component';
import { JavaComponent } from 'src/app/java/java.component';
import { SpringcoreComponent } from 'src/app/springcore/springcore.component';

const routes: Routes = [
  { path: 'java', component: JavaComponent},
  { path: 'awebp', component: AwebpComponent},
  { path: 'springcore', component: SpringcoreComponent},

  { path: '',  redirectTo: '/awebp', pathMatch: 'full'},
  { path: 'home', component: AwebpComponent},

  { path: 'dacexam', component: DacexamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


export const AppRoutingComponents = [
  HomeComponent,
  DacexamComponent
];
