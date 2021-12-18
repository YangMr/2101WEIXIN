// components/Button/Button.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    type : {
      type : String,
      value : "default"
    },
    size : {
      type : String,
      value : ""
    },
    disabled : {
      type : Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      //将子组件的数据发送给副组件
      this.triggerEvent("tapClick",{id:1},{})
    },
    open(){
      console.log("open")
    }  
  }
})
