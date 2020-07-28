# Simple JS
Simple JavaScript library

This is just a challenge for myself to create a library like jquery without looking into jquery source code and this is what i made so far :)
-----
To use it's like jQuery

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
```javascript
$("#id").repClass("class1", "class2");
```

Remove = rem 
```javascript
$("#id").remClass("className");
$("#id").remAttr("disabled");
```

Toggle = tog 
```javascript
$("#id").togClass("class1", "class2");
$("#id").togAttr("disabled");
```

[ HTTP ] ex.

```javascript
$().get("example.com", res => {
  // Do something
  // Success request
})
.success(() => {
  // second success 
})
.fail(() => {
  // Fail request
})
.complete(() => {
  // Request is done/complete
});
```
`With auto json parse if response is json`

------

>Coded on mobile phone
