import React from 'react'

export type MultiProviderProps = {
  providers: React.ReactElement[]
}

const MultiProvider: React.FC<MultiProviderProps> = ({
  children,
  providers
}) => {
  return (
    <React.Fragment>
      {providers.reduceRight(
        (acc, curr) => React.cloneElement(curr, {}, acc),
        children
      )}
    </React.Fragment>
  )
}

export default MultiProvider
