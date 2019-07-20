import React from 'react';
import { Slide, Heading, Image } from 'spectacle';
import HeadingSlide from '../components/heading-slide';
import CodeSlide from '../components/code-slide';
import arrayMapFilter from './example-code/transducers/array-map-filter.txt';
import composedMapFilter from './example-code/transducers/composed-map-filter.txt';
import imperativeMapFilter from './example-code/transducers/imperative-map-filter.txt';
import mapFilterWithReduce from './example-code/transducers/map-filter-with-reduce.txt';
import extractedConcat from './example-code/transducers/extracted-concat.txt';
import chainingReducers from './example-code/transducers/chaining-reducers.txt';
import composingReducers1 from './example-code/transducers/composing-reducers-1.txt';
import composingReducers2 from './example-code/transducers/composing-reducers-2.txt';
import redefiningMap from './example-code/transducers/redefining-map.txt';
import redefiningFilter from './example-code/transducers/redefining-filter.txt';
import transducerExample from './example-code/transducers/transducer-example.txt';
import fork from './images/fork.webp';
import noCompromise from './images/no-compromise.webp';

export default [
  <HeadingSlide heading="Transducers" />,

  <CodeSlide heading="Composing map and filter" code={arrayMapFilter} />,
  <CodeSlide heading="Composing map and filter" code={composedMapFilter} />,
  <CodeSlide heading="Imperative map and filter" code={imperativeMapFilter} />,
  <Slide bgImage={fork}>
    <Heading style={{
      fontWeight: 'normal',
      color: 'black',
      textShadow: '0 0 50px #fff'
    }}>
      Readabililty or Performance?
    </Heading>
  </Slide>,
  <Slide bgColor="#ed0e0e">
    <Image src={noCompromise} />
  </Slide>,
  <CodeSlide heading="map and filter as reducers" code={mapFilterWithReduce} />,
  <CodeSlide heading="Extracting concat" code={extractedConcat} />,
  <CodeSlide heading="Chaining reducers" code={chainingReducers} />,
  <CodeSlide heading="Composing reducers" code={composingReducers1} />,
  <CodeSlide heading="Composing reducers" code={composingReducers2} />,
  <CodeSlide heading="Redefining map" code={redefiningMap} />,
  <CodeSlide heading="Redefining filter" code={redefiningFilter} />,
  <CodeSlide heading="Transducer heaven" code={transducerExample} />
];
