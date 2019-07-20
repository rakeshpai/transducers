import React from 'react';
import { Slide, Heading, Table, TableRow, TableItem, Text, List, ListItem, Link } from 'spectacle';
import styled from 'react-emotion';
import HeadingSlide from '../components/heading-slide';
import CodeSlide from '../components/code-slide';
import ramdaExample from './example-code/closing/ramda.txt';

const TD = styled(TableItem)`
  font-size: 0.8em;
  text-align: left;
  padding: 20px;
  border-bottom: 1px solid grey;

  &:not(:last-child) {
    border-right: 1px solid grey;
  }

  &:nth-child(2) {
    text-align: center;
  }
`;

export default [
  <HeadingSlide heading="Closing notes" />,

  <CodeSlide heading="Use a library" code={ramdaExample} />,

  <Slide>
    <Heading textColor="black" bold={false}>reduced</Heading>
    <Text>Useful for lazy lists, streams, etc</Text>
  </Slide>,

  <Slide>
    <Heading size={3} bold={false}>
      Monoid
    </Heading>
    <br />
    <Table>
      <TableRow>
        <TD>Append</TD>
        <TD><code>[]</code></TD>
        <TD><code>(acc, item) => acc.concat(item);</code></TD>
      </TableRow>
      <TableRow>
        <TD>Concat</TD>
        <TD><code>''</code></TD>
        <TD><code>(acc, item) => acc + item;</code></TD>
      </TableRow>
      <TableRow>
        <TD>Merge</TD>
        <TD><code>{'{}'}</code></TD>
        <TD><code>(acc, item) => {'{ ...acc, ...item }'};</code></TD>
      </TableRow>
      <TableRow>
        <TD>Add</TD>
        <TD><code>0</code></TD>
        <TD><code>(acc, item) => acc + item;</code></TD>
      </TableRow>
      <TableRow>
        <TD>Multiply</TD>
        <TD><code>1</code></TD>
        <TD><code>(acc, item) => acc * item;</code></TD>
      </TableRow>
    </Table>
  </Slide>,

  <Slide>
    <Heading bold={false} size={3}>References</Heading>
    <List>
      <ListItem><Link href="https://ramdajs.com/">Ramda</Link></ListItem>
      <ListItem>tramsducer.js</ListItem>
      <ListItem><Link href="https://github.com/fantasyland/fantasy-land">FantasyLand Spec</Link></ListItem>
      <ListItem><Link href="https://www.youtube.com/watch?v=6mTbuzafcII">Rich Hickey (Clojure) on Transducers</Link></ListItem>
    </List>
  </Slide>,

  <Slide>
    <Heading size={3} bold={false}>
      Thank you
    </Heading>
    <br />
    <Text>Rakesh Pai</Text>
    <Text>@rakesh314</Text>
    <br />
    <Text>Slides: github.com/rakeshpai/transducer</Text>
  </Slide>
];
