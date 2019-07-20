import React from 'react';
import { Heading, Slide } from 'spectacle';
import styled from 'react-emotion';
import background from './images/slide-background.webp';

const H = styled(Heading)`
  font-weight: normal;
  text-shadow: 0 0 30px #fff;
`;

export default ({ heading }) => (
  <Slide bgImage={background} bgLighten={0.5}>
    <H>{heading}</H>
  </Slide>
);
