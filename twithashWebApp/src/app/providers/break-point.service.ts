import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreakPointService {

    static normal = {
        background: 'w3-light-grey',
        inputColor: 'w3-white',
        css_parent: 'w3-grey',
        css_header: 'w3-padding w3-black',
        list_div_class: 'w3-container w3-margin',
        search_input_class : 'w3-input  w3-hover-grey'
    };
    static breakpoint = {
        background: 'w3-white',
        inputColor: 'w3-white',
        css_parent: 'w3-grey',
        css_header: 'w3-padding w3-white',
        list_div_class : 'w3-container w3-padding-16 w3-margin w3-card-4 w3-black',
        search_input_class : 'w3-input  w3-hover-grey'
    };


    static css_behaviour = new BehaviorSubject<string>(JSON.stringify(BreakPointService.breakpoint));

    static current_css = BreakPointService.css_behaviour.asObservable();



    constructor() { }
}
