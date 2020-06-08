module.exports = (frame) => {
    describe('Inlined info', () => {
        let addon;

        beforeEach(() => {
            addon = frame.get('#inlined-info .sc-inlined-info__addon');
        })

        it('has correct height', () => {
            addon.assert({
                height: 24
            });
        });

        it('positioned correctly', () => {
            const container = frame.get('#inlined-info .sc-input');
            addon.assert({
                middle: container.middle,
                right: container.right.minus(10)
            });
        });
    });
};
