# Simple JS
Simple JavaScript library

This is just a challenge for me to make library like jQuery...

-----
To use it's like jQuery :D

Prefix: $

[ DOM ] ex.
```javascript
$("#box").css("color", "red"); // Change color to red
$("#form").on("submit", () => {
  // Do something
});
$("input").foreach((el, i) => {
  // Do something
}); // Foreach loop
$(".box")
.attr("id") // get id
.id() // get id (shorthand)
.class() // get class (shorthand)
.title() // get title (shorthand)
.attr("id", "newID"); // set id
```
Notice:

Replace = rep 
`// $("#id").repClass("class1", "class2");`

Remove = rem 
`// $("#id").remClass("className");`

Toggle = tog 
`// $("#id").togClass("class1", "class2");`

[ HTTP ] ex.


Prefix: $("http")
```javascript
$("http").get("example.com", res => {
  // Do something
})
.done(() => {
  // second success call
})
.fail(() => {
  // Fail request
});
```
> With auto json parse if response is json

------
No hate pls just love :D

I'm just a student so if you have any suggestions/tips please share it.

>Coded on mobile phone.
