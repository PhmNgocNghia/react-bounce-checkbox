import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './checkbox.css'
import './checkbox_theme.css'

const CheckboxWrapper = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size+5}px ;

  & > label {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 2px solid ${props => props.borderColor}

    &::before {
      width: ${props => props.size / 4}px;
      height: ${props => props.size / 2}px;
      bottom: ${props => props.size / 2}px;
      left: ${props => props.size / 6}px;
    }

    @keyframes CheckAnimation {
      0% {
        width: 0px;
        height: 0px
      }

      50% {
        width: ${props => props.size / 4}px;
        height: 0px
      }

      100% {
        width: ${props => props.size / 4}px;
        height: ${props => props.size / 2}px;
      }
    }

  }
`

export default class BouncyCheckbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    size: PropTypes.number,
    modifierClass: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    modifier: PropTypes.string,
    textClassName: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string
  }

  makeid() {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
  }

  render() {
    const {
      id,
      onChange,
      checked,
      size,
      modifierClass,
      text,
      textClassName,
      className
    } = this.props
    const _id = id || this.makeid()
    const _size = size || 20
    const _modifierClass = modifierClass || 'blue'

    return (
      <div className={ `bouncechk ${className || ''}` }>
        <CheckboxWrapper size={_size} className="bouncechk__wrapper" >
          <input onChange={onChange} checked={checked} type='checkbox' className="bouncechk__input" id={_id} />
          <label className={`bouncechk__label bouncechk__label--${_modifierClass}`} htmlFor={_id} />
        </CheckboxWrapper>
        <span className={textClassName}>{text}</span>
      </div>
    )
  }
}