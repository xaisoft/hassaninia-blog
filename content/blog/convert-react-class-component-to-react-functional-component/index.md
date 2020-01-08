---
title: Convert a class component to a functional component
date: "2020-01-08"
description: Take the steps to convert a react class component to a functional component
---

Below we have a class component that we want to refactor into a functional component

```js
import React from "react"

class Menu extends React.Component() {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav></nav>
      </header>
    )
  }
}
```

In functional components, we no longer need to return our `JSX` inside a `render()` method, so we can remove this and just return the `JSX`

```js
import React from "react"

class Menu extends React.Component() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav></nav>
      </header>
    )
}
```

Let's replace

```js
class Menu extends React.Component()
```

with:

```js
import React from "react"

const Menu = () => {
  return (
    <header>
      <h1>{this.props.title}</h1>
      <nav></nav>
    </header>
  )
}
```

If we using props, we no longer access them via `this`. Lets pass in props as an argument to our component and remove `this.`:

```js
import React from "react"

const Menu = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <nav></nav>
    </header>
  )
}
```

That's it
