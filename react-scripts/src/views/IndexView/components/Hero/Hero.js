import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import image1 from '../../../../assets/images/background1.JPG';
import image2 from '../../../../assets/images/background2.JPG';
import {  useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginright: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    backgroundImage: `url(${image1})` ,
  
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: `$slideshow 50s linear infinite`,
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    }
  },
  imageAnimationDark: {
    backgroundImage: `url(${image2})` ,
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Hero = ({ themeMode = 'light', className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span"  className={classes.fontWeight900}>
   ???????? ?????? ???????????? ????????????   <br />???????????? ???? ???????????? ??????????   ???? : 
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        flexDirection="left"
        className={classes.fontWeight900}
        typedProps={{
          strings: [
            '???????? ????????????',
            '?????? ???????????? ',
            '???????? ?????????????? ',
            '????????????????',
            '?????? ???????????? ',
            '????????????????',
            '?????????????? ',
            '????????????...',
          ],
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle = '?????? ?????????? ???? ?????????? ?????? ???? ?????? , ?????????????? ???????? ???????????????? ???????????? ???? ???????? ';

  // const docsButton = (
  //   <Button size="large"  align="left"   variant="outlined" color="primary" component="a" href="/documentation">
  
  //   </Button>
  // );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
     
      align="right"
      href="/coworking"
    >
        ?????????? ???? ??????????????????...
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="right"
      marginRight="18px"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      ctaGroup={[buyButton]}
      data-aos="fade-left"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={(
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === 'dark' ? classes.imageAnimationDark: '',
            )}
          />
        )}
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Hero;
