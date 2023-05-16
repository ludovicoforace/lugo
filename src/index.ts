import { Suit, Rank, SuitAndRank } from './components/PokerCard/types'
import { spacing } from './shared/styles'
export { resetCSS } from './shared/GlobalStyle'
export { default as FONTS } from './constants/fonts'
export { default as Button } from './components/Button/Button'
export { default as PageContainer } from './components/PageContainer/PageContainer'
export { default as PokerCard } from './components/PokerCard/PokerCard'

export const maxScrollbarWidth = spacing.maxScrollbarWidth
export type PokerSuit = Suit
export type PokerRank = Rank
export type PokerSuitAndRank = SuitAndRank
