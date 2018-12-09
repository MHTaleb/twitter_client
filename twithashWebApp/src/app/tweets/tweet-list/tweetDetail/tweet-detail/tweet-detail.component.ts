import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {


    @Input() detail;
  constructor() { }

  ngOnInit() {
  }

}
