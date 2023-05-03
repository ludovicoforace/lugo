import type { HTMLAttributes } from 'react'

type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs'
type Rank =
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

type RankAndSuit = {
  rank: Rank
  suit: Suit
}

type WithoutRankAndSuit = {
  rank?: undefined
  suit?: undefined
}

export interface SuitIconProps {
  suit: Suit
}

export interface CardTextProps {
  suit: Suit
}

export type PokerCardProps = (RankAndSuit | WithoutRankAndSuit) &
  HTMLAttributes<HTMLDivElement>

export type StyledPokerCardProps = PokerCardProps & {
  reversed: boolean
}

export const hasRankAndSuit = (props: PokerCardProps): props is RankAndSuit => {
  return !!(props.rank && props.suit)
}
