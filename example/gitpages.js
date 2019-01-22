import README from '../README.md';
document.querySelector('#box').innerHTML = README;

hljs.configure({});
[...document.querySelectorAll('pre code')].forEach(block => {
    hljs.highlightBlock(block);
})