<style type="text/css">ol { list-style-type: upper-alpha; }</style>

# Final Exam

## Problem 1

> JavaScript is a version of the Java programming language.
>
> 1.  True
> 1.  False

**B.** False

## Problem 2

> What built-in function would you use to convert JavaScript objects to JSON
  text?
>
> 1.  JSON.parse()
> 1.  JSON.stringiy()
> 1.  JSON. string()
> 1.  parse()

**B.** JSON.stringify()

## Problem 3

> JavaScript code is case-sensitive.
>
> 1.  True
> 1.  False

**A.** True

## Problem 4

> By default when the browser encounters JavaScript code it stops parsing the
  page completely to execute the code
>
> 1.  True
> 1.  False

**A.** True

## Problem 5

> You use npm to install the webpack JavaScript module bundler.
>
> 1.  True
> 1.  False

**A.** True

## Problem 6

> When building a web application you can send requests to the server using any
  of the HTTP verbs (GET, POST, PUT, DELETE) as the action attribute of a
  regular HTML form.
>
> 1.  True
> 1.  False

**B.** False

## Problem 7

> The following line of code will immediately store gps coordinates as an object
  in the variable coords.
>
> ```js
> var coords = navigator.geolocation.getCurrentPosition();
> ```
>
> 1.  True
> 1.  False

**B.** False

## Problem 8

> The `navigator.geolocation.watch()` method will allow you to consistently
  monitor a browsers location.
>
> 1.  True
> 1.  False

**B.** False

## Problem 9

> Node JS was built from the Google's V8 JavaScript Engine.
>
> 1.  True
> 1.  False

**A.** True

## Problem 10

> In the HTML 5 canvas API where is the default location of the `(0, 0)`
  coordinate?
>
> 1.  top left
> 1.  top right
> 1.  bottom right
> 1.  bottom left

**A.** top left

## Problem 11

> All HTML 5 canvas drawing commands must be started with the `beginPath()`
  command.
>
> 1.  True
> 1.  False

**B.** False

## Problem 12

> What is the best way to attach an event handler to an element?
>
> 1.  It is not possible
> 1.  As an attribute on the HTML element.
      `<span onclick="eventHandler()"></span>`
> 1.  As a method attached to a DOM object.
      `document.getElementByld(myld).onclick = eventHandler;`
> 1.  Using the add event listener method on a DOM object.
      `document.getElementByld(myld').addEventListener(click', eventHandler, false);`

**D.** Using the add event listener method on a DOM object.

## Problem 13

> Which JavaScript operator do you use to calculate the remainder of a division?
>
> 1.  %
> 1.  *
> 1.  /
> 1.  +

**A.** %

## Problem 14

> The following uses the function expression syntax to create the `myFunction`
  function?
>
> ```js
> var myFunction = function() {
>   statements;
> };
> ```
>
> 1.  True
> 1.  False

**A.** True

## Problem 15

> It is possible to modify something already drawn to the canvas after you have
  called the drawing commands on the context in the HTML5 canvas API.
>
> 1.  True
> 1.  False

**B.** False

## Problem 16

> What would be the value alerted by this function when it is run?
>
> ```js
> function myFunction {
>   if (true) {
>     var a = 5;
>   }
>   alert(a);
> }
> ```
>
> 1.  0
> 1.  5
> 1.  Undefined
> 1.  Null

**B.** 5

## Problem 17

> Which of the following is NOT a valid JavaScript variable name?
>
> 1.  _myVariable
> 1.  $myVariable
> 1.  2myVariable
> 1.  All of them are valid

**C.** 2myVariable

## Problem 18

> Which is NOT true about the HTML5 Indexed DB API?
>
> 1.  Can store complex JavaScript objects directly in a key
> 1.  Asynchronous API that uses a lot of function callbacks
> 1.  Can use SQL syntax to access data in the database
> 1.  Storage limit that is greater than HTML5 localStorage

**C.** Can use SQL syntax to access data in the database

## Problem 19

> Which is NOT true about the DOM api?
>
> 1.  It represents all the elements of an HTML or XML Document as Objects
> 1.  It is a collection of nodes in a nested tree
> 1.  It can only be used in the JavaScript language
> 1.  Provides methods to transverse, access, and modify elements

**C.** It can only be used in the JavaScript language

## Problem 20

> Which event occurs when the user clicks on an HTML element?
>
> 1.  onmouseclick
> 1.  onclick
> 1.  onmouseover
> 1.  onchange

**B.** onclick

## Problem 21

> What two ways can you make a comment in JavaScript?
>
> 1.
>
> ```js
> // comment here code here
> code here
> ```
>
> 2.
>
> ```js
> /* comment here code here */
> code here
> ```
>
> 3.
>
> ```sh
> # comment here code here
> code here
> ```
>
> 4.
>
> ```html
> <!-- comment here code here -->
> code here
> ```

- **A.** `// comment here code here`
- **B.** `/* comment here code here */`

## Problem 22

> You must use the `sessionStorage.getItem(myKey, 'myData')` method to retrieve
  data in the HTML5 sessionStorage.
>
> 1.  True
> 1.  False

**B.** False

## Problem 23

> Given the following code:
>
> ```js
> function Person(fname, lname) {
>   this.name = "person: " + fname;
>   var fullName = fname + "" + lname;
>   function print() {
>     alert(fullName);
>   }
>   this.render = function() {
>     print();
>   };
> }
> var myPerson = new Person("Anita", "Debarlaben");
> ```
>
> Which of the following is a valid expression?
>
> 1.  myPerson.fname
> 1.  myPerson.fullName
> 1.  myPerson.print()
> 1.  myPerson.render()

**D.** myPerson.render()

## Problem 24

> What is the value printed to the console in the following code?
>
> ```js
> var a = [5, 3, 8, 2];
> var b = 3;
> for (var i = 1; i < a.length; i++) {
>   b *= a[i];
> }
> console.log(a.length +b):
> ```

**148**

## Problem 25

> What is the value printed to the console in the following code?
>
> ```js
> var a = 5;
>
> function myfunction(b) {
>   var a = b * b;
>   return a;
> }
>
> var c = myfunction(a);
> console.log(c % a);
> ```

**0**

## Problem 26

> What is the value printed to the console in the following code?
>
> ```js
> var a = [12, 4, 2, 5, 6];
> var b = 2;
> var c = a.map(function(obj) {
>   return obj + b;
> });
> var d = c[3] * a[1];
> console.log(d);
> ```

**28**

## Problem 27

> What is the value printed to the console in the following code?
>
> ```js
> var displayClosure = function() {
>   var count = 0;
>   return function () {
>     return ++count;
>   };
> }
> var inc = displayClosure();
> inc();
> inc();
> inc();
> console.log(inc());
> ```

**4**

## Problem 28

> A do while loop does not evaluate the condition before it executes the block
  of code the first time.
>
> 1.  True
> 1.  False

**A.** True

## Problem 29

> JavaScript variables declared with var have block scope
>
> 1.  True
> 1.  False

**B.** False

## Problem 30

> JavaScript was originally developed by who?
>
> 1.  Brendan Eich
> 1.  Marc Andreessen
> 1.  Douglas Crockford
> 1.  Tim Berners-Lee

**A.** Brendan Eich

## Problem 31

> In ES6 what keyword declares a block scoped variable?
>
> 1.  const
> 1.  var
> 1.  let
> 1.  this

**C.** let

## Problem 32

> React was first created at Google and open sourced in March 2015.
>
> 1.  True
> 1.  False

**B.** False

## Problem 33

> In standard JavaScript what would this expression evaluate to?
>
> ```js
> (5 == '5')
> ```
>
> 1.  True
> 1.  False

**A.** True

## Problem 34

> In React JS, properties or props are passed back and forth between parent and
  child components and modified directly to save persistant data changes
>
> 1.  True
> 1.  False

**B.** False

## Problem 35

> In React JS, what is the only required method you must define in a class
  component?
>
> 1.  render()
> 1.  constructor()
> 1.  return
> 1.  componentDidMount()

**A.** render()

## Problem 36

> In React JS, if your component has state it is managing it is ok to modify the
  values of the state object directly in the component like below.
>
> ```js
> this.state.comment = "Hello";
> ```
>
> 1.  True
> 1.  False

**B.** False

## Problem 37

> How does JavaScript store dates in objects of Date type?
>
> 1.  The number of days since January 1, 1970.
> 1.  The number of seconds since January 1, 1970.
> 1.  The number of milliseconds since January 1, 1970.
> 1.  The number of minutes since January 1, 1970.

**C.** The number of milliseconds since January 1, 1970.

## Problem 38

> If you use JSX in React JS it is optional to use babel or another tool to
  convert it to plain JS
>
> 1.  True
> 1.  False

**A.** True

## Problem 39

> Which React component lifecycle method is the recommended place to do all your
  initial AJAX calls.
>
> 1.  constructor
> 1.  componentDidMount
> 1.  componentWillUnmount
> 1.  componentWillUpdate

**B.** componentDidMount

## Problem 40

> How do you evaluate a JavaScript variable or expression inside JSX syntax?
>
> 1.  [variable]
> 1.  {variable}
> 1.  Svariable
> 1.  &variable

**B.** {variable}

## Problem 41

> What would be the value alerted by this function when it is run?
>
> ```js
> function my_function() {
>   let a = 10;
>   if (true) {
>     let a = 5;
>   }
>   alert(a);
> }
> ```
>
> 1.  10
> 1.  5
> 1.  Null
> 1.  Nan

**A.** 10

## Problem 42

> In JavaScript, what is the value of the following comparison expression.
>
> ```js
> (0.1 + 0.2 === 0.3 )
> ```
>
> 1.  True
> 1.  False

**B.** False

## Problem 43

> Which DOM method is used to select the first element found based on a css
  selector string?
>
> 1.  getElementByld()
> 1.  getElementsByClassName()
> 1.  getElementsByTagName()
> 1.  document.querySelector()

**D.** document.querySelector()

## Problem 44

> The `type="module"` is required on any script tag that use ES6 Modules.
>
> 1.  True
> 1.  False

**A.** True

## Problem 45

> What is the value of food type after executing this code?
>
> ```js
> const food = { type: 'pizza' };
> food.type = 'sandwich';
> const seconds = food;
> seconds.type = 'cake';
> ```
>
> 1.  pizza
> 1.  sandwich
> 1.  cake
> 1.  food

**C.** cake

## Problem 46

> What is the output of this code?
>
> ```js
> let animals = ["Bird", "Dog", "Cat", "Fish"];
> animals.splice(0, 2);
> console.log(animals);
> ```
>
> 1.  ["Bird", "Dog", "Cat"]
> 1.  ["Bird", "Dog", "Cat", "Fish"]
> 1.  ["Cat", "Fish"]
> 1.  ["Bird", "Dog"]

**C.** ["Cat", "Fish"]

## Problem 47

> What is data passed to React components as?
>
> 1.  Elements
> 1.  Props
> 1.  Renders
> 1.  Functions

**B.** Props

## Problem 48

> As a build tool, babel's job is to combine all the JS module imports in
  separate files into a single file.
>
> 1.  True
> 1.  False

**B.** False

## Problem 49

> A component is a function or a Class which optionally accepts input and
  returns a ______.
>
> 1.  Function
> 1.  React element
> 1.  Address
> 1.  Root element

**B.** React element

## Problem 50

> What is the 1st parameter listed for the `React.createElement` function call
  below:
>
> ```js
> class HelloHeader extends React.Component {
>   render() {
>     return React.createElement('h1', null, 'Hello World!');
>   }
> }
> ```
>
> 1.  Types
> 1.  Props
> 1.  Children
> 1.  Parents

**A.** Types
