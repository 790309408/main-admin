import request from '@/axios'

/**获取菜单权限 */
export const getMenus = (): Promise<IResponse> => {
  return request.get({ url: '/api/v1/menurole' })
}
