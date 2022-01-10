import { UserEntity } from '@/usecase/repository/auth/model/UserEntity'

export default interface User {
  name: string;
  email: string;
}

export function mapUserEntityToUser (entity: UserEntity): User {
  return {
    name: entity.name,
    email: entity.email
  }
}
