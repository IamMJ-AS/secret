// Packages
import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

// Layouts
import Page from '../layouts/page'

// Components
import Introduction from '../components/introduction'
import Products from '../components/products'

// UI
import theme from '../ui/theme'

class Home extends Component {
  render() {
    const { router } = this.props

    return (
      <Page>
        <main>
          <Introduction />

          <Products content={router.query.content} />

          <style jsx>{`
            @media ${theme.responsive.small},
              ${theme.responsive.medium},
              ${theme.responsive.large} {
              main {
                display: flex;
                justify-content: space-between;
                min-height: 100vh;
                flex-wrap: wrap;
              }

              .product {
                flex-basis: 50%;
                width: 50%;
              }
            }

            @media ${theme.responsive.large} {
              .product {
                padding: 200px 100px;
              }
            }
          `}</style>
        </main>
      </Page>
    )
  }
}

export default withRouter(Home)
