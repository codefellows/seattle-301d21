![CF](https://i.imgur.com/7v5ASc8.png)  Lab 12: REST and APIs
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

Now that we understand how applications can handle different URLs, we can write code that communicates with other applications. Let each partner try out their own user info to get the chance to see their repos with their token. For today, please create a `githubToken.js` file in the root of your app. Open this file, create a variable, and store your access token. Add the new file to your `.gitignore` in the terminal by running `echo githubToken.js >> .gitignore`

## Submission Instructions
When you are finished with lab, follow these steps to submit your work. Create one Pull Request (aka: "PR") from your Forked repo to the CF repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via Pull Requests within your repo.
1. Create a new PR from your Fork to the CF repo and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
  1. Write a good descriptive summary of your changes:
    1. Be sure to include how much time you spent on it, and who you worked with.
    1. Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.


## Learning Objectives

- Understand the history of HTTP, and the central role that REST plays.
- Use RESTful routes for a web service, to retrieve their own GitHub repos
- Design RESTful endpoints for their own blogging app

---

## Resources  

[GitHub API documentation](https://developer.github.com/v3/)

---

## Feature Tasks  

1. As a developer, I want to treat my GitHub repositories as a resource (with full MVC components), so that I can manage them within my blog.
 - You already have an `aboutController.js`,
 - so we need to add a `repo.js` model file,
 - and a `repoView.js` presentation layer.
 - GitHub API credentials should be stored in a local file (`githubToken.js`), but not committed to GitHub. Use `.gitignore` to prevent the file from being tracked (get help in lab if you don't know how to use `.gitignore`).
- As the site owner, I want to highlight certain repos on my `/about` page so that everyone can see the great projects I am working on.
 - Retrieve and manipulate repo info in your model file.
 - You can choose exactly what API end point to use.
 - Craft an API query to return repos that you want to highlight.
 - Build out a Handlebars template in your view file to display these repos.
- Ensure your code passes ESLint.
- Place all code within the proper layer of MVC abstraction and encapsulation.
- Use an authenticated AJAX call to GitHub's API to get your repos.
- DO NOT publish your GitHub Token to any public repo.

#### Stretch Goals  

 1. As the site owner, I want my lists of GitHub activity well designed, so visitors like looking at my page.
  - Start with a wireframe sketch of how you'd like the page to looking
  - Apply styles, as you've learned: icons, typography, colors, etc.
 1. As the site owner, I also want to show off other recent GitHub activity, so that everyone knows how active I am on GitHub.
  - Get creative with the data available to you via the GitHub API!
  - Want to create links to your gists?
  - Maybe highlight your GitHub followers, or whom you follow?

---

## Rubric  

Criteria | Pts
---|---
Meets all Assignment Reqs | 6
Uses idiomatic code style | 3
Follows proper Git workflow | 1
**Total** | **10**
