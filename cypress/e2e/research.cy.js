import Home from '../pages/storeHome';
import Login from '../pages/login'
beforeEach(() => {
    Login.visitPage();
    Login.FillValidUserCredentials();
});
it('Research a product on home page', () => {
    Home.ValidateresearchProduct();
})