# `08` A real component
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)



In the past exercise we created our first component called **PrintHello** and we learned that we can use the component like an HTML tag.
```jsx
<PrintHello />
```

Now let's create another component (function) called **"Card"** that outputs the following HTML:

```jsx
<div class="card m-5">
  <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Bob Dylan</h5>
    <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
```

:point_up: This HTML code is based on the [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/).

# :speech_balloon: Instructions

Write your code in `src/index.js`

- Please create a function named `Card` that returns the card code and use the ReactDOM.render function with `<Card />` argument to add it into the website inside `#root`.

Note: if you don't know or remember how to use `ReactDOM.render` you can review the past exercises.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### `Card` component

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | is rendered |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Component is used with **tag syntax** in `ReactDOM.render` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-component-real-component)


[//]: # (autograding info end)