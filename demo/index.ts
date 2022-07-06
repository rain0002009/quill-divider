import Quill from 'quill'
import '../src/quill-divider'
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
new Quill('#app', options)
