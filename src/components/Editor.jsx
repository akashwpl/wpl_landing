import { useEffect, useState } from 'react';

const Editor = () => {
  const [ReactEditorJS, setReactEditorJS] = useState(null);

  useEffect(() => {
    import('react-editor-js').then(({ createReactEditorJS }) => {
      setReactEditorJS(createReactEditorJS());
    });
  }, []);

  if (!ReactEditorJS) return <div>Loading editor...</div>;

  return <ReactEditorJS />;
};

export default Editor;