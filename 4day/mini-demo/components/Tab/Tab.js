// components/Tab/Tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data : {
      type : Array,
      value : []
    },
    active : {
      type : Number,
      value : 0
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
    handleTab(event){
      let index = event.currentTarget.dataset.index
      this.triggerEvent("success",{index})
    }
  }
})
