import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { Link } from "gatsby"

const PurchaseButton = ({ title, subtitle }) => {
  return (
    <Link to="/page-2">
      <Wrapper>
        <Title>{title || "Pro Access"}</Title>
        <Subtitle>{subtitle || "$19 per month"}</Subtitle>
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
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: #595c7b;
  opacity: 0.7;
`
