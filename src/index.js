import css from "./css/index.less"
// import pic from './images/logo.png'


// console.log('css',css)   // 开启了css模快化 css才有值

// const img = new Image()
// img.src = pic
// let app = document.getElementById('app')
// app.append(img)

// console.log('hello webpacsssssk')

// import axios from 'axios'

// axios.get("api/info")


var btn = document.createElement("button")
btn.innerHTML = "新增"
document.body.appendChild(btn)

btn.onclick = function(){
  var div = document.createElement('div')
  div.innerHTML = "item"
  document.body.appendChild(div)
}