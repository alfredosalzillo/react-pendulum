# react-pendulum

A [React Context](https://it.reactjs.org/docs/context.html) utility library.

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

A component to clean up the nasty code you get from taking advantage of [React Context](https://it.reactjs.org/docs/context.html) API.

Props
- `providers` the array of providers instances to wrap to the `children`

```tsx
import React, { Component, createContext } from 'react'
import { MultiProvider } from 'react-pendulum'

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
A high order function to create the `withContext` HOC for any `Context`.

Args:
- `Context` the context to assign the value
- `propsName` the props name to assign the value of `Context`

```tsx
import React, { Component, createContext } from 'react'
import { withContext } from 'react-pendulum'

const NameContext = createContext<string>('John Doe')

const withName = withContext(NameContext, 'name');
const HelloWorld = withName(({ name }) => {
  return <>{`Hello ${name}`}</>
})
```

## License

MIT © [](https://github.com/)
