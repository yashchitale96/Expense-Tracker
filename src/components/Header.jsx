import React, { useState, useEffect } from 'react'

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
      </button>
      
      <div className="header">
        <h1>Expense Tracker</h1>
        <p>Take control of your finances with smart expense tracking</p>
      </div>
    </>
  )
}

export default Header
