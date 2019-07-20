import React from 'react';
import { Deck } from 'spectacle';
import theme from './theme';
import intro from './slides/intro';
import fp from './slides/fp';
import composition from './slides/composition';
import mapAndFilter from './slides/map-and-filter';
import reduce from './slides/reduce';
import transducers from './slides/transducers';
import closing from './slides/closing';

const addChildren = arr => arr.map(x => x); // Silly React!

export default props => (
  <Deck
    transitionDuration={500}
    theme={theme}
    controls={false}
    progress="none"
    showFullscreenControl={false}
  >
    {addChildren(intro)}
    {addChildren(fp)}
    {addChildren(composition)}
    {addChildren(mapAndFilter)}
    {addChildren(reduce)}
    {addChildren(transducers)}
    {addChildren(closing)}
  </Deck>
);
