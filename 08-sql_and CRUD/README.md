![CF](https://i.imgur.com/7v5ASc8.png)  Class 8: SQL & Postgres
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- The primary focus of this class should be the syntax of SQL and how to interact (using CRUD operations) with a database persistence layer in the browser.

- Here we go... full-stack "there and back again": from the browser to the server to the Postgres database and back through the server to the browser.

- The goal of the day is just to get students to understand it as much as possible, since this is their first real exposure to the entirety of the process, both conceptually and in practice with running multiple simultaneous processes on their laptops.

- The lab for today has them making comments in existing code rather than writing code. This is also when they need to get a familiarity with the basics of the SQL shell.

- There is also the matter of getting Postgres set up and working across a variety of operating systems and possible versions of those OSes. Problems always comes up: that's the nature of these installations and as we know, just part of the Dev Life.

- Keep in mind that you can refer back to the pre-work repo for a refresher on the instructions that students are given for setup.

- Do not get bogged down in examining the database loader functions at the bottom of the provided server.js, but do ensure that students have looked at it and have a basic understanding of how it works.

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

* Understand the basic concepts of databases

* Effectively use basic SQL commands to create, read, update, and delete rows from a table

* Understand the fundamental architecture of full-stack applications and how we can locally emulate them

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* [SQLBolt (Intro, Lessons 1-4, 13-18)](http://sqlbolt.com/)

* [A Primer on SQL](https://leanpub.com/aprimeronsql/read) (Reference)

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[SQL slides](https://www.icloud.com/keynote/000U7LKI_iSrfJAuo73LsA-Hw#Code_301_-_Class_8_Slides)

## Lecture: Databases, CRUD, and SQL
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->

* Topic 1 - CRUD

    * CRUD - Databases as a resource

        * C - CREATE

        * R - READ

        * U - UPDATE

        * D - DESTROY (or DELETE)

    * Relational Databases

        * Discuss differences between document based storage

        * Discuss common DBMS - MySQL, PostgreSQL, SQLite, etc

        * Discuss concepts of relational data

    * SQL

        * Syntax

        * Statements

        * Clauses

        * Constraints

        * Expressions

        * Predicates

        * [SQL cheat sheet](http://www.cheat-sheets.org/sites/sql.su/)

    * Data types

        * **INTEGER**

        * **NOT NULL**

        * **PRIMARY KEY**

        * **CHAR**

        * **VARCHAR**

    * WebSQL

        * Discuss importance of using this for exposure and teaching concepts, not for large scale application development

        * Discuss the webDB abstraction layer

            80. **webDB.execute** method

                * Discuss different options

                * Discuss dynamic value based data injection to avoid SQL injection

            81. webDB.init method

                * Discuss how it connects to the database

        * Discuss

    * Demo - How

        * Demo SQL interaction in Chrome Dev Tools

            82. Initialize a connection to the database

            83. Create a test table

            84. Use SQL to interact with the database in the Chrome database console

            85. Insert records from sample database

            86. Delete records from sample database

            87. Update records from sample database

            88. Demonstrate how to drop a table

            89. Use different clauses to demonstrate SQL syntax

            90. Discuss importance of using a library or abstraction layer to communicate with the database through the use of JavaScript

        * Exposure to formation of more advanced SQL queries.

        * Knowledge of how to interact with WebSQL in the browser.

        * Ability to interact with Web SQL using JavaScript

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 8: SQL & Postgres](../../labs/08-SQL-and-Postgres/README.md)
