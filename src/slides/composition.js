import React from 'react';
import HeadingSlide from '../components/heading-slide';
import MathsSlide from '../components/maths-slide';
import CodeSlide from '../components/code-slide';
import composition from './example-code/composition/example.txt';
import pipe from './example-code/composition/pipe.txt';

export default [
  <HeadingSlide heading="Function composition" />,

  <MathsSlide>
    g( f(x) )
  </MathsSlide>,

  <MathsSlide>
    let h = g ∘ f
    <br /><br />
    h(x) = g( f(x) )
  </MathsSlide>,

  <CodeSlide
    heading="Function composition"
    code="const compose = (g, f) => x => g(f(x));"
  />,

  <CodeSlide heading="Function composition" code={composition} />,

  <MathsSlide>
    h ∘ g ∘ f<br />
      = (h ∘ g) ∘ f<br />
      = h ∘ (g ∘ f)
  </MathsSlide>,

  <CodeSlide heading="Pipe" code={pipe} />
];
