### Lecture Code

Array demonstration:
```javascript
var emptyArray = [];
var quizAnswers = ['b', 'd', 'a', 'a', 'c'];
var nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];
var multiLineArray = [
                      ['yes', 'y'],
                      ['no', 'n'],
                      ['no', 'n']
                    ];
var mixedArray = ['Scott', 'Schmidt', 10, true, 'luxurious'];
```

```javascript
var myArray = ['a' 'b', 'c'];
myArray[0] === 'a'

var index = 2;
myArray[index] === 'c'

myArray[1] = 'z' // ['a', 'z', 'c']
```


Have students follow along creating a new repo called `About-me` on gitHub.  

Then, have them clone the repo down to their `~/codefellows/201/` directory.  

While on `master`, have them all setup their `app.js`, `index.html`, and `style.css` with all the necessary boilerplate code to get them working together.  

Then `A-C-P` as a group to `master`.  

Once completed, have them all switch to a new branch called `class-2-lab` and explain that this is where they will be doing all of their work for the `class-2-lab`.  

In VSCode, go to `index.html` and add:  

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Class 2 Demo</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <main>
      <section>
        <h1>This is the second class</h1>
        <p>Some content</p>
        <p class="more-content">This is some more content</p>
        <p id="something-else">This has something else entirely.</p>
      </section>
    </main>
    <script src="app.js"></script>
  </body>
</html>
```  

Then we can head to `style.css`:  
```css
h1 {
  font-family: helvetica;
}

p {
  color: red;
}

section p.more-content {
  background-color: #FF0000;
}

.more-content {
  background-color: #0000FF;
}

#something-else {
  border: 5px dashed #00FF00;
}
```  

Let's build the `app.js` file:  
```javascript
'use strict';

var answer1 = confirm('Are you ready to rumble?');
if (answer1 === true) {
  console.log('LET\'S GET READY TO RUMBLE!!!');
} else {
  console.log('Oh. Well then.');
}

var myBool = true;
var anotherBool = false;
var thirdBool = true;

if (myBool || anotherBool) {
  console.log('Flerg the blerg!');
} else if (thirdBool) {
  console.log('You didn\'t flerg that blerg!');
} else {
  console.log('Did the blerg get flerged?');
}
```  

Run the above code with the following command:  
```
open-in-browser - (ALT + CTRL + Q)
```  
