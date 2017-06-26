![CF](https://i.imgur.com/7v5ASc8.png)  Class 11: Single Page Applications & Client-Side Routing
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- Using page.js as a demonstration tool, you will guide students through route-based functionality to create a more performant and modular single page web application.  These routes should be simple, with a single callback that hands off control to the controller, which will call the appropriate method(s) to render the page to the DOM.

- This week brings another big paradigm change with the lab starter code being completely reorganized such that the scripts/ directory now has subdirectories for the controller/, model/, and view/ scripts, and with some functionality/methods being relocated. Be sure to provide an overview.

- On this day it is important to make sure the students are clear about when a server request is being made versus when the routing is intercepted and handled in the browser. It's pretty confusing for students at first. It helps to liken routing to JS event handling: the route is the listener, and the callback is the handler.

- There's definitely some ongoing cognitive dissonance for students about how we are finding new ways to blur the separation of concerns, in this case offloading some of the Controller responsibilities into the View layer. Be ready for questions and to provide explanations.

- Don't forget to show the similarities between PageJS and Express, especially that they were made by the same organization (VisionMedia and TJ Holowaychuk) and intended to work together smoothly.

---

## Learning Objectives
<!--
ABCD:
  Audience: Program participants
  Behavior: Expected learning/behavior changes/results
  Condition:
    Circumstances that lead to change/result
    When change/result are expected to occur
  Degree: How much change occurs (%) for how many participants (#)
-->

* Identify useful urls for an app, and be able to implement those routes given the new library presented.

* Recognize other server technologies such as node, new dependencies

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* JS&jQ: 424-427 (History API) (Essential)

* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)

* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[Starter code repository for class demo](https://github.com/codefellows/301-11-page-js-demo)

[SPA slides](https://www.icloud.com/keynote/000pe4si8HifQY3qxBLLIrysw#Code_301_-_Class_11)

## Lecture <Topic>
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->

Topic 1 - Review

    * Pair assignment Retrospective

        * What went well?

        * What was challenging?

* Topic 2 - Routing and Controllers

    * Single-Page Apps

        * Review: Why single page?

            95. Performance trade-offs

            96. User experience

        * jQuery’s role so far

            97. Event handling for our tabs

            98. Will still be hiding and showing content

        * Benefits of adding a ‘route’ to our page

            99. Lets user (and browser) believe they are navigating

            100. Updates History API to allow for ‘forward’ and ‘back’ actions

    * Demo - How

        * Showcase the History API in the console

            101. history is just an object

            102. It has a length property

                * Head to another page

                * Check the history length again

                * Now use some methods like ‘go’ ‘forward’ and ‘back’

            103. length will update based on pushState

            104. It cannot be directly modified!

        * Client-side routing

            105. How to use page.js

            106. Docs!

        * How to separate controller code for each resource.

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 11: Single Page Applications & Client-Side Routing](../../labs/11-SPA-routing/README.md)
