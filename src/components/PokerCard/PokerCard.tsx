import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { FONTS } from '../..'
import Hearth from './images/Hearth'

const Content = styled.div`
  font-family: ${FONTS.UBUNTU};
  font-size: 30px;
  font-weight: bold;
  color: red;
`

const PokerCard = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Content>A</Content>
    <Content>
      <Hearth />
    </Content>
  </div>
))`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 15px;
  box-shadow: 0 1px 4px #5f5f63;
  padding: 20px;
  width: 120px;
  height: 200px;
`

export default PokerCard
