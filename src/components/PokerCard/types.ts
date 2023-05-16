import type { HTMLAttributes } from 'react'

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

export type SuitAndRank = {
  suit: Suit
  rank: Rank
}

type WithoutRankAndSuit = {
  suit?: undefined
  rank?: undefined
}

export interface SuitIconProps {
  suit: Suit
}

export interface CardTextProps {
  suit: Suit
}

export type PokerCardProps = (SuitAndRank | WithoutRankAndSuit) &
  HTMLAttributes<HTMLDivElement>

export type StyledPokerCardProps = PokerCardProps & {
  reversed: boolean
}

export const hasSuitAndRank = (props: PokerCardProps): props is SuitAndRank => {
  return !!(props.suit && props.rank)
}
