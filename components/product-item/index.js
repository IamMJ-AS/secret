// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class ProductItem extends PureComponent {
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
            border-radius: ${theme.radius.medium};
            padding: ${theme.spacing};
            transition: ${theme.transition};
            cursor: pointer;
          }

          li:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          a {
            color: ${theme.colors.white};
          }

          h4 {
            font-size: 16px;
            font-weight: 600;
          }

          p {
            font-size: 13px;
            color: #aaa;
            margin-top: ${theme.spacing.small};
          }

          @media ${theme.responsive.large} {
            li {
              padding: ${theme.spacing.large};
            }

            h4 {
              font-size: 18px;
              font-weight: 600;
            }

            p {
              font-size: 16px;
              color: #aaa;
              margin-top: ${theme.spacing.small};
            }
          }
        `}</style>
      </li>
    )
  }
}

export default ProductItem
