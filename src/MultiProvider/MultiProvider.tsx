import React from 'react'

const chainAsChildren = (
  children: React.ReactNode,
  component: React.ReactElement
) => React.cloneElement(component, {}, children)

export type MultiProviderProps = {
  providers: React.ReactElement[]
}

const MultiProvider: React.FC<MultiProviderProps> = ({
  children,
  providers
}) => {
  return (
    <React.Fragment>
      {providers.reduceRight(chainAsChildren, children)}
    </React.Fragment>
  )
}

export default MultiProvider
