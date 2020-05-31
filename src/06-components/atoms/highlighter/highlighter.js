import { annotate } from 'rough-notation';
export default () => {
    const elements = document.querySelectorAll('.sc-simple-highlight');
    elements.map(el => {
        const annotation = annotate(el, { type: 'underline' });
        annotation.show();
    });
};
