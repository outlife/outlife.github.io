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

<style>
.dark .VPContent.is-home {
  background-image: url(public/img/1.jpg);
}
.VPContent.is-home {
  background-image: url(public/img/4.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
.VPContent::before {
  content: "";
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  backdrop-filter: blur(5px);
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
