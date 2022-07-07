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
            cssText: 'border: none;border-bottom: 1px solid;',
            text: {
                children: 'test',
                orientation: 'center',
                childrenStyle: 'padding: 0 24px;'
            }
        }
    },
    theme: 'snow'
}
new Quill('#app', options)
