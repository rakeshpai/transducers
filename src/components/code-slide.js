import React from 'react';
import { Heading, Slide, CodePane } from 'spectacle';

export default ({ heading, code }) => (
  <Slide bgColor="black">
    <Heading
      size={6}
      textColor="white"
      bold={false}
    >
      {heading}
    </Heading>

    <br />

    <CodePane
      source={code}
      lang="js"
      style={{ fontSize: '1em' }}
    />
  </Slide>
);
