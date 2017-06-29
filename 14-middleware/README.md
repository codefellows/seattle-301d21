# Middleware

![CF](https://i.imgur.com/7v5ASc8.png)  Class 14: Middleware
=======
## Overview

- The focus of this class will be the underlying concepts of middleware and how to manage application state, through the use of a routing framework (PageJS). ***State*** is a big concept that is probably fairly new to the students, so be sure to explain it in detail.

- In particular, students should be able to use page.js to attach properties to its `ctx` object, use the `ctx` object to extract URL parameters and resource indicators, and use the provided `next` function, and understand callback chains to create modular and refactored routes.

- There is not a lot of direct linkage between the class demo and the lab today, except that they both involve a deeper exploration of middleware.

- The lab is primarily a commenting lab where students go through and explain how things are working in the blog app. There's been changes since the previous day in how the blog app manages state, and this is the "final" version of the blog app.*

---

## Learning Objectives

* Middleware in PageJS router
* Query params in Context

---

## Readings

* [Page.js selections](https://github.com/visionmedia/page.js#context) *(Especially the "Context" and “Routing” sections)*

---

## Resources / Slides

[Starter code repository for class demo](https://github.com/codefellows/301-14-middleware-demo)


[Slides](https://www.icloud.com/keynote/000IXTGU56Elt32vtEl1npMvQ#Code_301_-_Class_14)

## Lecture <Topic>


**Middleware?!?! What's that?**
  - What is it?
  - Why are we using PageJS?
  - The context object `ctx`, `next()`, and working with multiple callbacks in PageJS
  - Working with URL params

**What other middleware have seen this week?**

---

## Lab

- [Lab 14: Managing State](../../labs/14-managing-state/README.md)
