// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class ButtonLink extends PureComponent {
  render() {
    const { children, href } = this.props

    return (
      <Link href={href}>
        <a href={href}>
          {children}

          <style jsx>{`
            a {
              background-color: transparent;
              color: ${theme.colors.black};
              padding: 12px ${theme.spacing.large};
              letter-spacing: 2px;
              text-transform: uppercase;
              text-align: center;
              font-size: 12px;
              border: 1px solid ${theme.colors.black};
              border-radius: ${theme.radius.medium};
              cursor: pointer;
            }
          `}</style>
        </a>
      </Link>
    )
  }
}

export default ButtonLink
