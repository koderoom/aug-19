import { Injectable } from '@angular/core';
import { DataService } from 'src/app/common/data.service';

@Injectable({
  providedIn: 'root'
})
export class MeanService extends DataService {

  public CARD_LIST:any[];
  public FEATURED_LIST:any[];
  public FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    super(); 

    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/aug-19-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-19-webdemo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];


    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "ACTIVE" : false,
        "TITLE" : "Day 7",
        "HEADING" : "Responsive Todo Application Using Bootstrap & jQuery",
        "DESC" : `Responsive Todo Application Using Bootstrap & jQuery`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "7.1 How to Setup Live Server & Avoid common mistake while making web application?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day7/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/UuFFdH29u4k`,
            },

            {  
                "ID":2, "TITLE": "7.2 How to make #Reponsive #web #application using #bootstrap?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day7/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/eABk8nAI25Y`,
            },

            {  
                "ID":3, "TITLE": "7.3 How to make #Reponsive #todo #application using #bootstrap & jQuery?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day7/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/c7Vc8t3V0cQ`,
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Make application responsive using Bootstrap"},
            {"ID":2, "TITLE": "Reponsive Todo Manager using Bootstrap and jQuery"},
        ]
    };
    CARD_LIST.push(cardDay7);


    // DAY - 6
    const cardDay6 = {
        "ID" : 6,
        "ACTIVE" : false,
        "TITLE" : "Day 6",
        "HEADING" : "HTTP and Ajax Fundamental",
        "DESC" : `HTTP and Ajax Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "How to make AJAX Http Request from developer console?", 
                "YOUTUBE_LINK": `https://youtu.be/x2VLqzDOsXk`
            },

            {  
                "ID":2, "TITLE": "How to make AJAX Http Request using XMLHttpRequest in javascript?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/wIMjn7tXAIc`
            },

            {  
                "ID":2, "TITLE": "How to handle Ajax Http Response and present using HTML and CSS?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/dgTv6WMSyjA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Make Ajax Request using XMLHttpRequest"},
            {"ID":1, "TITLE": "Make Ajax Request using jQuery Ajax"},
            {"ID":1, "TITLE": "Handle Ajax Http Response"},
        ]
    };
    CARD_LIST.push(cardDay6);


    // DAY - 5
    const cardDay5 = {
        "ID" : 5,
        "ACTIVE" : false,
        "TITLE" : "Day 5",
        "HEADING" : "DOM Operation using jQuery and Bootstrap fundamental.",
        "DESC" : `DOM Operation using jQuery and Bootstrap fundamental.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "How to install and setup jQuery in HTML project?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/hs4lzaKtqwQ`
            },
            {  
                "ID":5, "TITLE": "jQuery DOM Operation. How to add/append HTML Element dynamically?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/-YongNOXsuc`
            },

            {  
                "ID":4, "TITLE": "jQuery DOM Operation. How to remove HTML Element dynamically?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/CTIu81R7boI`
            },

            {  
                "ID":3, "TITLE": "Todo application using only Html, Css and jQuery", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/XMtjxEVIo_o`
            },

            {  
                "ID":2, "TITLE": "Bootstrap installation setup and layout basics", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/_7DA5I1WbUg`
            },
            
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "DOM Operation using jQuery."},
            {"ID":2, "TITLE": "Task Manager using jQuery"},
            {"ID":3, "TITLE": "Layout basics using Bootstrap"},
        ]
    };
    CARD_LIST.push(cardDay5);


    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "ACTIVE" : false,
        "TITLE" : "Day 4",
        "HEADING" : "DOM Operation & Make a Task Manager Application",
        "DESC" : `DOM Operation & Make a Task Manager Application`,

        "DEMO_LIST" : [

            {  
                "ID":4, "TITLE": "DOM Operation. How to add/append HTML Element dynamically?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/knfPC6F7o7Y`
            },

            {  
                "ID":3, "TITLE": "DOM Operation. How to remove HTML Element dynamically?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ANMTd6mh4uk`
            },

            {  
                "ID":2, "TITLE": "Todo application using only Html, Css and JavaScript basics", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/kJ76D5m17Zw`
            },

            {  
                "ID":1, "TITLE": "Image as background and place element on top of Image.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/7Z6pVA9_2Ng`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "How to add/append HTML Element dynamically."},
            {"ID":2, "TITLE": "How to remove HTML Element dynamically."},
            {"ID":3, "TITLE": "Create a TODO application."},
            {"ID":4, "TITLE": "Image as background."},
        ]
    };
    CARD_LIST.push(cardDay4);


    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "ACTIVE" : false,
        "TITLE" : "Day 3",
        "HEADING" : "Document Object Modal & Javascript integration in HTML",
        "DESC" : `Document Object Modal & Javascript integration in HTML`,

        "DEMO_LIST" : [
            {  
                "ID":4, "TITLE": "#document object modal & #DOM #traversal using #querySelector", 
                "YOUTUBE_LINK": `https://youtu.be/RanyoDaBF1A`
            },
            {  
                "ID":3, "TITLE": "External Javascript integration with HTML.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/qlGARe2bwYs`
            },

            {  
                "ID":2, "TITLE": "Internal Javascript integration with HTML.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/qlGARe2bwYs`
            },

            {  
                "ID":1, "TITLE": "Inline Javascript integration with HTML.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/qlGARe2bwYs`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Document Object Study"},
            {"ID":2, "TITLE": "DOM Acesss Object"},
            {"ID":3, "TITLE": "DOM Modify Object"},
            {"ID":4, "TITLE": "DOM Add New Object"},
            {"ID":5, "TITLE": "DOM Add Remove Object"},
        ]
    };
    CARD_LIST.push(cardDay3);


    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "ACTIVE" : false,
        "TITLE" : "Day 2",
        "HEADING" : "Applying the learning of HTML and CSS",
        "DESC" : `Applying the learning of HTML and CSS`,

        "DEMO_LIST" : [
            {  
                "ID":10, "TITLE": "CSS Selector - Element, Class and ID selector and Redsign Google Style Name without using Inline Style", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/1.html`,
            },

            {  
                "ID":9, "TITLE": "CSS Grid layout. How to use this place element across the page.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/2.html`,
            },

            {  
                "ID":8, "TITLE": "Simulate Google Search Page using CSS Grid layout", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/97drOHEegxo`
            },

            {  
                "ID":7, "TITLE": "How to split screen vertically using CSS Grid layout.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/mBIYalJEQfk`
            },

            {  
                "ID":6, "TITLE": "Split the window into 2 Rows and 2 Columns using CSS Grid Layout", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/mBIYalJEQfk`
            },

            {  
                "ID":5, "TITLE": "CSS margin and padding property basics", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/6.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/6.html`,
                "YOUTUBE_LINK": `https://youtu.be/8zMgirRG8wk`
            },

            {  
                "ID":4, "TITLE": "Working with images and create vertical image gallery", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/7.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/7.html`,
                "YOUTUBE_LINK": `https://youtu.be/FqlBzqm4qb0`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "CSS Selector"},
            {"ID":1, "TITLE": "Grid Layout - Place element across the page"},
            {"ID":1, "TITLE": "Split screen horizontally and vertically"},
            {"ID":1, "TITLE": "Simulate Google Search"},
            {"ID":1, "TITLE": "CSS property margin and padding basics"},
            {"ID":1, "TITLE": "Working with images"},
        ]
    };
    CARD_LIST.push(cardDay2);
    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "ACTIVE" : true,
        "TITLE" : "Day 1",
        "HEADING" : "Node JS Fundamental",
        "DESC" : `Node JS Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello Node JS", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Install, Setup and Run first NODE JS program."},
        ]
    };
    CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1= {
        "ID" : 1,
        "TITLE" : "Google Style Name",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day1/4.html`
    };
    FEATURED_LIST.push(featured1);


    /** FEATURE LIST ANGULAR  */
    const featuredAngular9= { "ID" : 1,"TITLE" : "Responsive Todo App", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/c7Vc8t3V0cQ`};
    FEATURED_ANGULAR_LIST.push(featuredAngular9);

    const featuredAngular8= { "ID" : 1,"TITLE" : "Responsive Basics", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/eABk8nAI25Y`};
    FEATURED_ANGULAR_LIST.push(featuredAngular8);


    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
