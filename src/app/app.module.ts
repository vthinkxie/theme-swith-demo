import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NzLayoutModule, NzButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
