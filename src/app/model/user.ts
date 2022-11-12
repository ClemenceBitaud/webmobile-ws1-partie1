export interface User {
  id: number,
  name: string,
  firstname: string,
  identifier: string,
  password: string,
  role: Role,
  access: Access
}

export type Role = "user" | "admin" | "superadmin";
export type Access = "read only" | "edit";

