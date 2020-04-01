import * as React from 'react';

import { Label, Input, Select, Textarea, Radio, Checkbox, Slider } from '@rebass/forms';

export default () => (
    <>
        <Label htmlFor="name">Name</Label>
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
    </>
);
