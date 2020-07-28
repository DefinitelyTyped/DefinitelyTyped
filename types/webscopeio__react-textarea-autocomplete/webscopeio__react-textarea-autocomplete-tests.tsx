import ReactTextareaAutocomplete from "webscopeio__react-textarea-autocomplete";
import * as React from "react";

const Loading: React.SFC = () => {
    return <div>Loading</div>;
};

interface ItemProps {
    selected: boolean;
    entity: string;
}

const Item: React.SFC<ItemProps> = (props: ItemProps) => {
    return <div className={`item${props.selected ? " selected" : ""}`}>props</div>;
};

class Autocomplete extends React.Component {
    private rta: ReactTextareaAutocomplete<string> | null;
    private textarea: HTMLTextAreaElement;

    private readonly names = [ "abc", "def", "ghi" ];

    render() {
        return <ReactTextareaAutocomplete<string>
            rows={8}
            className="my-textarea"
            loadingComponent={Loading}
            style={{
                fontSize: "18px",
                lineHeight: "20px",
                padding: 5
            }}
            ref={(rta) => { this.rta = rta; }}
            innerRef={(textarea) => { this.textarea = textarea; }}
            containerStyle={{
                marginTop: 20,
                width: 400,
                height: 100,
                margin: "20px auto"
            }}
            minChar={0}
            trigger={{
                ":": {
                    dataProvider: token => {
                        return this.names
                            .filter((name) => name.startsWith(token));
                    },
                    component: Item,
                    output: (item, token) => item,
                    allowWhitespace: true,
                    afterWhitespace: false
                }
            }}
            value="aaa"
            closeOnClickOutside={false}
            movePopupAsYouType={false}
            onBlur={(evt: React.FocusEvent<HTMLTextAreaElement>) => { console.log(evt); }}
            onSelect={(evt: React.SyntheticEvent<HTMLTextAreaElement>) => { console.log(evt); }}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => { console.log(evt); }}
            scrollToItem={false}
            onCaretPositionChange={(pos: number) => { console.log(pos); }}
            containerClassName="container"
            dropdownClassName="dropdown"
            itemClassName="item"
            listClassName="list"
            loaderClassName="loader"
            dropdownStyle={{ width: "100%", margin: "14px"}}
            itemStyle={{ width: "100%", margin: "14px"}}
            listStyle={{ width: "100%", margin: "14px"}}
            loaderStyle={{ width: "100%", margin: "14px"}}
        />;
    }
}
