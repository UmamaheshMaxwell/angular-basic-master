import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmojiNew]'
})
export class EmojiDirective implements OnInit {

  @Input('emoji') emoji: string = "";
  @Input('first') emoji2: string = "";
  @Input('second') emoji3: string = "";

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color= 'Blue'
   }

   ngOnInit(){
     this.el.nativeElement.textContent +=  this.emoji + '' +this.emoji2 + ' ' +  this.emoji3
   }

}
