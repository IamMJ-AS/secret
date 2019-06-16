// Packages
import React, { PureComponent } from 'react'
import { For } from 'react-extras'

// Components
import ProductItem from '../product-item'
import Footer from '../footer'

// UI
import theme from '../../ui/theme'

class Introduction extends PureComponent {
  render() {
    const products = [
      {
        title: 'on web',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet posuerec urabitur.',
        href: '/?content=web'
      },
      {
        title: 'on cli',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet posuerec urabitur.',
        href: '/?content=cli'
      },
      {
        title: 'on slack',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet posuerec urabitur.',
        href: '/?content=slack'
      }
    ]

    return (
      <section>
        <h1>secret</h1>
        <h2>
          send messages and files through a safe, private, and encrypted link that automatically
          expires to ensure your stuff does not remain online forever.
        </h2>

        <ul>
          <For
            of={products}
            render={item => (
              <ProductItem
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            )}
          />
        </ul>

        <Footer />

        <style jsx>{`
          section {
            padding: ${theme.spacing.xxxLarge} ${theme.spacing.xLarge};
          }

          h1 {
            font-size: 40px;
            font-weight: 400;
            margin-bottom: ${theme.spacing.medium};
          }

          h2 {
            font-weight: 400;
            font-size: 16px;
            color: #aaa;
            line-height: 26px;
            margin-bottom: ${theme.spacing.xxLarge};
          }

          h3 {
            font-size: 40px;
            color: ${theme.colors.black};
          }

          @media ${theme.responsive.small}, ${theme.responsive.medium}, ${theme.responsive.large} {
            section {
              flex-basis: 50%;
              width: 50%;
              padding: 100px 48px;
              max-height: 100vh;
              overflow-y: hidden;
            }
          }

          @media ${theme.responsive.large} {
            section {
              padding: 200px 100px;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Introduction
