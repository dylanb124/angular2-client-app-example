import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleModule } from 'angular2-library-example';

export function createConfig(): string {
  return 'Config injection successful!';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SampleModule.forRoot(createConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
