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
        "ACTIVE" : true,
        "TITLE" : "Day 7",
        "HEADING" : "Todo Application Development with Angular, Bootstrap, Express, Node and MongoDB",
        "DESC" : `Todo Application Development with Angular, Express, Node and MongoDB`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Todo App - Server Side CURD API Development with Tyepscript, ExpressJs and MongoDB", 
                "SOURCE_LINK" : `https://github.com/koderoom/hello-server/blob/master/src/index.ts`,
                "YOUTUBE_LINK": `https://youtu.be/JP_jQ0Mg4TQ`,
            },

            {  
                "ID":2, "TITLE": "Todo App - Client Side CURD and Server Side Integration with Angular and Bootstrap.", 
                "SOURCE_LINK" : `https://github.com/koderoom/hello-client/blob/master/src/app/app.component.html`,
                "YOUTUBE_LINK": `https://youtu.be/2Gv_HmoQA_Q`,
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Server Side and Client Development cum Integartion"},
        ]
    };
    CARD_LIST.push(cardDay7);


    // DAY - 6
    const cardDay6 = {
        "ID" : 6,
        "ACTIVE" : true,
        "TITLE" : "Day 6",
        "HEADING" : "Developing Api using ExpressJS and MongoDB integration",
        "DESC" : `Developing Api using ExpressJS and MongoDB integration`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Project setup with ExpressJS and Typescript", 
                "SOURCE_LINK" : `https://github.com/koderoom/crud-with-express-mongo/blob/master/src/index.ts`,
                "YOUTUBE_LINK": `https://youtu.be/zEV37jf0BNM`
            },

            {  
                "ID":2, "TITLE": "Developing REST API with ExpressJS and Typescript", 
                "SOURCE_LINK" : `https://github.com/koderoom/crud-with-express-mongo/blob/master/src/index.ts`,
                "YOUTUBE_LINK": `https://youtu.be/_V7XLXdec2w`
            },

            {  
                "ID":3, "TITLE": "How to read input data from request object ExpressJS?", 
                "SOURCE_LINK" : `https://github.com/koderoom/crud-with-express-mongo/blob/master/src/index.ts`,
                "YOUTUBE_LINK": `https://youtu.be/aWVMANsR5Zw`
            },

            {  
                "ID":4, "TITLE": "CRUD API ExpressJS and Mongodb Integration.", 
                "SOURCE_LINK" : `https://github.com/koderoom/crud-with-express-mongo/blob/master/src/crud.manager.ts`,
                "YOUTUBE_LINK": `https://youtu.be/Fvi9ZrF7_Gg`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "CRUD API ExpressJS and Mongodb Integration."},
        ]
    };
    CARD_LIST.push(cardDay6);


    // DAY - 5
    const cardDay5 = {
        "ID" : 5,
        "ACTIVE" : true,
        "TITLE" : "Day 5",
        "HEADING" : "Typescript and MongoDB CRUD Opperation",
        "DESC" : `Typescript and MongoDB CRUD Opperation`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "CRUD operation using MONGODB & TYPESCRIPT", 
                "SOURCE_LINK" : `https://github.com/koderoom/mongodb-typescript-crud-demo/blob/master/src/index.ts`,
                "YOUTUBE_LINK": `https://youtu.be/s45cxnvLarM`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "CRUD Operation"},
        ]
    };
    CARD_LIST.push(cardDay5);


    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "ACTIVE" : true,
        "TITLE" : "Day 4",
        "HEADING" : "Application Development Using Angular",
        "DESC" : `Application Development Using Angular`,

        "DEMO_LIST" : [
            {  
                "ID":4, "TITLE": "Angualr fundamental and todo application using Angular", 
                "YOUTUBE_LINK": `https://youtu.be/vr7KK3mWxpw`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Angular Application Development"},
        ]
    };
    CARD_LIST.push(cardDay4);


    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "ACTIVE" : true,
        "TITLE" : "Day 3",
        "HEADING" : "Module Management in NodeJS, ES6 and TS",
        "DESC" : `Module Management in NodeJS, ES6 and TS`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Project Setup and Module Management in NodeJS.", 
                "YOUTUBE_LINK": `https://youtu.be/UamIqP-ZDLw`
            },
            {  
                "ID":2, "TITLE": "Project Setup and Module Management in ES6.", 
                "YOUTUBE_LINK": `https://youtu.be/pkaHT_Z31jY`
            },
            {  
                "ID":3, "TITLE": "Project Setup and Module Management in TS.", 
                "YOUTUBE_LINK": `https://youtu.be/qafMg7Sslps`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "NodeJS Setup and Module Management"},
            {"ID":2, "TITLE": "ES6 Setup and Module Management"},
            {"ID":3, "TITLE": "TS Setup and Module Management"},
            {"ID":4, "TITLE": "Read and Write File in NodeJS"},
            {"ID":5, "TITLE": "Angular Project Setup"},
        ]
    };
    CARD_LIST.push(cardDay3);


    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "ACTIVE" : true,
        "TITLE" : "Day 2",
        "HEADING" : "Install & Setup NodeJS and Angular Project",
        "DESC" : `Install & Setup NodeJS and Angular Project`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "How to install NodeJS and setup project from scratch?", 
                "YOUTUBE_LINK": `https://youtu.be/v1nUajQm5IY`
            },

            {  
                "ID":5, "TITLE": "How to create and debug basic NodeJS program?", 
                "YOUTUBE_LINK": `https://youtu.be/NsUvmsiRoHs`
            },

            {  
                "ID":4, "TITLE": "How to setup Angular project?", 
                "YOUTUBE_LINK": `https://youtu.be/HnlyeUqy9YY`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Install Node JS"},
        ]
    };
    CARD_LIST.push(cardDay2);
    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "ACTIVE" : true,
        "TITLE" : "Day 1",
        "HEADING" : "Http and Ajax Fundamental",
        "DESC" : `Http and Ajax Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "How to make HTTP GET & POST request using POSTMAN?", 
                "YOUTUBE_LINK" : `https://youtu.be/2cvWa1x5LNY`,
            },
            {  
                "ID":2, "TITLE": "How to make AJAX GET & POST using native javascript?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day8/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day8/1.html`,
                "YOUTUBE_LINK" : `https://youtu.be/5bgt20I52To`,
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "HTTP Fundamaental."},
            {"ID":1, "TITLE": "Ajax Fundamaental."},
            {"ID":1, "TITLE": "Openweather App."},
        ]
    };
    CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured2 =  { "ID" : 1,"TITLE" : "Ajax Fundamental", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/5bgt20I52To`};
    FEATURED_LIST.push(featured2);

    const featured1= { "ID" : 1,"TITLE" : "Postman Basics", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/2cvWa1x5LNY`};
    FEATURED_LIST.push(featured1);


    /** FEATURE LIST ANGULAR  */
    const featuredAngular14= { "ID" : 1,"TITLE" : "Angular TODO Apps", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/vr7KK3mWxpw`};
    FEATURED_ANGULAR_LIST.push(featuredAngular14);
    const featuredAngular13= { "ID" : 1,"TITLE" : "TS Module Management", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/qafMg7Sslps`};
    FEATURED_ANGULAR_LIST.push(featuredAngular13);
    const featuredAngular12= { "ID" : 1,"TITLE" : "ES Module Management", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/pkaHT_Z31jY`};
    FEATURED_ANGULAR_LIST.push(featuredAngular12);
    const featuredAngular11= { "ID" : 1,"TITLE" : "NodeJS Module Management", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/UamIqP-ZDLw`};
    FEATURED_ANGULAR_LIST.push(featuredAngular11);

    const featuredAngular8= { "ID" : 1,"TITLE" : "NodeJS Project Setup", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/v1nUajQm5IY`};
    FEATURED_ANGULAR_LIST.push(featuredAngular8);

    const featuredAngular9= { "ID" : 1,"TITLE" : "NodeJS Program & Debugging", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/NsUvmsiRoHs`};
    FEATURED_ANGULAR_LIST.push(featuredAngular9);

    const featuredAngular10= { "ID" : 1,"TITLE" : "Angular Project Setup", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/HnlyeUqy9YY`};
    FEATURED_ANGULAR_LIST.push(featuredAngular10);


    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
