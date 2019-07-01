# Quill Divider
Module extension for [Quill.js](https://github.com/quilljs/quill) that handles divider in the toolbar.
## Usage

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
    divider: true
  }
});
```
