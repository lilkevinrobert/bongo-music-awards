
const otherRoutes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/artists', component: () => import('pages/Voter/Views/ArtistsPage.vue') },
      { path: '/awards', component: () => import('pages/Voter/Views/AwardsPage.vue') },
      { path: '/tickets', component: () => import('pages/Voter/Views/TicketsPage.vue') },
      { path: '/artists/:id', component: () => import('pages/Voter/Views/ArtistDetails.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default otherRoutes

