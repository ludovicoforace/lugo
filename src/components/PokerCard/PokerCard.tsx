import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { FONTS } from '../..'
import { ClubIcon, DiamondIcon, HearthIcon, SpadeIcon } from './icons'
import { color } from '../../shared/styles'

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

const linearGradient = `repeating-linear-gradient(
  -55deg,
  ${darken(0.2, color.primary)},
  ${darken(0.2, color.primary)} 20px,
  ${color.primary} 20px,
  ${color.primary} 40px
)`

const Content = styled.div<{ suit: Suit }>`
  font-family: ${FONTS.UBUNTU};
  font-size: 30px;
  font-weight: bold;
  color: ${({ suit }) => colorMap[suit]};
`

type RankAndSuit = {
  rank: Rank
  suit: Suit
}

type WithoutRankAndSuit = {
  rank?: undefined
  suit?: undefined
}

type Props = (RankAndSuit | WithoutRankAndSuit) & HTMLAttributes<HTMLDivElement>

const hasRankAndSuit = (props: Props): props is RankAndSuit => {
  return !!(props.rank && props.suit)
}

type StyledPokerCardProps = Props & {
  reversed: boolean
}

const StyledPokerCard = styled.div<StyledPokerCardProps>`
  width: 120px;
  height: 200px;
  box-shadow: 0 1px 4px #5f5f63;
  border-radius: 15px;

  ${({ reversed }) => `
    background-color: ${reversed ? color.primary : '#e6e6e6'};

    ${
      reversed
        ? `background: ${linearGradient}`
        : `
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      padding: 20px;
    `
    }
  `}
`

const SuitIcon = ({ suit }: { suit: Suit }) => {
  const Icon = suitMap[suit]
  return <Icon />
}

const PokerCard = (props: Props) => {
  const reversed = !hasRankAndSuit(props)

  return (
    <StyledPokerCard reversed={reversed} {...props}>
      {!reversed && (
        <>
          <Content suit={props.suit}>{props.rank}</Content>
          <Content suit={props.suit}>
            <SuitIcon suit={props.suit} />
          </Content>
        </>
      )}
    </StyledPokerCard>
  )
}

export default PokerCard
