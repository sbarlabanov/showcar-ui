module.exports = (frame, assert, browserWidth) => {
    describe('Small footer', () => {
        let container;
        let iconsBlock;
        let textBlock;

        beforeEach(() => {
            container = frame.get('#small-footer .sc-small-footer');
            iconsBlock = frame.get('#small-footer .sc-pull-right');
            textBlock = frame.get('#small-footer .sc-pull-left');
        });

        if (browserWidth < 768) {
            it('shown correctly on mobile and tablets', () => {
                iconsBlock.assert({
                    top: container.top.plus(16),
                    center: container.center
                });

                textBlock.assert({
                    top: iconsBlock.bottom,
                    center: container.center
                });
            });

        } else {
            it('shown correctly on desktop', () => {
                container.assert({
                    height: 68
                });

                textBlock.assert({
                    top: container.top.plus(16),
                    left: container.left.plus(16)
                });

                iconsBlock.assert({
                    top: container.top.plus(16),
                    right: container.right.minus(16)
                });
            });
        }
    });
};
