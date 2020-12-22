import * as React from 'react';
import { classNamesFunction, styled } from '@uifabric/utilities';
import { Transforms } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import {
  MediaEmbedElementProps,
  MediaEmbedElementStyleProps,
  MediaEmbedElementStyles,
} from '../types';
import { getMediaEmbedElementStyles } from './MediaEmbedElement.styles';

const getClassNames = classNamesFunction<
  MediaEmbedElementStyleProps,
  MediaEmbedElementStyles
>();

/**
 * MediaEmbedElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const MediaEmbedElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  htmlAttributes,
}: MediaEmbedElementProps) => {
  const classNames = getClassNames(styles, {
    className,
    // Other style props
  });

  const editor = useSlate();
  const { url } = element;

  return (
    <div {...attributes} className={classNames.root}>
      <div contentEditable={false}>
        <div className={classNames.iframeWrapper}>
          <iframe
            className={classNames.iframe}
            title="embed"
            src={`${url}?title=0&byline=0&portrait=0`}
            frameBorder="0"
            {...htmlAttributes}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

/**
 * MediaEmbedElement
 */
export const MediaEmbedElement = styled<
  MediaEmbedElementProps,
  MediaEmbedElementStyleProps,
  MediaEmbedElementStyles
>(MediaEmbedElementBase, getMediaEmbedElementStyles, undefined, {
  scope: 'MediaEmbedElement',
});
