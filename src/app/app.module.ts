import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
