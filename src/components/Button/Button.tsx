import styled from 'styled-components'
import { lighten, darken, grayscale } from 'polished'
import { color } from '../../shared/styles'
import FONTS from '../../constants/fonts'

const SHAPES = {
  REGULAR: 'regular',
  ROUNDED: 'rounded',
} as const

const Button = styled.button.attrs<{ disabled?: boolean }>(({ disabled }) => ({
  'aria-disabled': disabled,
}))<{
  disabled?: boolean
  bgColor?: string
  shape?: (typeof SHAPES)[keyof typeof SHAPES]
  variant?: (typeof FONTS)[keyof typeof FONTS]
}>`
  ${(props) => {
    const backgroundColor = props.bgColor || color.primary
    const disabledBgColor = grayscale(color.primary)

    return `
      font-family: ${`${
        props.variant || FONTS.VOLTAIRE
      }, 'Nunito Sans', sans-serif`};
      font-size: ${props?.variant === FONTS.UBUNTU ? '1.4em' : '1.75em'};
      background-color: ${props.disabled ? disabledBgColor : backgroundColor};
      border-color: ${darken(
        0.2,
        props.disabled ? disabledBgColor : backgroundColor
      )};
      border-style: solid;
      border-width: 0 0 3px;
      ${props.shape === SHAPES.ROUNDED && 'border-radius: 3px'};
      cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
      padding: ${props?.variant === FONTS.UBUNTU ? '.675em' : '.5em'} 1em;

      ${
        !props.disabled &&
        `
          position: relative;
          top: 0;
          transition: background-color 150ms, top 50ms, border-color 50ms;

          &:hover {
            background-color: ${lighten(0.05, backgroundColor)};
          }
          &:active {
            top: 3px;
            border-color: ${lighten(0.05, backgroundColor)};
          }
        `
      }
    `
  }}
`

export default Button
