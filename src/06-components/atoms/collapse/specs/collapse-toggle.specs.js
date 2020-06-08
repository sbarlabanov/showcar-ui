module.exports = function (frame, assert, browserWidth, helper) {
    describe('Collapse toggle opened {INTERACTION}', function () {
        var trigger;
        var content;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-target="#collapse-opened"]').toDomElement();
            content = frame.get('#collapse-opened');
        })


        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('content is hidden after first click', function () {
            helper.click(trigger);
            content.assert({
                rendered: false
            });
        });

        it('content is shown after second click', function () {
            helper.click(trigger);
            helper.click(trigger); //add one more click
            content.assert({
                rendered: true
            });
        });
    });
    describe('Collapse toggle closed {INTERACTION}', function () {
        var trigger;
        var content;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-target="#collapse-closed"]').toDomElement();
            content = frame.get('#collapse-closed');
        })


        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('content is shown after first click', function () {
            helper.click(trigger);
            content.assert({
                rendered: true
            });
        });

        it('content is hidden after second click', function () {
            helper.click(trigger);
            helper.click(trigger);
            content.assert({
                rendered: false
            });
        });
    });
    describe('Collapse toggle {LAYOUT}', function () {
        var trigger;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-target="#collapse-closed"]').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('content is shown under toggle', function () {
            helper.click(trigger);
            var content = frame.get('#collapse-closed');
            var link = frame.get('#collapse-toggle [data-target="#collapse-closed"]');
            content.assert({
                top: link.bottom.plus(2)
            });
        });
    });
};
