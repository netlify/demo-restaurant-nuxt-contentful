export default {
    target: 'static', // default is 'server'
    components: true,
    head: {
        link: [{
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"'
        }]
    },
    build: {
        extractCSS: true
    }
};