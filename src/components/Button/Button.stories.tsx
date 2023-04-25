import styled from 'styled-components'
import Button from './Button'

export default {
  title: 'Design System/Button',
  component: Button,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    display: inline-block;
    align-self: flex-start;
  }
`

export const AllVoltaire = () => (
  <Wrapper>
    <Button>Default</Button>
    <Button bgColor="rgb(143, 116, 189)">Custom color</Button>
    <Button shape="rounded">Rounded</Button>
    <Button disabled>Disabled</Button>
  </Wrapper>
)
AllVoltaire.storyName = 'Voltaire Button'

export const AllUbuntu = () => (
  <Wrapper>
    <Button variant="Ubuntu">Default</Button>
    <Button variant="Ubuntu" bgColor="#729d34">
      Custom color
    </Button>
    <Button variant="Ubuntu" shape="rounded">
      Rounded
    </Button>
    <Button shape="regular" variant="Ubuntu" disabled>
      Disabled
    </Button>
  </Wrapper>
)
AllUbuntu.storyName = 'Ubuntu Button'
