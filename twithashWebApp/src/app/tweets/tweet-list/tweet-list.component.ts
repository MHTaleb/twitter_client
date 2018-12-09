import { Component, OnInit } from '@angular/core';
import { BreakPointService } from '../../providers/break-point.service';
import { ReactiveTwitterSpringService } from '../../reactive/reactive-twitter-spring.service';
import { ITweet } from '../../reactive/model/itweet';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {


    list_div_class;
    search_input_class;

    search_results: ITweet[] = new Array();
    subscribe: Subscription = new Subscription();
    constructor(private tweetService: ReactiveTwitterSpringService) { }


    search(tag) {

        this.search_results = new Array();
        this.subscribe.unsubscribe();
        this.subscribe = new Subscription();
        this.subscribe.add(this.tweetService.search(tag).subscribe(tweet => {
            this.search_results.push(tweet);
            console.log(tweet);
        }));
        console.log('array contains ' + this.search_results);

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
