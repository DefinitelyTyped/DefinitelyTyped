import * as React from "react";
import { composeHooks } from "react-hooks-compose";

interface CustomerData {
    name: string;
}

function useCustomerHook(): CustomerData {
    return {
        name: 'joe',
    };
}

interface Props {
    data: CustomerData,
    value: string;
}

const CustomerPresenter = (props: Props) => {
    return (
      <div>
        <p>{props.data.name}</p>
        <p>{props.value}</p>
      </div>
    );
  };

const Customer = composeHooks({
    data: useCustomerHook
 })(CustomerPresenter);

export const ComposeWithDefaultHook = <Customer value='test' />

export const TestUnderlyingPresenter = <CustomerPresenter value='test' data={{ name: 'xyz' }} />
