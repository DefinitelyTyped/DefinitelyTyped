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
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="beep" name="beep" value="beep" defaultChecked />
            Beep
        </Label>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="boop" name="beep" value="boop" />
            Boop
        </Label>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox id="remember" name="remember" />
            Remember Me
        </Label>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Textarea id="remember" name="remember" />
        </Label>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Slider id="remember" name="remember" value={50} />
        </Label>
        <Label width={[1 / 2, 1 / 4]} p={2}>
            <Switch />
        </Label>

        <StyledLabel fontWeight="bold" fontSize={1} htmlFor="name">
            Bold Name
        </StyledLabel>
        <StyledInput id="name" name="name" defaultValue="Jane Doe" />

        <StyledLabel htmlFor="location">Location</StyledLabel>
        <StyledSelect id="location" name="location" defaultValue="NYC">
            <option>NYC</option>
            <option>DC</option>
            <option>ATX</option>
            <option>SF</option>
            <option>LA</option>
        </StyledSelect>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledRadio id="beep" name="beep" value="beep" defaultChecked />
            Beep
        </StyledLabel>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledRadio id="boop" name="beep" value="boop" />
            Boop
        </StyledLabel>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledCheckbox id="remember" name="remember" />
            Remember Me
        </StyledLabel>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledTextarea id="remember" name="remember" />
        </StyledLabel>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledSlider id="remember" name="remember" value={50} />
        </StyledLabel>
        <StyledLabel width={[1 / 2, 1 / 4]} p={2}>
            <StyledSwitch />
        </StyledLabel>
    </>
);
