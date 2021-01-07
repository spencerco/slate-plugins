import * as React from 'react';
import { classNamesFunction, styled } from '@uifabric/utilities';
import { useFocused, useSelected } from 'slate-react';
import {
  ImageElementProps,
  ImageElementStyleProps,
  ImageElementStyles,
} from '../types';
import { getImageElementStyles } from './ImageElement.styles';

const getClassNames = classNamesFunction<
  ImageElementStyleProps,
  ImageElementStyles
>();

/**
 * ImageElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const ImageElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  htmlAttributes,
}: ImageElementProps) => {
  const { url, mediaId, extension, mimeType, widthPercentage } = element;
  const focused = useFocused();
  const selected = useSelected();

  const classNames = getClassNames(styles, {
    className,
    // Other style props
    focused,
    selected,
  });

  return (
    <div {...attributes} className={classNames.root}>
      <div contentEditable={false}>
        <img
          data-testid="ImageElementImage"
          className={classNames.img}
          src={url}
          data-media-id={mediaId}
          data-extension={extension}
          data-width-percentage={widthPercentage}
          data-mime-type={mimeType}
          alt=""
          {...htmlAttributes}
        />
      </div>
      {children}
    </div>
  );
};

/**
 * ImageElement
 */
export const ImageElement = styled<
  ImageElementProps,
  ImageElementStyleProps,
  ImageElementStyles
>(ImageElementBase, getImageElementStyles, undefined, {
  scope: 'ImageElement',
});
