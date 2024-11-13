import request from '@/axios'
import type { UserType } from './types'

interface RoleParams {
  roleName: string
}

export const loginApi = (data: UserType): Promise<IResponse<UserType>> => {
  return request.post({ url: '/mock/user/login', data })
}

export const loginOutApi = (): Promise<IResponse> => {
  return request.get({ url: '/mock/user/loginOut' })
}

export const getAdminRoleApi = (
  params: RoleParams
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return request.get({ url: '/mock/role/list2', params })
}
/**获取验证码 */
export const getCaptchaApi = (): Promise<IResponse> => {
  return request.get({ url: '/api/v1/captcha' })
}
/**登录接口 */
export const login = (data: UserType): Promise<any> => {
  return request.post({ url: '/api/v1/login', data })
}
/**获取用户信息 */
export const getInfo = (): Promise<IResponse> => {
  return request.get({ url: '/api/v1/getinfo' })
}
