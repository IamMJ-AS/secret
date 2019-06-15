// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// Components
import Footer from '../footer'

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
            flex-basis: 50%;
            width: 50%;
            padding: 100px 48px;
            max-height: 100vh;
            overflow-y: hidden;
          }

          h1 {
            font-size: 40px;
            font-weight: 400;
            margin-bottom: 16px;
          }

          h2 {
            font-weight: 400;
            font-size: 16px;
            color: #aaa;
            line-height: 26px;
            margin-bottom: 32px;
          }

          h3 {
            font-size: 40px;
            color: #000;
          }

          a {
            color: #fff;
          }

          li {
            background-color: transparent;
            margin-bottom: 24px;
            border-radius: 4px;
            padding: 16px;
            transition: 0.25s;
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
            margin-top: 4px;
          }
        `}</style>
      </section>
    )
  }
}

export default Introduction
