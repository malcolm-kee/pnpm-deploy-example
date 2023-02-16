import * as React from 'react';

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(
  function Button(props, forwardedRef) {
    return <button type="button" {...props} ref={forwardedRef} />
  }
)