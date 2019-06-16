// Packages
import React, { PureComponent } from 'react'

// UI
import theme from '../theme'

class Button extends PureComponent {
  render() {
    const { children, type } = this.props

    return (
      <button type={type}>
        {children}

        <style jsx>{`
          button {
            background-color: transparent;
            color: ${theme.colors.black};
            padding: 12px ${theme.spacing.large};
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            border: 1px solid ${theme.colors.black};
            border-radius: ${theme.radius.medium};
            cursor: pointer;
          }
        `}</style>
      </button>
    )
  }
}

export default Button
