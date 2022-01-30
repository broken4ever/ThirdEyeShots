import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesHeaderComponent } from './modules/header/components/tes-header/tes-header.component';
import { TesFooterComponent } from './modules/footer/components/tes-footer/tes-footer.component';
import { BlogHomeComponent } from './modules/blog/components/blog-home/blog-home.component';
import { BlogDetailsComponent } from './modules/blog/components/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TesHeaderComponent,
    RoutingComponents,
    TesFooterComponent,
    BlogHomeComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
