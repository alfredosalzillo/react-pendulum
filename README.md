# react-pendulum

> Use the power of the Pendulum and change the course of the duel!
>
> react-pendulum a React Context utility libraries

[![NPM](https://img.shields.io/npm/v/react-pendulum.svg)](https://www.npmjs.com/package/react-pendulum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/alfredosalzillo/pendulum/branch/main/graph/badge.svg)](https://codecov.io/gh/alfredosalzillo/pendulum)

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

- [MultiProvider](#multiprovider)

### MultiProvider

A component to nicely and readably wrap components with multiple providers

Props
- `providers` the array of providers instances to wrap to the `children`

```tsx
import React, { Component, createContext } from 'react'
import { MultiProvider } from 'pendulum'

const FirstNameContext = createContext<string>('John')
const LastNameContext = createContext<string>('Doe')

const HelloWorld = () => {
  const firstName = useContext(FirstNameContext)
  const lastName = useContext(LastNameContext)
  return <>{`Hello ${firstName} ${lastName}`}</>
}

class App extends Component {
  render() {
    return (
      <MultiProvider
        providers={[
          <FirstNameContext.Provider value='Yugi' />,
          <LastNameContext.Provider value='Muto' />
        ]}
      >
      <HelloWorld />
    </MultiProvider>
    )
  }
}
```

## Utilities

- [withContext](#withcontext)

### withContext
A high order function to pass the context value as props to a component.

Args:
- `Context` the context to assign the value
- `propsName` the props name to assign the value of `Context`

```tsx
import React, { Component, createContext } from 'react'
import { withContext } from 'pendulum'

const NameContext = createContext<string>('John Doe')

const withName = withContext(Context1, 'name');
const HelloWorld = withName(({ name }) => {
  return <>{`Hello ${name}`}</>
})
```

## License

MIT © [](https://github.com/)
