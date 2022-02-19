/* eslint-disable no-undef, no-unused-vars */

var data = {
  name: "John",
  last: "Blue",
  imgSrc:
    "https://i.picsum.photos/id/855/50/50.jpg?hmac=9d_VlWQlktXPctQUCnT-HwC72Mz1WGif07K_TcVjv7s",
  commentObjectArr: [
    {
      user: "jay",
      text: "好讚的文章"
    },
    {
      user: "ray",
      text: "酷的文章"
    }
  ],
  commentTxtArr: ["文字1", "文字2"]
};

var app = new Vue({
  el: "#app",

  data: {
    name: data.name,

    last: data.last,
    titleTxt: data.TitleTxt || "文章",
    imgSrc: data.imgSrc,
    commentTxtArr: data.commentTxtArr,
    commentObjectArr: data.commentObjectArr,
    message: "Hi",
    counter: 1
  },
  methods: {
    counterPlus: function (eventData) {
      console.log(eventData);
    }
  },
  computed: {
    fullName() {
      return this.last + this.name;
    }
  }
});

//改變名字

// $("#app").text = kitty ;

app.name = "kitty";
