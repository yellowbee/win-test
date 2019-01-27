const app = getApp();

Page({
  data: {
    multiArray: [
      ["出生年份", 1980, 1981],
      ["性别", "男", "女"],
      ["职业", "大学生", "白领", "工程师", "教师", "女性", "女白领"],
      ["报价", 50, 100, 150]
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: "出生年份"
        },
        {
          id: 1,
          name: 1980
        },
        {
          id: 2,
          name: 1981
        }
      ],
      [
        {
          id: 0,
          name: "性别"
        },
        {
          id: 1,
          name: "男"
        },
        {
          id: 2,
          name: "女"
        }
      ],
      [
        {
          id: 0,
          name: "职业"
        },
        {
          id: 1,
          name: "大学生"
        },
        {
          id: 2,
          name: "白领"
        },
        {
          id: 3,
          name: "工程师"
        },
        {
          id: 4,
          name: "教师"
        },
        {
          id: 5,
          name: "女性"
        },
        {
          id: 6,
          name: "女白领"
        }
      ],
      [
        {
          id: 0,
          name: "报价"
        },
        {
          id: 1,
          name: 50
        },
        {
          id: 2,
          name: 100
        },
        {
          id: 3,
          name: 150
        }
      ]
    ],
    multiIndex: [0, 0, 0, 0]
  },
  bindMultiPickerChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    });
  },
  // fired when top-left back button is clicked
  onUnload: function() {
    // swtichTab() goes back to tabbar page and closes
    // all non-tabbar pages
    wx.switchTab({
      url: "/pages/index/index"
    });
  }
});
