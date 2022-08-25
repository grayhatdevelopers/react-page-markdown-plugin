# react-page-markdown-plugin
This Markdown plugin allows one to render markdown in a ReactPage component. It uses the [react-markdown library](https://www.npmjs.com/package/react-markdown) to render user-inputted markdown, basic and advanced, on-the-fly. 

## What is Markdown, even?
It is a format which allows a user to easily define headings, lists and images etc, right through simple syntax. This README is written in Markdown too!

## Installation

using npm
```
npm i react-page-markdown-plugin
```
or using yarn

```
yarn add react-page-markdown-plugin
```

## Instantiation
Define the ```react-page-markdown-plugin``` as part of the cellPlugins list.
```
import Markdown from 'react-page-markdown-plugin';


const cellPlugins = [
... // Other cell plugins as usual
Markdown
];


```



## Usage Example

```
import Markdown from 'react-page-markdown-plugin';
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

## Markdown Plugin in Action
![Animation](https://user-images.githubusercontent.com/61515279/186479524-de4fca5b-ba46-4ee1-814e-d05aa7db09d2.gif)


---

## About ReactPage
ReactPage is a smart, extensible and modern editor (“WYSIWYG”) for the web written in React. If you are fed up with the limitations of contenteditable, visit the [official documentation](https://react-page.github.io/docs/#/) of ReactPage.

### ReactPage Demo
A demo can be found on [Demo](https://react-page.github.io/) which reflects the stable release channel on npm.
the current beta version is also available as a demo: [beta Demo](https://react-page.github.io/beta)

