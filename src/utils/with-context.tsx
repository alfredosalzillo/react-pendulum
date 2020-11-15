import React, { useContext } from 'react'

const withContext = <
  ContextValue,
  PropNameType extends keyof any,
  ContextValueAsPropsType = Record<PropNameType, ContextValue>
>(
  Context: React.Context<ContextValue>,
  propsName: PropNameType
) => <Props extends ContextValueAsPropsType>(
  Component: React.ComponentType<Props>
): React.ComponentType<Omit<Props, PropNameType>> => (props) => {
  const value = useContext(Context)
  const additionalProps = ({
    [propsName]: value
  } as unknown) as ContextValueAsPropsType
  // @ts-ignore
  return <Component {...props} {...additionalProps} />
}

export default withContext
