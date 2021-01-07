import { DeserializeHtml } from '@udecode/slate-plugins-core';
import { getNodeDeserializer } from '../../common/utils/getNodeDeserializer';
import { setDefaults } from '../../common/utils/setDefaults';
import { DEFAULTS_IMAGE } from './defaults';
import { ImageDeserializeOptions } from './types';

export const deserializeImage = (
  options?: ImageDeserializeOptions
): DeserializeHtml => {
  const { img } = setDefaults(options, DEFAULTS_IMAGE);

  return {
    element: getNodeDeserializer({
      type: img.type,
      node: (el) => ({
        type: img.type,
        url: el.getAttribute('src'),
        mediaId: el.getAttribute('data-media-id'),
        mimeType: el.getAttribute('data-mime-type'),
        extension: el.getAttribute('data-extension'),
        widthPercentage: el.getAttribute('data-width-percentage'),
      }),
      rules: [{ nodeNames: 'IMG' }],
      ...options?.img?.deserialize,
    }),
  };
};
