import styled from 'styled-components'
import { spacing } from '../../shared/styles'

const Container = styled.div<{ maxWidth: string }>`
  ${(props) => `
    margin: 0 auto;
    max-width: ${props.maxWidth};

    @media screen and (max-width: calc(${props.maxWidth} + ${spacing.maxScrollbarWidth})) {
      max-width: none;
    }
  `}
`

export default Container
