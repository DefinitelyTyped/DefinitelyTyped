import * as React from 'react';
import { confirmable, createConfirmation, ReactConfirmProps } from 'react-confirm';

interface CustomModalProps {
  title: string;
}

class CustomModal extends React.Component<CustomModalProps & ReactConfirmProps> {
    modalStyle(): string {
        return this.props.show ? "display: none;" : "";
    }

    render() {
        return (
            <div style={this.modalStyle}>
                <h1>{this.props.title}</h1>

                <div>
                    {this.props.confirmation}
                </div>

                <div>
                    <button onClick={() => this.props.proceed()}>Yes</button>
                    <button onClick={() => this.props.cancel()}>No</button>
                </div>
            </div>
        );
    }
}

// Adds ReactConfirmProps to CustomModal component
const ConfirmModal = confirmable(CustomModal);

// This is the function you need to call to open your modal, then you can use the
//   Promise object it returns to handle "proceed()" or "cancel()" functions.
const confirm = createConfirmation(ConfirmModal);

const markup = (
  <div>
    <b>Are you sure you want to delete this item?</b>
  </div>
);

// This is how you can detect what option ("Yes" or "No") the user has chosen.
confirm({ confirmation: markup })
  .then((result) => {
    // User chose "Yes"
  })
  .catch((result) => {
    // User chose "No"
  });

const text = "Are you sure you want to buy this product?";

confirm({ confirmation: text })
  .then((result) => {
    // User chose "Yes"
  })
  .catch((result) => {
    // User chose "No"
  });
