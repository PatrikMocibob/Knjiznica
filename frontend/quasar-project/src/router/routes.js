const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/PopisKnjiga', component: () => import('pages/PopisknjigaPage.vue') },
      { path: '/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/Onama', component: () => import('pages/OnamaPage.vue') },
      { path: '/Lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: '/Login', component: () => import('pages/LoginPage.vue') },
      { path: '/Registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/Baza', component: () => import('pages/PopisKnjigaPage1.vue') },
      { path: '/Rezervacije', component: () => import('pages/RezervacijePage.vue') },

    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') },
      { path: '/admin/PopisKnjiga', component: () => import('pages/PopisknjigaPage.vue') },
      { path: '/admin/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/admin/Popis_korisnika', component: () => import('pages/PopisKorisnikaPage.vue') },
      { path: '/admin/Unos_knjiga', component: () => import('pages/UnosKnjigaPage.vue') },
      { path: '/Logout', component: () => import('pages/LogoutPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
