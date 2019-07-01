const options = {
    modules: {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                ['divider']
            ]
        },
        divider: true
    },
    theme: 'snow'
}
const editor = new Quill('#editor', options)
