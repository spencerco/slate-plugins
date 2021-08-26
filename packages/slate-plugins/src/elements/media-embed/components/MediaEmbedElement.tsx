import * as React from 'react';
import { classNamesFunction, styled } from '@uifabric/utilities';
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

  const url = React.useMemo(() => {
    const url = new URL(element.url)
    url.searchParams.set("title", "0")
    url.searchParams.set("byline", "0")
    url.searchParams.set("portrait", "0")
    return url.toString()
  }, [element.url])

  return (
    <div {...attributes} className={classNames.root}>
      <div contentEditable={false}>
        <div className={classNames.iframeWrapper}>
          <iframe
            className={classNames.iframe}
            title="embed"
            src={url}
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
