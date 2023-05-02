import styled from 'styled-components'
import {
  BsFillHeartFill,
  BsSuitDiamondFill,
  BsSuitSpadeFill,
  BsSuitClubFill,
} from 'react-icons/bs'

const iconsStyle = `
  font-size: 32px;
`
const HearthIcon = styled(BsFillHeartFill)`
  ${iconsStyle}
  color: red;
`
const DiamondIcon = styled(BsSuitDiamondFill)`
  ${iconsStyle}
  color: red;
`
const SpadeIcon = styled(BsSuitSpadeFill)`
  ${iconsStyle}
  color: black;
`
const ClubIcon = styled(BsSuitClubFill)`
  ${iconsStyle}
  color: black;
`

export { HearthIcon, DiamondIcon, SpadeIcon, ClubIcon }
