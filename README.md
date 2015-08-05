# Express Yourself with Node.js

A talk for ABQ Web Geeks on building a web application using Node.js Express.js.

The "chapters" below correspond (roughly) to branches of this application.

## 01-hello-world: Getting to "Hello World"

Initial bootstrap of Node.js, creating a server, and returning "Hello World".

## 02-expressjs: "Hello World", but now with Express.js

Since "raw" Node.js can be a bit verbose we implement "Hello World" in Express.js, a web application framework.

## 03-jade-templates: Using Jade templates for clean HTML templating

Dropping a bunch of HTML into our code would be ugly, so we implement Jade for HTML templating. Jade is an awesome markup syntax that replaces closing tags with an ident-based system.

## 04-basic-mvc: Implement a controller and some more views

Most web developers coming from other frameworks will be familiar with MVC. While Express.js gives us the ability to organize our application (almost) however we'd like, MVC is a good way to separate concerns for a web application.

Here we add a controller for some basic pages.

## 05-posts: Add MVC for blog posts

Continuing with our MVC pattern, we'll add a controller for blog posts, a Model to do some in-memory storage, views and dummy data.

Note that we're not trying to create an ORM or even best practices with data sanitation and storage. This is for demonstration purposes only.

## 06-async-and-persistent: Add MongoDB persistence and introduce I/O async callbacks

Every time we shut the server down, we loose our data. Adding a persistence layer prevents that, however it introduces another issue: how do we get around Node.js's asynchronous nature? The answer: callbacks!
