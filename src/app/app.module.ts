import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';

import {HttpClientModule} from '@angular/common/http';
import { AdultComponentComponent } from './adult-component/adult-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    AdultComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
