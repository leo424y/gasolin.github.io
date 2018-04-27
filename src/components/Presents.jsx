import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';

const data = [
  {
    year: 2017,
    presents: [
      {
        title: 'Devtools Highlight 2017',
        date: '2017/9/22',
        place: 'Mozilla Developer Conference',
        link: 'https://docs.google.com/presentation/d/1BYScPwgi6m0KCQWkBGsgbJnIA8Br8pESJxRM6gJIBY8/edit?usp=sharing',
        time: '25min',
      },
      {
        title: 'Build the plane while flying it - How we design and build the Firefox Browser',
        date: '2017/5/5',
        place: 'NIU CSIE',
        link: '',
        time: '2.5hr',
      },
    ],
  },
  {
    year: 2016,
    presents: [
      {
        title: '聊天機器人，不加咖啡',
        date: '2016/8/21',
        place: 'Coscup',
        link: 'http://blog.gasolin.idv.tw/2016/08/blog-post.html',
        time: '20min',
      },
      {
        title: '好孩子的第一次挑戰 WebVR 就快快樂樂上手',
        date: '2016/5/19',
        place: 'workshop at MozTw',
        link: 'http://moztw.kktix.cc/events/91d7bca0',
        time: '30min',
      },
    ],
  },
  {
    year: 2015,
    presents: [
      {
        title: 'Javascript,征服世界是可能的嗎？ (Javascript, world domanation)',
        date: '2015/5/19',
        place: 'Modern Web',
        link: 'http://www.slideshare.net/gasolin/javascript-48212668',
        time: '30min',
      },
    ],
  },
  {
    year: 2014,
    presents: [
      {
        title: 'Firefox OS - How Large Open Source Project works',
        date: '2014/7/19',
        place: 'COSCUP',
        link: 'http://www.slideshare.net/gasolin/firefox-os-how-large-open-source-project-works',
        time: '30min',
      },
      {
        title: 'All about Web Component',
        date: '2014/5/7',
        place: 'GDG Taipei',
        link: '',
        time: '30min',
      },
    ],
  },
  {
    year: 2013,
    presents: [
      {
        title: 'Capable Web: Chrome Apps & Firefox WebApp',
        date: '2013/12/18',
        place: 'GDG Taipei',
        link: 'http://www.slideshare.net/gasolin/chrome-apps-and-firefox-webapp',
        time: '30min',
      },
      {
        title: 'Developing Firefox OS',
        date: '2013/11/13',
        place: 'NCTU CSIE',
        link: 'http://www.slideshare.net/gasolin/develop-firefox-os1-28348187',
        time: '2hr',
      },
      {
        title: 'FirefoxOS Overview & Contribution',
        date: '2013/10/28',
        place: 'NCU CSIE',
        link: '',
        time: '3hr',
      },
      {
        title: 'Steps to contribute to firefox os (gaia)',
        date: '2013/7/27',
        place: 'COSCUP',
        link: 'http://www.slideshare.net/gasolin/steps-to-contribute-to-firefox-os-2',
        time: '30min',
      },
      {
        title: 'Hands on offline web app',
        date: '2013/7/20',
        place: 'COSCUP lecture',
        link: 'http://registrano.com/events/coscup-2013-hands-on-gasolin',
        time: '3hr',
      },
      {
        title: 'Make web as webapp',
        date: '2013/5/8',
        place: 'GTUG Taipei',
        link: 'http://www.slideshare.net/gasolin/make-web-as-webapp',
        time: '1hr',
      },
      {
        title: 'FirefoxOS Overview',
        date: '2013/3/27',
        place: 'NCKU CSIE',
        link: 'http://www.slideshare.net/gasolin/firefox-os-overview-17792569',
        time: '3hr',
      },
    ],
  },
  {
    year: 2012,
    presents: [
      {
        title: 'Youtube for developers',
        date: '2012/10/25',
        place: 'GTUG Taipei',
        link: 'http://www.youtube.com/watch?v=hlu_TeBRpQA',
        time: '30min',
      },
      {
        title: 'Does everybody can program?',
        date: '2012/8/19',
        place: 'COSCUP',
        link: 'http://www.youtube.com/watch?v=HEW39KXn0a4',
        time: '25min',
      },
      {
        title: 'Developer can make beautiful web - Introduction of JQuery Mobile/Twitter Bootstrap',
        date: '2012/6/6',
        place: 'GTUG Taipei',
        link: 'http://www.youtube.com/watch?v=Xd2KiDunRxc',
        time: '1hr',
      },
      {
        title: 'Android UI Design Guide & Tips',
        date: '2012/2/15',
        place: 'Taipei GTUG',
        link: 'http://www.youtube.com/watch?v=KnPKLuz6qpQ',
        time: '30min',
      },
    ],
  },
  {
    year: 2011,
    presents: [
      {
        title: 'zhpy lightening talk',
        date: '2011/12/3',
        place: 'PyCon China',
        link: 'http://www.youtube.com/watch?v=pQqs-8kyq88',
        time: '5min',
      },
      {
        title: 'gFolder demo',
        date: '2011/12/2',
        place: 'Taipei Android Developer Lab',
        link: '',
        time: '5min',
      },
      {
        title: 'Android Icecream Sandwich(ICS) sharing',
        date: '2011/11/9',
        place: 'Taipei GTUG',
        link: 'http://www.youtube.com/watch?v=PoKxf1xCDn0&feature=feedu',
        time: '30min',
      },
      {
        title: 'Android Continue Integration with Jenkins',
        date: '2011/8/20',
        place: 'COSCUP',
        link: 'http://www.youtube.com/watch?v=vVwGuXuma-k',
        time: '25min',
      },
      {
        title: 'Introduction of AppInventor',
        date: '2011/8/17',
        place: 'Taipei GTUG',
        link: 'http://www.youtube.com/watch?v=Ujd_wJBAd1k&feature=channel_video_title',
        time: '3omin',
      },
      {
        title: 'Play framework on Google App Engine',
        date: '2011/7/20',
        place: 'Taipei GTUG',
        link: 'http://www.youtube.com/watch?v=Z0EYjejXcnY&feature=channel_video_title',
        time: '1hr',
      },
      {
        title: 'Share 3 Google I/O admob & analytics related speech',
        date: '2011/7/6',
        place: 'Taipei GTUG',
        link: 'http://www.youtube.com/watch?v=fYgmsBjLnfE&feature=channel_video_title',
        time: '1hr',
      },
      {
        title: 'Google I/O Recap of Android',
        date: '2011/5/28',
        place: 'Engadget',
        link: '',
        time: '30min',
      },
      {
        title: 'Beyond Android',
        date: '2011/5/24',
        place: 'III',
        link: '',
        time: '3hr',
      },
      {
        title: 'Aside for Google I/O Extended Keynote',
        date: '2011/5/11',
        place: 'Taipei GTUG',
        link: '',
        time: '1hr',
      },
      {
        title: 'Aside for Google Movie Day',
        date: '2011/3/30',
        place: 'Taipei GTUG',
        link: 'http://www.youtube.com/watch?v=1wRlJ5KTAwE&feature=channel_video_title',
        time: '1hr',
      },
    ],
  },
  {
    year: 2010,
    presents: [
      {
        title: 'Introduction of Google App Engine',
        date: '2010/12/7',
        place: 'Taipei GTUG',
        link: 'http://www.slideshare.net/gasolin/javascript-48212668',
        time: '1hr',
      },
      {
        title: 'Introduction of Mercurial, the Distributed Version Control System',
        date: '2010/12/4',
        place: 'TWJUG',
        link: 'http://www.slideshare.net/gasolin/introduction-of-distributed-version-control-system',
        time: '1hr',
      },
      {
        title: 'Android Programming(Android 應用程式設計)',
        date: '2010/3/13~3/14',
        place: 'Chong-Hwa Telecom Training Center',
        link: '',
        time: '12hr',
      },
      {
        title: 'Introduction of GoogleCode and Mercurial',
        date: '2010/02/03',
        place: 'Taipei GTUG',
        link: '',
        time: '1hr',
      },
    ],
  },
  {
    year: 2009,
    presents: [
      {
        title: 'Navigation of Chrome OS (Chrome OS 導讀)',
        date: '2009/11/25',
        place: 'Taipei GTUG',
        link: '',
        time: '20min',
      },
      {
        title: 'Introduction of Android Application development (KaLug! Android 應用程式設計入門)',
        date: '2009/11/22',
        place: 'OSSF in Kaushung',
        link: 'http://www.openfoundry.org/workshop/details/61-kalug--android-',
        time: '6hr',
      },
      {
        title: 'Introduction of Android Scripting Environment (Android Scripting Environment 簡介)',
        date: '2009/8/16',
        place: 'COSCUP',
        link: 'http://www.youtube.com/watch?v=rq4VyXntpBI',
        time: '30min',
      },
      {
        title: 'The basis of Android application development(Android 應用程式開發基礎)',
        date: '2009/5/21',
        place: '南亞資管系',
        link: '',
        time: '3hr',
      },
      {
        title: 'The difference of Android Programming comparing with other OS(Android 應用程式設計大不同)',
        date: '2009/4/7',
        place: 'Tossug',
        link: '',
        time: '2hr',
      },
    ],
  },
  {
    year: 2008,
    presents: [
      {
        title: 'GAEO+Facebook Plugin',
        date: '2008/11/15',
        place: 'Happy Designer 4',
        link: '',
        time: '15min',
      },
      {
        title: 'GAEO+Facebook',
        date: '2008/11/4',
        place: 'TOSSUG',
        link: '',
        time: '15min',
      },
      {
        title: 'Howto Maintain and Share an Python Project -- Take ZHPY for example (維護和分享 python 程式專案 -- 以周蟒中文 python 語言為例',
        date: '2008/4/12',
        place: 'OSDC.tw 2008',
        link: 'http://www.slideshare.net/gasolin/python-24815415',
        time: '30min',
      },
      {
        title: 'Programming by Python and ZHPY for dummies (英文不太好, 也能第一次學程式語言就上手 -- 使用 Python 與周蟒)',
        date: '2008/1/8',
        place: 'TOSSUG',
        link: 'http://www.slideshare.net/gasolin/python-zhpy',
        time: '2hr',
      },
    ],
  },
  {
    year: 2007,
    presents: [
      {
        title: 'Introduction of ZHPY (周蟒簡介)',
        date: '2007/11/3',
        place: 'Lightening talk on COSCUP',
        link: '',
        time: '5min',
      },
      {
        title: 'Test-Driven Python for dummies (Test-Driven Python 懶人包)',
        date: '2007/4/14',
        place: 'OSDC.tw',
        link: '',
        time: '30min',
      },
      {
        title: 'Introduction of TurboGears Web Mega-Framework (TurboGears 入門)',
        date: '2007/5/22',
        place: 'TOSSUG',
        link: '',
        time: '30min',
      },
    ],
  },
];

const Presents = () => (<Grid>
  <Cell col={12}>
    <h2>Lectures and Presentations</h2>
  </Cell>
  {data.map(yearly => (<Cell col={6} key={yearly.year}>
    <h3 id={yearly.year}>{yearly.year}</h3>
    <ul>
      { yearly.presents.map(item => item.link ? (
        <li key={item.date}><a href="{item.link}">{item.title}</a> ({item.time}), {item.place} {item.date}</li>
      ) : (
        <li key={item.date}>{item.title} ({item.time}), {item.place} {item.date}</li>
      )) }
    </ul>
  </Cell>))}
</Grid>);

export default Presents;
