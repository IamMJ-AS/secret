// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

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
          ul {
            margin-top: 40px;
          }

          li {
            display: inline-block;
            margin-right: 16px;
          }

          a {
            color: #aaa;
            font-size: 13px;
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
