### My-First-Angular2-CRUD-App:
In this sample angular2 application I implemented the simple CRUD (Create,Read,Update,Delete) by using almost all main features of angular2. Furthermore, It helped me to start building data driven web application using angular2.

**Application Architecture:**

![application-architecture](https://cloud.githubusercontent.com/assets/1701237/23936497/f749dd38-096b-11e7-8eed-a9affcede052.png)

**Running the application:**


You can download or clone the code from the repository (https://github.com/aamir-poswal/My-First-Angular2-CRUD-App), then open the project with visual studio code and in integrated terminal window type 'npm install' to download all the packages required to build this application, and then type 'npm start' to start the application.

**Application demo screencast:**

https://www.screencast.com/t/L9AE8nFa


### Implementation Details:

**Setup:**

Language: Typescript
* Strongly Typed
* Superset of javascript
* You can see errors while writing code (somewhat similar to C#, Java)
* Class based
* Transpile to javascript

Editor: Visual Studio Code
* Intellisense
* Git support
* Useful extenstion like TSLint
* Customizable (like I changed the settings to show only .ts files by modifying file->preference-settings settings.json )

Instead of creating the application from scratch and adding the necessary files and folders like app, main.ts and index.html I downloaded the angular2 quickstart repository(https://github.com/angular/quickstart) to skip steps required to setup the basic application, and started building the actual application with basic skelton.

**Starting the application implementation:**

At high level we can say that to develop angular application you
1. create the component
2. bundle them into module
3. bootstrap your application

Component = Template (View Layout Angularized HTML) + Class (Data + Behavior) + Metadata (Defined with angular decorator)

We start with bootstraping our application by loading the app component, and then by hosting the application inside index.html. Furthermore index.html is often the main and the only page in the application, therefore we call it Single Page Application.

![hosting-application](https://cloud.githubusercontent.com/assets/1701237/23939277/6563dcc6-0979-11e7-91fa-b05075677fcd.png)

**Application startup flow:**

**index.html->system.config.js->main.ts->->app.module.ts->app.component.ts**

1. index.html

![index html](https://cloud.githubusercontent.com/assets/1701237/23939512/70a6cbd8-097a-11e7-8ff6-7d3555e1a091.png)

2. System.config.js

![systemconfig](https://cloud.githubusercontent.com/assets/1701237/23939526/7fc290f2-097a-11e7-88c4-33ccdcb612c6.png)

3. main.ts

![main](https://cloud.githubusercontent.com/assets/1701237/23939534/8c3b849c-097a-11e7-832b-592a29ba56e9.png)

4. app.module.ts

5. app.component.ts

### Examining the Code:

ProductListComponent displays list of products, and let's start with examining its implementation and various angular2 features used. 

We are importing what is required to build this component. For example to use angular @Component({}) we need to import Component from angular core module.

**Lifecycle hooks:**

Angular has different lifecycle hooks which we can use as per our problem context. For example in ProductListComponent we implemented OnInit interface which we used to get data from data source. ngOnInit is called directly after constructor and before ngOnChange. So usually this is best place for initialisation work.

![life cycle hook](https://cloud.githubusercontent.com/assets/1701237/23950672/39b2e5c8-09a5-11e7-872e-ca8d952ff8c1.png)

**LinkedTemplate and Component Inline Style:**

We are using linkedTemplate in @Component decorator and inline style for the component for its specific style.


![linkedtempalate](https://cloud.githubusercontent.com/assets/1701237/23950724/659bdf6e-09a5-11e7-8b7a-4bd10f9265b3.png)

**Service:**

Contains code/logic that independent from any component.
Provide share data/logic to different components
Used to communicate with external resources
our custom service as an example product.service.ts 

**Dependency Injection:**

A coding pattern in which a class receives the instances of objects it needs (dependencies) from an external source(like framework) rather than creating them itself. Basically it outsource the object creational logic.
In the constructor we are injecting the services we required from framework and our custom service(ProductService).

`constructor(public _route: ActivatedRoute, public _router: Router, private _productService: ProductService) {    }`


**Angular2 Data Binding:**
(product-list.component.html)


- interpolation

The easiest way to display a component property is to bind the property name through interpolation. With interpolation, you put the property name in the view template, enclosed in double curly braces: {{myHero}}.

![interpolation](https://cloud.githubusercontent.com/assets/1701237/23950844/ccf20648-09a5-11e7-800c-2b7c0945db53.png)

- Binding to user input events

You can use Angular event bindings to respond to any DOM event. Many DOM events are triggered by user input. Binding to these events provides a way to get input from the user.

![twowaybinding](https://cloud.githubusercontent.com/assets/1701237/23950905/f81a8322-09a5-11e7-86a9-23231b337b1e.png)

- Two-way data binding with ngModel	

![two way data binding real](https://cloud.githubusercontent.com/assets/1701237/23950974/35eb71d4-09a6-11e7-976d-ca69476510a4.png)

**Directive:**

Custom HTML element or attribute used to power up and extend our HTML.
- Custom
- Built in

In the list component html we used angular2 structural directive as following.
*ngIf and *ngFor

`<table class='table' *ngIf='products && products.length'>`
`<tr *ngFor='let product of products | productFilter:listFilter'>`

**Angular2 Pipe:**

In Angular2 we use pipes to transform the data. Pipes are of two types.
- Custom
- Built in

product-filter.pipe.ts is our custom pipe.

`<tr *ngFor='let product of products | productFilter:listFilter'>`

Following is the example of using built in pipe

`<td>{{ product.price | currency:'USD':true:'1.2-2' }}</td>`



More details of the implementation coming soon...

