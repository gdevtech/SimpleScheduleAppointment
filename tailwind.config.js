module.exports = {
    purge: {
        enabled: false,
        content: [
            './Pages/**/*.cshtml',
            './Views/**/*.chstml'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            heading: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            primary: ['Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}