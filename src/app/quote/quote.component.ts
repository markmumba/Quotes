import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 Quotes: Quote[] = [
// tslint:disable-next-line: max-line-length
    new Quote ( 1, 'If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.', 'Albert Einstein', 0, 0, new Date (2019, 3 , 14)),
// tslint:disable-next-line: max-line-length
    new Quote ( 2, 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.', 'Albert Einstein', 0 , 0 , new Date (2019, 3, 14) ),
// tslint:disable-next-line: max-line-length
   new Quote ( 3, 'If you cant explain it to a six year old, you dont understand it yourself.', 'Albert Einstein', 0 , 0, new Date (2019, 3, 14)),
// tslint:disable-next-line: whitespace
    new Quote ( 4,'Logic will get you from A to Z; imagination will get you everywhere.','Albert Einstein',0,0,new Date (2019,3,14)),
   ];

   toggleDetails(index: string | number) {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }
  completeQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.Quotes.splice(index, 1);
    }
  }

// tslint:disable-next-line: no-shadowed-variable
 addNewQuote( Quote) {
    const QuoteLength = this.Quotes.length;
    Quote.id = QuoteLength + 1;
    Quote.completeDate = new Date(Quote.completeDate);
    this.Quotes.push(Quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
