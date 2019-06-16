// Packages
import React, { PureComponent } from 'react'
import dynamic from 'next/dynamic'
import { Choose } from 'react-extras'

// UI
import theme from '../../ui/theme'

const Product = dynamic({ loader: () => import('../product') })

class Products extends PureComponent {
  render() {
    const { content } = this.props

    return (
      <section className="product">
        <Choose>
          <Choose.When condition={content === 'cli'}>
            <Product
              title="secret cli"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet posuerec urabitur."
              src="static/cli.png"
              alt="Command line tools"
            />
          </Choose.When>

          <Choose.When condition={content === 'slack'}>
            <Product
              title="secret slack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet posuerec urabitur."
              src="static/cli.png"
              alt="Command line tools"
            />
          </Choose.When>

          <Choose.Otherwise>
            <Product
              title="secret web"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet posuerec urabitur."
              src="static/web.png"
              alt="Command line tools"
            />
          </Choose.Otherwise>
        </Choose>

        <style jsx>{`
          .product {
            background-color: ${theme.colors.white};
            padding: 100px 48px;
          }

          @media ${theme.responsive.small}, ${theme.responsive.medium}, ${theme.responsive.large} {
            .product {
              flex-basis: 50%;
              width: 50%;
            }
          }

          @media ${theme.responsive.large} {
            .product {
              padding: 150px 100px;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Products
