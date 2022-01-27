import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesHeaderComponent } from './modules/header/components/tes-header/tes-header.component';
import { TesFooterComponent } from './modules/footer/components/tes-footer/tes-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TesHeaderComponent,
    RoutingComponents,
    TesFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
