import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetDetailComponent } from './tweet-list/tweetDetail/tweet-detail/tweet-detail.component';
import { BreakPointService } from '../providers/break-point.service';

@NgModule({
    declarations: [TweetListComponent, TweetDetailComponent],
    exports: [TweetListComponent, TweetDetailComponent],
    imports: [
        CommonModule
    ],
    providers: [BreakPointService]
})
export class TweetsModule { }
