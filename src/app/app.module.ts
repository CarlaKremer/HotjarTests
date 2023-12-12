import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxHotjarModule } from 'ngx-hotjar';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHotjarModule.forRoot(environment.hj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
