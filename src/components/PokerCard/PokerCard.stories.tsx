import styled from 'styled-components'
import PokerCard from './PokerCard'

export default {
  title: 'Design System/PokerCard',
  component: PokerCard,
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const AllPokerCards = () => (
  <Wrapper>
    <PokerCard rank="A" suit="hearts" />
    <PokerCard rank="Q" suit="clubs" />
    <PokerCard rank="4" suit="diamonds" />
    <PokerCard rank="2" suit="spades" />
  </Wrapper>
)
AllPokerCards.storyName = 'Default'
