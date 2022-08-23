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

const cellPlugins = [myPlugin];

export default function SimpleExample() {
  const [value, setValue] = useState("");

  return (
    <PageLayout>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </PageLayout>
  );
}

```


