import React from 'react'
import {
  shallow,
  configure,
  mount
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Chk from './index'
configure({ adapter: new Adapter() })

describe('checkbox', function () {
  it('should generate random id when not input id', function () {
    const shallowCheckbox = shallow(<Chk checked={true} onChange={() => { }} />)
    const inputId = shallowCheckbox.find('input').prop('id')
    expect(inputId).toBeTruthy()
    expect(shallowCheckbox.find('label').prop('htmlFor')).toBe(inputId)
  })

  it('should generate random id when input id empty', function () {
    const shallowCheckbox = shallow(<Chk id='' checked={true} onChange={() => { }} />)
    const inputId = shallowCheckbox.find('input').prop('id')
    expect(inputId).toBeTruthy()
    expect(shallowCheckbox.find('label').prop('htmlFor')).toBe(inputId)
  })

  it('should use id if have proper id in prop', function () {
    const shallowCheckbox = shallow(<Chk id='test' checked={true} onChange={() => { }} />)
    const inputId = shallowCheckbox.find('input').prop('id')
    expect(inputId).toBe('test')
    expect(shallowCheckbox.find('label').prop('htmlFor')).toBe('test')
  })

  it('should call onChange function when input is change', function () {
    const onChange = jest.fn()
    const shallowCheckbox = shallow(<Chk onChange={onChange} />)
    shallowCheckbox.find('input').simulate('change')
    expect(onChange).toHaveBeenCalled()
  })
})
