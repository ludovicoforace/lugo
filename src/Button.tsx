import styled from 'styled-components'
import { lighten, darken, grayscale } from 'polished'
import { color } from './shared/styles'

const Button = styled.button<{ disabled?: boolean; bgColor?: string }>`
  ${(props) => {
    const backgroundColor = props.bgColor || color.primary
    const disabledBgColor = grayscale(color.primary)

    return `
      position: relative;
      top: 0;
      background-color: ${props.disabled ? disabledBgColor : backgroundColor};
      border-color: ${darken(
        0.1,
        props.disabled ? disabledBgColor : backgroundColor
      )};
      border-style: solid;
      border-width: 0 0 3px;
      cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
      padding: .5em 1em;
      transition: background-color 150ms, top 50ms, border-color 50ms;

      ${
        !props.disabled &&
        `
          &:hover {
            background-color: ${lighten(0.1, backgroundColor)};
          }
          &:active {
            top: 3px;
            border-color: ${lighten(0.1, backgroundColor)};
          }
        `
      }
    `
  }}
`

export default Button
