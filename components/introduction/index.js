// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// Components
import Footer from '../footer'

// UI
import theme from '../../ui/theme'

class Introduction extends PureComponent {
  render() {
    return (
      <section>
        <h1>secret</h1>
        <h2>
          send messages and files through a safe, private, and encrypted link that automatically
          expires to ensure your stuff does not remain online forever.
        </h2>

        <ul>
          <li>
            <Link href="/?content=web" prefetch>
              <a href="/?content=web">
                <h4>on web</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet
                  posuerec urabitur.
                </p>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/?content=cli" prefetch>
              <a href="/?content=cli">
                <h4>on cli</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet
                  posuerec urabitur.
                </p>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/?content=slack" prefetch>
              <a href="/?content=slack">
                <h4>on slack</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet
                  posuerec urabitur.
                </p>
              </a>
            </Link>
          </li>
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

          a {
            color: ${theme.colors.white};
          }

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

          h4 {
            font-size: 16px;
            font-weight: 600;
          }

          p {
            font-size: 13px;
            color: #aaa;
            margin-top: ${theme.spacing.small};
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
        `}</style>
      </section>
    )
  }
}

export default Introduction
