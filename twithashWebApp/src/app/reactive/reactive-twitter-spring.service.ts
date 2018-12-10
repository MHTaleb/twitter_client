import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ITweet } from './model/itweet';

@Injectable({
    providedIn: 'root'
})
export class ReactiveTwitterSpringService {

    tweetSubject = new BehaviorSubject<ITweet>(new ITweet);

    currentTweet = this.tweetSubject.asObservable();

    tweetTag: string;

    baseUrl = 'http://localhost:8081/search';

    search(tag: string) {

        const url = this.baseUrl + '/' + tag.trim().split(' ').join('_');

        return Observable.create(
            observer => {
                const enventSource = new EventSource(url);
                enventSource.onmessage = (message) => {
                    const json = JSON.parse(message.data);
                    const tweetReceived = new ITweet(
                        json.tweetID.name, json.tweetID.text, json.tag, json.userImage, json.country, json.placeFullName
                        );
                    console.log(
                        tweetReceived
                    );
                    this.tweetSubject.next(
                        tweetReceived
                    );
                    observer.next(
                        tweetReceived
                    );
                };
                enventSource.onerror = (error) => {
                    if (enventSource.readyState === 0) {
                        console.log('The stream has been closed by the server.');
                        enventSource.close();
                        observer.complete();
                    } else {
                        observer.error('EventSource error: ' + error);
                    }
                };
                return () => enventSource.close();
            }
        );
    }

    constructor() { }
}
