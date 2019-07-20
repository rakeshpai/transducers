import React from 'react';
import { Slide, Heading, Image, List, ListItem } from 'spectacle';
import HeadingSlide from '../components/heading-slide';
import errorceptionLogo from './images/errorception.png';

export default [
  <HeadingSlide heading="Reducers and Transducers" />,

  <Slide>
    <Heading bold={false}>Rakesh Pai</Heading>
    <Image src={errorceptionLogo} width="50%" />
  </Slide>,

  <Slide>
    <Heading textAlign="left" bold={false}>Topics</Heading>
    <List bulletStyle="▪">
      <ListItem>Functional programming basics</ListItem>
      <ListItem>Function composition</ListItem>
      <ListItem><code>.map</code>, <code>.filter</code></ListItem>
      <ListItem><code>.reduce</code></ListItem>
      <ListItem>Transducers</ListItem>
    </List>
  </Slide>
];
