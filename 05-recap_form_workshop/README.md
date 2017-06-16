![CF](https://i.imgur.com/7v5ASc8.png)  Class 5: Form-Building Workshop
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- The primary focus of this day should be on recapping the concepts that were presented throughout the week.  It’s always helpful to walk through each daily topic, on a high level, to ensure that students have a baseline understanding of the material.

- Through much trial and error, we have found that creating a simple, quadrant based, diagram on the whiteboard really helps visualize these topics and allows for students to engage in an open forum style discussion regarding what went well and what topics are still unclear.

- There is no defined lecture topic for this day; instead, this is a workshop-style lecture that is directed towards using jQuery to collect form data and create a unique JSON string that can be used in their locally sourced blog article data.  Students should follow along during this workshop, essentially writing the same code as the instructor, and submit their code as a PR for review.

- Even while following along, the students will make errors and need to do some cleanup during lab time. Whether this is a paired lab or an individual lab is at the discretion of the instructor.

- The form will take in all necessary data for a new article, and the page will render a preview of the article (using `Article.toHtml()`, thus a template is needed on this page) plus give a JSON export of the new article that can be copy/pasted into blogArticles.js and added to the blog.

- There is much more live coding on this day than the ones prior, and the students are anxious to shred a little code by this day. It's frequent to see in the weekly surveys, "Friday was the best day of the week, where we got to write a lot more code."

- There's one more big conceptual bit: we now have two HTML pages sharing the same JS, initializing each page independently is a bit of a challenge for students to grasp, especially that we are now sticking a distinct initialization function in a script tag at the bottom of each HTML doc. Seeing actual executing JS in a script tag kinda freaks them out at first.

- The workshop/lab fulfills MVP (or not, if you choose); there are stretch goals for implementing Markdown conversion and code block syntax highlighting with a couple of additional libraries. This day is great for review of the week's concepts and filling in any other gaps in student knowledge.

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

* Recap the primary concepts discussed throughout the week.

    * Ask the students "What have you learned so far?"

    * Ask "What has been challenging?"

    * Ask "What has been helpful?"

* Work through a form-based exercise to build out a JSON string.

* Discuss 3rd party library integration for dynamic code highlighting and markdown creation.

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

*(There are no readings for this day)*

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

*(There are no external resources or slides for this day)*

## Lecture: Form-Building Workshop
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->

* Topic 1 - Workshop: Build the new article form. Watch/do-along

    * HTML forms (Provide in starter code)

    * Export as JSON

    * Live preview of Markdown

    * highlight.js
*

    * Demo - How

        * What does HTML5 provide for semantic forms?

        * How do you show if form data is invalid with HTML5?

        * What event can update a page after a user enters text in an input, then tabs to the next field?

        * What is the relationship between Markdown and HTML?

        * What’s the relationship between JSON and JavaScript objects?

        * How can a JS object be transformed into JSON?

        * How can JSON be transformed into a JS object.

        * How do you keep a form submission from reloading the page?

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 5: Form-Building Workshop](../../labs/05-form-building/README.md)
