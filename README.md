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




More details of the implementation coming soon...

