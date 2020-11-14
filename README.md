# react-pendulum

> Use the power of the Pendulum and change the course of the duel!
>
> react-pendulum a React Context utility libraries

[![NPM](https://img.shields.io/npm/v/react-pendulum.svg)](https://www.npmjs.com/package/react-pendulum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Using npm
```bash
npm install --save react-pendulum
```
Using yarn
```bash
yarn add react-pendulum
```

## Components

### MultiProvider

A component to nicely and readably wrap components with multiple providers

Props
- `providers` the array of providers instances to wrap to the `children`

```tsx
import React, { Component, createContext } from 'react'
import { MultiProvider } from 'pendulum'

const Context1 = createContext<string>('Context1-defaultValue')
const Context2 = createContext<string>('Context2-defaultValue')

const Context1Value = () => {
  const value = useContext(Context1)
  return <div>{value}</div>
}

const Context2Value = () => {
  const value = useContext(Context2)
  return <div>{value}</div>
}

class Example extends Component {
  render() {
    return (
      <MultiProvider
        providers={[
          <Context1.Provider value='Context1-value' />,
          <Context2.Provider value='Context2-value' />
        ]}
      >
      <Context1Value />
      <Context2Value />
    </MultiProvider>
    )
  }
}
```

## License

MIT © [](https://github.com/)
