import * as React from 'react';
import {
    List,
    Show,
    Datagrid,
    TextField,
    ShowButton,
    EditButton,
    ListButton,
    DeleteButton,
} from 'admin-on-rest';

const PostList = (props: any) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ShowButton/>
        </Datagrid>
    </List>;
};

const PostShowLayout = (props: any) => {
    return <ul>
        <li>{props.record.first}</li>
        <li>{props.record.second}</li>
        <li>{props.record.third}</li>
    </ul>;
};

const PostShowActions = (props: any) => {
    return <div>
        {props.hasEdit && <EditButton basePath={props.basePath} record={props.data} />}
        {props.hasList && <ListButton basePath={props.basePath} />}
        {props.hasDelete && <DeleteButton basePath={props.basePath} record={props.data} />}
    </div>;
};

const Posthow = (props: any) => {
    return <Show {...props} actions={<PostShowActions/>}>
        <PostShowLayout/>
    </Show>;
};
