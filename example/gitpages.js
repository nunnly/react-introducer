import README from '../readme.md';
document.querySelector('#box').innerHTML = README;

hljs.configure({});
[...document.querySelectorAll('pre code')].forEach(block => {
    hljs.highlightBlock(block);
})