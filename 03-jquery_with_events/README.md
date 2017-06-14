![CF](https://i.imgur.com/7v5ASc8.png)  Class 3: jQuery and Events
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->
- As students are now working within the basic confines of jQuery selection and traversal, the focus of Class 3 should be on introducing the underlying concepts of jQuery-based events, event binding, event delegation, and effects.

- It may be best to include live demos that outline many of the common events and effects, in conjunction with detailing the concepts of how to work with delegated events and dynamically created elements. Be sure to demonstrate how to match element attribute values or text by using `$.on('change')` events and select box filtering.

- jQuery events are a deceptively rich topic: event types, event propagation, delegated events, etc., for students who just two weeks prior were struggling to distinguish clicks between different images in the Code 201  "BusMall" assignment. As with the previous two class days, strive to be attuned to identifying gaps in student knowledge and command of the fundamentals.

- The templating is the same as the previous day using `$.clone()`. The main technical challenges are getting the `<select>` filters populated with authors and categories, and handling the interactivity pieces (tab navigation and the dropdown filters).

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

* Execute event bindings with jQuery’s `$.on()` method

- Deter students from using the event method and to bind the event using `$.on()`

* Comprehend when event delegation is appropriate.

* Be able to configure event bindings using delegation.

* Familiarity with `data-`attributes & concatenation.

* Build dynamic jQuery selector strings.

* Use of `$(document).ready()`

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* JavaScript & jQuery: pages 326-366
  *(Context: 354-361; Essential: 322-353; Reference: 362-366)*

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[jQery events slides](https://www.icloud.com/keynote/000ehQ-r6uLxZWMsRU0BNZP2A#Code_301_-_Class_2_Slides)

## Lecture: jQuery & Events
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->

* jQuery Events

  * Review

      * Vanilla JS events recap (pg. 244)

      * Outline of Demonstrations:

          52. Connect the concept of events with the DOM

          53. Understand common browser events

          54. With jQuery, event listeners should be registered with `$.on()`

          55. Many DOM objects can have events attached

          56. Events are handled by callback functions

          57. Understanding ancestry of the DOM, how to traverse to child nodes (grandchild nodes?)

          58. Tabs are a common page idiom that can be implemented with a little jQuery

          59. Event handling can be used to override default behavior (like link click, or form submit)

          60. Chrome Dev Tools can help debug CSS/JS

      * Site design includes complimentary color choices

  * jQuery events

      * `$.on()`

          61. Whiteboard examples

          62. Read through the `$.on()` method documentation.

          63. Demonstrate use of `$.on()` with and without delegation.

      * click, change/input, scroll

      * Event delegation

          64. Discuss dynamically created and inserted elements, event bubbling, and event propagation.

  * Demonstrate event based concepts and code examples

      * These can be found on page 246 of the Duckett textbook.

  * Heavily demonstrate the use of the jQuery `$.data()` method

      * This should include getting data and setting data, and the differing formates of jQuery getters/setters

  * Demo - How

      * Demo hand-rolled page tabs

          65. Include the new script file.

          66. Demonstrate how to invoke a function inside of a `$(document).ready()`

          67. fill in the event handler code

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 3: jQuery and events](../../labs/03-jQuery-and-events/README.md)
