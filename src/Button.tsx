import styled from 'styled-components'
import { lighten, darken, grayscale } from 'polished'
import { color } from './shared/styles'

const SHAPES = {
  REGULAR: 'regular',
  ROUNDED: 'rounded',
} as const

const VARIANTS = {
  VOLTAIRE: 'voltaire',
  UBUNTU: 'ubuntu',
} as const

const Button = styled.button.attrs<{ disabled?: boolean }>(({ disabled }) => ({
  'aria-disabled': disabled,
}))<{
  disabled?: boolean
  bgColor?: string
  shape?: (typeof SHAPES)[keyof typeof SHAPES]
  variant?: (typeof VARIANTS)[keyof typeof VARIANTS]
}>`
  ${(props) => {
    const backgroundColor = props.bgColor || color.primary
    const disabledBgColor = grayscale(color.primary)

    return `
      font-family: ${
        props?.variant === VARIANTS.UBUNTU
          ? `Ubuntu, 'Nunito Sans', sans-serif`
          : `Voltaire, 'Nunito Sans', sans-serif`
      };
      font-size: ${props?.variant === VARIANTS.UBUNTU ? '1.4em' : '1.75em'};
      background-color: ${props.disabled ? disabledBgColor : backgroundColor};
      border-color: ${darken(
        0.2,
        props.disabled ? disabledBgColor : backgroundColor
      )};
      border-style: solid;
      border-width: 0 0 3px;
      ${props.shape === SHAPES.ROUNDED && 'border-radius: 3px'};
      cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
      padding: ${props?.variant === VARIANTS.UBUNTU ? '.675em' : '.5em'} 1em;

      ${
        !props.disabled &&
        `
          position: relative;
          top: 0;
          transition: background-color 150ms, top 50ms, border-color 50ms;

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
