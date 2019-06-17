// Packages
import React, { PureComponent } from 'react'

// UI
import { ButtonLink } from '../../ui/button'
import Picture from '../../ui/picture'
import theme from '../../ui/theme'

class Product extends PureComponent {
  render() {
    const { title, description, href, src, alt } = this.props

    return (
      <section>
        <h1>{title}</h1>
        <p>{description}</p>

        <ButtonLink href={href}>Learn more</ButtonLink>

        <Picture src={src} alt={alt} />

        <style jsx>{`
          h1 {
            font-size: 40px;
            color: ${theme.colors.black};
            margin-bottom: ${theme.spacing};
          }

          p {
            font-size: 16px;
            color: ${theme.colors.black};
            margin-bottom: ${theme.spacing.large};
          }
        `}</style>
      </section>
    )
  }
}

export default Product
