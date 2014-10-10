/**
 * Created by René Verheij on 08/10/2014.
 */
interface ReactBootstrap
{
	Accordion:React.ReactComponentFactory<PanelGroupAttributes>;
	Affix:React.ReactComponentFactory<AffixAttributes>;
	AffixMixin:React.ReactMixin<AffixAttributes,any>;
	Alert:React.ReactComponentFactory<AlertAttributes>;
	Badge:React.ReactComponentFactory<BadgeAttributes>;
	Button:React.ReactComponentFactory<ButtonAttributes>;
	ButtonGroup:React.ReactComponentFactory<ButtonGroupAttributes>;
	ButtonToolbar:React.ReactComponentFactory<BootstrapAttributes>;
	Carousel:React.ReactComponentFactory<CarouselAttributes>;
	CarouselItem:React.ReactComponentFactory<CarouselItemAttributes>;
	Col:React.ReactComponentFactory<ColAttributes>;
	DropdownButton:React.ReactComponentFactory<DropdownButtonAttributes>;
	DropdownMenu:React.ReactComponentFactory<DropdownMenuAttributes>;
	Glyphicon:React.ReactComponentFactory<GlyphiconAttributes>;
	Grid:React.ReactComponentFactory<GridAttributes>;
	Input:React.ReactComponentFactory<InputAttributes>;
	Interpolate:React.ReactComponentFactory<InterpolateAttributes>;
	Jumbotron:React.ReactComponentFactory<{}>;
	Label:React.ReactComponentFactory<BootstrapAttributes>;
	ListGroup:React.ReactComponentFactory<ListGroupAttributes>;
	ListGroupItem:React.ReactComponentFactory<ListGroupItemAttributes>;
	MenuItem:React.ReactComponentFactory<MenuItemAttributes>;
	Modal:React.ReactComponentFactory<ModalAttributes>;
	ModalTrigger:React.ReactComponentFactory<ModalTriggerAttributes>;
	Nav:React.ReactComponentFactory<NavAttributes>;
	NavItem:React.ReactComponentFactory<NavItemAttributes>;
	Navbar:React.ReactComponentFactory<NavbarAttributes>;
	OverlayTrigger:React.ReactComponentFactory<OverlayTriggerAttributes>;
	PageHeader:React.ReactComponentFactory<any>;
	PageItem:React.ReactComponentFactory<PageItemAttributes>;
	Pager:React.ReactComponentFactory<PagerAttributes>;
	Panel:React.ReactComponentFactory<PanelAttributes>;
	PanelGroup:React.ReactComponentFactory<PanelGroupAttributes>;
	Popover:React.ReactComponentFactory<PopoverAttributes>;
	ProgressBar:React.ReactComponentFactory<ProgressBarAttributes>;
	Row:React.ReactComponentFactory<RowAttributes>;
	SplitButton:React.ReactComponentFactory<SplitButtonAttributes>;
	SubNav:React.ReactComponentFactory<SubNavAttributes>;
	TabPane:React.ReactComponentFactory<TabPaneAttributes>;
	TabbedArea:React.ReactComponentFactory<TabbedAreaAttributes>;
	Table:React.ReactComponentFactory<TableAttributes>;
	Tooltip:React.ReactComponentFactory<TooltipAttributes>;
	Well:React.ReactComponentFactory<BootstrapAttributes>;
}

interface TooltipAttributes extends BootstrapAttributes
{
	/**
	 * oneOf(['top','right', 'bottom', 'left']),
	 */
	placement?: string;
	positionLeft?:number;
	positionTop?:number;
	arrowOffsetLeft?:number;
	arrowOffsetTop?:number;
}
interface TableAttributes
{
	striped?: boolean;
	bordered?: boolean;
	condensed?: boolean;
	hover?: boolean;
	responsive?: boolean;
}
interface TabbedAreaAttributes extends BootstrapAttributes
{
	/**
	 * oneOf(['tabs','pills'])
	 */
	bsStyle: string;
	animation: boolean;
	onSelect:(key?:string)=>void;
}
interface TabPaneAttributes
{
	animation?:boolean;
	active?:boolean;
	onAnimateOutEnd?:()=>void;
}
interface SubNavAttributes extends BootstrapAttributes
{
	onSelect?: (key?:string, href?:string)=>void;
	active?: boolean;
	disabled?: boolean;
	href?: string;
	title?: string;
	text?: any;
}

interface SplitButtonAttributes extends BootstrapAttributes
{
	pullRight?: boolean;
	title?: any;
	href?: string;
	/**
	 * Is rendered inside <span>
	 */
	dropdownTitle?: any
	onClick?: (e?:React.MouseEvent)=>void;
	onSelect?: (key?:string)=>void;
	disabled?: boolean;
}
interface RowAttributes
{
	componentClass: string;
}

interface ProgressBarAttributes extends BootstrapAttributes
{
	min?: number;
	now?: number;
	max?: number;
	label?: any;
	/**
	 * ScreenReaderOnly
	 */
	srOnly?: boolean;
	striped?: boolean;
	active?: boolean;
}
interface PopoverAttributes extends BootstrapAttributes
{
	/**
	 * oneOf(['top','right', 'bottom', 'left']),
	 */
	placement?: string;
	positionLeft?: number;
	positionTop?: number;
	arrowOffsetLeft?: number;
	arrowOffsetTop?: number;
	title?: any;
}
interface PanelGroupAttributes extends BootstrapAttributes {
	collapsable?: boolean;
	activeKey?: any;
	defaultActiveKey?: any;
	onSelect?: (key?:string)=>void;
}
interface PanelAttributes extends BootstrapAttributes,CollapsableAttributes {
	onSelect: (key?:string)=>void;
	header: any;
	footer: any;
}

interface PagerAttributes {
	//TODO: what type of attributes?
	onSelect:()=>void;
}
interface PageItemAttributes
{
	disabled?: boolean;
	previous?: boolean;
	next?: boolean;
	onSelect?:(key?:string,href?:string)=>void;
}
interface OverlayTriggerAttributes extends OverlayAttributes
{
	/**
	 * oneOfType([
	 	oneOf(['manual', 'click', 'hover', 'focus']),
	 	arrayOf(oneOf(['click', 'hover', 'focus']))
	   ])
	 */
	trigger?: any;
	/**
	 * oneOf(['top','right', 'bottom', 'left']),
	 */
	placement?: string;
	delay?: number;
	delayShow?: number;
	delayHide?: number;
	defaultOverlayShown?:boolean;
	overlay: any;
}
interface NavbarAttributes extends BootstrapAttributes
{
	fixedTop?:boolean;
	fixedBottom?:boolean;
	staticTop?:boolean;
	inverse?:boolean;
	fluid?:boolean;
	role?: string;
	componentClass: string;
	brand?: any;
	toggleButton?: any;
	onToggle?: ()=>void;
	navExpanded?:boolean;
	defaultNavExpanded?: boolean;
}
interface NavItemAttributes extends BootstrapAttributes
{
	onSelect?:(key?:string,href?:string)=>void;
	active?:boolean;
	disabled?:boolean;
	href?:string;
	title?:string;
}
interface NavAttributes extends BootstrapAttributes,CollapsableAttributes
{
	/**
	 * oneOf('tabs','pills')
	 */
	bsStyle?: string;
	stacked?:boolean;
	justified?:boolean;
	//TODO: see what type of attributes
	onSelect?: ()=>void;
	collapsable?:boolean;
	expanded?:boolean;
	navbar?: boolean;
}
interface OverlayAttributes
{
	/**
	 * CustomPropTypes.mountable
	 */
	container?: any;
}
interface ModalTriggerAttributes extends OverlayAttributes
{
	//change to 'any'?
	modal: React.ReactComponentFactory<ModalAttributes>
}

interface ModalAttributes extends BootstrapAttributes
{
	title: any;
	/**
	 * oneOf(['static', true, false]),
	 */
	backdrop?: string;
	keyboard?: boolean;
	closeButton?:boolean;
	animation?:boolean;
	onRequestHide:()=>void;
}
interface ListGroupItemAttributes extends BootstrapAttributes
{
	/**
	 * oneOf(['danger','info','success','warning']),
	 */
	bsStyle?: string;
	active?: any;
	disabled?: any;
	header?: any;
	//TODO: what type of attributes?
	onClick?: (key?:string,href?:string)=>void;
}
interface ListGroupAttributes extends BootstrapAttributes
{
	onClick:()=>void;
}
interface InterpolateAttributes
{
	format?: string;
}

interface InputAttributes
{
	type?: string;
	label?: any;
	help?: any;
	addonBefore?: any;
	addonAfter?: any;
	/**
	 * success,warning,error,default,info
	 */
	bsStyle?: string;
	hasFeedback?: boolean;
	groupClassName?: string;
	wrapperClassName?: string;
	labelClassName?: string;
	disabled?: boolean;
}
interface GridAttributes
{
	fluid?:boolean;
	compenentClass:string;
}
interface GlyphiconAttributes extends BootstrapAttributes
{
	glyph: string;
}
interface DropdownMenuAttributes
{
	pullRight?: boolean;
	//TODO: what type of attributes?
	onSelect?: ()=>void;
}
interface DropdownButtonAttributes extends BootstrapAttributes,React.ButtonAttributes
{
	pullRight?:boolean;
	dropup?:boolean;
	title?:any;
	href?:string;
	onClick?:()=>void;
	onSelect?:(key?:string)=>void;
	navItem?:boolean;
}
interface CollapsableAttributes
{
	collapsable?: boolean;
	defaultExpanded?: boolean;
	expanded?: boolean;
}

interface ColAttributes
{
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xsOffset?: number;
	smOffset?: number;
	mdOffset?: number;
	lgOffset?: number;
	xsPush?: number;
	smPush?: number;
	mdPush?: number;
	lgPush?: number;
	xsPull?: number;
	smPull?: number;
	mdPull?: number;
	lgPull?: number;
	componentClass: string;
}

interface CarouselItemAttributes extends React.HTMLGlobalAttributes
{
	/**
	 * oneOf(['prev', 'next']),
	 */
	direction?: string;
	onAnimateOutEnd?: (index:string)=>void;
	active?: boolean;
	caption?: any;
}
interface CarouselAttributes extends BootstrapAttributes
{
	slide?:boolean;
	indicators?:boolean;
	controls?:boolean;
	pauseOnHover?:boolean;
	wrap?:boolean;
	onSelect?:(index?:string,direction?:string)=>void;
	onSlideEnd?: ()=>void;
	activeIndex?: number;
	defaultActiveIndex?: number;
	/**
	 * 'prev' or 'next'
	 */
	direction?:string;
}
interface ButtonGroupAttributes extends BootstrapAttributes
{
	vertical?:boolean;
	justified?:boolean;
}
interface ButtonAttributes extends BootstrapAttributes,React.ButtonAttributes,React.AAttributes,React.LiAttributes
{
	active?:boolean;
	disabled?: boolean;
	block?: boolean;
	navItem?:boolean;
	navDropdown?:boolean;
	componentClass?:string;
}
interface BadgeAttributes
{
	pullRight?: boolean;
}
interface AlertAttributes extends BootstrapAttributes
{
	onDismiss?: (e?:React.MouseEvent)=>void;
	dismissAfter?: number;
}
interface BootstrapAttributes
{
	/**
	 * Used internally in react-bootstrap
	 */
	bsClass?:string;
	/**
	 * 'default','primary','success','info','warning','danger',
	 *	'link','inline',
	 *	'tabs','pills'
	 **/
	bsStyle?:string;
	/**
	 * 'large','medium','small','xsmall'
	 */
	bsSize?:string;
}
interface AffixAttributes
{
	offset?: number;
	offsetTop?: number;
	offsetBottom?: number;
}
interface ReactBootstrapAttributes
{
	pullRight?: boolean;
	dropup?: boolean;
	title?: any;
	href?:string;
	onClick?:()=>void;
	onSelect?:()=>void;
	navItem?:boolean;
    bsStyle?:string;
    bsSize?:string;
}
interface MenuItemAttributes extends ReactBootstrapAttributes
{
	header?:boolean;
	divider?:boolean;
	href?:string;
	title?:string;
	onSelect?:(key?:string)=>void;
}