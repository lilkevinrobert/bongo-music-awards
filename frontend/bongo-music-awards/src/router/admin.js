const adminRoutes = [
  {
    path: '/admin',
    component: () => import("layouts/AdminLayout.vue"),
    meta: { requiresAuth: true, isAdmin: "admin" },
    children: [
      {
        path: '/admin/dashboard',
        component: () => import("pages/Admin/Views/AdminIndexPage.vue"),
        name: "Admin",
      },
      {
        path: '/admin',
        component: () => import("pages/Admin/Views/AdminIndexPage.vue"),
      }, {
        path: '/admin/users',
        component: () => import("pages/Admin/Views/UsersPage.vue"),
      },
      {
        path: '/admin/eventsandawards',
        component: () => import("pages/Admin/Views/EventsandAwards.vue"),
      }, {
        path: '/admin/event/:event_id',
        component: () => import("pages/Admin/Views/EventPage.vue"),
      },
      {
        path: '/admin/eventsandawards/addevent',
        component: () => import("pages/Admin/Views/AddEventPage.vue"),
      },
      {
        path: '/admin/users/adduser',
        component: () => import("pages/Admin/Views/AddUserPage.vue"),
      },
      {
        path: '/admin/votes',
        component: () => import("pages/Admin/Views/VotesPage.vue"),
      }, {
        path: '/admin/tickets',
        component: () => import("pages/Admin/Views/AdminTickets.vue"),
      }, {
        path: '/admin/sms',
        component: () => import("pages/Admin/Views/AdminSms.vue"),
      }, {
        path: '/admin/emails',
        component: () => import("pages/Admin/Views/AdminEmails.vue"),
      },
      {
        path: '/admin/myaccount',
        component: () => import("pages/Admin/Views/AdminAccount.vue"),
      }
    ],

  }
];
export default adminRoutes
