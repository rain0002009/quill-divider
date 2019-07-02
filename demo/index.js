const options = {
    modules: {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                ['divider']
            ]
        },
        divider: {
            cssText: 'border: none;border-bottom: 1px inset;'
        }
    },
    theme: 'snow'
}
const editor = new Quill('#editor', options)
