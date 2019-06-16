const black = '#000000'
const white = '#ffffff'

const gray = '#aaaaaa'

const theme = {
  transition: Object.assign('all 0.1s ease-in-out', {
    medium: 'all 0.2s ease-in-out'
  }),
  shadow: Object.assign('0 4px 6px rgba(0, 0, 0, 0.04)'),
  radius: Object.assign('3px', {
    small: '2px',
    medium: '4px',
    large: '6px',
    round: '50%'
  }),
  spacing: Object.assign('8px', {
    small: '4px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xxLarge: '40px',
    xxxLarge: '48px'
  }),
  responsive: {
    small: 'screen and (max-width: 1080px) and (min-width: 800px)',
    medium: 'screen and (min-width: 1081px)',
    large: 'screen and (min-width: 1400px)'
  },
  colors: {
    black,
    white,
    gray
  }
}

export default theme
