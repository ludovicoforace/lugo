import styled from 'styled-components'

const maxScrollbarWidth = '20px'
const Container = styled.div<{
  maxWidth: string
  sideMargin: string
}>`
  ${(props) => `
    margin: 0 auto;
    max-width: ${props.maxWidth};

    @media screen and (max-width: calc(${props.maxWidth} + ${maxScrollbarWidth} + ${props.sideMargin} * 2)) {
      margin: 0 ${props.sideMargin};
      max-width: none;
    }
  `}
`

export default Container
