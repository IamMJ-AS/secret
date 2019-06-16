// Packages
import React, { PureComponent } from 'react'

// UI
import theme from '../theme'

class Picture extends PureComponent {
  render() {
    const { src, alt } = this.props

    return (
      <picture>
        <img src={src} alt={alt} />
        <label>{alt}</label>

        <style jsx>{`
          picture {
            width: 100%;
            margin-top: ${theme.spacing.xxLarge};
            margin-bottom: ${theme.spacing.xxLarge};
            display: block;
          }

          img {
            width: 100%;
            max-width: 100%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: ${theme.radius.medium};
          }

          label {
            text-align: center;
            color: #aaa;
            display: block;
            font-size: 12px;
            margin-top: ${theme.spacing.small};
          }
        `}</style>
      </picture>
    )
  }
}

export default Picture
