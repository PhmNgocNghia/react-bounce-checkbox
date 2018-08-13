# Demo
![Demo gif](https://i.imgur.com/QJJRMKz.gif)

[Demo page](https://phmngocnghia.github.io/react-bounce-checkbox)

# Usage
Install `npm install -S react-bounce-checkbox`
```js
<Checkbox
  textClassName="bouncechk__text"
  className="bouncechk__customClassName"
  text='hello world'
  modifierClass= 'blue'
  checked={this.state.isChecked}
  onChange={() => {
    this.setState(state => ({ isChecked: !state.isChecked }))
  }} />
```
For more example you can view in ./src/App.js

# Themes aka modofierClass:
* 'blue'
* 'purple'
* 'pink'
* 'green'
* 'orange'
* 'gray'
* 'red'

# Props
```js
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
```

# Commands
- npm start: start develop on webpack hmr server
- npm build: build library
- npm test: run test
- npm run build-example: build example page
- npm run build-library: build library

# License
MIT