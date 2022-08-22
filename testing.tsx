import React from 'react';
import ReactMarkdown from 'react-markdown';

import '@react-page/editor/lib/index.css';

import { CellPlugin } from '@react-page/editor';

type Data = {
  markdown: string
}

const myPlugin: CellPlugin<Data> = {
  Renderer: ({data}) => {
    return (
      <div style={{padding: '15px'}}>
        <ReactMarkdown children={data.markdown}/>
      </div>
    )
  },
  id: 'myPlugin',
  title: 'Markdown',
  description: "Render your markdown text",
  version: 1,
  allowClickInside: true,
  disableProviderInReadOnly: false,
  controls: {
    type: 'autoform',
    schema: {
      properties: {
        markdown: {
          type: 'string',
          uniforms: {
            label: 'Enter Markdown Text Here',
            placeholder: '....',
            multiline: true,
            rows: 3,
          }
        },
      },
      required: ['markdown'],
    },
  },
};

export default myPlugin;