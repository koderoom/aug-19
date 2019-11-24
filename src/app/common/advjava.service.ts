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
      "HEADING": "Java Database Connectivity",
      "DESC": `Java Database Connectivity`,

      "DEMO_LIST": [
        {
          "ID": 1, "TITLE": "1. Java Database Connectivity Setup. Java | JDBC | Mysql | Maven",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/HelloJdbc/src/in/cdac/FirstJdbc.java`,
          "YOUTUBE_LINK": `https://youtu.be/FF-eGgesyL0`,
        },
        {
          "ID": 2, "TITLE": "2. Java Database Connectivity Read and Insert Record in table.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/HelloJdbc/src/in/cdac/MAIN.java`,
          "YOUTUBE_LINK": `https://youtu.be/etBoIdlYcd0`,
        },
        {
          "ID": 3, "TITLE": "3. Java Database Connectivity Update and Delete Record from table.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/HelloJdbc/src/in/cdac/MAIN.java`,
          "YOUTUBE_LINK": `https://youtu.be/VkxZ2Zos3Ns`,
        },

        {
          "ID": 4, "TITLE": "4. Java Database Connectivity Create, Read, Update & Delete Operation with dynamic parameters.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/HelloJdbc/src/in/cdac/MAIN2.java`,
          "YOUTUBE_LINK": `https://youtu.be/qMFmU3oqBuY`,
        },

        {
          "ID": 5, "TITLE": "5. JDBC Connectivity Create, Read, Update & Delete Operation with User  Define Object as parameter.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/HelloJdbc/src/in/cdac/MAIN3.java`,
          "YOUTUBE_LINK": `https://youtu.be/iClqalahCIU`,
        },
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay1);


    /** RIGHT MENU FEATURED LIST */
    const featured1 = {
      "ID": 1,
      "TITLE": "Google Style Name",
      "SHOW": false,
      "DEMO_LINK": `${BASE_URL_DEMO}/day1/4.html`
    };
    FEATURED_LIST.push(featured1);


    /** LEFT MENU FEATURE LIST ANGULAR  */
    const featuredAngular1 = { "ID": 1, "TITLE": "Image Gallery", "SHOW": false, "YOUTUBE_LINK": `https://youtu.be/FqlBzqm4qb0` };
    FEATURED_ANGULAR_LIST.push(featuredAngular1);


    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
