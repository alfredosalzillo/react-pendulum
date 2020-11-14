# pendulum

> A React Context utilities library

[![NPM](https://img.shields.io/npm/v/pendulum.svg)](https://www.npmjs.com/package/pendulum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Using npm
```bash
npm install --save pendulum
```
Using yarn
```bash
yarn add pendulum
```

## Components

### MultiProvider

A component to wrap components with multiple providers nicely,

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
