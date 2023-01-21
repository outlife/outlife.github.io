export default {
  title: 'OutLife',
  description: 'A Minecraft Server',
  themeConfig: {
    logo: '/img/outlife.png',
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Map', link: 'https://map.outlife.world' },
      { text: 'Telegram', link: 'https://t.me/outlifemc' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/outlife' },
    ],
  },
  async transformHead(context) {
    context.head.push([
      'style',
      {},
      `
        .dark .VPHome {
          background-image: url(img/1.jpg);
        }
        .VPHome {
          background-image: url(img/4.jpg);
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
        }
        .VPHome::before {
          content: "";
          position: fixed;
          top: 0; left: 0; bottom: 0; right: 0;
          backdrop-filter: blur(5px);
        }
      `,
    ])
  }
}
