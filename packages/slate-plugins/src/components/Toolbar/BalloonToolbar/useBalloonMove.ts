import { useEffect } from 'react';
import { Editor } from 'slate';
import { isSelectionExpanded } from '../../../common/queries';
import { getSelectionText } from '../../../common/queries/getSelectionText';
import { setPositionAtSelection } from './setPositionAtSelection';

/**
 * Move when the selection changes.
 */
export const useBalloonMove = ({
  editor,
  ref,
  direction,
  scrollContainer,
}: {
  editor: Editor;
  ref: any;
  direction: 'top' | 'bottom';
  scrollContainer: HTMLElement
}) => {
  const selectionExpanded = isSelectionExpanded(editor);
  const selectionText = getSelectionText(editor);

  useEffect(() => {
    ref.current &&
      selectionExpanded &&
      setPositionAtSelection(ref.current, scrollContainer, direction);
  }, [direction, selectionText.length, selectionExpanded, ref]);
};
