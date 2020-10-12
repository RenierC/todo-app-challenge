# Todo List Challenge Submission

Check live app here https://todo-app-challenge.herokuapp.com/ 👈🏽

The challenge was made in the MERN stack

## To run locally:

1. git clone https://github.com/RenierC/todo-app-challenge.git or download (cd into the root of the folder)

2. Be sure to have Node.js installed https://nodejs.org/en/download/

3. Install mongodb following the directions provided for your operating system https://docs.mongodb.com/manual/installation/

For this particular case be sure to install mongo as a service

If you wanna be 100% sure you’re running it locally go to the server.js file in the root of the folder and delete the start of the connection parameters “process.env.MONGODB_URI || db” and just leave "mongodb://127.0.0.1:27017/todos"

Or replace it with this code snippet
```
mongoose
  .connect("mongodb://127.0.0.1:27017/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db connected..."))
  .catch((err) => console.log(err));
  ```
  
## Quickstart to run locally 

**Navigate to the root of the folder**

1. Install client dependencies
`npm run client-install`

2. To run both the client and the server simultaneously
`npm run dev`

---
*If the above fail or you want to run the server and client independently*

To run just server

`npm run server`

To run just the client

`npm run client`

>Server runs on localhost:4000 and client (react) runs on localhost:3000

---
## Bonus Round! 😉

I am a guy passionate about technology, how it works, how it can be used how it makes our lives easier.As a person with a background in computer science I believe that almost all can be solved by applying the appropriate technology in the problem areas or by developing it if it doesn’t exist yet.

The reason why I do what I do is because of my deep love for learning that transcends more than just coding and technology in general, I wanna use what I know and what I learn to help others, and for me to grow as a person and a professional in the process.

In 5 years I see myself more well studied and a master at my craft doing this what I like that challenges me but also fulfils me, with the same or hopefully more enthusiasm! 

Thanks for the challenge and the opportunity, saying that I learned a lot during this developing process would be undermining it a lot(A LOT). I'm coming out of it with a huge set of new tools and understanding about a great amount of things and stacks.

  

