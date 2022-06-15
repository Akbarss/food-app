export const TYPES = {
    Logger: Symbol.for('Logger'),
    IDatabaseService: Symbol.for('IDatabaseService'),
    IAuthRepository: Symbol.for('IAuthRepository'),
    IAuthService: Symbol.for('IAuthService'),
    IUserRepository: Symbol.for('IUserRepository'),
    IUserService: Symbol.for('IUserService'),
    IJsonWebTokenService: Symbol.for('IJsonWebTokenService'),
    AuthenticationMiddleware: Symbol.for('AuthenticationMiddleware'),
    IRestaurentRepository: Symbol.for('IRestaurentRepository'),
    IRestaurentService: Symbol.for('IRestaurentService')
};