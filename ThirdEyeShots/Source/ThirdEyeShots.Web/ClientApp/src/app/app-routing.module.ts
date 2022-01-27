import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TesHomeComponent } from './modules/body/components/tes-home/tes-home.component';

const routes: Routes = [
  { path: 'home', component: TesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [TesHomeComponent]
