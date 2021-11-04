import * as React from 'react';

import { Label, Input, Select, Textarea, Radio, Checkbox, Slider, Switch } from '@rebass/forms';
import {
    Label as StyledLabel,
    Input as StyledInput,
    Select as StyledSelect,
    Textarea as StyledTextarea,
    Radio as StyledRadio,
    Checkbox as StyledCheckbox,
    Slider as StyledSlider,
    Switch as StyledSwitch,
} from '@rebass/forms/styled-components';

export default () => (
    <>
        <StyledLabel fontWeight="bold" fontSize={1} htmlFor="styled-name">
            Bold Name
        </StyledLabel>
        <StyledInput id="styled-name" name="styled-name" defaultValue="Jane Doe" />

        <Label fontWeight="bold" fontSize={1} htmlFor="name">
            Bold Name
        </Label>
        <Input id="name" name="name" defaultValue="Jane Doe" />

        <Label htmlFor="location">Location</Label>
        <Select id="location" name="location" defaultValue="NYC">
            <option>NYC</option>
            <option>DC</option>
            <option>ATX</option>
            <option>SF</option>
            <option>LA</option>
        </Select>
        <StyledLabel htmlFor="styled-location">Location</StyledLabel>
        <StyledSelect id="styled-location" name="styled-location" defaultValue="NYC">
            <option>NYC</option>
            <option>DC</option>
            <option>ATX</option>
            <option>SF</option>
            <option>LA</option>
        </StyledSelect>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="beep" name="beep" value="beep" defaultChecked />
            Beep
        </Label>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="boop" name="beep" value="boop" />
            Boop
        </Label>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledRadio id="styled-beep" name="styled-beep" value="beep" defaultChecked />
            Beep
        </StyledLabel>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledRadio id="styled-boop" name="styled-beep" value="boop" />
            Boop
        </StyledLabel>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox id="remember" name="remember" />
            Remember Me
        </Label>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledCheckbox id="styled-remember" name="styled-remember" />
            Remember Me
        </StyledLabel>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Textarea id="remember" name="remember" />
        </Label>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledTextarea id="styled-remember" name="styled-remember" />
        </StyledLabel>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Slider id="remember" name="remember" value={50} />
        </Label>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledSlider id="styled-remember" name="styled-remember" value={50} />
        </StyledLabel>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Switch />
        </Label>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledSwitch />
        </StyledLabel>
    </>
);
