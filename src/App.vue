<template>
  <section id="app">
    <header>
      <span>vue-unDraw</span>
      <input type="text" placeholder="Search..." v-model="keywords" />
    </header>
    <main>
      <ul>
        <li v-if="!keywords || components[27].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[27].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawAutumn height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[27].title }}</h1>
        </li>
        <li v-if="!keywords || components[26].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[26].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawSocialTree height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor"/>
          <h1>{{ components[26].title }}</h1>
        </li>
        <li v-if="!keywords || components[25].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[25].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawDesignerGirl height="100" :primaryColor="primaryColor" :skinColor="skinColor" :pantsColor="pantsColor"/>
          <h1>{{ components[25].title }}</h1>
        </li>
        <li v-if="!keywords || components[24].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[24].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawNerd height="100" :primaryColor="primaryColor" :skinColor="skinColor" :accentColor="accentColor"/>
          <h1>{{ components[24].title }}</h1>
        </li>
        <li v-if="!keywords || components[23].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[23].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawWoman height="100" :primaryColor="primaryColor" :pantsColor="pantsColor" :hairColor="hairColor" :skinColor="skinColor"/>
          <h1>{{ components[23].title }}</h1>
        </li>
        <li v-if="!keywords || components[22].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[22].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawMapLight height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[22].title }}</h1>
        </li>
        <li v-if="!keywords || components[21].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[21].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawPhotos height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor"/>
          <h1>{{ components[21].title }}</h1>
        </li>
        <li v-if="!keywords || components[20].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[20].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawPosts height="100" :primaryColor="primaryColor" :accentColor="accentColor"/>
          <h1>{{ components[20].title }}</h1>
        </li>
        <li v-if="!keywords || components[19].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[19].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawMobile height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[19].title }}</h1>
        </li>
        <li v-if="!keywords || components[18].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[18].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawImageFolder height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor"/>
          <h1>{{ components[18].title }}</h1>
        </li>
        <li v-if="!keywords || components[17].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[17].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawTabs height="100" :primaryColor="primaryColor" :accentColor="accentColor"/>
          <h1>{{ components[17].title }}</h1>
        </li>
        <li v-if="!keywords || components[16].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[16].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawYacht height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor" :accentColor="accentColor"/>
          <h1>{{ components[16].title }}</h1>
        </li>
        <li v-if="!keywords || components[15].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[15].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawPlainCreditCard height="100" :primaryColor="primaryColor" :accentColor="accentColor"/>
          <h1>{{ components[15].title }}</h1>
        </li>
        <li v-if="!keywords || components[14].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[14].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawPortfolio height="100" :primaryColor="primaryColor" :accentColor="accentColor"/>
          <h1>{{ components[14].title }}</h1>
        </li>
        <li v-if="!keywords || components[13].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[13].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawAnalytics height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor" :tertiaryColor="tertiaryColor"/>
          <h1>{{ components[13].title }}</h1>
        </li>
        <li v-if="!keywords || components[12].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[12].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawDocuments height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[12].title }}</h1>
        </li>
        <li v-if="!keywords || components[11].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[11].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawChat height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[11].title }}</h1>
        </li>
        <li v-if="!keywords || components[10].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[10].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawDelivery height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor"/>
          <h1>{{ components[10].title }}</h1>
        </li>
        <li v-if="!keywords || components[9].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[9].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawAtWork height="100" :primaryColor="primaryColor" :accentColor="accentColor"/>
          <h1>{{ components[9].title }}</h1>
        </li>
        <li v-if="!keywords || components[8].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[8].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawDevices height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[8].title }}</h1>
        </li>
        <li v-if="!keywords || components[7].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[7].tags.indexOf(keywords.toLowerCase()) > -1">
          <UndrawCharts height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor" :tertiaryColor="tertiaryColor"/>
          <h1>{{ components[7].title }}</h1>
        </li>
        <li v-if="!keywords || components[6].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[6].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawBlogPost height="100" :primaryColor="primaryColor" :accentColor="accentColor"/>
          <h1>{{ components[6].title }}</h1>
        </li>
        <li v-if="!keywords || components[5].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[5].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawPhoto height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor"/>
          <h1>{{ components[5].title }}</h1>
        </li>
        <li v-if="!keywords || components[4].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[4].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawMapDark height="100" :primaryColor="primaryColor" :secondaryColor="secondaryColor"/>
          <h1>{{ components[4].title }}</h1>
        </li>
        <li v-if="!keywords || components[3].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[3].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawSearch height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[3].title }}</h1>
        </li>
        <li v-if="!keywords || components[2].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[2].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawMailSent height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[2].title }}</h1>
        </li>
        <li v-if="!keywords || components[1].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[1].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawSocialMedia height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[1].title }}</h1>
        </li>
        <li v-if="!keywords || components[0].title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || components[0].tags.toLowerCase().indexOf(keywords.toLowerCase()) > -1">
          <UndrawCreditCard height="100" :primaryColor="primaryColor"/>
          <h1>{{ components[0].title }}</h1>
        </li>
      </ul>
      <aside>
        <label for="primary-color">Primary Color</label>
        <input id="primary-color" type="color" :value="primaryColor" @change="onPrimaryColorChange">
        <label for="secondary-color">Secondary Color</label>
        <input id="secondary-color" type="color" :value="secondaryColor" @change="onSecondaryColorChange">
        <label for="tertiary-color">Tertiary Color</label>
        <input id="tertiary-color" type="color" :value="tertiaryColor" @change="onTertiaryColorChange">
        <label for="accent-color">Accent Color</label>
        <input id="accent-color" type="color" :value="accentColor" @change="onAccentColorChange">
        <label for="hair-color">Hair Color</label>
        <input id="hair-color" type="color" :value="hairColor" @change="onHairColorChange">
        <label for="skin-color">Skin Color</label>
        <input id="skin-color" type="color" :value="skinColor" @change="onSkinColorChange">
        <label for="pants-color">Pants Color</label>
        <input id="pants-color" type="color" :value="pantsColor" @change="onPantsColorChange">
      </aside>
    </main>
  </section>
</template>

<script>
import UndrawCreditCard from './components/UndrawCreditCard.vue'
import UndrawSocialMedia from './components/UndrawSocialMedia.vue'
import UndrawMailSent from './components/UndrawMailSent.vue'
import UndrawSearch from './components/UndrawSearch.vue'
import UndrawMapDark from './components/UndrawMapDark.vue'
import UndrawPhoto from './components/UndrawPhoto.vue'
import UndrawBlogPost from './components/UndrawBlogPost.vue'
import UndrawCharts from './components/UndrawCharts.vue'
import UndrawDevices from './components/UndrawDevices.vue'
import UndrawAtWork from './components/UndrawAtWork.vue'
import UndrawDelivery from './components/UndrawDelivery.vue'
import UndrawChat from './components/UndrawChat.vue'
import UndrawDocuments from './components/UndrawDocuments.vue'
import UndrawAnalytics from './components/UndrawAnalytics.vue'
import UndrawPortfolio from './components/UndrawPortfolio.vue'
import UndrawPlainCreditCard from './components/UndrawPlainCreditCard.vue'
import UndrawYacht from './components/UndrawYacht.vue'
import UndrawTabs from './components/UndrawTabs.vue'
import UndrawImageFolder from './components/UndrawImageFolder.vue'
import UndrawMobile from './components/UndrawMobile.vue'
import UndrawPosts from './components/UndrawPosts.vue'
import UndrawPhotos from './components/UndrawPhotos.vue'
import UndrawMapLight from './components/UndrawMapLight.vue'
import UndrawWoman from './components/UndrawWoman.vue'
import UndrawNerd from './components/UndrawNerd.vue'
import UndrawDesignerGirl from './components/UndrawDesignerGirl.vue'
import UndrawSocialTree from './components/UndrawSocialTree.vue'
import UndrawAutumn from './components/UndrawAutumn.vue'

export default {
  name: 'app',
  components: {
    UndrawCreditCard,
    UndrawSocialMedia,
    UndrawMailSent,
    UndrawSearch,
    UndrawMapDark,
    UndrawPhoto,
    UndrawBlogPost,
    UndrawCharts,
    UndrawDevices,
    UndrawAtWork,
    UndrawDelivery,
    UndrawChat,
    UndrawDocuments,
    UndrawAnalytics,
    UndrawPortfolio,
    UndrawPlainCreditCard,
    UndrawYacht,
    UndrawTabs,
    UndrawImageFolder,
    UndrawMobile,
    UndrawPosts,
    UndrawPhotos,
    UndrawMapLight,
    UndrawWoman,
    UndrawNerd,
    UndrawDesignerGirl,
    UndrawSocialTree,
    UndrawAutumn
  },
  data () {
    return {
      components: [
        {
          title: 'Credit card',
          tags: 'credit card, money, banks, bitcoin, plastic, chip, buy, sell, payments, transactions, swipe, stripe, braintree',
        },
        {
          title: 'Social media',
          tags: 'pc, facebook, twitter, google, pinterest, likedin, community, work, office, coffee, at work, marketing, marketer, outreach, viral',
        },
        {
          title: 'Mail sent',
          tags: 'messages, email, inbox, envelope, success, opened, notification, received, outgoing, accepted',
        },
        {
          title: 'Search',
          tags: 'results, google, bing, yahoo, yandex, filter, find, discover, results, ranking, seo, discover',
        },
        {
          title: 'Map dark',
          tags: 'destination, road, location, directions, pin, gps, guide, landmark, address, where'
        },
        {
          title: 'Photo',
          tags: 'picture, mountain, landscape, memories, media, svg, png, jpeg, jpg, gif, files, images, photography'
        },
        {
          title: 'Blog post',
          tags: 'report, write, site, presentation, read, document, articles, posts, letter, learn'
        },
        {
          title: 'Charts',
          tags: 'analytics, metrics, numbers, excel, statistics, graphics, infographics, pie, bars, segmentation, polls'
        },
        {
          title: 'Devices',
          tags: 'pc, laptop, mobile, iphone, mac, tablet, ipad, screens, android, phablet, desktop, imac, apple, windows, responsive, web'
        },
        {
          title: 'At work',
          tags: 'coffee, work, cv, resume, files, documents, reports, profiles, hiring, hire, office, business'
        },
        {
          title: 'Delivery',
          tags: 'travel, gps, location, road, mobile, iphone, landmark, invitation, invite, destination, locate'
        },
        {
          title: 'Chat',
          tags: 'communication, message, talk, sms, instant messaging, response, inbox, sent, chatbot, speak, language'
        },
        {
          title: 'Documents',
          tags: 'organize, work, read, files, media, reports, papers, analysis, stack, dropbox, copy, clone'
        },
        {
          title: 'Analytics',
          tags: 'charts, tabs, metrics, numbers, excel, analytics, statistics, graphics, infographics, pie, bars, segmentation, polls'
        },
        {
          title: 'Portfolio',
          tags: 'personal, site, work, photos, gallery, images, page load, pages, websites, designer'
        },
        {
          title: 'Plain credit card',
          tags: 'credit card, money, banks, bitcoin, plastic, chip, buy, sell, payments, transactions, swipe, stripe, braintree'
        },
        {
          title: 'Yacht',
          tags: 'ship, boat, sea, sun, destination, cruise, travel, caribbean, luxury, money, billionaire, atlantic, sunbathe, holidays, summer'
        },
        {
          title: 'Tabs',
          tags: 'browsers, profile, websites, portfolio, pages, social, images, twitter'
        },
        {
          title: 'Image folder',
          tags: 'organize, photos, images, media, files, container, store'
        },
        {
          title: 'Mobile',
          tags: 'iphone, devices, android, samsung, phablet, cell, wireless, wifi, responsive, apple, ios, touch'
        },
        {
          title: 'Posts',
          tags: 'opinions, community, feedback, site, feed, stream, rss, news, readlist, items'
        },
        {
          title: 'Photos',
          tags: 'polaroid, moment, picture, mountain, landscape, media, files, png, svg, jpeg, jpg, capture, photography'
        },
        {
          title: 'Map light',
          tags: 'destination, road, location, directions, pin, gps, guide, landmark, address, where, travel'
        },
        {
          title: 'Woman',
          tags: 'call, happy, girl, mobile, dog, walk, happy, cell phone, dog sitting, trendy, hoodie'
        },
        {
          title: 'Nerd',
          tags: 'man, glasses, happy, godin, tech, hipster, people, human, customer support'
        },
        {
          title: 'Designer Girl',
          tags: 'woman, pc, sitting, office, drawing, illustrator, sketch, photoshop, canvas, create, web design, modern'
        },
        {
          title: 'Social Tree',
          tags: 'christmas, twitter, facebook, google plus, pinterest, linkedin, holiday, xmas, new year, gifts'
        },
        {
          title: 'Autumn',
          tags: 'fall, couple, woman, man, umbrella, bench, leaves, together, walk, life, love, romantic'
        }
      ],
      keywords: '',
      primaryColor: '#41B883',
      secondaryColor: '#FF6F68',
      tertiaryColor: '#FCCA5B',
      accentColor: '#FF3366',
      hairColor: '#e53935',
      skinColor: '#ffe0b2',
      pantsColor: '#212121'
    }
  },
  methods: {
    onPrimaryColorChange (event) {
      this.primaryColor = event.target.value;
    },
    onSecondaryColorChange (event) {
      this.secondaryColor = event.target.value;
    },
    onTertiaryColorChange (event) {
      this.tertiaryColor = event.target.value;
    },
    onAccentColorChange (event) {
      this.accentColor = event.target.value;
    },
    onHairColorChange (event) {
      this.hairColor = event.target.value;
    },
    onSkinColorChange (event) {
      this.skinColor = event.target.value;
    },
    onPantsColorChange (event) {
      this.pantsColor = event.target.value;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  display: flex;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  padding: 0;
  width: 100%;
  height: 100vh;
}

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 55px;
  padding: 0 2rem;
  color: #34495E;
  background-color: #41B883;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.03), 0px 0px 0px 0px rgba(0,0,0,.6), 0 3px 1px -2px rgba(0,0,0,.1);
}

header span {
  font-weight: 900;
}

header input[type="text"] {
  height: 30px;
  padding: 1rem;
  border: none;
}

main {
  display: flex;
  height: 100%;
  overflow: hidden;
}

main ul {
  flex: 1;
}

main aside {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 75px 1rem 0px;
  background-color: #f4f4f4;
  height: 100vh;
}

main aside label {
  font-size: 0.8rem;
  font-weight: 900;
  text-align: left;
  margin-bottom: 0.5rem;
}

main aside input[type="color"] {
  margin-bottom: 1rem;
}

#app ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 55px;
  overflow-y: auto;
}

#app li {
  flex: 1;
  margin: 1rem;
  background: #fcfcfc;
  padding: 2rem 1rem;
  border: 1px solid #f0f0f0;
  min-width: 200px;
}

#app li h1 {
  margin-top: 2rem;
  font-size: 0.8rem;
  font-weight: 100;
}
</style>
