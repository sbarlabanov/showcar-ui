const findUnneededCookies = require('../showcar-clean-cookies').findUnneededCookies;

module.exports = () => {
    describe('Clean up cookies', () => {
        let unnecessaryCookie;
        let necessaryCookie;

        beforeEach(() => {
            unnecessaryCookie = 'some-generic-cookie'; // random / fake cookie
            necessaryCookie = '_asga'; // from the whitelist in shocar-clean-cookie.js
        });

        it('Unnecessary cookies are found & deleted', () => {
            const willBeRemoved = findUnneededCookies(unnecessaryCookie);
            expect(willBeRemoved).to.be.true;
        });

        it('Necessary cookies are found & whitelisted', () => {
            const willBeRemoved = findUnneededCookies(necessaryCookie);
            expect(willBeRemoved).to.be.false;
        });
    });
};
