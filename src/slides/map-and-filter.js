import React from 'react';
import { Image } from 'spectacle';
import HeadingSlide from '../components/heading-slide';
import CodeSlide from '../components/code-slide';
import MathsSlide from '../components/maths-slide';
import arrayMap from './example-code/map-and-filter/array-map.txt';
import mapDefinition from './example-code/map-and-filter/map-definition.txt';
import composingMaps from './example-code/map-and-filter/composing-maps.txt';
import mapProperties from './example-code/map-and-filter/map-properties.txt';
import arrayFilter from './example-code/map-and-filter/array-filter.txt';
import filterDefinition from './example-code/map-and-filter/filter-definition.txt';
import mapImage from './images/injection.png';
import compositionImage from './images/composition.webp';

export default [
  <HeadingSlide heading=".map" />,

  <CodeSlide heading="Array.map" code={arrayMap} />,

  <MathsSlide>
    <Image src={mapImage} />
  </MathsSlide>,

  <CodeSlide heading="Redefining map" code={mapDefinition} />,
  <CodeSlide heading="Composing maps" code={composingMaps} />,
  <CodeSlide heading="Composing maps" code={mapProperties} />,

  <MathsSlide>
    <Image src={compositionImage} width="50%" />
  </MathsSlide>,

  <HeadingSlide heading=".filter" />,

  <CodeSlide heading="Array.filter" code={arrayFilter} />,
  <CodeSlide heading="Redefining filter" code={filterDefinition} />
];
