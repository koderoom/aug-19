import { Injectable } from '@angular/core';
import { DataService } from 'src/app/common/data.service';


@Injectable({
  providedIn: 'root'
})
export class AdvjavaService extends DataService {

  public CARD_LIST: any[];
  public FEATURED_LIST: any[];
  public FEATURED_ANGULAR_LIST: any[];

  constructor() {
    super();

    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/aug-19-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-19-webdemo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];


    // DAY - 1
    const cardDay1 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Day 1",
      "HEADING": "HTML & CSS Fundamental",
      "DESC": `HTML & CSS Fundamental`,

      "DEMO_LIST": [
        {
          "ID": 1, "TITLE": "Hello HTML and CSS",
          "SOURCE_LINK": `${BASE_URL_SOURCE}/tree/master/day1/1.html`,
        },
        {
          "ID": 2, "TITLE": "Internal Styling with Html",
          "SOURCE_LINK": `${BASE_URL_SOURCE}/tree/master/day1/2.html`,
        },
      ],

      "ASSIGNMENT_LIST": [
        { "ID": 1, "TITLE": "Write down and decode the first HTML program?" },
        { "ID": 2, "TITLE": "Integrate Inline Styling with HTML?" },
      ]
    };
    CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1 = {
      "ID": 1,
      "TITLE": "Google Style Name",
      "SHOW": true,
      "DEMO_LINK": `${BASE_URL_DEMO}/day1/4.html`
    };
    FEATURED_LIST.push(featured1);


    /** FEATURE LIST ANGULAR  */
    const featuredAngular1 = { "ID": 1, "TITLE": "Image Gallery", "SHOW": true, "YOUTUBE_LINK": `https://youtu.be/FqlBzqm4qb0` };
    FEATURED_ANGULAR_LIST.push(featuredAngular1);


    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
