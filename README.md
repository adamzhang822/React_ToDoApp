# Getting started with React ToDo App

## App functionality:

This is a basic to-do app with the following features:

* Users can add and delete tasks 
* Users can mark tasks as complete
* Users can edit incomplete tasks 
* Users can filter tasks by keywords
* Data is persisted on MongoDB Atlas
* Users must authenticate through their email (or through Google account) to access the app
* Users can move tasks up and down 

## How to run the app on local machine

### Starting the server
Download the project file (either cloning the repository or download the Zip file), direct to "server" folder, and run

    >>> npm install
    ... node index
 
The server listens on port 3030, so if you have processes already running on port 3030, either kill the process (if on mac, type the following): 

    >>> lsof -i :3030
    ... kill $(lsof -t -i :8080) 

The first line will tell you which process id of applications already running on port 3030, and the second line kills that process for you

You can also change the port that the server is listening to by configuring the PORT variable on index.js.

The server also communicates with MongoDB Atlas, so you would need an internet connection to start up the server properly

### Starting the React app

Keep the server running and start up another terminal, direct to "client" folder, and run 

    >>> npm install
    ... npm run start
    
The React app runs on port 3000, so if you have processes already running on the port, try kill that process. 

### CSS Templates used

This project uses the `semantic-ui` and `materialize` CSS library.
They are imported into `client/public/index.html` through the following two lines: 

```javascript
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
```javascript
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

