import Quill from 'quill'

const BlockEmbed = Quill.import('blots/block/embed')

class Divider extends BlockEmbed {
}

Divider.blotName = 'divider'
Divider.tagName = 'hr'
Divider.className = 'quill-hr'
export default Divider
