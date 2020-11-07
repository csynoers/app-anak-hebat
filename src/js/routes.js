
import HomePage from '../pages/home.f7.html';
import FeedsPage from '../pages/feeds.f7.html';
import KategoriPage from '../pages/kategori.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import RegisterMember from '../pages/register-member.f7.html';

// import static page
import StaticPageCekOngkir from '../pages/static-page-cek-ongkir.f7.html';
import StaticPageCekResi from '../pages/static-page-cek-resi.f7.html';
import StaticPageJoinReseller from '../pages/static-page-join-reseller.f7.html';
import StaticPagePointReward from '../pages/static-page-point-reward.f7.html';
import StaticPage from '../pages/static-page.f7.html';

import CartsPage from '../pages/carts-page.f7.html';
import InboxPage from '../pages/inbox.f7.html';

// import account page
import AccountPage from '../pages/account.f7.html';
import AccountUserLogInPage from '../pages/account-user-login.f7.html';
import AccountUserSignUpPage from '../pages/account-user-signup.f7.html';
import AccountUserPage from '../pages/account-user.f7.html';

import AccountProfilSayaPage from '../pages/account-profil-saya.f7.html';
import AccountUbahPasswordPage from '../pages/account-ubah-password.f7.html';
import AccountAlamatSayaPage from '../pages/account-alamat-saya.f7.html';
import AccountAlamatSayaDetailPage from '../pages/account-alamat-saya-detail.f7.html';

// import pesanan page
import PesananPage from '../pages/pesanan.f7.html';

import BooksCategory from '../pages/books-category.f7.html';
import BooksDetail from '../pages/books-detail.f7.html';
import BooksRelease from '../pages/books-release.f7.html';
import PenerbitDetail from '../pages/penerbit-detail.f7.html';
import AuthorsDetail from '../pages/authors-detail.f7.html';
import NewsPage from '../pages/news.f7.html';
import NewsDetail from '../pages/news-detail.f7.html';
import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/feeds/',
    component: FeedsPage,
  },
  {
    path: '/inbox/',
    component: InboxPage,
  },
  // accounts
  {
    path: '/akun/',
    component: AccountPage,
  },
  {
    path: '/account-user-login/',
    component: AccountUserLogInPage,
  },
  {
    path: '/account-user-signup/',
    component: AccountUserSignUpPage,
  },
  {
    path: '/account-user/',
    component: AccountUserPage,
  },

  {
    path: '/account-profil-saya/',
    component: AccountProfilSayaPage,
  },
  {
    path: '/account-ubah-password/',
    component: AccountUbahPasswordPage,
  },
  {
    path: '/account-alamat-saya/',
    component: AccountAlamatSayaPage,
  },
  {
    path: '/account-alamat-saya/:action',
    component: AccountAlamatSayaDetailPage,
  },

  // pesanan
  {
    path: '/pesanan/:activTab',
    component: PesananPage,
  },
  {
    path: '/keranjang/',
    component: CartsPage,
  },
  {
    path: '/page/:pageName',
    component: StaticPage,
  },
  // static page
  {
    path: '/cek-ongkir/',
    component: StaticPageCekOngkir,
  },
  {
    path: '/cek-resi/',
    component: StaticPageCekResi,
  },
  {
    path: '/join-reseller/',
    component: StaticPageJoinReseller,
  },
  {
    path: '/point-reward/',
    component: StaticPagePointReward,
  },

  {
    path: '/kategori/',
    component: KategoriPage,
  },
  {
    path: '/category/:categoryId',
    component: BooksCategory,
  },
  {
    path: '/book/:bookId',
    component: BooksDetail,
  },
  {
    path: '/book/release/:bookRelease',
    component: BooksRelease,
  },
  {
    path: '/penerbit/:penerbitId',
    component: PenerbitDetail,
  },
  {
    path: '/authors/:authorId',
    component: AuthorsDetail,
  },
  {
    path: '/news',
    component: NewsPage,
  },
  {
    path: '/news/:newsId',
    component: NewsDetail,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/register-member/',
    // component: RegisterMember,
    async: function (routeTo, routeFrom, resolve, reject) {
      console.log('TES',this)
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      app.request.get('https://m.anakhebatindonesia.com/slide', function (data) {
        console.log(data);
      });

      // Show Preloader
      app.preloader.show();
      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RegisterMember,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },    
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();
      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;