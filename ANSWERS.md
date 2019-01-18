[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
A useful accessory often used with React is PropTypes which is a way of making runtime assertions about what type of data a React component requires in order to render properl
without PropTypes or some form of type checking, we run into the risk of passing in a wrong data type to a component, which could cause a crash or some unexpected behavior in your application.

- [ ] Describe a life-cycle event in React?
      Mounting methods
      A component mounts when it is created and first inserted into the DOM i.e when it is rendered for the first time. The methods that are available during this period are:
      constructor()
      componentWillMount()
      render()
      componentDidMount()

Updating methods
Components do not always remain in the same state after mounting. Sometimes the underlying props could change and the component has to be re-rendered. The updating lifecycle methods give you control over when and how this updating should take place.

There are five updating lifecycle methods and they are called in the order they appear below:

componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

Unmounting method
Components do not always stay in the DOM. Sometimes they have to be removed due to changes in state or something else. The unmounting method will help us handle unmounting of components. We say method because there is just one method as at React 16.

The componentWillUnmount() method
This is the only unmounting method. componentWillUnmount is called right before a component is removed from the DOM. This is where you can perform any cleanups that should be done such as invalidating timers, canceling network requests, removing event listeners or canceling any subscriptions made in componentDidMount.

- [ ] Explain the details of a Higher Order Component?
      A Higher order component is a function that takes a component as an argument and returns a new component.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
      styled-components

Inline CSS This approach makes it easier to colocate styles in components and understanding what styles each component has. Leveraging the abilities of JS also makes it easier to work with more complex styling when needed

CSS in JS In React, CSS-in-JS lets you think and design styles in abstraction in the component level, leveraging the principles of modularity and isolation, unit-testing, DRY principle and so on

CSS Stylesheet cleaner easy and flexible
Some of the problems are:

1. Global ~~warming~~ namespaces.
2. Dead code elimination.
3. Dependencies.
4. Conditionals.
