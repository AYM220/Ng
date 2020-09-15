import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards= [
    { "image":"1.jpeg",
     "text":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "like": 48,
      "comment": 33,  
      "view": 55
    },
    { "image":"2.jpeg",
    "text":"Some quick example text to build on the card title and make up the bulk of the card's content.",
     "like": 43,
     "comment": 34,
     "view": 76
   },
   { "image":"3.jpeg",
   "text":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "like": 45,
    "comment": 56,
    "view": 69
  },

  { "image":"4.jpeg",
  "text":"Some quick example text to build on the card title and make up the bulk of the card's content.",
   "like": 77,
   "comment": 37,
   "view": 37
 } 
 ]
}
