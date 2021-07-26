import { useState } from 'react';
import styled from '@emotion/styled';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { HookForm } from '@/HookForm';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;

type AnimationProp = {
  state: TransitionStatus;
};

const condition = {
  entering: 0,
  entered: 1,
  exiting: 0,
  exited: 0,
  unmounted: 0
};

const Animation = styled.div<AnimationProp>`
  width: 300px;
  height: 200px;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ state }) => condition[state] || 0};

  background: black;
`;

export function Component() {
  const [animate, setAnimate] = useState(false);

  return (
    <Wrapper>
      <div onClick={() => setAnimate(!animate)}>Click</div>
      <Transition
        in={animate}
        timeout={{ appear: 300, enter: 0, exit: 300 }}
        appear
        mountOnEnter
        unmountOnExit
      >
        {state => {
          return <Animation state={state}>Hello</Animation>;
        }}
      </Transition>
      <HookForm />
    </Wrapper>
  );
}
