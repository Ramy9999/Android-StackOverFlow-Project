//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// var faviconSeeko = require("serve-favicon");
const favicon = require("express-favicon");
// var path = require("path");

const _ = require("lodash");

// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://admin-ramy:windows7player@cluster0-mrsqe.mongodb.net/blogDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const truncate = require('truncate');

const homeDescription = "This is a Simple Website that contians two lists from StackOverflow, the first one is the 'Newest Top 10 Android Related Questions' and the Second is the 'Most voted Android Related Questions Created 1 week ago', all lists and elements are based and generated using a web scraper called data miner to fetch the questions' titles and corresponding URLs. If you click on a specific title you should go to that question's url directly on stack overflow and furthermore, there is a checkbox you can check next to each question to mark that question as read, and when you check a question something cool happens.";
const aboutContent = "Hey There, My name is Ramy Elsaraf and I'm a Software and Computer Engineer with 📖 Masters of MSc (Eng) in Computer Science and Engineering.";
const contactContent = "Looking for an opportunity to Become a part of a team where I can broad up my vision and develop my professional skills in the field of Software and Computer Engineering, Electrical Engineering, Electronics and/or IT Networks.";

// const postSchema = {
//   title: String,
//   content: String,
//   name: String,
//   date: String
// };
//
// const Post = mongoose.model("Post", postSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// app.use(faviconSeeko(path.join(__dirname, "public", "favicon.ico")));

app.use(favicon(__dirname + "/public/favicon.ico"));


let posts = [];



app.get("/", function(req, res) {
  // Post.find({}, function(err, posts) {
    res.render("home", {
      homeDes: homeDescription,
      homeContentPosts: posts
    });
  // });

  // res.render("home", {
  //   homeDes: homeDescription,
  //   homeContentPosts: posts,
  //   // truncate(posts.postContent, 100);
  //   // postContentPosts:posts
  // });
});

// app.get("/about", function(req, res) {
//   res.render("about", {
//     aboutContent: aboutContent
//   });
// });
//
// app.get("/contact", function(req, res) {
//   res.render("contact", {
//     contactContent: contactContent
//   });
// });
//
// app.get("/compose", function(req, res) {
//
//   res.render("compose");
// });

// app.post("/compose", function(req, res) {
  // var newPost = req.body.newPost;
  // const postAll = {
  //   postTitle: req.body.titleOfPost,
  //   postContent: req.body.textPostArea,
  //   posterName: req.body.nameOfPoster,
  //   postDayDate: req.body.postDay
  // };
  // posts.push(postAll);

//   const post = new Post({
//     title: req.body.titleOfPost,
//     content: req.body.textPostArea,
//     name: req.body.nameOfPoster,
//     date: req.body.postDay
//   });
//
//   // post.save();
//   post.save(function(err) {
//     if (!err) {
//       res.redirect("/");
//     }
//   });
//
//   // res.redirect("/");
// });



// app.get("/posts/:postId", function(req, res) {
//   // let postM = _.lowerCase(req.params.postMain);
//   // // posts.forEach(function(post) {
//   // let postTi = _.lowerCase(post.postTitle);
//
//   const requestedPostId = req.params.postId;
//   Post.findOne({
//     _id: requestedPostId
//   }, function(err, post) {
//     res.render("post", {
//       title: post.title,
//       content: post.content,
//       name: post.name,
//       date: post.date
//     });
//   });
//
//   // res.render("post");
//   // if (postM === postTi) {
//   //   res.render("post", {
//   //     title: post.postTitle,
//   //     body: post.postContent,
//   //     name: post.posterName,
//   //     dayte: post.postDayDate
//   //   });
//   // }
//   // else {
//   //   console.log("Noooo Match");
//   // }
//   // });
//
// });



// app.post("/posts/:postMain", function(req, res) {
//
//   res.render("post");
//
//
//   res.redirect("/post");
// });





app.listen(process.env.PORT || 3000, function() {
  console.log("Server Listening Now, Launch Web App in local host 3000");
});
