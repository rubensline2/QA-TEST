import Login from '../../cypress/pages/login'

beforeEach(() => {
    Login.visitPage();
});

it('Login user successfuly', () => {
    Login.FillValidUserCredentials();
    Login.FillInvalidUserCredentials();
    Login.ErrorMessageLogin();
})