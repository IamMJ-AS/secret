// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <Link href="/about">
              <a href="/about">About</a>
            </Link>
          </li>

          <li>
            <Link href="/releases">
              <a href="/releases">Releases</a>
            </Link>
          </li>

          <li>
            <Link href="/privacy">
              <a href="/privacy">Privacy</a>
            </Link>
          </li>

          <li>
            <Link href="/terms">
              <a href="/terms">Terms of Service</a>
            </Link>
          </li>
        </ul>

        <style jsx>{`
          footer {
            display: none;
          }

          ul {
            margin-top: ${theme.spacing.xxxLarge};
          }

          li {
            display: inline-block;
            margin-right: ${theme.spacing.medium};
          }

          a {
            color: ${theme.colors.gray};
            font-size: 13px;
            transition: ${theme.transition};
          }

          a:hover {
            color: ${theme.colors.white};
          }

          @media ${theme.responsive.small}, ${theme.responsive.medium}, ${theme.responsive.large} {
            footer {
              display: block;
            }
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
