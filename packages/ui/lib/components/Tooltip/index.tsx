import React from 'react';
import cx from 'classnames';
import { Popup, PopupProps } from 'semantic-ui-react';

import common from '../../common.module.scss';
import styles from './styles.module.scss';

export type TooltipProps = PopupProps & {

}

const Tooltip: React.FC<TooltipProps> = (props) => (
  <Popup
    className={cx(common.nuclear, styles.tooltip)}
    {...props}
  />
);

export default Tooltip;
