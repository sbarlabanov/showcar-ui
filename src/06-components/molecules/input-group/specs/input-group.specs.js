module.exports = (frame, assert, browserWidth, helper) => {
    describe('Input groups {LAYOUT}', () => {
        let inputGroup;
        let inputGroupRadio;
        let firstEl;
        let secondEl;

        beforeEach(() => {
            inputGroup = frame.get('#input-group .sc-input-group');
            inputGroupRadio = frame.get('#input-group-radio .sc-input-group-radio');
            firstEl = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type');
            secondEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(2)');
        });

        it('are full width', () => {
            const container = frame.get('#separate-content');

            inputGroup.assert({
                width: container.width
            });

            inputGroupRadio.assert({
                width: container.width
            });
        });

        it('have proper height', () => {
            inputGroup.assert({
                height: 40
            });

            inputGroupRadio.assert({
                height: 40
            });
        });

        it('default elements are positioned next to each other', () => {
            const thirdEl = frame.get('#input-group .sc-input-group .sc-btn-bob');

            firstEl.assert({
                right: secondEl.left
            });

            // TODO Doesn't work on IE11, investigate
            // secondEl.assert({
            //     right: thirdEl.left.plus(3)
            // });
        });

        it('radio elements are positioned next to each other', () => {
            const thirdEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(3)');

            firstEl.assert({
                right: secondEl.left
            });

            secondEl.assert({
                right: thirdEl.left
            });
        });

        it('option 2 is checked by default', () => {
            assert.equal(secondEl.getRawStyle('background-color'), 'rgb(51, 51, 51)', 'should be black');
        });
    });

    describe('Input group toggle {INTERACTION}', () => {
        afterEach(done => {
            helper.reload(frame, done)
        })

        it('option 1 changes color after click', done => {
            const firstEltrigger = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type').toDomElement();
            const firstEl = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type');
            const secondEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(2)');
            helper.click(firstEltrigger);
            setTimeout(() => {
                assert.oneOf(secondEl.getRawStyle('background-color'), ['rgba(0, 0, 0, 0)', 'transparent'], 'should be transparent');
                assert.equal(firstEl.getRawStyle('background-color'), 'rgb(51, 51, 51)', 'should be black');
                done();
            }, 550); //wait for transition
        });
    });
};
