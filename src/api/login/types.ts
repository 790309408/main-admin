export type UserLoginType = {
  username: string
  password: string
}
export type UserType = {
  username: string
  password: string
  role: string
  roleId: string
  permissions: string | string[]
  userId?: string
  name?: string
  avatar?: string
  button?: string | string[]
}
