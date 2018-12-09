import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetsModule } from './tweets/tweets.module';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TweetsModule,
    ReactiveModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
