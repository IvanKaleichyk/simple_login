import User, { mapUserEntityToUser } from '@/usecase/interactor/login/model/User'
import { UserPost } from '@/usecase/repository/auth/model/UserPost'

export interface AuthRepository {
  registerUser (user: UserPost): User

  login (email: string, password: string): User | null
}

export class AuthRepositoryImpl implements AuthRepository {
  private users: Array<UserPost> = []

  login (email: string, password: string): User | null {
    const user = this.users.find(element => element.email === email && element.password === password)
    if (user === undefined) {
      return null
    } else {
      return user
    }
  }

  registerUser (user: UserPost): User {
    this.users.push(user)
    return mapUserEntityToUser(user)
  }
}
