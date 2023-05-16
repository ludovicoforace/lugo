import {
  PokerCardProps,
  SuitIconProps,
  StyledPokerCardProps,
  hasSuitAndRank,
  CardTextProps,
} from './types'
import styled from 'styled-components'
import { darken } from 'polished'
import { FONTS } from '../..'
import { color } from '../../shared/styles'
import { colorMap, suitMap } from './constants'

const linearGradient = `repeating-linear-gradient(
  -55deg,
  ${darken(0.2, color.primary)},
  ${darken(0.2, color.primary)} 20px,
  ${color.primary} 20px,
  ${color.primary} 40px
)`

const CardText = styled.div<CardTextProps>`
  font-family: ${FONTS.UBUNTU};
  font-size: 30px;
  font-weight: bold;
  color: ${({ suit }) => colorMap[suit]};
`

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

const SuitIcon = ({ suit }: SuitIconProps) => {
  const Icon = suitMap[suit]
  return <Icon />
}

const PokerCard = (props: PokerCardProps) => {
  const reversed = !hasSuitAndRank(props)

  return (
    <StyledPokerCard reversed={reversed} {...props}>
      {!reversed && (
        <>
          <CardText suit={props.suit}>{props.rank}</CardText>
          <CardText suit={props.suit}>
            <SuitIcon suit={props.suit} />
          </CardText>
        </>
      )}
    </StyledPokerCard>
  )
}

export default PokerCard
