import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButtons"
import MenuTooltip from "../tooltips/MenuTooltip"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  const handleClick = event => {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  const handleClose = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false)
      event.preventDefault()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClose)

    return () => {
      document.removeEventListener("mousedown", handleClose)
    }
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <img alt="logo" src="/images/logos/logo.svg" />
      </Link>

      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              onclick={event => handleClick(event)}
              key={index}
              item={item}
            />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onclick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
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

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
