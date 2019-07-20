import React from 'react';
import { Slide, Heading } from 'spectacle';
import HeadingSlide from '../components/heading-slide';
import MathsSlide from '../components/maths-slide';
import pure from './images/pure.webp';
import astronomy from './images/astronomy.webp';
import curry from './images/curry.webp';
import pureCode from './example-code/fp/pure.txt';
import sideEffectyCode from './example-code/fp/side-effecty-code.txt';
import firstClassFunctions from './example-code/fp/first-class-functions.txt';
import currying from './example-code/fp/currying.txt';
import CodeSlide from '../components/code-slide';

export default [
  <HeadingSlide heading="Functional programming" />,

  <MathsSlide>
    f(x)
  </MathsSlide>,
  
  <Slide bgImage={pure}>
    <Heading
      style={{ textShadow: '0 0 50px rgba(255,255,255,0.8)' }}
      bold={false}
    >
      Pure functions
    </Heading>
  </Slide>,

  <CodeSlide heading="Pure functions" code={pureCode} />,

  <Slide bgColor="red">
    <Heading
      bold={false}
      textColor="black"
    >
      Side-effects
    </Heading>
  </Slide>,

  <CodeSlide heading="Side-effects" code={sideEffectyCode} />,

  <Slide bgImage={astronomy}>
    <Heading
      bold={false}
      style={{ textShadow: '0 0 100px #fff', color: 'black' }}
    >
      First class functions
    </Heading>
  </Slide>,

  <CodeSlide heading="First class functions" code={firstClassFunctions} />,

  <Slide bgImage={curry} bgLighten={0.5}>
    <Heading textColor="black" bold={false}>Currying</Heading>
  </Slide>,

  <CodeSlide heading="Currying" code={currying} />
];
