import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveTwitterSpringService } from './reactive-twitter-spring.service';
import { ITweet } from './model/itweet';

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [
      ReactiveTwitterSpringService
  ]
})
export class ReactiveModule { }
