# react-page-markdown-plugin
The react-page-markdown-plugin allows one to render markdown in a react page. The react-page-markdown-plugin renders all the markdown features we need for creating README files, for example, headings, lists and images etc.

## Installation

using npm
```
$ npm install
```
or using yarn

```
$ yarn add 
```

## Instantiation
Define the react-page-markdown-plugin as part of the cellPlugins list.
```
const cellPlugins = [
... // Other cell plugins as usual
Markdown

];


```



## Usage Example

```
import {Markdown} from './testing.tsx'
import Editor from '@react-page/editor';

const cellPlugins = [Markdown];

export default function SimpleExample() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  );
}

```
## Gif
here i will add gif

## About ReactPage
ReactPage is a smart, extensible and modern editor (“WYSIWYG”) for the web written in React. If you are fed up with the limitations of contenteditable, visit the [official documentation](https://react-page.github.io/docs/#/) of ReactPage.

### ReactPage Demo
A demo can be found on [Demo](https://react-page.github.io/) which reflects the stable release channel on npm.
the current beta version is also available as a demo: [beta Demo](https://react-page.github.io/beta)






