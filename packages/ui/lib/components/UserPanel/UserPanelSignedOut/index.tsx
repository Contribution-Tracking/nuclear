import React from 'react';
import cx from 'classnames';

import Button from '../../Button';

import styles from '../styles.module.scss';
import common from '../../../common.module.scss';

export type UserPanelSignedOutProps = {
    signUpButtonLabel: string;
    onSignUpClick: React.MouseEventHandler;
}

const UserPanelSignedOut: React.FC<UserPanelSignedOutProps> = ({
  signUpButtonLabel,
  onSignUpClick
}) => <section className={cx(common.nuclear, styles.user_panel, styles.signed_out)}>
  <Button
    onClick={onSignUpClick}
  >
    {signUpButtonLabel}
  </Button>
</section>;

export default UserPanelSignedOut;
