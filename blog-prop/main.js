Vue.component('blog-post', {
    // camelCase in JavaScript
    props: ['postTitle'],
    template: '<h1>{{ postTitle }}</h1>'
})

new Vue({ el: '#components-demo'})