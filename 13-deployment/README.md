![CF](https://i.imgur.com/7v5ASc8.png)  Class 13: Production & Deployment
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->
- The focus of this class is on students understanding the concept of production deployments in conjunction with development and production environments. Through the use of Heroku, you will guide students through the deployment process, configuration of environment variables, and general issues that can arise during the deployment phase of a project. Students should also understand development, production, and feature branches and how they are used in collaborative development.

- Besides teaching the basics of using Heroku (both CLI and GUI approaches, plus wiring up Heroku to track a GitHub repo, etc.), there's the matter of handling the token. That means modifying the server functionality so that a proxy (`express-request-proxy`, a new NPM dependency) can access the token that is stored in an environment variable.

- The need for and functionality of the proxy tends to befuddle students a bit, so be sure to leave time to discuss it in detail and leave room for questions. This is also a good day to fill in as much information on security as can fit, particularly basics of CORS and HTTPS.

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

- Be able to push a dev site to production, so the world can see it.
- Understand the difference between a static page and a dynamically generated app page.

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

- [Heroku: Getting Started with Nod*e](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying a Simple Blog to Herok*u](https://howtonode.org/deploy-blog-to-heroku)

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[Deployment slides](https://www.icloud.com/keynote/000Vu7MzlTOHCctaoklwoAezg#Code301%5FDay13)

[Heroku slides](https://drive.google.com/file/d/0B1sa21PAeFm6OGZuakpzNVhhRkk/view)

## Lecture: Production & Deployment
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->

* Topic 1 - Environments

    * Dev vs Production environment

    * What we look for in production env

    * What to do with the GitHub token?

    * How to deploy to Heroku (step by step)

    * Demo - How

        * Deployment-workshop directory

        * Walk through an application deployment

***Note: There are multiple ways to achieve similar tasks with Heroku. whether through the CLI (Command Line Interface, i.e., your terminal) or through the GUI (Graphic User Interface) provided by your account Dashboard on the Heroku site. We'll look at each, and students should be comfortable with both.***

#### Terminal:

1. **git clone** https://github.com/heroku/node-js-getting-started.git

  		   2. **cd node-js-getting-started**

   3. **git remote -v**** ** // origin should point to Heroku's GitHub repo

   4. **heroku create** // will generate a random app name

   5. **heroku create appName** // will generate an app with your name provided, if available.

   6. **git remote -v** // origin remains, but now we see a heroku remote as well!

**heroku apps** // display all user’s apps

**heroku apps:info** // display info on apps

**heroku apps:rename** updated-app-name

**heroku config** // Will list any current config vars

**heroku config:set** CONFIG_VAR=someValue

**heroku config:unset** CONFIG_VAR

**heroku sharing:add brian@codefellows.com **

**heroku open**

**heroku local**

**git status**

**git push heroku master**

**git push heroku branch:master** (if pushing from a branch other than your current one)

**heroku releases**

**heroku releases:info vNumber** // ex: heroku releases:info v2

**heroku rollback**  // rollback one release

**heroku rollback vNumber** // rollback to a specific release

**heroku apps:destroy app-name** // delete a heroku app (repo remains)

        * Development vs Production

        * Deployment steps

#### Heroku Dashboard

- This is where you can manage your deployments and your user account on the Heroku website, and even wire up your deployment to a branch in a GitHub repo to automate deployment updates if you choose. This is a nice way to view information about all of your apps at once and can be a simple tool for management, but keep in mind that the CLI is very useful and versatile. Ideally, students are comfortable using both for a variety of tasks.

- The initial view of the dashboard shows a list of all of your current Heroku apps and some basic information about them. You can click on one to go to a control panel for that app. That control panel has a series of tabs:
    - **Overview**: Basic details and activity logs for the app
    - **Resources**: This is where you can configure add-ons such as extra dynos or configure databases such as Heroku or MongoDB
    - **Deploy**: This tab provides options for deployment tasks, such as via a GitHub branch or other processes.
    - **Metrics**: This is an option available on paid accounts; the tab simply shows a preview of the tools on free accounts.
    - **Activity**: More detailed logging of development and production activity on the app.
    - **Access**: Configure collaborators to share the work on the app.
    - **Settings**: There is a variety of options here: application name, configuration of environment variables, domains/certificates, transfer of ownership, maintenance mode to disable the app temporarily, and an option to delete the app.

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 13: Production & Deployment](../../labs/13-production-deployment/README.md)
