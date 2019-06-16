// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class IntroductionItem extends PureComponent {
  render() {
    const { title, description, href } = this.props

    return (
      <li>
        <Link href={href} prefetch>
          <a href={href}>
            <h4>{title}</h4>
            <p>{description}</p>
          </a>
        </Link>

        <style jsx>{`
          li {
            background-color: transparent;
            margin-bottom: ${theme.spacing.large};
          }

          a {
            padding: ${theme.spacing};
            color: ${theme.colors.white};
            display: block;
            border-radius: ${theme.radius.medium};
            transition: ${theme.transition};
            cursor: pointer;
          }

          a:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          h4 {
            font-size: 16px;
            font-weight: 600;
          }

          p {
            font-size: 13px;
            color: ${theme.colors.gray};
            margin-top: ${theme.spacing.small};
          }

          @media ${theme.responsive.large} {
            a {
              padding: ${theme.spacing.large};
            }

            h4 {
              font-size: 18px;
              font-weight: 600;
            }

            p {
              font-size: 16px;
              color: ${theme.colors.gray};
              margin-top: ${theme.spacing.small};
            }
          }
        `}</style>
      </li>
    )
  }
}

export default IntroductionItem
