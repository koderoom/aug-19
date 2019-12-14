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


    // Sessoion - 15
    const cardDay15 = {
      ID: 1,
      ACTIVE: true,
      TITLE: "Session 15",
      HEADING: "Notes & Slides",
      DESC: `Notes & Slides`,

      DEMO_LIST: [
        {
          ID: 1,
          TITLE: `1. JSP Presentation`,
          PDF_LINK: `https://firebasestorage.googleapis.com/v0/b/koderoom-book.appspot.com/o/slides%2Fjsp.pdf?alt=media`
        },
        {
          ID: 2,
          TITLE: `2. Servlet Presentation`,
          PDF_LINK: `https://firebasestorage.googleapis.com/v0/b/koderoom-book.appspot.com/o/slides%2Fservlet.pdf?alt=media`
        },
        {
          ID: 3,
          TITLE: `3. JSP, Servlet and Java Bean Presentation`,
          PDF_LINK: `https://firebasestorage.googleapis.com/v0/b/koderoom-book.appspot.com/o/slides%2Fjsp-servlet-bean.pdf?alt=media`
        }
      ],

      ASSIGNMENT_LIST: []
    };
    CARD_LIST.push(cardDay15);

    // Sessoion - 14
    const cardDay14 = {
      ID: 1,
      ACTIVE: true,
      TITLE: "Session 14",
      HEADING: "SPRING WEB MVC",
      DESC: `SPRING WEB MVC`,

      DEMO_LIST: [
        {
          ID: 1,
          TITLE: `1. Spring Boot | Web App | Project Setup`,
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/tree/master/project-book`,
          YOUTUBE_LINK: `https://youtu.be/wDeq4aVKHgY`
        },
        {
          ID: 2,
          TITLE: "2. Spring Boot  | Web App | Application Properties File",
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/project-book/src/main/resources/application.properties`,
          YOUTUBE_LINK: `https://youtu.be/mIdR2hkVUkw`
        },
        {
          ID: 3,
          TITLE: "3. Spring Boot | Web App | Model And View fundamentals.",
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/project-book/src/main/java/in/mumbai/HelloController.java`,
          YOUTUBE_LINK: `https://youtu.be/jhG5n9opJts`
        },
        {
          ID: 4,
          TITLE:
            "4. Spring Boot | Web App | User Registration | Spring JBDC  | View Controller and JDBC Integration.",
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/project-book`,
          YOUTUBE_LINK: `https://youtu.be/wZg8IH3dAuk`
        },
        {
          ID: 5,
          TITLE:
            "5. Spring Boot | Web App | User Authentication | Spring JBDC  | View Controller and JDBC Integration",
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/project-book`,
          YOUTUBE_LINK: `https://youtu.be/FJQMnGiiclw`
        }
      ],

      ASSIGNMENT_LIST: []
    };
    CARD_LIST.push(cardDay14);


    // Sessoion - 13
    const cardDay13 = {
      ID: 1,
      ACTIVE: true,
      TITLE: "Session 13",
      HEADING: "SPRING REST MVC",
      DESC: `SPRING REST MVC`,

      DEMO_LIST: [
        {
          ID: 4,
          TITLE: `4. Spring Boot | REST I Adding Multiple RestController`,
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-mvc-jdbc/src/main/java/in/mumbai/DemoController.java`,
          YOUTUBE_LINK: `https://youtu.be/SiBI72_LTIw`
        },
        {
          ID: 5,
          TITLE: "5. Spring Boot | REST I Reading Input Data",
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-mvc-jdbc/src/main/java/in/mumbai/ReadInputController.java`,
          YOUTUBE_LINK: `https://youtu.be/ZM8UOeP7uZw`
        },
        {
          ID: 6,
          TITLE:
            "6. Spring Boot | REST | Spring JDBC Integration and CRUD Operation",
          SOURCE_LINK: `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-mvc-jdbc/src/main/java/in/mumbai/UserController.java`,
          YOUTUBE_LINK: `https://youtu.be/GQJY65y5E3I`
        }
      ],

      ASSIGNMENT_LIST: []
    };
    CARD_LIST.push(cardDay13);


    // Sessoion - 12
    const cardDay12 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 12",
      "HEADING": "SPRING REST MVC",
      "DESC": `SPRING REST MVC`,

      "DEMO_LIST": [

        {
          "ID": 1, "TITLE": "1. Spring Boot | REST | Project Setup and Develop first Restful Web Service",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-mvc-jdbc/src/main/java/in/mumbai/HelloService.java`,
          "YOUTUBE_LINK": `https://youtu.be/h4u88ziJ4NM`,
        },
        {
          "ID": 2, "TITLE": "2. Spring Boot | REST I Adding more Request Mapping",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-mvc-jdbc/src/main/java/in/mumbai/HelloService.java`,
          "YOUTUBE_LINK": `https://youtu.be/86W123ePgj8`,
        },
        {
          "ID": 3, "TITLE": "3. Spring Boot | REST I Developing Restful WebService | Generating different output",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-mvc-jdbc/src/main/java/in/mumbai/HelloService.java`,
          "YOUTUBE_LINK": `https://youtu.be/emPo1b_n_mc`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay12);

    // Sessoion - 11
    const cardDay11 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 11",
      "HEADING": "SPRING BOOT AND SPRING JDBC",
      "DESC": `SPRING BOOT AND SPRING JDBC`,

      "DEMO_LIST": [

        {
          "ID": 1, "TITLE": "1. Spring Boot Project Setup.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/hello-spring`,
          "YOUTUBE_LINK": `https://youtu.be/cgPwlhbTkHI`,
        },
        {
          "ID": 2, "TITLE": "2. Spring Boot |  Dependency Injection Basics",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-spring/src/main/java/in/cdac/hellospring/HelloSpringApplication.java`,
          "YOUTUBE_LINK": `https://youtu.be/LHnVc4uSvDA`,
        },
        {
          "ID": 3, "TITLE": "3.  Spring Boot | JDBC |  Project Setup",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/hello-spring-jdbc`,
          "YOUTUBE_LINK": `https://youtu.be/2lnc4FsXiLY`,
        },
        {
          "ID": 4, "TITLE": "4. Spring Boot | JDBC | Insert Update Delete Operation",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-spring-jdbc/src/main/java/in/mumbai/demo/HelloSpringJdbcApplication.java`,
          "YOUTUBE_LINK": `https://youtu.be/ztI_KoDPwLk`,
        },
        {
          "ID": 5, "TITLE": "5. Spring Boot | JDBC | Read Single Row and Read All Row Query.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-spring-jdbc/src/main/java/in/mumbai/demo/HelloSpringJdbcApplication.java`,
          "YOUTUBE_LINK": `https://youtu.be/BbHY_rBWMxA`,
        },
        {
          "ID": 6, "TITLE": "6. Spring Boot | JDBC | CRUD Operation using Dao",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/hello-spring-jdbc/src/main/java/in/mumbai/demo/UserDao.java`,
          "YOUTUBE_LINK": `https://youtu.be/Sa88cePnEHs`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay11);

    // Sessoion - 10
    const cardDay10 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 10",
      "HEADING": "JSP SERVLET JDBC HIBERNATE INTEGRATION",
      "DESC": `JSP SERVLET JDBC HIBERNATE INTEGRATION`,

      "DEMO_LIST": [

        {
          "ID": 1, "TITLE": "11. Home page add logout feature.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/vZ93R28gonQ`,
        },
        {
          "ID": 2, "TITLE": "12. Design Home page an Option to Add Post and Connect with PostServlet.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/4_oCxKFQSQo`,
        },
        {
          "ID": 3, "TITLE": "13. Save Post to Database. Integrate PostServlet with PostService.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/0dncC4_LzAM`,
        },
        {
          "ID": 4, "TITLE": "14. Linking Login Servlet with HomeServlet to prepare data for to display at Home page.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/TPXc7BJHf1w`,
        },
        {
          "ID": 4, "TITLE": "16. Displaying all the post at Home Page",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/Pq1eh1XOa-0`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay10);

    // Sessoion - 9
    const cardDay9 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 9",
      "HEADING": "JSP SERVLET JDBC HIBERNATE INTEGRATION",
      "DESC": `JSP SERVLET JDBC HIBERNATE INTEGRATION`,

      "DEMO_LIST": [

        {
          "ID": 1, "TITLE": "6. Interlink login and register page",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/IipKCu_M6nc`,
        },
        {
          "ID": 2, "TITLE": "7. User Registration, Server side validation. Unique Constraint Handling.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/D1GPGxBHbjc`,
        },
        {
          "ID": 3, "TITLE": "8. User Authentication, Login Jsp And Login Servlet Integration",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/X5JHbC4BKbg`,
        },
        {
          "ID": 4, "TITLE": "9. User authentication, Login Servlet and Integration with Database.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/K5k6oOc2lic`,
        },
        {
          "ID": 4, "TITLE": "10. Session Scope and Session Management at protect home pages.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/demo-book`,
          "YOUTUBE_LINK": `https://youtu.be/IJPqT6evfRM`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay9);


    // Sessoion - 8
    const cardDay8 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 8",
      "HEADING": "JSP SERVLET JDBC HIBERNATE INTEGRATION",
      "DESC": `JSP SERVLET JDBC HIBERNATE INTEGRATION`,

      "DEMO_LIST": [

        {
          "ID": 1, "TITLE": "1. Project Setup and register page design.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/demo-book/WebContent/register.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/SSgjx-vqbyY`,
        },
        {
          "ID": 2, "TITLE": "2. JSP & Sevlet Integration and reading Register Input Data",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/demo-book/src/in/cdac/RegiserServlet.java`,
          "YOUTUBE_LINK": `https://youtu.be/IW8Ci5mytPM`,
        },
        {
          "ID": 3, "TITLE": "3. Servlet & JDBC Integratoin and save Input Data in Database",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/demo-book/src/in/cdac/JdbcRegiserService.java`,
          "YOUTUBE_LINK": `https://youtu.be/Wwdt-yfeSBA`,
        },
        {
          "ID": 4, "TITLE": "4. Servlet & Hibernate Integratoin and save Input Data in Database",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/demo-book/src/in/cdac/HibernateRegiserService.java`,
          "YOUTUBE_LINK": `https://youtu.be/VjnnpWJ39pc`,
        },
        {
          "ID": 4, "TITLE": "5. Login in Page Design",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/demo-book/WebContent/login.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/hHzAI6t07ko`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay8);


    // Sessoion - 7
    const cardDay7 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 7",
      "HEADING": "Hibernate Fundamental",
      "DESC": `Hibernate Fundamental`,

      "DEMO_LIST": [

        {
          "ID": 2, "TITLE": "1. Hibernate Project Setup and Connection Basics",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/hello-hibernate`,
          "YOUTUBE_LINK": `https://youtu.be/6KSXkC2xRiw`,
        },
        {
          "ID": 3, "TITLE": "2. Hibernate Object to Relation Mapping Basics",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/hello-hibernate`,
          "YOUTUBE_LINK": `https://youtu.be/NJHvAdPlxjU`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay7);


    // Sessoion - 5
    const cardDay6 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 6",
      "HEADING": "JSP Tags and Directives",
      "DESC": `JSP Tags and Directives`,

      "DEMO_LIST": [

        {
          "ID": 2, "TITLE": "1. Exception handling in JSP and Servlet",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/exception-demo`,
          "YOUTUBE_LINK": `https://youtu.be/94UnyceUrZ8`,
        },
        {
          "ID": 3, "TITLE": "2. Include Directive and JSP Include Action tag fundamental",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/include-demo`,
          "YOUTUBE_LINK": `https://youtu.be/f1Qa7mg2tFE`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay6);


    // Sessoion - 5
    const cardDay5 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 5",
      "HEADING": "Modal View Controller & Scopes of JSP/Servlet Objects",
      "DESC": `Modal View Controller & Scopes of JSP/Servlet Objects`,

      "DEMO_LIST": [

        {
          "ID": 2, "TITLE": "1. Scopes of JSP and Servlet Objects",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/scope-demo/WebContent`,
          "YOUTUBE_LINK": `https://youtu.be/RtBaNDM3PvE`,
        },
        {
          "ID": 3, "TITLE": "2. Passing different data modal between Servlet and JSP.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/scope-demo/src/in/cdac/ModalDemoServlet.java`,
          "YOUTUBE_LINK": `https://youtu.be/YV9b-9S30xc`,
        },
        {
          "ID": 3, "TITLE": "3. Session management simulation in JSP & Servlet.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/tree/master/session-demo`,
          "YOUTUBE_LINK": `https://youtu.be/JxNHq7g8cR0`,
        }
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay5);


    // DAY - 3
    const cardDay4 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 4",
      "HEADING": "Servlet, JSP and JDBC Integration",
      "DESC": `Servlet, JSP and JDBC Integration`,

      "DEMO_LIST": [

        {
          "ID": 2, "TITLE": "1. Servlet & JSP integration fundamentals with data sharing.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/src/in/cdac/HelloServlet.java`,
          "YOUTUBE_LINK": `https://youtu.be/b3pubTVWCe0`,
        },
        {
          "ID": 3, "TITLE": "2. Servlet JSP and JDBC integration fundamental from scratch.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/src/in/cdac/DbServlet.java`,
          "YOUTUBE_LINK": `https://youtu.be/TFBvQrEMUpw`,
        },
        {
          "ID": 3, "TITLE": "3. Servlet JSP and JDBC integration, Styling with Bootstrap.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/dbpage.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/OLkcYbBLEkE`,
        },
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay4);
  
    // DAY - 3
    const cardDay3 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 3",
      "HEADING": "JSP and JDBC Integration",
      "DESC": `JSP and JDBC Integration`,

      "DEMO_LIST": [
        
        {
          "ID": 2, "TITLE": "1. JSP and JDBC integration using Scriptlet and Expression.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/index-jdbc.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/loRKRh2wHGE`,
        },
        {
          "ID": 3, "TITLE": "2. Styling JSP & JDBC integration using bootstrap.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/index-jdbc.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/O7oWp_MxmW0`,
        },
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay3);

    // DAY - 2
    const cardDay2 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 2",
      "HEADING": "JSP Scriptlet and Expression Tags Fundamental",
      "DESC": `JSP Scriptlet and Expression Tags Fundamental`,

      "DEMO_LIST": [
        {
          "ID": 1, "TITLE": "1. How to setup and run Dynamic Web Project in Eclipse? JSP | Servlet.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/index.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/wZ5P_zpz_y4`,
        },
        {
          "ID": 2, "TITLE": "2. JSP Scriptlet tag example with For Loop and If condition.",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/index.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/mp9IMFrWncY`,
        },
        {
          "ID": 3, "TITLE": "3. JSP Reading Input Query Parameter  | Expression Tag | Request Implicit Object",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/index.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/xO4591THt8U`,
        },
        {
          "ID": 4, "TITLE": "4. JSP Dynamic Page using Scriptlet and Expression tags with Input Query Parameter",
          "SOURCE_LINK": `https://github.com/dacjuhu/juhu-aug-19/blob/master/dyamic-web/WebContent/index.jsp`,
          "YOUTUBE_LINK": `https://youtu.be/W31nlKqDeHk`,
        },
      ],

      "ASSIGNMENT_LIST": [
      ]
    };
    CARD_LIST.push(cardDay2);


    // DAY - 1
    const cardDay1 = {
      "ID": 1,
      "ACTIVE": true,
      "TITLE": "Session 1",
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
    const featured4 = {
      "ID": 1,
      "TITLE": "Session Management Simulation",
      "SHOW": true,
      "YOUTUBE_LINK": `https://youtu.be/JxNHq7g8cR0`
    };
    FEATURED_LIST.push(featured4);
    const featured3 = {
      "ID": 1,
      "TITLE": "Scope of JSP & Servlet Objects",
      "SHOW": true,
      "YOUTUBE_LINK": `https://youtu.be/RtBaNDM3PvE`
    };
    FEATURED_LIST.push(featured3);
    const featured1 = {
      "ID": 1,
      "TITLE": "JDBC Connectivity (Object Based)",
      "SHOW": true,
      "YOUTUBE_LINK": `https://youtu.be/iClqalahCIU`
    };
    FEATURED_LIST.push(featured1);

    const featured2 = {
      "ID": 1,
      "TITLE": "JDBC Connectivity (Parameter Based)",
      "SHOW": true,
      "YOUTUBE_LINK": `https://youtu.be/qMFmU3oqBuY`
    };
    FEATURED_LIST.push(featured2);


    /** LEFT MENU FEATURE LIST ANGULAR  */
    const featuredAngular1 = { "ID": 1, "TITLE": "Project Setup", "SHOW": true, "YOUTUBE_LINK": `https://youtu.be/wZ5P_zpz_y4` };
    const featuredAngular2 = { "ID": 2, "TITLE": "Servlet JSP JDBC", "SHOW": true, "YOUTUBE_LINK": `https://youtu.be/TFBvQrEMUpw` };
    const featuredAngular3 = { "ID": 3, "TITLE": "Servlet & JSP Integration", "SHOW": true, "YOUTUBE_LINK": `https://youtu.be/b3pubTVWCe0` };
    const featuredAngular4 = { "ID": 4, "TITLE": "JSP JDBC", "SHOW": true, "YOUTUBE_LINK": `https://youtu.be/O7oWp_MxmW0` };
    FEATURED_ANGULAR_LIST.push(featuredAngular2, featuredAngular3, featuredAngular4, featuredAngular1,);


    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
