import React from 'react';
import { Slide, Heading, Image, List, ListItem } from 'spectacle';
import HeadingSlide from '../components/heading-slide';
import errorceptionLogo from './images/errorception.png';

export default [
  <HeadingSlide heading="Reducers and Transducers" />,

  <Slide>
    <Heading bold={false}>Rakesh Pai</Heading>
    <br />
    <Image src={errorceptionLogo} width="50%" />
  </Slide>,

  <Slide>
    <Heading textAlign="left" size={3} bold={false}>Topics</Heading>
    <br />
    <List bulletStyle="▪">
      <ListItem>Functional programming basics</ListItem>
      <ListItem>Function composition</ListItem>
      <ListItem>.map, .filter</ListItem>
      <ListItem>.reduce</ListItem>
      <ListItem>Transducers</ListItem>
    </List>
  </Slide>
];
