import * as React from 'react';
import Button from 'wix-style-react/Button';

function ButtonWithMandatoryProps() {
  return <Button />;
}

function ButtonWithAllProps() {
  return (
    <Button
      as="button"
      className="cls"
      dataHook="hook"
      disabled
      fullWidth
      onClick={e => undefined}
      prefixIcon={<span />}
      suffixIcon={<span />}
      priority="primary"
      size="medium"
      skin="dark"
    />
  );
}
