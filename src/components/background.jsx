import React from 'react'
import '../style/background.css'

export default class Background extends React.Component {
  render = () => (
    <div className="bg-wrapper">
      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}