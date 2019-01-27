//index.js
const app = getApp();

Page({
  data: {
    multiArray: [
      ["选择", 1980, 1981],
      ["选择", "男", "女"],
      ["选择", "大学生", "白领", "工程师", "教师", "女性", "女白领"],
        ["选择", 50, 100, 150]
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: "选择"
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
          name: "选择"
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
          name: "选择"
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
                name: "选择"
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
  }
});
