// {
//   path: '/level',
//   component: '#',
//   redirect: '/level/menu1/menu1-1/menu1-1-1',
//   name: 'Level',
//   meta: {
//     title: 'router.level',
//     icon: 'carbon:skill-level-advanced'
//   },
//   children: [
//     {
//       path: 'menu1',
//       name: 'Menu1',
//       component: '##',
//       redirect: '/level/menu1/menu1-1/menu1-1-1',
//       meta: {
//         title: 'router.menu1'
//       },
//       children: [
//         {
//           path: 'menu1-1',
//           name: 'Menu11',
//           component: '##',
//           redirect: '/level/menu1/menu1-1/menu1-1-1',
//           meta: {
//             title: 'router.menu11',
//             alwaysShow: true
//           },
//           children: [
//             {
//               path: 'menu1-1-1',
//               name: 'Menu111',
//               component: 'views/Level/Menu111',
//               meta: {
//                 title: 'router.menu111'
//               }
//             }
//           ]
//         },
//         {
//           path: 'menu1-2',
//           name: 'Menu12',
//           component: 'views/Level/Menu12',
//           meta: {
//             title: 'router.menu12'
//           }
//         }
//       ]
//     },
//     {
//       path: 'menu2',
//       name: 'Menu2Demo',
//       component: 'views/Level/Menu2',
//       meta: {
//         title: 'router.menu2'
//       }
//     }
//   ]
// }

export const useHandlerMenus = () => {
  const subRoutePath = (path: string) => {
    return path
  }
  const convertMenusToRoutes = (menus: any[]) => {
    const routers = menus.map((el) => {
      const children = convertMenusToRoutes(el.children ?? [])
      const path = el.children?.length ?? ''
      const item = el.children?.length
        ? {
            path: el.component === 'Layout' ? el.path : el.path,
            component: el.component,
            redirect: path,
            meta: {
              title: el.title,
              icon: 'carbon:skill-level-advanced'
            },
            children
          }
        : {
            path: el.component === 'Layout' ? el.path : el.path,
            component: el.component,
            meta: {
              title: el.title,
              icon: 'carbon:skill-level-advanced'
            },
            children
          }
      return item
    })
    return routers
  }
  return {
    convertMenusToRoutes
  }
}
