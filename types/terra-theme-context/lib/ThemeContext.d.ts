import * as React from 'react';
import * as PropTypes from 'prop-types';

export const themeContextShape: PropTypes.Requireable<PropTypes.InferProps<{
  className: PropTypes.Requireable<string>
}>>;

declare const ThemeProviderContext: React.Context<{
  /**
   * The current application theme className.
   * The default theme is indicated as undefined.
   */
  className?: string;
}>;

export default ThemeProviderContext;
