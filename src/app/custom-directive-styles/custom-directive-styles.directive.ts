import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appCustomDirectiveStyles]'
})
export class CustomDirectiveStylesDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}