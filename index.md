---
layout: home

hero:
  name: OutLife
  text: A Free Minecraft Server
  tagline: 新版本、原版、纯净
  actions:
    - theme: brand
      text: 关于我们
      link: /about
    - theme: alt
      text: 加入 Telegram 群组
      link: https://t.me/outlifemc

features:
  - title: 最新版本
    details: 我们紧跟官方版本，保证最新
  - title: 原版
    details: 完全的原版体验
  - title: 自由
    details: 没什么规则...

---

<script>

let timer = setInterval(() => {
  let app = (document.getElementsByClassName("VPHome"))[0]
  if (app) {
    app.style.backgroundImage = 'url("/img/4.jpg")'
    app.style.backgroundRepeat = 'no-repeat'
    app.style.backgroundPosition = 'center'
    app.style.backgroundAttachment = 'fixed'

    clearInterval(timer)
  }
}, 100)

</script>

