import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButtons"

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img alt="logo" src="/images/logos/logo.svg" />
      </Link>

      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton key={index} item={item} />
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`
