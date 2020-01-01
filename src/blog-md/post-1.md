---
path: "/blog/blog-with-gatsby"
date: "2020-01-01"
title: "A blog with Gatsby"
featuredImage: "../images/computer-code.jpg"
---

## Why Gatsby?

Happy new year!

When I have decided to create my website, I wanted to make it by using _React_. After some search, I've heard about _GatsbyJS_ , which depends on React to create static websites. Actually, it is the main reason that lead me to use GatsbyJS for my website. When I've started to follow the tutorial and make my firsts tests, I was a bit annoyed by the time required by the script to run the local dev server (it takes me about 1-2 minutes each time). Some suggested me to try Hugo, but I wasn't actually quite excited by the tool although it was really fast. It's always better to stick to things you like to work with :smile:.

Through this first blog post, I will share with you some points on which I've spend some time.

## Markdown styling

### Bulma

The content of this post is written in Markdown (You can find it on my GitHub repo, if you want to check!). I've initially thought that it will take me a lot of time to render the page based on my file styling. I use [Bulma](https://bulma.io) as my css framework. I was aware that a Markdown title will be converted to an `<h1>` tag after the tutorial I followed but I needed to add the Bulma classes specific to a title to make my styling works.

When you're into code, it's very rare that you have an issue that someone else didn't have before.. That's how I've ended up by downloading [gatsby-remark-bulma](https://www.gatsbyjs.org/packages/gatsby-remark-bulma/) which perfectly fits my need.

### Emojis

When I write some text in Markdown, it's usally within services that supports emojis integrations. As many, I know the `:code:` for some emojis by heart. :joy:. To integrate them to my blog, I use:

- `gatsby-remark-emoji` which parses the code and replaces the emoji
- `gatsby-remark-a11y-emoji` which wraps the emoji into `<span role="img"></span>` for a11y.
- VSCode extension to suggest me the emojis when I don't know the code :see_no_evil: (I'll talk about my VSCode setup in another post!)

### Code snippets

Syntax highlighting is made thanks to [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/). It works after adding it to your `gatsby-config.js` file, but I was just a bit disappointed by the default themes availables. I personnaly like a theme for VSCode called [Nord](https://github.com/arcticicestudio/nord-visual-studio-code). I wanted to use it for my code snippets on the blog. This was made possible thanks to [@GalenWong](https://github.com/GalenWong/nord-prism-js)!

```javascript
const name = "Vidushan";
console.log(`Hello ${name}!`);
```

To use a custom theme with the `gatsby-remark-prismjs`, you just have to require the css from `gatsby-browser.js`!
