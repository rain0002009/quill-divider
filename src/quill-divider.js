import Quill from 'quill'
import divider from './divider'

const Module = Quill.import('core/module')

class DividerToolbar extends Module {
    constructor(quill, options) {
        super(quill, options)
        this.quill = quill
        this.toolbar = quill.getModule('toolbar')
        this.toolbar.addHandler('divider', this.dividerHandler)
        const divider = document.querySelector('.ql-divider')
        divider.innerHTML = '<svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path class="ql-fill" d="M64 464h896v96H64v-96zM224 96v160h576V96h96v256H128V96h96z m576 832v-160H224v160H128v-256h768v256h-96z"></path></svg>'
    }

    dividerHandler() {
        const selection = (this.quill.getSelection() || {}).index || this.quill.getLength()
        this.quill.insertText(selection, '\n', Quill.sources.USER)
        this.quill.insertEmbed(selection + 1, 'divider', true, Quill.sources.USER)
    }
}

Quill.register(divider)
Quill.register('modules/divider', DividerToolbar)

export default DividerToolbar
