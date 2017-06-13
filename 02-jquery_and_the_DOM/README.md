![CF](https://i.imgur.com/7v5ASc8.png)  Class 02: jQuery and the DOM
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- Students typically have little to no jQuery experience coming into the 301 course, and this is by design. In Code 201, students are taught to manage DOM behaviors through vanilla JavaScript methods on the **document** object.

- Please be sure to navigate through the jQuery [docs](https://api.jquery.com/) at least once, showing how a student should problem solve any task as it relates to the jQuery API. Unfortunately, the docs can be a common source of confusion, so please be sure to clear up how one should approach the examples they provide.

- Today we'll use jQuery for DOM manipulation/traversal only: events are in Class 3. Instruction on the different types of selectors is a key part of the lecture today.

- The blog in the starter code reads data (objects containing blog data) from a variable in blogArticles.js, and then passes each object through a constructor, thereby providing the instances a `.toHtml()` method that uses jQuery to `$.clone()` a template from the DOM and populate it with the specific content of that blog article object.

- This will test what students know about the DOM and about inheritance. It's good to allow time for refresher on those topics, since this day will likely expose gaps in the students' understanding and knowledge.

- There is also a slide deck on Agile that can be utilized (if you like) when covering that topic. It provides a background on code workflow processes and alternate techniques such as Waterfall.

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

* Understand why the jQuery library is useful and how to include it (local vs CDN).
* What is a dependency?
* Perform DOM manipulations using `append`, `remove`, `clone`, `data`, `html`, `text`.
* Traverse the DOM tree, with `parents`, `children`, `find`.
* Understand the use of event delegation for dynamic element selection.
* Differentiate between certain methods & the process of chaining.
* Understand proper `<script>` loading order in HTML.

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->
* Javascript & jQuery: pages 293-325
  * (Context: 293-301; Essential: 310-325; Reference: 302-309)

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->
* [jQuery & DOM Slides](https://www.icloud.com/keynote/000lkj_JepVjXS9izEO8qq0Dg#Code_301_-_Class_1_Dom_-_jQuery)

## Lecture: jQuery

### Topic - DOM & jQuery / Assignment Prep
* Overview
  * Including jQuery from CDN/locally sourced
  * Vanilla DOM selection & manipulation review
  * Basic jQuery syntax
  * Waiting for DOM load using `$(document).ready()`;
  * Basic CSS selector review - how this works with jQuery selection
    45. Each jQuery selection attempts to return a set of matched elements, and if it cannot, will return an empty array-like object.
  * Chaining methods
    46. Why are we able to chain in jQuery?
      * Each method returns a jQuery object
  * Understanding the "getter" and “setter” differences between single and double parameter jQuery method calls
    47. Ex:`$(‘.el’).data(‘some-data-attribute’)`- gets the data
    48. Ex:`$(‘.el’).data(‘some-data-attribute’, ‘some val’)`- sets the data
  * Basic project setup review
    49. Inclusion of reset stylesheet
    50. Basic HTML semantics
    51. Project structure

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab-02: jQuery & DOM](../../labs/02-jquery-and-DOM/README.md)
