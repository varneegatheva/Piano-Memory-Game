# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Varneega Theva

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/polyester-vigorous-slope

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added corresponding key labels (with its respective frequency) to each button in order to mimic the idea of playing a piano 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/cHu8h3E.gif)
![](https://i.imgur.com/r4WRFBt.gif)
![](https://i.imgur.com/KG7bx7p.gif)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://pages.mtu.edu/~suits/notefreqs.html
https://www.w3schools.com/cssref/css_colors.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[Since Racket was my first programming language that is also a functional programming language, it was harder to pick up on the syntax of JavaScript. Specifically, when working on the last component of the pre-work, I had some difficulty designing the guess function. Although I could write out the code using Racket syntax, I struggled with converting the lines of code to JavaScript. To overcome this barrier, I googled/youtubed some general concepts which furthered my understanding of this language. By going over examples of how functions are defined and the style rules, I was able to convert the code I had written into runnable code under the function definition. A key takeaway from this was that it is incredibly probable that I run into situations where I won’t have the answer or the understanding, but I’ll have the tools to develop it using the vast amount of online resources such as YouTube, StackExchange and others. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Through this project, I was able to see the symbiotic relationship between JS, CSS and HTML and how each of languages work together to create a functional, interactive webpage. Although I was able to manually test different cases on the application, I would like to learn how to automate this process. I would also like to learn how an entire software team is able to collaboratively work on one web application together at the same time logistically without having it affect another individual’s code.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would consider implementing some features to create the idea of playing an actual piano. In a simple case, I would change all the buttons’ colour to white and render a black key between certain buttons to mimic the look of the sharps and flats of a piano. Alternatively, a more complex idea would be to figure out how to render a button on top and in between two white buttons and assign it a sharp or flat frequency to create a more realistic function. I would also increase the number of piano keys to increase the complexity of the game, but provide the user 2 lives before they strike out and lose the game. This would be done by declaring a new variable that keeps track of the number of guesses and altering the guess function to handle the “else case” differently for when (pattern[guessCounter == btn). I would have to nest another if condition to increment this new “strike” variable by 1 and ask whether it equals to 3,and  if so the game would terminate. If not, then it would follow the rest of the original guess function and continue onwards  through the other if conditions.]
]



## Interview Recording URL Link

[https://youtu.be/X0PyI6FXOhY](your-link-here)


## License

    Copyright [Varneega Theva]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
