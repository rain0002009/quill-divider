import Quill from 'quill'
import divider from './divider'

const Module = Quill.import('core/module')
const DEFAULT = {
    cssText: 'border: none;border-bottom: 1px inset;',
    icon: '<svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path class="ql-fill" d="M64 464h896v96H64v-96zM224 96v160h576V96h96v256H128V96h96z m576 832v-160H224v160H128v-256h768v256h-96z"></path></svg>'
}

class DividerToolbar extends Module {
    constructor (quill, options) {
        super(quill, options)
        this.options = Object.assign({}, DEFAULT, this.options)
        this.quill = quill
        this.toolbar = quill.getModule('toolbar')
        this.toolbar.addHandler('divider', this.dividerHandler.bind(this))
        const divider = document.querySelector('.ql-divider')
        divider.innerHTML = this.options.icon
    }

    dividerHandler () {
        const getSelection = this.quill.getSelection() || {}
        let selection = getSelection.index || this.quill.getLength()
        const [leaf] = this.quill.getLeaf(selection - 1)
        if (leaf instanceof divider) {
            this.quill.insertText(selection, '\n', Quill.sources.USER)
            selection++
        }
        this.quill.insertEmbed(selection, 'divider', this.options, Quill.sources.USER)
        if (getSelection.index === 0) {
            selection++
            this.quill.insertText(selection, '\n', Quill.sources.USER)
        }
    }
}

Quill.register(divider)
Quill.register('modules/divider', DividerToolbar)

export default DividerToolbar
