import Quill from 'quill'

const BlockEmbed = Quill.import('blots/block/embed')

export const DEFAULT = {
    cssText: 'border: none;border-bottom: 1px inset;',
    className: void 0,
    icon: '<svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path class="ql-fill" d="M64 464h896v96H64v-96zM224 96v160h576V96h96v256H128V96h96z m576 832v-160H224v160H128v-256h768v256h-96z"></path></svg>'
}

export type Options = typeof DEFAULT

class Divider extends BlockEmbed {
    static create (options: Options) {
        const parentNode = super.create()
        parentNode.setAttribute('contenteditable', false)
        parentNode.innerHTML = `<hr style="${options.cssText}" class="${options.className || ''}" >`
        return parentNode
    }
}

Divider.blotName = 'divider'
Divider.tagName = 'p'
Divider.className = 'quill-hr'
export default Divider
