// Test file for react-mdl Definition file


import * as React from 'react';
import {Chip, ChipContact,
    Badge,
    FABButton, Button, IconButton,
    Card, CardActions, CardTitle, CardText, CardMenu, CardMedia,
    Checkbox,
    DataTable, TableHeader, Table,
    Dialog, DialogTitle, DialogContent, DialogActions,
    Grid, Cell,
    Icon, IconToggle,
    Layout, Header, Navigation, Drawer, Content, HeaderRow, HeaderTabs, Footer, FooterDropDownSection, FooterLinkList, FooterSection,
    List, ListItem, ListItemContent, ListItemAction,
    Menu, MenuItem,
    ProgressBar,
    RadioGroup, Radio,
    Slider,
    Snackbar,
    Spinner,
    Switch,
    Tabs, Tab,
    Textfield,
    Tooltip,
    MDLComponent} from 'react-mdl';

// all tests are from the examples provided here: https://tleunen.github.io/react-mdl/

// Badge tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Number badge on icon */}
                <Badge text="1" overlap>
                    <Icon name="account_box" />
                </Badge>

                {/* Icon badge on icon */}
                <Badge text="♥" overlap>
                    <Icon name="account_box" />
                </Badge>
                
                {/* Number badge on text */}
                <Badge text="4">Inbox</Badge>

                {/* Icon badge without background on text */}
                <Badge text="♥" noBackground>Mood</Badge>
            </div>
        );
    }
});

// Chip tests
React.createClass({
    render: function() {
        return (
            <div>
                <Chip>Basic chip</Chip>

                <Chip onClose={e => { alert('Close icon clicked!'); }}>Deletable Chip</Chip>

                <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
                {/* Contact Chip */}
                <Chip>
                    <ChipContact className="mdl-color--teal mdl-color-text--white">A</ChipContact>
                    Contact chip
                </Chip>

                {/* User Contact Chip */}
                <Chip onClose={e => { alert('Close icon clicked!'); }}>
                    <ChipContact
                        style={{ background: 'url("https://placekitten.com/150/150") 0 0 / cover' }}
                    />
                    Deletable user contact chip
                </Chip>
            </div>
        );
    } 
});

// Button tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Colored FAB button */}
                <FABButton colored>
                    <Icon name="add" />
                </FABButton>

                {/* Colored FAB button with ripple */}
                <FABButton colored ripple>
                    <Icon name="add" />
                </FABButton>

                {/* FAB button */}
                <FABButton>
                    <Icon name="add" />
                </FABButton>

                {/* FAB button with ripple */}
                <FABButton ripple>
                    <Icon name="add" />
                </FABButton>

                {/* Disabled FAB button */}
                <FABButton disabled>
                    <Icon name="add" />
                </FABButton>

                {/* Mini FAB button */}
                <FABButton mini>
                    <Icon name="add" />
                </FABButton>

                {/* Colored Mini FAB button */}
                <FABButton mini colored>
                    <Icon name="add" />
                </FABButton>

                {/* Raised button */}
                <Button raised>Button</Button>

                {/* Raised button with ripple */}
                <Button raised ripple>Button</Button>

                {/* Disabled Raised button */}
                <Button raised disabled>Button</Button>

                {/* Colored Raised button */}
                <Button raised colored>Button</Button>

                {/* Accent-colored button without ripple */}
                <Button raised accent>Button</Button>

                {/* Accent-colored button with ripple */}
                <Button raised accent ripple>Button</Button>

                {/* Flat button */}
                <Button>Button</Button>

                {/* Flat button with ripple */}
                <Button ripple>Button</Button>

                {/* Disabled flat button */}
                <Button disabled>Button</Button>

                {/* Primary colored flat button */}
                <Button primary>Button</Button>

                {/* Accent-colored flat button */}
                <Button accent>Button</Button>

                {/* Icon button */}
                <IconButton name="mood" />

                {/* Colored Icon button */}
                <IconButton name="mood" colored />
            </div>
        );
    }
})

// Card tests
React.createClass({
    render: function() {
        return (
            <div>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                
                <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
                    <CardTitle expand />
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                        <span style={{color: '#fff', fontSize: '14px', fontWeight: 500 }}>
                            Image.jpg
                        </span>
                    </CardActions>
                </Card>
                
                <Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
                    <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
                        <h4 style={{marginTop: '0'}}>
                            Featured event:<br />
                            May 24, 2016<br />
                            7-11pm
                        </h4>
                    </CardTitle>
                    <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                        <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
            </div>
        );
    }
});

// Checkbox tests
React.createClass({
    render: function() {
        return (
            <div>
                <Checkbox label="With ripple" ripple defaultChecked />

                <Checkbox label="Without ripple" />
            </div>
        );
    }
});

// DataTable tests
React.createClass({
    render: function() {
        return (
            <div>
                <DataTable
                    shadow={0}
                    rows={[
                        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
                    ]}
                >
                    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
                </DataTable>

                <DataTable
                    selectable
                    shadow={0}
                    rowKeyColumn="id"
                    rows={[
                        {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                        {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                        {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
                    ]}
                >
                    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
                </DataTable>

                <Table
                    sortable
                    shadow={0}
                    rows={[
                        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
                    ]}
                >
                    <TableHeader
                        name="material"
                        sortable
                        sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
                        tooltip="The amazing material name"
                    >
                        Material
                    </TableHeader>
                    <TableHeader
                        numeric
                        name="quantity"
                        tooltip="Number of materials"
                    >
                        Quantity
                    </TableHeader>
                    <TableHeader
                        numeric
                        sortable
                        name="price"
                        cellFormatter={(price) => `\$${price.toFixed(2)}`}
                        tooltip="Price pet unit"
                    >
                        Price
                    </TableHeader>
                </Table>
            </div>
        );
    }
});

// Dialog tests
React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
                    <Dialog open={this.state.openDialog}>
                    <DialogTitle>Allow data collection?</DialogTitle>
                    <DialogContent>
                        <p>Allowing us to collect data will let us get you the information you want faster.</p>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button'>Agree</Button>
                        <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
                    </DialogActions>
                    </Dialog>
                </div>
                
                <div>
                    <Button colored onClick={this.handleOpenDialog} raised ripple>Show Modal</Button>
                    <Dialog open={this.state.openDialog}>
                    <DialogTitle>Allow this site to collect usage data to improve your experience?</DialogTitle>
                    <DialogContent>
                        <p>Allowing us to collect data will let us get you the information you want faster.</p>
                    </DialogContent>
                    <DialogActions fullWidth>
                        <Button type='button'>Agree</Button>
                        <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
                    </DialogActions>
                    </Dialog>
                </div>
                
                <div>
                    <Button colored onClick={this.handleOpenDialog} onAbort={this.handleCloseDialog} raised ripple>Show Dialog</Button>
                    <Dialog open={this.state.openDialog} onAbort={this.handleCloseDialog}>
                    <DialogTitle>Allow data collection?</DialogTitle>
                    <DialogContent>
                        <p>Allowing us to collect data will let us get you the information you want faster.</p>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button'>Agree</Button>
                        <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
                    </DialogActions>
                    </Dialog>
                </div>
            </div>
        );
    }
});

// Grid tests
React.createClass({
    render: function() {
        return (
            <div>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Grid className="demo-grid-ruler">
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                    </Grid>
                    <Grid className="demo-grid-1">
                        <Cell col={4}>4</Cell>
                        <Cell col={4}>4</Cell>
                        <Cell col={4}>4</Cell>
                    </Grid>
                    <Grid className="demo-grid-2">
                        <Cell col={6}>6</Cell>
                        <Cell col={4}>4</Cell>
                        <Cell col={2}>2</Cell>
                    </Grid>
                    <Grid className="demo-grid-3">
                        <Cell col={6} tablet={8}>6 (8 tablet)</Cell>
                        <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
                        <Cell col={2} phone={4}>2 (4 phone)</Cell>
                    </Grid>
                </div>
            </div>
        );
    }
});

// IconToggle tests
React.createClass({
    render: function() {
        return (
            <div>
                <IconToggle ripple id="bold" name="format_bold" defaultChecked />

                <IconToggle id="italic" name="format_italic" />
            </div>
        );
    }
});

// Layout tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Uses a transparent header that draws on top of the layout's background */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Header transparent title="Title" style={{color: 'white'}}>
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                {/* No header, and the drawer stays open on larger screens (fixed drawer). */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedDrawer>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                {/* Always shows a header, even in smaller screens. */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                {/* The drawer is always open in large screens. The header is always shown, even in small screens. */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader fixedDrawer>
                        <Header title="Title">
                            <Textfield
                                value=""
                                onChange={() => {}}
                                label="Search"
                                expandable
                                expandableIcon="search"
                            />
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
                <div className="demo-big-content">
                    <Layout>
                        <Header title="Title" scroll>
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                {/* Uses a header that contracts as the page scrolls down. */}
                <div className="demo-big-content">
                    <Layout>
                        <Header waterfall>
                            <HeaderRow title="Title">
                                <Textfield
                                    value=""
                                    onChange={() => {}}
                                    label="Search"
                                    expandable
                                    expandableIcon="search"
                                />
                            </HeaderRow>
                            <HeaderRow>
                                <Navigation>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                </Navigation>
                            </HeaderRow>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                {/* Hide the top part of the header when scrolling down */}
                <div className="demo-big-content">
                    <Layout>
                        <Header waterfall hideTop>
                            <HeaderRow title="Title">
                                <Textfield
                                    value=""
                                    onChange={() => {}}
                                    label="Search"
                                    expandable
                                    expandableIcon="search"
                                />
                            </HeaderRow>
                            <HeaderRow>
                                <Navigation>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                </Navigation>
                            </HeaderRow>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header>
                            <HeaderRow title="Title" />
                            <HeaderTabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                                <Tab>Tab1</Tab>
                                <Tab>Tab2</Tab>
                                <Tab>Tab3</Tab>
                                <Tab>Tab4</Tab>
                                <Tab>Tab5</Tab>
                                <Tab>Tab6</Tab>
                            </HeaderTabs>
                        </Header>
                        <Drawer title="Title" />
                        <Content>
                            <div className="page-content">Content for the tab: {this.state.activeTab}</div>
                        </Content>
                    </Layout>
                </div>

                {/* Simple header with fixed tabs. */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader fixedTabs>
                        <Header>
                            <HeaderRow title="Title" />
                            <HeaderTabs activeTab={1} onChange={(tabId) => {}}>
                                <Tab>Tab1</Tab>
                                <Tab>Tab2</Tab>
                                <Tab>Tab3</Tab>
                            </HeaderTabs>
                        </Header>
                        <Drawer title="Title" />
                        <Content>
                            <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
                        </Content>
                    </Layout>
                </div>

                <Footer size="mega">
                    <FooterSection type="middle">
                        <FooterDropDownSection title="Features">
                            <FooterLinkList>
                                <a href="#">About</a>
                                <a href="#">Terms</a>
                                <a href="#">Partners</a>
                                <a href="#">Updates</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Details">
                            <FooterLinkList>
                                <a href="#">Specs</a>
                                <a href="#">Tools</a>
                                <a href="#">Resources</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Technology">
                            <FooterLinkList>
                                <a href="#">How it works</a>
                                <a href="#">Patterns</a>
                                <a href="#">Usage</a>
                                <a href="#">Products</a>
                                <a href="#">Contracts</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="FAQ">
                            <FooterLinkList>
                                <a href="#">Questions</a>
                                <a href="#">Answers</a>
                                <a href="#">Contact Us</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                    </FooterSection>
                    <FooterSection type="bottom" logo="Title">
                        <FooterLinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>

                <Footer size="mini">
                    <FooterSection type="left" logo="Title">
                        <FooterLinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
        );
    }
});

// List tests
React.createClass({
    render: function() {
        return (
            <div>
                <List>
                <ListItem>Bryan Cranston</ListItem>
                <ListItem>Aaron Paul</ListItem>
                <ListItem>Bob Odenkirk</ListItem>
                </List>

                <List>
                <ListItem>
                    <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="person">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                </ListItem>
                </List>

                <List style={{width: '300px'}}>
                <ListItem>
                    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent avatar="person">Aaron Paul</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent avatar="person">Bob Odenkirk</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                </List>

                <List style={{width: '300px'}}>
                <ListItem>
                    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
                    <ListItemAction>
                    <Checkbox defaultChecked />
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent avatar="person">Aaron Paul</ListItemContent>
                    <ListItemAction>
                    <Radio value={1} />
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent avatar="person">Bob Odenkirk</ListItemContent>
                    <ListItemAction>
                    <Switch defaultChecked />
                    </ListItemAction>
                </ListItem>
                </List>

                <List style={{width: '300px'}}>
                <ListItem twoLine>
                    <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
                    <ListItemAction info="Actor">
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem twoLine>
                    <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem twoLine>
                    <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                </List>

                <List style={{width: '650px'}}>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                </List>
            </div>
        );
    }
});

// Menu tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Lower left */}
                <div style={{position: 'relative'}}>
                    <IconButton name="more_vert" id="demo-menu-lower-left" />
                    <Menu target="demo-menu-lower-left">
                        <MenuItem>Some Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem disabled>Disabled Action</MenuItem>
                        <MenuItem>Yet Another Action</MenuItem>
                    </Menu>
                </div>

                {/* Lower right */}
                <div style={{position: 'relative'}}>
                    <IconButton name="more_vert" id="demo-menu-lower-right" />
                    <Menu target="demo-menu-lower-right" align="right">
                        <MenuItem>Some Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem disabled>Disabled Action</MenuItem>
                        <MenuItem>Yet Another Action</MenuItem>
                    </Menu>
                </div>

                {/* Top left */}
                <div style={{position: 'relative'}}>
                    <IconButton name="more_vert" id="demo-menu-top-left" />
                    <Menu target="demo-menu-top-left" valign="top">
                        <MenuItem>Some Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem disabled>Disabled Action</MenuItem>
                        <MenuItem>Yet Another Action</MenuItem>
                    </Menu>
                </div>

                {/* Top right */}
                <div style={{position: 'relative'}}>
                    <IconButton name="more_vert" id="demo-menu-top-right" />
                    <Menu target="demo-menu-top-right" valign="top" align="right">
                        <MenuItem>Some Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem disabled>Disabled Action</MenuItem>
                        <MenuItem>Yet Another Action</MenuItem>
                    </Menu>
                </div>
            </div>
        );
    }
});

// ProgressBar tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Simple Progress Bar */}
                <ProgressBar progress={44} />

                {/* Progress Bar with Indeterminate Progress */}
                <ProgressBar indeterminate />

                {/* Progress Bar with Buffering */}
                <ProgressBar progress={33} buffer={87} />
            </div>
        );
    }
});

// Radio tests
React.createClass({
    render: function() {
        return (
            <div>
                <RadioGroup name="demo" value="opt1">
                    <Radio value="opt1" ripple>Ripple option</Radio>
                    <Radio value="opt2">Other option</Radio>
                </RadioGroup>

                <RadioGroup container="ul" childContainer="li" name="demo2" value="opt2">
                    <Radio value="opt1" ripple>Ripple option</Radio>
                    <Radio value="opt2">Other option</Radio>
                </RadioGroup>
            </div>
        );
    }
});

// Slider tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Default slider */}
                <Slider min={0} max={100} defaultValue={0} />

                {/* Slider with initial value */}
                <Slider min={0} max={100} defaultValue={25} />
            </div>
        );
    }
});

// Snackbar tests
React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    <Button raised style={{backgroundColor: '#FF00FF'}} onClick={this.handleShowSnackbar}>Show a Snackbar</Button>
                    <Snackbar
                        active={false}
                        onClick={this.handleClickActionSnackbar}
                        onTimeout={this.handleTimeoutSnackbar}
                        action="Undo">Button color changed.</Snackbar>
                </div>
                
                <div>
                    <Button raised onClick={this.handleShowSnackbar}>Show a Toast</Button>
                    <Snackbar
                        active={true}
                        onTimeout={this.handleTimeoutSnackbar}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius luctus quam. Fusce quis blandit libero. Donec accumsan nunc lectus, vel blandit diam bibendum ac. Integer faucibus, lorem et convallis fermentum, diam dolor imperdiet mi, nec iaculis risus mauris id elit. Vivamus vel eros dapibus, molestie ante ut, vestibulum sem.
                    </Snackbar>
                </div>
            </div>
        );
    }
});

// Spinner tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Simple spinner */}
                <Spinner />

                {/* Single color spinner */}
                <Spinner singleColor />
            </div>
        );
    }
});

// Switch tests
React.createClass({
    render: function() {
        return (
            <div>
                <Switch ripple id="switch1" defaultChecked>Ripple switch</Switch>

                <Switch id="switch2">Switch</Switch>
            </div>
        );
    }
});

// Tab tests
React.createClass({
    render: function() {
        return (
            <div>
                <div className="demo-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>Starks</Tab>
                        <Tab>Lannisters</Tab>
                        <Tab>Targaryens</Tab>
                    </Tabs>
                    <section>
                        <div className="content">Content for the tab: {this.state.activeTab}</div>
                    </section>
                </div> 
            </div>
        );
    }
});

// Textfield tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Simple textfield */}
                <Textfield
                    onChange={() => {}}
                    label="Text..."
                    style={{width: '200px'}}
                />

                {/* Numeric textfield */}
                <Textfield
                    onChange={() => {}}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="Number..."
                    style={{width: '200px'}}
                />

                {/* Textfield with floating label */}
                <Textfield
                    onChange={() => {}}
                    label="Text..."
                    floatingLabel
                    style={{width: '200px'}}
                />

                {/* Numeric Textfield with floating label */}
                <Textfield
                    onChange={() => {}}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="Number..."
                    floatingLabel
                />
            </div>
        );
    }
});

// Tooltip tests
React.createClass({
    render: function() {
        return (
            <div>
                {/* Simple tooltip */}
                <Tooltip label="Follow">
                    <Icon name="add" />
                </Tooltip>

                {/* Large Tooltip */}
                <Tooltip label="Print" large>
                    <Icon name="print" />
                </Tooltip>

                {/* Rich Tooltip */}
                <Tooltip label={<span>Upload <strong>file.zip</strong></span>}>
                    <Icon name="cloud_upload" />
                </Tooltip>

                {/* Multiline Tooltip */}
                <Tooltip label={<span>Share your content<br />via social media</span>}>
                    <Icon name="share" />
                </Tooltip>

                {/* Right Tooltip */}
                <Tooltip label="Follow" position="right">
                    <Icon name="arrow_forward" />
                </Tooltip>

                {/* Left Tooltip */}
                <Tooltip label="Follow" position="left">
                    <Icon name="arrow_back" />
                </Tooltip>

                {/* Top Tooltip */}
                <Tooltip label="Follow" position="top">
                    <Icon name="arrow_upward" />
                </Tooltip>

                {/* Bottom Tooltip */}
                <Tooltip label="Follow" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>
            </div>
        );
    }
});

// MDLComponent tests
React.createClass({
    render: function() {
        return (
            <MDLComponent recursive={false}>
                <div />
            </MDLComponent>
        )
    }
});
