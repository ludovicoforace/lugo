import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { FONTS } from '../..'
import { ClubIcon, DiamondIcon, HearthIcon, SpadeIcon } from './icons'

const colorMap = {
  hearts: 'red',
  diamonds: 'red',
  spades: 'black',
  clubs: 'black',
}

const suitMap = {
  hearts: HearthIcon,
  diamonds: DiamondIcon,
  spades: SpadeIcon,
  clubs: ClubIcon,
}

export type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs'
export type Rank =
  | 'A'
  | 'K'
  | 'Q'
  | 'J'
  | '10'
  | '9'
  | '8'
  | '7'
  | '6'
  | '5'
  | '4'
  | '3'
  | '2'

const Content = styled.div<{ suit: Suit }>`
  font-family: ${FONTS.UBUNTU};
  font-size: 30px;
  font-weight: bold;
  color: ${({ suit }) => colorMap[suit]};
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  rank: Rank
  suit: Suit
}

const PokerCard = styled(({ rank, suit, ...rest }: Props) => {
  const Suit = suitMap[suit]

  return (
    <div {...rest}>
      <Content suit={suit}>{rank}</Content>
      <Content suit={suit}>
        <Suit />
      </Content>
    </div>
  )
})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 15px;
  box-shadow: 0 1px 4px #5f5f63;
  padding: 20px;
  width: 120px;
  height: 200px;
`

export default PokerCard
