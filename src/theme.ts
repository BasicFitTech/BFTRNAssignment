const theme = {
  colors: {
    primary: {
      anthracite: '#2D2D2D',
      orange: '#FE7000',
      jerseyGrey: '#ECE9E8',
      white: '#FFFFFF',
      lightDarkGrey: '#949494'
    },
    secondary: {
      powerPurple: '#6131AD',
      boostBlue: '#0AD5DD',
      energyGreen: '#7DCD19',
      mint: '#7ADEC9',
      jerseygrey: '#ECE9E8'
    },
    ui: {
      grey: '#D6D6D6',
      greyTones: ['#2D2D2D', '#424242', '#575757', '#6B6B6B', '#808080', '#949494', '#BDBDBD'],
      timerTrail: '#A2A3A2',
      background: '#F5F5FE',
      chatBackground: '#E5E5E5',
      logan: '#ADADD0',
      loganLight: '#D5D5E5',
      blue: '#1292D8',
      statusBlue: '#34A4DC',
      red: '#FB2C1C',
      backgroundError: '#FEE4DF'
    },
    gradients: {
      orangeShimmer: ['#FFAA30', '#FE7000', '#FFAA30'],
      greyShimmer: ['#ECE9E8', '#D6D6D6', '#ECE9E8'],
      brand: ['#6131AD', '#FE7000'],
      service: ['#6131AD', '#0AD5DD'],
      anthracite: {
        angle: 180,
        useAngle: true,
        colors: ['#2D2D2D', '#121212']
      }
    },
    status: {
      red: '#EE3444'
    },
    refreshColors: {
      brightOrangeGradient: ['#FFAA30', '#FE7000'],
      asphaltGreyGradient: ['#2D2D2D', '#121212'],
      mintGreen: '#7ADEC9',
      minLight: 'rgba(122, 222, 201, 0.4)'
    },
    black: '#000000',
    shadow: 'rgba(0,0,0,0.16)',
    blackOpacity: 'rgba(0, 0, 0, .3) 100%',
    whiteOpacity: 'rgba(255, 255, 255, .3) 100%',
    whiteOpacity95: 'rgba(255, 255, 255, .95)',
    grayOpacity: 'rgba(210, 210, 210, 0.56)'
  },
  margins: {
    exterior: 32,
    external: 20,
    gutters: 16,
    internal: 8
  },
  size: [0, 8, 16, 24, 32, 40],
  borderRadius: 2,
  shadowOpacity: 0.16,
  fonts: {
    Argumentum: {
      BlackItalic: 'ArgumentumBlackItalic',
      Black: 'ArgumentumBlack',
      Bold: 'ArgumentumBold',
      BoldItalic: 'ArgumentumBoldItalic',
      Italic: 'ArgumentumItalic',
      LightItalic: 'ArgumentumLightItalic',
      Light: 'ArgumentumLight',
      MediumItalic: 'ArgumentumMediumItalic',
      Medium: 'ArgumentumMedium',
      ThinItalic: 'ArgumentumThinItalic',
      Thin: 'ArgumentumThin',
      UltraItalic: 'ArgumentumUltraItalic',
      Ultra: 'ArgumentumUltra',
      UltraLightItalic: 'ArgumentumUltraLightItalic',
      UltraLight: 'ArgumentumUltraLight',
      Regular: 'Argumentum'
    },
    Impact: 'Impact',
    Heading: {
      Double: 'HeadingProDouble-Regular',
      TrebleLight: 'HeadingProTreble-Light',
      TrebleRegular: 'HeadingProTreble-Regular',
      TrebleHeavy: 'HeadingProTreble-Heavy',
      TrebleExtraBold: 'HeadingProTreble-ExtraBold'
    }
  }
};

export default theme;