import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/feb-19-demo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/feb-19-demo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];

    // DAY - 7
    const cardDay8 = {
        "ID" : 8,
        "TITLE" : "DAY 8",
        "HEADING" : "Singleton Pattern, Inheritance using Interface, and Collections Fundamental",
        "DESC" : `Singleton Pattern, Inheritance using Interface, and Collections Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Implement Singleton Pattern in Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day8/example1`,
                "YOUTUBE_LINK": `https://youtu.be/lPqWUg40uv8`
            },

            {  
                "ID":2, "TITLE": "Basics of Serializable interface in #Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day8/example2`,
                "YOUTUBE_LINK": `https://youtu.be/ihn8TNvre1o`
            },

            {  
                "ID":3, "TITLE": "Implement User Define Interface in #Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day8/example3`,
                "YOUTUBE_LINK": `https://youtu.be/C1GbfjlwDlw`
            },

            {  
                "ID":4, "TITLE": "Java #Collections using #List and #ArrayList Demo.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example4`,
                "YOUTUBE_LINK": `https://youtu.be/XKlfKqiIM4k`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":0, "TITLE": "Implement Singleton Pattern."},
            {"ID":1, "TITLE": "Implement Uesr Define Interface?"},
            {"ID":2, "TITLE": "Implement List of String, Number and User Define Class usinga ArrayList"},
            {"ID":3, "TITLE": "Implemenent Multiple Try Catch Block"},
            {"ID":4, "TITLE": "Implemenent Nested Try catch block"},
            {"ID":5, "TITLE": "Implment TRY and Finally Block"},
        ]
    };
    CARD_LIST.push(cardDay8);

    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "TITLE" : "DAY 7",
        "HEADING" : "Fundamental of Pass by value and Pass by Reference with Inhertiance, Polymorphism and Upcasting",
        "DESC" : `Fundamental of Pass by value and Pass by Reference with Inhertiance, Polymorphism and Upcasting`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Basics and usage of #PassByValue in #Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example1`,
                "YOUTUBE_LINK": `https://youtu.be/yxRUAoBtJ1Y`
            },

            {  
                "ID":2, "TITLE": "Basics and usage of #PassByReference in #Java with User Define Class", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example2`,
                "YOUTUBE_LINK": `https://youtu.be/ecQPu7XGe_0`
            },

            {  
                "ID":3, "TITLE": "Basics of #PassByReference with #String and #StringBuffer", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example3`,
                "YOUTUBE_LINK": `https://youtu.be/h73n6kggO0U`
            },

            {  
                "ID":4, "TITLE": "Basics of #PassByReference with #inheritance #polymorphism and #upcasting", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example4`,
                "YOUTUBE_LINK": `https://youtu.be/kavaZATmmp4`
            },

            {  
                "ID":5, "TITLE": "Basics of #Constructor #SuperConstructor and #ConstructorChaining in #Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example5`,
                "YOUTUBE_LINK": `https://youtu.be/jCBmTKUFPYY`
            },

            {  
                "ID":6, "TITLE": "Basics of #Constructor and #SuperConstructor with #Parameter in Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example6`,
                "YOUTUBE_LINK": `https://youtu.be/1JG3U75v8f4`
            },

            {  
                "ID":7, "TITLE": "Initialize member of child class and parent class using constructor in java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example7`,
                "YOUTUBE_LINK": `https://youtu.be/ZeIFLDJUDqw`
            },

            {  
                "ID":8, "TITLE": "Constructor chain example with #abstract class in #java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day7/example8`,
                "YOUTUBE_LINK": `https://youtu.be/yTJdMJFwc6A`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":0, "TITLE": "Implement PassByvalue and PassByReference."},
            {"ID":1, "TITLE": "Implement PassByReference with String reference?"},
            {"ID":2, "TITLE": "Implement PassByReference with Inheritance example"},
            {"ID":3, "TITLE": "Implemenent Construtor Chaining."},
            {"ID":4, "TITLE": "Implemenent Construtor Chaining with Parametrized Constructor."},
            {"ID":5, "TITLE": "Implment Constructor chaining with Initializing data member of base and child class"},
            {"ID":6, "TITLE": "Implemenent Construtor Chaining using abstract class."},
        ]
    };
    CARD_LIST.push(cardDay7);


    // DAY - 6
    const cardDay6 = {
        "ID" : 6,
        "TITLE" : "DAY 6",
        "HEADING" : "Fundamental of Exception Handling in Java.",
        "DESC" : `Fundamental of Exception Handling in Java with Object Oriented Concept.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Fundamental of Exception handling in Java. Throwing and Catching Exception.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/example1`,
                "YOUTUBE_LINK": `https://youtu.be/Bi_XIYuG7Vc`
            },

            {  
                "ID":2, "TITLE": "Catching ArrayIndexOutOfBoundException in Java.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/example2`,
                "YOUTUBE_LINK": `https://youtu.be/MSoqL509WYE`
            },

            {  
                "ID":3, "TITLE": "Catching NullPointerException in Java.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/example3`,
                "YOUTUBE_LINK": `https://youtu.be/5wID5ECpg6Y`
            },

            {  
                "ID":4, "TITLE": "Adding finally block while handling/catching Exceptoin.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/example4`,
                "YOUTUBE_LINK": `https://youtu.be/BA5q8Zvb9zk`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":0, "TITLE": "What is Exception Handling?"},
            {"ID":1, "TITLE": "What is Checked and UncheckedException?"},
            {"ID":2, "TITLE": "Handle and Implement Arithmetic Execption"},
            {"ID":3, "TITLE": "Handle and Implement ArrayIndexOutOfBound Execption?"},
            {"ID":4, "TITLE": "Handle and Implement NullPointer Execption"},
            {"ID":5, "TITLE": "Implement multiple catch block in Exception Handling."},
            {"ID":6, "TITLE": "Implment finally block in Exception handling"},
            {"ID":7, "TITLE": "Explain try, catch, finally, throw and throws"},
            {"ID":8, "TITLE": "Explain and implment final"},
        ]
    };
    CARD_LIST.push(cardDay6);

    // DAY - 5
    const cardDay5 = {
        "ID" : 5,
        "TITLE" : "DAY 5",
        "HEADING" : "Fundamentals of Inheritance, Overriding, Polymorphism, Upcastinga and Downcasting",
        "DESC" : `Fundamentals of Inheritance, Overriding, Polymorphism, Upcastinga and Downcasting`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Fundamental of Inheritance and Overriding in Java", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/example1`,
                "YOUTUBE_LINK": `https://youtu.be/d4o8NEJQ49w`
            },

            {  
                "ID":2, "TITLE": " Fundamental of Polymorphism in Java.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/example2`,
                "YOUTUBE_LINK": `https://youtu.be/z4_sSU1-j2c`
            },

            {  
                "ID":3, "TITLE": "Fundamental of Upcasting and Downcasting in Java.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/example3`,
                "YOUTUBE_LINK": `https://youtu.be/vBac6D1Z3ZY`
            },

            {  
                "ID":4, "TITLE": "Generate bill in Java.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/example4`,
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":0, "TITLE": "What is Abstraction?"},
            {"ID":1, "TITLE": "What is Inheritance?"},
            {"ID":2, "TITLE": "What is Overriding?"},
            {"ID":3, "TITLE": "Difference between Overriding and Overloading?"},
            {"ID":4, "TITLE": "What is Polymorhism, Compiletime Polymorphism, Runtime Polymorphism?"},
            {"ID":5, "TITLE": "What is Upcastinga and Downcasting?"},
            {"ID":6, "TITLE": "Difference between Abstract and Abstraction?"},
            {"ID":7, "TITLE": "How access-modifier and non-access modifier affects Inheritance?"},
            {"ID":8, "TITLE": "Generate a bill in Java?", "IMG": `${BASE_URL}/feb-19/assets/bill.png`},
        ]
    };
    CARD_LIST.push(cardDay5);

    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "TITLE" : "DAY 4",
        "HEADING" : "Fundamentals of Mutable and Im-Mubtable Object; Reference comparision and Value Comparision of Object",
        "DESC" : `Fundamentals of Mutable and Im-Mubtable Object; Reference comparision and Value Comparision of Object`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Fundamental of String, String Pool and Im-Mutable String Object", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/example1`,
                "YOUTUBE_LINK": `https://youtu.be/PNLWoT7DU6A`
            },

            {  
                "ID":2, "TITLE": "String - Reference and Value Comparison", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/example2`,
                "YOUTUBE_LINK": `https://youtu.be/XCI-oSmh0xo`
            },

            {  
                "ID":3, "TITLE": "Fundamental of Mutable and Immutable implementation with String and User Define Class. Debugging fundamental.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/example3`,
                "YOUTUBE_LINK": `https://youtu.be/-9XeqX7Uzyg`
            },

            {  
                "ID":4, "TITLE": "Reference and Value comparision of User Define Class. Debugging additional.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/example4`,
                "YOUTUBE_LINK": `https://youtu.be/xBklivHE9tM`
            },

            {  
                "ID":5, "TITLE": "Object equality for User Define Class using equals and hashcode method. Debugging additional.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/example5`,
                "YOUTUBE_LINK": `https://youtu.be/qgqpJnplXOI`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":0, "TITLE": "Working with Static Block and Init Block"},
            {"ID":1, "TITLE": "Working with Mutable Object [User Define Class]"},
            {"ID":2, "TITLE": "Working with ImMutable Object [String]"},
            {"ID":3, "TITLE": "Revise String Pool"},
            {"ID":4, "TITLE": "String str = `hello`;  Vs String str = new String(`hello`)"},
            {"ID":5, "TITLE": "String vs StringBuilder vs StringBuffer"},
            {"ID":6, "TITLE": "Reference Comparision and Object Comparision for String"},
            {"ID":7, "TITLE": "Reference Comparision and Object Comparsion for User define class"},
            {"ID":8, "TITLE": "Object Equality : Object Class - equals() and hashCode() method."},
            {"ID":9, "TITLE": "Java Api Docs"},
            {"ID":10, "TITLE": "Implement Bubble Sort in Java, with different approaches."},
        ]
    };
    CARD_LIST.push(cardDay4);

    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "TITLE" : "DAY 3",
        "HEADING" : "Fundatmentals of Static Member, Static Function and Constructor",
        "DESC" : `Fundatmentals of Static Member, Static Function and Constructor`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Static Member, Static Function, Static as Global variable.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/example1`,
                "YOUTUBE_LINK": `https://youtu.be/G2kfnig_1d0`
            },

            {  
                "ID":2, "TITLE": "Part-2 Accessing static member from Member Function", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/example2`,
                "YOUTUBE_LINK": `https://youtu.be/GbiEwh0BRGc`
            },

            {  
                "ID":3, "TITLE": "Eclipse basic overview.", 
                "YOUTUBE_LINK": `https://youtu.be/StT__PIWbmo`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Working with static member and static method of class."},
            {"ID":2, "TITLE": "Accessing static member/method from different instance of class as global variable."},
            {"ID":3, "TITLE": "Explaing public static void main()"},
            {"ID":4, "TITLE": "Accessing static member from Member function."},
            {"ID":5, "TITLE": "Accessing data member from Static Fucntion. (Not allowed)."},
            {"ID":6, "TITLE": "Accessing static member/method using instance of class(Not Recommended)"},
            {"ID":7, "TITLE": "Convert the Calculator class method to Static method."},
            {"ID":8, "TITLE": "Working with constructor, Default Constructor and Zero Constructor."},
            {"ID":9, "TITLE": "Parametrized and Overloaded constructor."},
            {"ID":10, "TITLE": "Super Constructor and Constructor Chaining."},
        ]
    };
    CARD_LIST.push(cardDay3);

    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2",
        "HEADING" : "Encapsulation, Member Function and Access Modifier",
        "DESC" : `Encapsulation, Member Function and Access Modifier`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Securing data member applying Encapuslation. (Data Security, Data Hiding, Appling logic on member function.)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example1`,
                "YOUTUBE_LINK": `https://youtu.be/T5tqP3eu8Jw`
            },

            {  
                "ID":2, "TITLE": "Create Calculator class with add, subtract, multiply, division method.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example2`,
                "YOUTUBE_LINK": `https://youtu.be/h8Sndrbakz0`
            },

            {  
                "ID":3, "TITLE": "Working with function overloading, and variable number of parameters into function.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example3`,
                "YOUTUBE_LINK": `https://youtu.be/mllLtnGxqgE`
            },

            
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Working with Member function signature. (AccessModifer, NonAccessModifer, ReturnType, FunctionName, InputParam, ExceptionHandling)"},
            {"ID":2, "TITLE": "Securing data member applying Encapuslation. (Data Security, Data Hiding, Appling logic on member function.)"},
            {"ID":3, "TITLE": "Create Calculator class with add, subtract, multiply, division method."},
            {"ID":4, "TITLE": "Update Calcuator functionlity by reading input interactively."},
            {"ID":5, "TITLE": "Working with access modifier. (public, protected, default and private)"},
            {"ID":6, "TITLE": "Working with function overloading, overload the add() method of Calculator class."},
            {"ID":7, "TITLE": "Working with variable number of parameter. "},
            {"ID":8, "TITLE": "Working with overloading and variable number of parmater together."},
        ]
    };
    CARD_LIST.push(cardDay2);

    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "Java Fundamentals and Data Type",
        "DESC" : `Java Fundamentals and Data Type`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello World, File and Public class Naming Convention And Basics of Main Method", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/example1`,
            },

            {  
                "ID":2, "TITLE": "User defined class concept, Object initialization, Accessing data member of class, Default value for data memeber and local variable ", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/example2`,
            },

            {  
                "ID":3, "TITLE": "Day-1 Classroom Recording", 
                "YOUTUBE_LINK" : `https://youtu.be/FpIjy7fi0H0`,
            }
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Hello World and Java Program with one public class."},
            {"ID":2, "TITLE": "Hello World and Java Program with more than one class."},
            {"ID":3, "TITLE": "User Define Class, Concept, Data Member / Instance Member"},
            {"ID":4, "TITLE": "Object Initialization for UserDefine Class using `new` keyword."},
            {"ID":5, "TITLE": "Access Data Member of user define class using dot operator."},
            {"ID":6, "TITLE": "Working with default value of data member of User defined class and local member of function."},
            {"ID":7, "TITLE": "Read an input from command line."},
            {"ID":8, "TITLE": "Print Right triangle star."},
        ]
    };
    CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1= {
        "ID" : 1,
        "TITLE" : "Chat Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`
    };
    FEATURED_LIST.push(featured1);



    /** FEATURE LIST ANGULAR */
    const featuredAngular1= {
        "ID" : 5,
        "TITLE" : "SPA using Angular",
        "SHOW" : true,
        "DEMO_LINK" : `https://koderoom.github.io/hello-angular/`
    };
    FEATURED_ANGULAR_LIST.push(featuredAngular1);



    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
