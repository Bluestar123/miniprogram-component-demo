Component({
  properties: {
    msg: {
      type: String,
      value: '我是测试组件show'
    },
  },
  data: {
  },
  lifetimes: {
    attached() {
      console.log(123)
    }
  }
})
