import React from 'react';
import { Heading, Slide } from 'spectacle';
import styled from 'react-emotion';
import paper from './images/paper.webp';

const H = styled(Heading)`
  font-weight: normal;
  font-family: 'Times New Roman';
  font-style: italic;
  color: black;
`;

export default ({ children }) => (
  <Slide bgImage={paper} bgLighten={0.5}>
    <H>{children}</H>
  </Slide>
);
