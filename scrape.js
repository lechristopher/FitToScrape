var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Requiring our Note and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

function scrape() {
  request("https://techcrunch.com", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);

    // Now, we grab every h2 within an article tag, and do the following:
    $(".block-content").each(function(i, element) {


      // console.log($(this).children(".post-title").text());
      console.log($(this).children(".excerpt").text());

      // element.children.filter((child) => child.name == 'h2').forEach((child) => {
      //   console.log('CHILD', child);
      // })

      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      // result.title = $(this).children(".post-title").find().text();
      // // result.link = $(this).children("a").attr("href");
      // // result.excerpt = $(this).children("p.excerpt").find().text();
      // console.log('result title' , result.title);
      // console.log('result link' , result.link);
      // console.log('result excerpt',   result.excerpt);

      // Using our Article model, create a new entry
      // This effectively passes the result object to the entry (and the title and link)
      // var entry = new Article(result);

      // Now, save that entry to the db
      // entry.save(function(err, doc) {
      //   // Log any errors
      //   if (err) {
      //     console.log(err);
      //   }
      //   // Or log the doc
      //   else {
      //     console.log(doc);
      //   }
      // });

    });
  });
}

scrape()
