import React, { createContext, useContext } from 'react'
import { create } from 'react-test-renderer'
import MultiProvider from './MultiProvider'

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

describe('MultiProvider', () => {
  it('should accept empty array', () => {
    const component = create(
      <MultiProvider providers={[]}>
        <Context1Value />
        <Context2Value />
      </MultiProvider>
    )
    expect(component.toJSON()).toHaveLength(2)
    expect(component.toJSON()?.[0].children[0]).toBe('Context1-defaultValue')
    expect(component.toJSON()?.[1].children[0]).toBe('Context2-defaultValue')
  })
  it('should set all provider', () => {
    const component = create(
      <MultiProvider
        providers={[
          <Context1.Provider key={1} value='Context1-value' />,
          <Context2.Provider key={2} value='Context2-value' />
        ]}
      >
        <Context1Value />
        <Context2Value />
      </MultiProvider>
    )
    expect(component.toJSON()).toHaveLength(2)
    expect(component.toJSON()?.[0].children[0]).toBe('Context1-value')
    expect(component.toJSON()?.[1].children[0]).toBe('Context2-value')
  })
})
