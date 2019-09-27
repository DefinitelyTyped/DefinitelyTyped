import addons, { makeDecorator } from "@storybook/addons";
import { addDecorator, storiesOf } from "@storybook/react";

// Example from Storybook documentation
const withNotes = makeDecorator({
    name: "withNotes",
    parameterName: "notes",
    wrapper: (getStory, context, {options, parameters}: {options: number, parameters: string}) => {
        const channel = addons.getChannel();
        channel.emit("MYADDON/add_notes", parameters);
        return getStory(context);
    }
});

// new style
addDecorator(withNotes);

// old style, but still supported
addDecorator(withNotes(42));

// the deprecated style actually isn't supported by
// @storybook/react's typings, so, no test for that...
storiesOf("Hello", module)
    .addDecorator(withNotes)        // new style
    .addDecorator(withNotes(42));   // old style, but still supported
