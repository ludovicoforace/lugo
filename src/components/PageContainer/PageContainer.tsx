import styled from 'styled-components'
import { spacing } from '../../shared/styles'

const Container = styled.div<{
  maxWidth: string
  sideMargin: string
}>`
  ${(props) => `
    margin: 0 auto;
    max-width: ${props.maxWidth};

    @media screen and (max-width: calc(${props.maxWidth} + ${spacing.maxScrollbarWidth} + ${props.sideMargin} * 2)) {
      margin: 0 ${props.sideMargin};
      max-width: none;
    }
  `}
`

export default Container
