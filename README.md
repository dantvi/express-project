# Express Project

This project is part of the Complete Node.js Developer course by Zero To Mastery. The Express Project is designed to demonstrate the use of the Express.js framework for building a basic web application, including features like routing, middleware, and rendering dynamic content.

## Table of contents

- [Express Project](#express-project)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Key functionality](#key-functionality)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### Key functionality

The project showcases:
- Dynamic routing using Express.js for handling multiple routes (/friends, /messages).
- Middleware integration to log requests and parse incoming JSON data.
- Template rendering using Handlebars (hbs) for dynamic HTML generation.
- Static file serving for hosting public assets.

### Links

- Solution URL: [GitHub](https://github.com/dantvi/express-project)

## My process

### Built with

- Node.js: Core runtime environment.
- Express.js: Web application framework.
- Handlebars (hbs): For server-side rendering of templates.
- Path module: To manage file paths across operating systems.

### What I learned

This project strengthened my understanding of:
1. Express Middleware:
   - Using custom middleware to log requests and measure response times.

```js
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const deltaTime = Date.now() - start;
  console.log(`method: ${req.method}, url: ${req.baseUrl}${req.url}, request time: ${deltaTime}ms`);
});
```

2. Routing:
   - Organized routes into modular files (friends.router.js, messages.router.js) for better code structure and scalability.

3. Dynamic Content Rendering:
   - Leveraged Handlebars to render pages dynamically with custom titles and captions.

```js
app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERY Clever',
    caption: "Let's go skiing!",
  });
});
```

4. Data Handling:
   - Built RESTful endpoints to handle CRUD operations for "friends" data.

### Continued development

In future projects, I would like to:
- Implement database integration using MongoDB to persist data.
- Add authentication and authorization to secure endpoints.
- Explore advanced templating engines like EJS or Pug for more flexibility.
- Expand middleware functionality to include error handling and analytics.

### Useful resources

- [Express.js Documentation](https://expressjs.com/) - Comprehensive guide on building web applications with Express.js.
- [Handlebars Documentation](https://handlebarsjs.com/) - Official documentation for creating dynamic templates.
- [Node.js Path Module](https://nodejs.org/api/path.html) - Detailed reference for handling file paths in Node.js.

## Author

- GitHub - [@dantvi](https://github.com/dantvi)
- LinkedIn - [@danieltving](https://www.linkedin.com/in/danieltving/)

## Acknowledgments

Special thanks to Zero To Mastery for providing the inspiration and guidance for this project, and to the creators of Express.js for building a powerful framework that makes developing web applications straightforward and enjoyable.
