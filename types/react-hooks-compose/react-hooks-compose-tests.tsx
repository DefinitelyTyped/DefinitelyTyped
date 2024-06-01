import * as React from "react";
import composeHooks from "react-hooks-compose";

interface CustomerData {
    name: string;
}

function useCustomerHook(): CustomerData {
    return {
        name: 'joe',
    };
}

interface Props {
    hook: CustomerData,
    value: string;
}

const CustomerPresenter = (props: Props) => {
    return (
      <div>
        <p>{props.hook.name}</p>
        <p>{props.value}</p>
      </div>
    );
  };

const Customer = composeHooks({
    hook: useCustomerHook,
    value: () => 'default'
 })(CustomerPresenter);

export const ComposeWithDefaultHookAndDefaultValue = <Customer />

export const ComposeWithDefaultHookAndInjectedValue = <Customer value='test' />

export const ComposeWithInjectedHookAndInjectedValue = <Customer value='test' hook={{ name: 'xyz' }} />

export const ComposeWithInjectedHookAndDefaultValue = <Customer hook={{ name: 'xyz' }} />

