import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { Link } from "gatsby"

const PurchaseButton = ({ title, subtitle }) => {
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
          <Ring src="images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Pro Access"}</Title>
          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}
export default PurchaseButton

const Wrapper = styled.h1`
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 280px;
  height: 77px;
  padding: 12px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;

  &,
  * {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: #595c7b;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const IconWrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`
