// Packages
import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Choose } from 'react-extras'

// Layouts
import Page from '../layouts/page'

// Components
import Introduction from '../components/introduction'

// UI
import theme from '../ui/theme'

const WebContent = dynamic({ loader: () => import('../components/web') })
const CliContent = dynamic({ loader: () => import('../components/cli') })
const SlackContent = dynamic({ loader: () => import('../components/slack') })

class Home extends Component {
  render() {
    const { router } = this.props

    return (
      <Page>
        <main>
          <Introduction />

          <section className="product">
            <Choose>
              <Choose.When condition={router.query.content === 'cli'}>
                <CliContent />
              </Choose.When>

              <Choose.When condition={router.query.content === 'slack'}>
                <SlackContent />
              </Choose.When>

              <Choose.Otherwise>
                <WebContent />
              </Choose.Otherwise>
            </Choose>
          </section>

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
                background-color: ${theme.colors.white};
                padding: 100px 48px;
              }
            }
          `}</style>
        </main>
      </Page>
    )
  }
}

export default withRouter(Home)
