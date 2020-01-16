### Follow along links

In this project I've created a highlight background for each link on the page, that has a nice transition.

First, I selected all the links and set up an event listener using forEach method. On mouseenter, each link will call highlightLink function.

This function calls getBoundingClientRect for a link that triggers it. getBoundingClientRect returns the size of an element and its position relative to the viewport.

Then I made a coords object to adjust the top and left offset that happens on scroll.

Finally, I add the style to my highlighted span: width and height is taken from the getBoundingClientRect width and height properties. Transform translate takes in my calculation with optional scrolling offset in pixels.