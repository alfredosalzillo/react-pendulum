import React, { createContext } from 'react'
import { create } from 'react-test-renderer'
import withContext from './with-context'

const Context1 = createContext<string>('Context1-defaultValue')

const TestComponent: React.FC<{ value: string }> = ({ value }) => {
  return <div>{value}</div>
}
const Context1Value = withContext(Context1, 'value')(TestComponent)

describe('with-context', () => {
  it('should pass the default context value', () => {
    const component = create(<Context1Value />)
    // @ts-ignore
    expect(component.toJSON()?.children?.[0]).toBe('Context1-defaultValue')
  })
  it('should pass the latest context value', () => {
    const component = create(
      <Context1.Provider key={1} value='Context1-value'>
        <Context1Value />
      </Context1.Provider>
    )
    // @ts-ignore
    expect(component.toJSON()?.children?.[0]).toBe('Context1-value')
  })
})
