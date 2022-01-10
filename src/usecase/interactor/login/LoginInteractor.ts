import User from '@/usecase/interactor/login/model/User'
import { inject } from 'inversify'
import { TYPES } from '@/di/Types'
import { AuthRepository } from '@/usecase/repository/auth/AuthRepository'

export default interface LoginInteractor {
  login (email: string, password: string): User | null
}

export class LoginInteractorImpl implements LoginInteractor {
  private repository: AuthRepository

  constructor (
    @inject(TYPES.AuthRepository) repository: AuthRepository
  ) {
    this.repository = repository
  }

  login (email: string, password: string): User | null {
    return this.repository.login(email, password)
  }
}
