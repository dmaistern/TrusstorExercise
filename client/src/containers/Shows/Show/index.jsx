import React, { useEffect } from 'react';
import anime from 'animejs';
import { Wrapper, ShowImage, ShowName } from './styles';


export const Show  = ({name, image}) => {

  useEffect(() => {
    anime({
      targets: '.showImage',
      width: {
        value: '200px',
        duration: 1500,
      },
      autoplay: true,
      direction: 'normal',
    });
    anime({
      targets: '.showName',
      width: {
        value: '190px',
        duration: 1500,
      },
      autoplay: true,
      direction: 'normal',
    });
  }, [])

  return (
    <Wrapper >
      <ShowImage src={image} className="showImage"/>
      <ShowName className="showName">{name}</ShowName>
    </Wrapper>
  )
};
