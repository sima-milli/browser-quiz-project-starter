# Getting Started

This repository functions as the basis of the quiz project in the [Browsers module](https://github.com/HackYourFuture/Browsers). [TODO] Add description about our project idea.
Created by @A-Ghoujal, @drappidrap and @YunusEmreBEYAZ

## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

# Structure

Instead of writing all code in a single JavaScript file, we splitted our code over several files.
The structure of this project is explained in the next video

[![Project Structure YouTube Video](https://i.imgur.com/hDcLYFt.png)](https://youtu.be/bysBqtSKBpQ)

Let's run through the folders:

```
public
src
└── pages
└── views
└── app.js
└── constants.js
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
    it also contains our code that links up our handler code to the DOM.
  - `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
  - `app.js` this file our initialisation code. Generally this code should only run once and starts the application
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

# Goal and Backlog

Our goals and acceptance criteria:

- [x] (must have) A user can see one question at a time, stepping through the quiz.
- [ ] (must have) A user can select an answer for each question.
- [ ] (must have) Change the <title>
- [ ] (must have) add a favicon.
- [ ] (should have) A user can see what the correct answer is after they selected their answer.
- [ ] (should have) A user can see their score update in real-time as they select answers.
- [ ] (should have) A user can refresh the page and still have his/her given answers available.
- [ ] (could have) A user can "skip" the question and learn the correct answer, this forfeits the question.
- [ ] (could have) Transition between pages or question look fancy like TypeForm for example.

You should create tasks that fit with your goal, these tasks serve just as an example.
