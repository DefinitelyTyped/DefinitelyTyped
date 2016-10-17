/// <reference types="react" />

/*import {
    Affix,
    Button,
    Alert,
    Badge,
    Breadcrumb,
    Calendar,
    Carousel,
    Cascader,
    Checkbox,
    Collapse,
    DatePicker,
    Dropdown,
    Icon,
    Form,
    Input,
    InputNumber,
    Row,
    Col,
    Menu,
    message,
    Modal,
    notification,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    QueueAnim,
    Radio,
    Select,
    Slider,
    Spin,
    Steps,
    Switch,
    Table,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Transfer,
    Tree,
    TreeSelect,
    Upload,



} from 'antd';*/

import * as React from 'react'
import Affix from 'antd/lib/Affix'
import Button from 'antd/lib/Button'
import Alert from 'antd/lib/Alert'
import Badge from 'antd/lib/Badge'
import Breadcrumb from 'antd/lib/Breadcrumb'
import Calendar from 'antd/lib/Calendar'
import Carousel from 'antd/lib/Carousel'
import Cascader from 'antd/lib/Cascader'
import Checkbox from 'antd/lib/Checkbox'
import Collapse from 'antd/lib/Collapse'
import DatePicker from 'antd/lib/DatePicker'
import Dropdown from 'antd/lib/Dropdown'
import Icon from 'antd/lib/Icon'
import Form from 'antd/lib/Form'
import Input from 'antd/lib/Input'
import InputNumber from 'antd/lib/InputNumber'
import Row from 'antd/lib/Row'
import Col from 'antd/lib/Col'
import Menu from 'antd/lib/Menu'
import message from 'antd/lib/message'
import Modal from 'antd/lib/Modal'
import notification from 'antd/lib/notification'
import Pagination from 'antd/lib/Pagination'
import Popconfirm from 'antd/lib/Popconfirm'
import Popover from 'antd/lib/Popover'
import Progress from 'antd/lib/Progress'
import QueueAnim from 'antd/lib/QueueAnim'
import Radio from 'antd/lib/Radio'
import Select from 'antd/lib/Select'
import Slider from 'antd/lib/Slider'
import Spin from 'antd/lib/Spin'
import Steps from 'antd/lib/Steps'
import Switch from 'antd/lib/Switch'
import Table from 'antd/lib/Table'
import Tabs from 'antd/lib/Tabs'
import Tag from 'antd/lib/Tag'
import TimePicker from 'antd/lib/TimePicker'
import Timeline from 'antd/lib/Timeline'
import Tooltip from 'antd/lib/Tooltip'
import Transfer from 'antd/lib/Transfer'
import Tree from 'antd/lib/Tree'
import TreeSelect from 'antd/lib/TreeSelect'
import Upload from 'antd/lib/Upload'

const ButtonGroup = Button.Group;
const CheckboxGroup = Checkbox.Group;
const Panel = Collapse.Panel;
const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const DropdownButton = Dropdown.Button;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ProgressCircle = Progress.Circle;
const ProgressLine = Progress.Line;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const OptGroup = Select.OptGroup;
const Step = Steps.Step;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const TreeNode = Tree.TreeNode;
const TreeSelectTreeNode = TreeSelect.TreeNode;

const onChange = () => { }

const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖',
        }],
    }],
}, {
        value: 'jiangsu',
        label: '江苏',
        children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
                value: 'zhonghuamen',
                label: '中华门',
            }],
        }],
    }];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render(text: any) {
        return <a href="#">{text}</a>;
    }
}, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: '操作',
        key: 'operation',
        render(text: any, record: any) {
            return (
                <span>
                    <a href="#">操作一{record.name}</a>
                    <span className="ant-divider"></span>
                    <a href="#">操作二</a>
                    <span className="ant-divider"></span>
                    <a href="#" className="ant-dropdown-link">
                        更多 <Icon type="down" />
                    </a>
                </span>
            );
        }
    }];
const data = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }, {
        key: '3',
        name: '李大嘴',
        age: 32,
        address: '西湖区湖底公园1号'
    }];

// tests
class AccountForm extends React.Component<any, any>{
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <Form inline>
                <FormItem
                    label="账户：">
                    <Input placeholder="请输入账户名"
                        {...getFieldProps('userName') } />
                </FormItem>
                <FormItem
                    label="密码：">
                    <Input type="password" placeholder="请输入密码"
                        {...getFieldProps('password') } />
                </FormItem>
                <FormItem>
                    <label className="ant-checkbox-inline">
                        <Checkbox
                            {...getFieldProps('agreement') } />记住我
                    </label>
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form>
        );
    }
}

var Account = Form.create()(AccountForm);

// app
class App extends React.Component<any, any>{
    render() {
        message.success('success')
        message.config({ top: 100 })
        message.destroy()
        message.info('info', 1000)
        message.error('error', 3500)

        Modal.info({ title: 'hello' });
        Modal.success({ cancelText: 'No' })
        notification.success({
            message: 'hello',
            description: 'test'
        })
        const props = {
            name: 'file',
            action: '/upload.do',
            onChange(info: any) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功。`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败。`);
                }
            }
        };
        return <div>
            <Affix>Affix</Affix>

            <Row>
                <Col>test</Col>
            </Row>
            <Alert message="Hello" type='info' closable={true}/>
            <Badge count={10}/>
            <Button type='primary'>Primary Button</Button>

            <ButtonGroup>
                <Button type='primary'>Primary Button</Button>
                <Button type='ghost'>Primary Button</Button>

            </ButtonGroup>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
                <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
                <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>

            <Calendar/>

            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>

            <Cascader options={options} />

            <CheckboxGroup options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} onChange={onChange} />
            <Collapse defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                    <p>test1</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>test2</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>test3</p>
                </Panel>
            </Collapse>
            <DatePicker defaultValue="2015-01-01" />
            <RangePicker showTime format="yyyy/MM/dd HH:mm:ss" onChange={onChange} />
            <MonthPicker defaultValue="2015-12" />
            <Dropdown trigger={['click']} overlay={<div>Hello Dp</div>}>
                <a className="ant-dropdown-link" href="#">
                    触发链接 <Icon type="down" />
                </a>
            </Dropdown>
            <DropdownButton overlay={<p>dpb</p>} type="primary">
                某功能按钮
            </DropdownButton>

            <InputNumber min={0} max={10}/>


            <Menu
                selectedKeys={[this.state.current]}
                theme={this.state.theme}
                mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="mail" />导航一
                </Menu.Item>

                <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
                    <MenuItemGroup title="分组1">
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="分组2">
                        <Menu.Item key="setting:3">选项3</Menu.Item>
                        <Menu.Item key="setting:4">选项4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

            </Menu>


            <Modal title='Modal .....' maskClosable/>


            <Pagination defaultCurrent={1} total={50} />,

            <Popconfirm title="confirm .">
                <a href="#">remove</a>
            </Popconfirm>
            <Popover overlay={<div>Overlay</div>} title="title">
                <Button type="primary">display card</Button>
            </Popover>



            <ProgressCircle percent={75} />
            <ProgressCircle percent={70} status="exception" />
            <ProgressCircle percent={100} />


            <ProgressLine percent={30} />
            <ProgressLine percent={50} status="active" />
            <ProgressLine percent={70} status="exception" />
            <ProgressLine percent={100} />
            <ProgressLine percent={50} showInfo={false} />


            <QueueAnim>
                <div key='demo1'>demo1</div>
                <div key='demo2'>demo2</div>
                <div key='demo3'>demo3</div>
                <div key='demo4'>demo4</div>
            </QueueAnim>

            <RadioGroup>
                <Radio key="a" value={1}>A</Radio>
                <Radio key="b" value={2}>B</Radio>
                <Radio key="c" value={3}>C</Radio>
                <Radio key="d" value={null}>D</Radio>
            </RadioGroup>

            <Select defaultValue="lucy"
                style={{ width: 200 }}
                showSearch={false}>
                <OptGroup label="Manager">
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                    <Option value="yiminghe">yiminghe</Option>
                </OptGroup>
            </Select>

            <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                <Option value="lucy">Lucy</Option>
            </Select>


            <Slider defaultValue={30} />
            <Slider range defaultValue={[20, 50]} />
            <Slider range defaultValue={[20, 50]} disabled />


            <Spin />


            <Step status="finish" title="步骤1" icon="cloud" />
            <Step status="process" title="步骤2" icon="apple" />
            <Step status="wait" title="步骤3" icon="github" />

            <Switch defaultChecked={false} onChange={onChange} />,


            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
                <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
            </Tabs>

            <Tag>标签一</Tag>
            <Tag>标签二</Tag>
            <Tag closable onClose={() => { } }>标签三</Tag>
            <Tag><a href="https://www.alipay.com/" target="_blank">标签四（链接）</a></Tag>


            <TimePicker onChange={onChange} />

            <Timeline>
                <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
                <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
                <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
            </Timeline>


            <Tooltip title="提示文字">
                <span>鼠标移上来就会出现提示</span>
            </Tooltip>


            <Transfer
                dataSource={this.state.mockData}
                targetKeys={this.state.targetKeys}
                onChange={onChange}  />



            <Tree className="myCls" showLine multiple checkable
                defaultExpandedKeys={this.state.defaultExpandedKeys}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                defaultCheckedKeys={this.state.defaultCheckedKeys}
                >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                </TreeNode>
            </Tree>




            <Upload {...props}>
                <Button type="ghost">
                    <Icon type="upload" /> 点击上传
                </Button>
            </Upload>

            <TreeSelect style={{ width: 300 }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="请选择"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}>
                <TreeSelectTreeNode value="parent 1" title="parent 1" key="0-1">
                    <TreeSelectTreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                        <TreeSelectTreeNode value="leaf1" title="my leaf" key="random" />
                        <TreeSelectTreeNode value="leaf2" title="your leaf" key="random1" />
                    </TreeSelectTreeNode>
                    <TreeSelectTreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <TreeSelectTreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                    </TreeSelectTreeNode>
                </TreeSelectTreeNode>
            </TreeSelect>
            <Table columns={columns} dataSource={data}/>
        </div>
    }
}
