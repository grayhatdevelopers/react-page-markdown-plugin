# react-page-markdown-plugin
react-page plugin for markdown

## Installation

```
$ npm install
```


```
$ yarn add 
```


## Usage Example

```
import {myPlugin} from './testing.tsx'
import Editor from '@react-page/editor';

const cellPlugins = [myPlugin];

export default function SimpleExample() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  );
}

```


