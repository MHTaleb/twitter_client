import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BreakPointService } from '../../providers/break-point.service';
import { ReactiveTwitterSpringService } from '../../reactive/reactive-twitter-spring.service';
import { ITweet } from '../../reactive/model/itweet';
import { Subscription, Subject } from 'rxjs';

@Component({
    selector: 'app-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {


    list_div_class;
    search_input_class;

    selectedTweet: ITweet;
    public search_results$ = new Subject<any>();
    search_results: ITweet[] = new Array();
    subscribe: Subscription = new Subscription();
    constructor(private tweetService: ReactiveTwitterSpringService, private cdr: ChangeDetectorRef) { }
    visible = 'none';

    search(tag) {

        this.search_results = new Array();
        this.subscribe.unsubscribe();
        this.subscribe = new Subscription();
        this.search_results$ = new Subject<any>();
        this.subscribe.add(this.tweetService.search(tag).subscribe(tweet => {
            this.search_results.push(tweet);
            this.search_results = this.search_results.slice();
            this.cdr.detectChanges();
            this.search_results$.next(this.search_results);
            console.log(tweet);
        }));
        console.log('array contains ' + this.search_results);

    }



    setSelected(tweet) {
        console.log('selecting and showing');
        this.selectedTweet = tweet;
        this.visible = 'block';
        this.cdr.detectChanges();
    }


    ngOnInit() {

        BreakPointService.current_css.subscribe(value => {
            console.log('value is ' + value);
            this.setupCss(JSON.parse(value));
        });


    }

    setupCss(value: any): any {
        this.list_div_class = value.list_div_class;
        this.search_input_class = value.search_input_class;
    }
}
