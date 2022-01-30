import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './modules/blog/components/blog-details/blog-details.component';
import { BlogHomeComponent } from './modules/blog/components/blog-home/blog-home.component';
import { TesHomeComponent } from './modules/body/components/tes-home/tes-home.component';

const routes: Routes = [
  { path: 'home', component: TesHomeComponent },
  { path: 'blog', component: BlogHomeComponent },
  { path: 'blogdetails', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [TesHomeComponent]
