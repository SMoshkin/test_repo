import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;

type AnimationProp = {
  state: TransitionStatus;
};

const Animation = styled.div<AnimationProp>`
  transition: 0.5s;
  width: 300px;
  height: 200px;
  transform: translateX(${({ state }) => (state === 'entering' ? 400 : 0)}px);

  background: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 'red';
      case 'entered':
        return 'blue';
      case 'exiting':
        return 'green';
      case 'exited':
        return 'yellow';
    }
  }};
`;

export function Component() {
  const [animate, setAnimate] = useState(false);

  return (
    <Wrapper>
      <div onClick={() => setAnimate(true)}>Click</div>
      <Transition
        in={animate}
        onEntered={() => setAnimate(false)}
        timeout={500}
      >
        {state => {
          return <Animation state={state}>Hello</Animation>;
        }}
      </Transition>
    </Wrapper>
  );
}
