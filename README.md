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

```
<script>
  System.import('main.js').catch(function(err){ console.error(err); });
</script>
<body>
<my-app>Loading AppComponent content here ...</my-app>
</body>
```

2. System.config.js

```
map: {
  // our app is within the app folder
  app: 'app'
  }
```  


3. main.ts

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```  

4. app.module.ts

5. app.component.ts

### Examining the Code:

ProductListComponent displays list of products, and let's start with examining its implementation and various angular2 features used. 

We are importing what is required to build this component. For example to use angular @Component({}) we need to import Component from angular core module.

**Lifecycle hooks:**

Angular has different lifecycle hooks which we can use as per our problem context. For example in ProductListComponent we implemented OnInit interface which we used to get data from data source. ngOnInit is called directly after constructor and before ngOnChange. So usually this is best place for initialisation work.

```
import { Component, OnInit } from '@angular/core';

export class ProductListComponent implements OnInit {
ngOnInit(): void {
        this._productService.getProducts().subscribe(products => this.products = products
            , error => this.errorMessage = <any>error);
    }
}
```  

**LinkedTemplate and Component Inline Style:**

```
@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
```  
**Service:**

Contains code/logic that independent from any component.
Provide share data/logic to different components
used to communicate with external resources

**product.service.ts**

our custom service as an example 

Notice that we imported the Angular Injectable function and applied that function as an @Injectable() decorator.

```javascript
@Injectable()
export class ProductService {}
```
Also to access the service you need to register in module provider.
TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.

```javascript
providers: [ProductService]
```

**Dependency Injection:**

A coding pattern in which a class receives the instances of objects it needs (dependencies) from an external source(like framework) rather than creating them itself. Basically it outsource the object creational logic.
In the constructor we are injecting the services we required from framework and our custom service(ProductService).

```javascript
constructor(public _route: ActivatedRoute, public _router: Router, private _productService: ProductService) {    }
```


**Angular2 Data Binding:**
(product-list.component.html)


- interpolation

The easiest way to display a component property is to bind the property name through interpolation. With interpolation, you put the property name in the view template, enclosed in double curly braces: {{pageTitle}}.

```
<div class='panel-heading'>
  {{pageTitle}}
</div>
```

- Binding to user input events

You can use Angular event bindings to respond to any DOM event. Many DOM events are triggered by user input. Binding to these events provides a way to get input from the user.

```
<button class='btn btn-primary' (click)='hello()'>
	New Product
</button>
```

- Two-way data binding with ngModel	

```
<div class='col-md-4'>
  <input type='text' [(ngModel)]='listFilter' />
</div>
```

**Directive:**

Custom HTML element or attribute used to power up and extend our HTML.
- Custom
- Built in

In the list component html we used angular2 structural directive as following.
*ngIf and *ngFor

```
<table class='table' *ngIf='products && products.length'>
<tr *ngFor='let product of products | productFilter:listFilter'>
```

**Angular2 Pipe:**

In Angular2 we use pipes to transform the data. Pipes are of two types.
- Custom
- Built in

**custom pipe**
- A pipe is a class decorated with pipe metadata.
- The pipe class implements the PipeTransform interface's transform method that accepts an input value followed by optional parameters and returns the transformed value.
- To tell Angular that this is a pipe, you apply the @Pipe decorator, which you import from the core Angular library.
- The @Pipe decorator allows you to define the pipe name that you'll use within template expressions. It must be a valid JavaScript identifier. Your pipe's name is productFilter.

```
import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(value: Product[], filterBy: string): Product[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: Product) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
```

product-filter.pipe.ts is our custom pipe.
```
<tr *ngFor='let product of products | productFilter:listFilter'>
```

Following is the example of using built in pipe
```
<td>{{ product.price | currency:'USD':true:'1.2-2' }}</td>
```



More details of the implementation coming soon...

