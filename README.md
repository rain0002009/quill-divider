# Quill Divider [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rain0002009/quill-divider/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/quill-divider.svg?style=flat)](https://www.npmjs.com/package/quill-divider)
Module extension for [Quill.js](https://github.com/quilljs/quill) that handles divider in the toolbar.
### Install
```bash
yarn add quill-divider
```
### Usage

```javascript
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import 'quill-divider'

const toolbarOptions = {
  container: [
    ['bold', 'italic', 'underline', 'strike'],
    ['divider'],   
  ]
}
const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    toolbar: toolbarOptions,
    divider: {
        // See optional "config" below
    }
  }
});
```
### Config
For the default experience, pass a true, like so:
```javascript
new Quill(editor, {
    // ...
    modules: {
        // ...
        divider: true
    }
});
```
#### `cssText` - Styles of the element
```javascript
new Quill(editor, {
    // ...
    modules: {
        // ...
        divider: {
            // default
            cssText: 'border: none;border-bottom: 1px inset;'
        }
    }
});
```
#### `className` -  ClassName of the element
```javascript
new Quill(editor, {
    // ...
    modules: {
        // ...
        divider: {
            // default
            className: void 0
        }
    }
});
```
#### `icon` - Button icon
```javascript
new Quill(editor, {
    // ...
    modules: {
        // ...
        divider: {
            // default
            icon: '<svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path class="ql-fill" d="M64 464h896v96H64v-96zM224 96v160h576V96h96v256H128V96h96z m576 832v-160H224v160H128v-256h768v256h-96z"></path></svg>``'
        }
    }
});
```
#### `text` - When on, insert text in the divider
```javascript
new Quill(editor, {
    // ...
    modules: {
        // ...
        divider: {
            // default
            text: void 0
        }
    }
});

// Other configurations
new Quill(editor, {
    // ...
    modules: {
        // ...
        divider: {
            // default
            text: {
                // Will be replaced by the selected text,default is placeholder
                children: 'placeholder',
                // Position of text,The optional values are left, center and right
                orientation: 'center',
                // Styles of the text
                childrenStyle: 'padding: 0 24px;'
            }
        }
    }
});
```
