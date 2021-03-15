const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
  {
    path: '/todo',
    component: () => import('layouts/TodoLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Todo.vue'),
      },
      // {
      //   path: '/apiTodo',
      //   component: () => import('pages/APITodoPage.vue'),
      // },
      {
        path: '/help',
        component: () => import('pages/HelpPage.vue'),
      },
    ],
  },
  {
    path: '/apiTodo',
    component: () => import('layouts/APITodoLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/APITodoPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/LoginPage.vue'),
      },
      {
        path: '/weather',
        component: () => import('src/pages/WeatherPage.vue'),
      },
    ],
  },
];

export default routes;
