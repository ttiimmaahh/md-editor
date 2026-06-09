import { describe, expect, it } from 'vitest'
import { createPlateEditor } from 'platejs/react'
import { MarkdownPlugin } from '@platejs/markdown'

import { getSharedPlatePlugins } from './plate-plugins'

const tableMarkdown = `| Role | What it is | What you care about as a server author |
|---|---|---|
| Host | The user-facing LLM application | User experience |
| MCP client | The connector inside the host | Protocol support |
| MCP server | Your program | Capability design |`

describe('getSharedPlatePlugins', () => {
  it('deserializes GitHub Flavored Markdown tables into Plate tables', () => {
    const editor = createPlateEditor({
      plugins: getSharedPlatePlugins({ includeDnd: false })
    })

    const value = editor.getApi(MarkdownPlugin).markdown.deserialize(tableMarkdown)

    expect(value[0]?.type).toBe('table')
    expect(value[0]?.children).toHaveLength(4)
    expect(value[0]?.children[0]).toMatchObject({
      type: 'tr',
      children: [
        { type: 'th', children: [{ type: 'p', children: [{ text: 'Role' }] }] },
        { type: 'th', children: [{ type: 'p', children: [{ text: 'What it is' }] }] },
        {
          type: 'th',
          children: [{ type: 'p', children: [{ text: 'What you care about as a server author' }] }]
        }
      ]
    })
  })
})
