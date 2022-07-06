# Quill Divider
Module extension for [Quill.js](https://github.com/quilljs/quill) that handles divider in the toolbar.
### Usage

```javascript
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
var quill = new Quill(editor, {
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
