import { Component, OnInit, HostListener } from '@angular/core';
import { BreakPointService } from './providers/break-point.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'twithashWebApp';
    css_parent = '';
    css_header = '';
    breakPointValue: number;
    constructor() {
    }

    ngOnInit() {
        if (window.innerWidth > 768) {
            BreakPointService.css_behaviour.next(JSON.stringify(BreakPointService.normal));
        } else {
            BreakPointService.css_behaviour.next(JSON.stringify(BreakPointService.breakpoint));
        }
        BreakPointService.current_css.subscribe(value => {
            console.log('value is ' + value);
            this.setupCss(JSON.parse(value));
        });
    }
    setupCss(value: any): any {
        this.css_parent = value.css_parent;
        this.css_header = value.css_header;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        console.log();
        this.breakPointValue = window.innerWidth;
        console.log(this.breakPointValue);
        if (this.breakPointValue > 768) {
            console.log(JSON.stringify(BreakPointService.normal));
            BreakPointService.css_behaviour.next(JSON.stringify(BreakPointService.normal));
        } else {
            console.log(JSON.stringify(BreakPointService.breakpoint));
            BreakPointService.css_behaviour.next(JSON.stringify(BreakPointService.breakpoint));
        }
    }


}
