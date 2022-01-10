import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { AuthRepository, AuthRepositoryImpl } from '@/usecase/repository/auth/AuthRepository'
import { TYPES } from '@/di/Types'
import LoginInteractor, { LoginInteractorImpl } from '@/usecase/interactor/login/LoginInteractor'

const container = new Container()

container
  .bind<AuthRepository>(TYPES.AuthRepository)
  .to(AuthRepositoryImpl)
  .inSingletonScope()

container
  .bind<LoginInteractor>(TYPES.LoginInteractor)
  .to(LoginInteractorImpl)

const { lazyInject } = getDecorators(container)
export { lazyInject, container }
