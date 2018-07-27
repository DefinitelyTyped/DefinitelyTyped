import React, { Component, Fragment } from 'react';
import Modal from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import Select from '../../src';
import { H1, Note } from '../styled-components';

import { colourOptions } from '../data';

type State = {
  isOpen: boolean,
  isFixed: boolean,
  portalPlacement: 'auto' | 'bottom' | 'top'
};

export default class MenuPortal extends Component<*, State> {
  state = {
    isOpen: false,
    isFixed: false,
    portalPlacement: 'bottom',
  };
  open = () => {
    console.log('menuPortal is Open');
    this.setState({ isOpen: true });
  };
  close = () => { this.setState({ isOpen: false }); };
  setPlacement = ({ currentTarget }: SyntheticEvent<Event>) => {
    const portalPlacement = currentTarget && currentTarget.value;
    this.setState({ portalPlacement });
  };
  toggleMode = () => {
    this.setState(state => ({ isFixed: !state.isFixed }));
  };
  render() {
    const { close, open } = this;
    const { isOpen, isFixed, portalPlacement } = this.state;
    return (
      <Fragment>
        <Button onClick={open}>Open Modal</Button>
        {
          isOpen ?
          <Modal onClose={close}>
            <H1>Portaled Menu Element</H1>
            <Select
              defaultValue={colourOptions[0]}
              isClearable
              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
              menuPortalTarget={document.body}
              isSearchable
              name="color"
              menuPosition={isFixed ? 'fixed' : 'absolute'}
              menuPlacement={portalPlacement}
              options={colourOptions}
            />
            <Note Tag="label">
              <select
                type="radio"
                onChange={this.setPlacement}
                value={portalPlacement}
                id="cypress-portalled__radio-bottom"
              >
                <option value="auto">auto</option>
                <option value="bottom">bottom</option>
                <option value="top">top</option>
              </select>
            </Note>
            <Note Tag="label" style={{ marginLeft: '1em' }}>
              <input
                type="radio"
                onChange={this.toggleMode}
                value="fixed"
                checked={isFixed}
                id="cypress-portalled__fixed"
              />
              Fixed
            </Note>
            <Note Tag="label" style={{ marginLeft: '1em' }}>
              <input
                type="radio"
                onChange={this.toggleMode}
                value="portal"
                checked={!isFixed}
                id="cypress-portalled__portal"
              />
              Portal
            </Note>
          </Modal>
          : null
        }
      </Fragment>
    );
  }
}
