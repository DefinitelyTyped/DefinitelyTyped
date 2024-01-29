import * as ui from "material-ui";
import Pagination from "material-ui-pagination";
import { MuiThemeProvider } from "material-ui/styles";
import * as React from "react";
import injectTapEventPlugin = require("react-tap-event-plugin");

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

interface PagerState {
    pageIndex: number;
}

class Pager extends React.Component<{}, PagerState> {
    state = {
        pageIndex: 0,
    };
    setPageIndex = (pageIndex: number) => {
        this.setState({ pageIndex });
    };
    render() {
        const { pageIndex } = this.state;
        const length = 100;
        const perPage = 10;
        const totalPage = Math.floor(length / perPage);

        const list: React.JSX.Element[] = [];
        for (let i = pageIndex * perPage; i < (pageIndex * perPage + perPage); i++) {
            list.push(<p key={`${i}`}>{`No.${i}`}</p>);
        }

        return (
            <div>
                <ui.Card>
                    <Pagination
                        total={totalPage}
                        display={8}
                        current={pageIndex}
                        onChange={this.setPageIndex}
                    />
                </ui.Card>
                <div>
                    {list}
                </div>
                <ui.Card>
                    <Pagination
                        total={totalPage}
                        display={8}
                        current={pageIndex}
                        onChange={this.setPageIndex}
                    />
                </ui.Card>
            </div>
        );
    }
}

const Index = () => (
    <MuiThemeProvider>
        <Pager />
    </MuiThemeProvider>
);
