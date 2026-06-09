import { useRef } from 'react'
import { MarkdownPlugin } from '@platejs/markdown'
import { Plate, usePlateEditor } from 'platejs/react'

import { getSharedPlatePlugins } from '@/lib/plate-plugins'
import { Editor, EditorContainer } from '@/components/ui/editor'

interface LessonReaderProps {
  content: string
}

export function LessonReader({ content }: LessonReaderProps): React.JSX.Element {
  const contentRef = useRef(content)

  const editor = usePlateEditor(
    {
      plugins: getSharedPlatePlugins({ includeDnd: false }),
      value: (editor) => editor.getApi(MarkdownPlugin).markdown.deserialize(contentRef.current)
    },
    []
  )

  return (
    <Plate editor={editor} readOnly>
      <EditorContainer>
        <Editor variant="fullWidth" />
      </EditorContainer>
    </Plate>
  )
}
