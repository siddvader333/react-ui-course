import React from "react"
import { Link } from "gatsby"

const menuData = [
  { title: "courses", icon: "/images/icons/courses.svg", link: "/courses" },
  {
    title: "Tutorials",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  { title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
]

const Header = () => {
  return (
    <>
      {menuData.map((item, index) => (
        <Link key={index} to={item.link}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </Link>
      ))}
    </>
  )
}

export default Header
