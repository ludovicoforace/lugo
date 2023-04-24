import { styled } from '@storybook/theming'
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
    width: 200px;
  }
`

export const All = () => (
  <Wrapper>
    <Button>Default</Button>
    <Button bgColor="rgb(143, 116, 189)">Custom color</Button>
    <Button disabled>Disabled</Button>
  </Wrapper>
)

All.storyName = 'All buttons'
