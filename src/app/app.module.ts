import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgxBaseStateDevtoolsModule,
  NgxBaseStateDevtoolsConfig,
  NGX_BASE_STATE_DEVTOOLS_CONFIG
} from 'ngx-base-state';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBaseStateDevtoolsModule
  ],
  providers: [
    {
      provide: NGX_BASE_STATE_DEVTOOLS_CONFIG,
      useValue: new NgxBaseStateDevtoolsConfig({
        isEnabled: true
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
