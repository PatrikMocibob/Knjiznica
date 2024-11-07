const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/PopisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/Onama', component: () => import('pages/OnamaPage.vue') },
      { path: '/Lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: '/Login', component: () => import('pages/LoginPage.vue') },
      { path: '/Registracija', component: () => import('pages/RegistracijaPage.vue') }
    ]
  },

  // Always leave this as last one,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
