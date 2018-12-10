import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ITweet } from '../../../../reactive/model/itweet';

@Component({
    selector: 'app-tweet-detail',
    templateUrl: './tweet-detail.component.html',
    styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {


    @Input() detail: ITweet = new ITweet();
    @Input() visible = 'none';

    constructor(private cdr: ChangeDetectorRef) { }
    setInvisible() {
        console.log('hidding');
        this.visible = 'none';
        this.cdr.detectChanges();
    }

    ngOnInit() {
    }

}
