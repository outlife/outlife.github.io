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
      `.dark span {
        color: rgb(255, 0, 0);
        }
        .dark .VPHome {
          background-image: url(img/1.jpg);
        }
        .VPHome {
          background-image: url(img/4.jpg);
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
        }
      `,
    ])
  }
}
