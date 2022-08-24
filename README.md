# react-page-markdown-plugin
This Markdown plugin allows one to render markdown in a ReactPage component. It uses the [react-markdown library](https://www.npmjs.com/package/react-markdown) to render user-inputted markdown, basic and advanced, on-the-fly. 

## What is Markdown, even?
It is a format which allows a user to easily define headings, lists and images etc, right through simple syntax. This README is written in Markdown too!

## Installation

using npm
```
npm install
```
or using yarn

```
yarn add 
```

## Instantiation
Define the ```react-page-markdown-plugin``` as part of the cellPlugins list.
```
import Markdown from './testing.tsx';


const cellPlugins = [
... // Other cell plugins as usual
Markdown
];


```



## Usage Example

```
import Markdown from './testing.tsx'
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

---

## About ReactPage
ReactPage is a smart, extensible and modern editor (“WYSIWYG”) for the web written in React. If you are fed up with the limitations of contenteditable, visit the [official documentation](https://react-page.github.io/docs/#/) of ReactPage.

### ReactPage Demo
A demo can be found on [Demo](https://react-page.github.io/) which reflects the stable release channel on npm.
the current beta version is also available as a demo: [beta Demo](https://react-page.github.io/beta)






