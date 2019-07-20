import React from 'react';
import { Slide, Heading, Text, Link } from 'spectacle';
import HeadingSlide from '../components/heading-slide';
import CodeSlide from '../components/code-slide';
import reduceExample from './example-code/reduce/example.txt';
import reduceToObject from './example-code/reduce/reduce-to-object.txt';
import mapUsingReduce from './example-code/reduce/map-using-reduce.txt';
import filterUsingReduce from './example-code/reduce/filter-using-reduce.txt';
import pipeUsingReduce from './example-code/reduce/pipe-using-reduce.txt';
import fastFpMacro from './example-code/reduce/fast-fp-macro.txt';
import superPower from './images/super-power.webp';

export default [
  <HeadingSlide heading=".reduce" />,

  <CodeSlide heading="Reduce" code={reduceExample} />,
  
  <CodeSlide heading="Reduce to anything" code={reduceToObject} />,

  <Slide bgImage={superPower} bgLighten={0.4}>
    <Heading style={{
      fontWeight: 'normal',
      color: 'black',
      textShadow: '0 0 50px white'
    }}>
      Reduce is a super power!
    </Heading>
  </Slide>,

  <CodeSlide heading="map using reduce" code={mapUsingReduce} />,
  <CodeSlide heading="filter using reduce" code={filterUsingReduce} />,
  <CodeSlide heading="pipe using reduce" code={pipeUsingReduce} />,
  <Slide>
    <Heading size={3} style={{
      fontWeight: 'normal',
      color: 'black'
    }}>
      Shameless plug
    </Heading>
    <br />
    <Link target="_blank" href="https://github.com/rakeshpai/fast-fp.macro">
      github.com/rakeshpai/fast-fp.macro
    </Link>
  </Slide>,
  <CodeSlide heading="rakeshpai/fast-fp.macro" code={fastFpMacro} />
];
