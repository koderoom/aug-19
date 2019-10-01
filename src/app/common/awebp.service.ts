import { Injectable } from '@angular/core';
import { DataService } from 'src/app/common/data.service';

@Injectable({
  providedIn: 'root'
})
export class AwebpService extends DataService {

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

    // DAY - 8
    const cardDay9 = {
        "ID" : 9,
        "TITLE" : "Day 9",
        "HEADING" : "Bootstrap Responsive",
        "DESC" : `Bootstrap and Responsive`,

        "DEMO_LIST" : [
            {  
                "ID":3, "TITLE": "How to make #web #application #responsive using #bootstrap?", 
                "SOURCE_LINK" : `https://github.com/koderoom/kodebook`,
                "DEMO_LINK" : `https://koderoom.github.io/kodebook/`, 
                "YOUTUBE_LINK": `https://youtu.be/qyPFqiM7vlA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Make application responsive using bootstrap."},
        ]
    };
    CARD_LIST.push(cardDay9);

    // DAY - 8
    const cardDay8 = {
        "ID" : 8,
        "TITLE" : "Day 8",
        "HEADING" : "Live Coding with #Angular, #Bootstrap",
        "DESC" : `Live Coding with #Angular, #Bootstrap`,

        "DEMO_LIST" : [
            {  
                "ID":3, "TITLE": "#Live Coding, #Facebook Feature #Simulation in #Angular and #Bootstrap", 
                "SOURCE_LINK" : `https://github.com/koderoom/kodebook`,
                "DEMO_LINK" : `https://koderoom.github.io/kodebook/`, 
                "YOUTUBE_LINK": `https://youtu.be/Qq88kYlnY7Q`
            },

            {  
                "ID":1, "TITLE": "How to use *ngFor and *ngIf in #Angular?", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/8vHD2OOfgFU`
            },

            {  
                "ID":2, "TITLE": "Working with List of #UserDefine Class in #Angular", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/G-i-5qqdCNE`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Apply loop and codition directive Angular."},
        ]
    };
    CARD_LIST.push(cardDay8);


    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "TITLE" : "Day 7",
        "HEADING" : "ES6, TypesScript and Angular Fundamental",
        "DESC" : `ES6, TypesScript and Angular Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "7.1 Fundamentals of ES6. How to compile and run ES6 program in console?", 
                "YOUTUBE_LINK": `https://youtu.be/_VKZrvaw6Dc`,
                "SOURCE_LINK" : `https://github.com/koderoom/meanstack/blob/master/src/main.js`,
            },

            {  
                "ID":2, "TITLE": "7.2 How to import and export modules in ES6?", 
                "YOUTUBE_LINK": `https://youtu.be/j5MartizMvY`,
                "SOURCE_LINK" : `https://github.com/koderoom/meanstack/blob/master/src/main.js`,
            },

            {  
                "ID":3, "TITLE": "7.3 Fundamentals of TypeScript. How to compile and run #typescript program in console?", 
                "YOUTUBE_LINK": `https://youtu.be/kbSf2OSVPso`,
                "SOURCE_LINK" : `https://github.com/koderoom/meanstack/blob/master/src/ts/main.ts`,
            },

            {  
                "ID":4, "TITLE": "7.4 Hello Angular. How to #setup #first #Angular project.", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/RD7EzEauMd8`
            },
            {  
                "ID":5, "TITLE": "7.5 Fundamentals of #Angular #Project Folder Structure.", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/LpzQ5-2JYwU`
            },
            {  
                "ID":6, "TITLE": "7.6 Data Binding in Angular using #interpolation", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/lkY_g_82o_I`
            },
            {  
                "ID":7, "TITLE": "7.7 Let's Implement Simple Counter in Angular, using Data Binding. (Interpolation and View to Controller.)", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/V2OchF-3i3k`
            },
            {  
                "ID":8, "TITLE": "7.8 Basics of App Module in #Angular",
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/Y_IZCcF3Y3A`
            },
            {  
                "ID":9, "TITLE": "7.9 Bi-Directional Data Binding in #Angular.", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/XVRiZ5Zjk7g`
            },
            {  
                "ID":10, "TITLE": "7.10 Integrate #bootstrap in #angular", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/a-UacGK1hDA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Compile And Run ES6 program"},
            {"ID":2, "TITLE": "Compile And Run TS program"},
            {"ID":3, "TITLE": "Setup Angular Project"},
            {"ID":4, "TITLE": "Practice Data Binding"},
            {"ID":5, "TITLE": "Integrate Bootstrap into project"},
        ]
    };
    CARD_LIST.push(cardDay7);


    // DAY - 6
    const cardDay6 = {
        "ID" : 6,
        "TITLE" : "Day 6",
        "HEADING" : "NODEJS, NPM Fundatemental",
        "DESC" : `NODEJS, NPM Fundatemental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "6.1 How to install and setup NodeJS?", 
                "YOUTUBE_LINK": `https://youtu.be/njeoystjCqo`
            },

            {  
                "ID":2, "TITLE": "6.2 How to setup nodejs and web project using NPM?", 
                "YOUTUBE_LINK": `https://youtu.be/kMLkQetzxgA`
            },

            {  
                "ID":3, "TITLE": "6.3 How to install module/package using NPM. [Install bootstrap and lite-server]", 
                "YOUTUBE_LINK": `https://youtu.be/Oc6dlujaI5w`
            },

            {  
                "ID":4, "TITLE": "6.4 How to configure, start and access #lite-server for web project?", 
                "YOUTUBE_LINK": `https://youtu.be/mM2SF3SgyiI`
            },
            {  
                "ID":5, "TITLE": "6.5 How to use #bootstrap and #fontawesome css installed using NPM?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/sXclxxCjG_A`
            },
            {  
                "ID":6, "TITLE": "6.6 JSON handson session", 
                "YOUTUBE_LINK": `https://youtu.be/q1Ck1UUlMWo`
            },
            {  
                "ID":7, "TITLE": "6.7 Implement like and subscribe, make it interactive using client side #javascript for each dynamic post.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/X1pFgCJgtgU`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Install NodeJS and make your project NodeJS aware."},
        ]
    };
    CARD_LIST.push(cardDay6);

    // DAY - 4
    const cardDay5 = {
        "ID" : 5,
        "TITLE" : "Day 5",
        "HEADING" : "Post Perview and Dymaick Block of Image",
        "DESC" : `Post Perview and Dymaick Block of Image`,

        "DEMO_LIST" : [
            {  
                "ID":5, "TITLE": "Adding Like, Subscribe and Comment option for each block. (Adding icons with button)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/OKEkZvygNlw`
            },

            {  
                "ID":4, "TITLE": "Part 2 - Post Preview and add dynamic block of Video using Javascript.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/SeeVQQGASLA`
            },

            {  
                "ID":3, "TITLE": "Part 1 - Post and Preview Video block UI Simulation.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/Dnhp-0IvR_8`
            },

            {  
                "ID":2, "TITLE": "Part 2 - Post Preview and add dynamic block of image using Javascript.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/7WW4s00o5Hg`
            },
            {  
                "ID":1, "TITLE": "Part 1 - Post Preview Image UI Simulation", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ZDT7BiEBVBA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "HTML Image Element, SRC Attribute, ObjectFit Style Attribute"},
            {"ID":2, "TITLE": "URL, converting fileobject as url."},
        ]
    };
    CARD_LIST.push(cardDay5);


    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "ACTIVE" : true,
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
        "ACTIVE" : true,
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
        "ACTIVE" : true,
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
        "HEADING" : "HTML & CSS Fundamental",
        "DESC" : `HTML & CSS Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello HTML and CSS", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`
            },
            {  
                "ID":2, "TITLE": "Internal Styling with Html", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/2.html`
            },
            {  
                "ID":3, "TITLE": "External Styling with Html", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/3.html`
            },
            {  
                "ID":4, "TITLE": "Writing name in Google Style using HTML and CSS", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/4.html`
            },
            {  
                "ID":5, "TITLE": "Working with Height and border css property", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Write down and decode the first HTML program?"},
            {"ID":2, "TITLE": "Integrate Inline Styling with HTML?"},
            {"ID":3, "TITLE": "Integrate Internal Styling with HTML"},
            {"ID":3, "TITLE": "Integrate External Styling with HTML"},
            {"ID":4, "TITLE": "Study the basics CSS property - background, color, font-family, font-size, font-weight"},
            {"ID":5, "TITLE": "Write your name in Google Style using HTML and CSS?"},
            {"ID":6, "TITLE": "Write your name in Google Style without using Inline CSS?"},
            {"ID":7, "TITLE": "Study the basic CSS property - height, width, border, padding, margin"},
            {"ID":8, "TITLE": "Practical demo using border, height and width"},
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


    /** FEATURE LIST ANGULAR */
    const featuredAngular5= { "ID" : 1,"TITLE" : "Todo Application", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/kJ76D5m17Zw`};
    FEATURED_ANGULAR_LIST.push(featuredAngular5);

    const featuredAngular4= { "ID" : 1,"TITLE" : "DOM Navigation", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/RanyoDaBF1A`};
    FEATURED_ANGULAR_LIST.push(featuredAngular4);

    const featuredAngular2= { "ID" : 1,"TITLE" : "Javscript Integrtion", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/qlGARe2bwYs`};
    FEATURED_ANGULAR_LIST.push(featuredAngular2);

    const featuredAngular3= { "ID" : 1,"TITLE" : "Google Search UI", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/97drOHEegxo`};
    FEATURED_ANGULAR_LIST.push(featuredAngular3);

    const featuredAngular1= { "ID" : 1,"TITLE" : "Image Gallery", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/FqlBzqm4qb0`};
    FEATURED_ANGULAR_LIST.push(featuredAngular1);
    

    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
