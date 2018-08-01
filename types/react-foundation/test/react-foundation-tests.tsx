import * as React from 'react';
import { 
  Accordion, AccordionItem, AccordionContent, AccordionTitle, 
  Badge, Breadcrumbs, BreadcrumbItem, 
  ButtonGroup, 
  Button, Link,
  Callout,
  CloseButton,
  Block, Inline,
  FlexVideo,
  Row, Column,
  Icon,
  Label,
  MediaObject, MediaObjectSection,
  Menu, MenuItem, MenuText,
  Pagination, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis,
  Progress, ProgressMeter, ProgressMeterWithText, ProgressMeterText, NativeProgress,
  ResponsiveNavigation, TitleBar, MenuIcon, TitleBarTitle,
  Reveal,
  Switch, SwitchInput, SwitchPaddle, SwitchActive, SwitchInactive,
  Tabs, TabItem, TabsContent, TabPanel,
  Thumbnail, ThumbnailLink,
  TopBar, TopBarTitle, TopBarLeft, TopBarRight,
  GridContainer, Grid, Cell
} from 'react-foundation';

import { // missing from index?
    Slider, TwoHandleSlider, SliderHandle, SliderFill
} from 'react-foundation/components/slider';

import {
  HorizontalAlignments, VerticalAlignments, ExtendedBreakpoints, SpaceControls,
  BadgeColors, ButtonGroupColors, ButtonGroupSizes, Breakpoints,
  ButtonSizes, ButtonColors, CalloutColors, CalloutSizes, LabelColors,
  MenuAlignments, ProgressColors, SwitchSizes, SwitchInputTypes, GutterTypes
} from 'react-foundation/enums';

export class ReactFoundationTests extends React.Component {
  render() {
    return (
      <div>
        <Accordion/>
        <Accordion 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />

        <AccordionItem/>
        <AccordionItem 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <AccordionItem isActive={true}/>
        
        <AccordionContent/>
        <AccordionContent 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <AccordionContent isActive={true}/>
        
        <AccordionTitle/>
        <AccordionTitle 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <AccordionTitle isActive={true}/>
        
        <Badge/> 
        <Badge 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Badge color={BadgeColors.SECONDARY}/> 
        
        <Breadcrumbs/>
        <Breadcrumbs  
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <BreadcrumbItem/>
        <BreadcrumbItem  
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <BreadcrumbItem isDisabled={true}/>
        
        <ButtonGroup/>
        <ButtonGroup  
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <ButtonGroup        
          color={ButtonGroupColors.SUCCESS}
          size={ButtonGroupSizes.SMALL}
          stackFor={Breakpoints.XLARGE}
          isExpanded={true}
          isStacked={false}
        />
        
        <Button/> 
        <Button  
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Button
          size={ButtonSizes.TINY}
          isHollow={true}
          isExpanded={false}
          isDisabled={true}
          isDropdown={false}
          isArrowOnly={true}
          color={ButtonColors.WARNING}
          /> 
        
        <Link/>
        <Link 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Link
          size={ButtonSizes.TINY}
          isHollow={true}
          isExpanded={false}
          isDisabled={true}
          isDropdown={false}
          isArrowOnly={true}
          color={ButtonColors.WARNING}
          />

        <Callout/>
        <Callout 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Callout color={CalloutColors.SUCCESS} size={CalloutSizes.LARGE}/>

        <CloseButton/>
        <CloseButton 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />

        <Block/>
        <Block 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />

        <Inline/>
        <Inline 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />

        <FlexVideo/>
        <FlexVideo 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />

        <Row/> 
        <Row 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Row
          upOnSmall={2}
          upOnMedium={2}
          upOnLarge={2}
          horizontalAlignment={"hmmm"}
          verticalAlignment={"hmmm"}
          unstackOnSmall={true}
          unstackOnMedium={true}
          unstackOnLarge={true}
          collapseOnSmall={true}
          collapseOnMedium={true}
          collapseOnLarge={true}
          uncollapseOnSmall={true}
          uncollapseOnMedium={true}
          uncollapseOnLarge={true}
          isCollapsed={true}
          isExpanded={true}
          isColumn={true}
        /> 
        
        <Column/>
        <Column 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Column
          upOnSmall={2}
          small={2}
          medium={2}
          large={2}
          offsetOnSmall={2}
          offsetOnMedium={2}
          offsetOnLarge={2}
          pushOnSmall={2}
          pushOnMedium={2}
          pushOnLarge={2}
          pullOnSmall={2}
          pullOnMedium={2}
          pullOnLarge={2}
          orderOnSmall={2}
          orderOnMedium={2}
          orderOnLarge={2}
          centerOnSmall={true}
          centerOnMedium={true}
          centerOnLarge={true}
          uncenterOnSmall={true}
          uncenterOnMedium={true}
          uncenterOnLarge={true}
          expandOnSmall={true}
          expandOnMedium={true}
          expandOnLarge={true}
          isShrunk={true}
          isLast={true}
          isColumn={true}        
        />
        
        <Icon name="some"/>
        <Icon name="some" 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Icon name="some" prefix="hubba"/>
        
        <Label/>
        <Label 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Label color={LabelColors.INFO}/>
        
        <MediaObject/> 
        <MediaObject 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <MediaObject stackForSmall={false}/> 
        
        <MediaObjectSection/>
        <MediaObjectSection 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <MediaObjectSection
          alignment={HorizontalAlignments.JUSTIFY}
          isMain={true}
          isMiddle={true}
          isBottom={true}
        />
        
        <Menu/> 
        <Menu 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Menu 
          alignment={MenuAlignments.CENTER}
          iconsOnTop={true}
          isExpanded={true}
          isVertical={true}
          isDropdown={true}
          isSimple={true}
          isNested={true}
          horizontalOnMedium={true}
        /> 
        
        <MenuItem/> 
        <MenuItem 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <MenuItem isActive={false}/> 
        
        <MenuText/>
        <MenuText 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <MenuText isActive={true}/>
        
        <Pagination/> 
        <Pagination 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Pagination isCentered={false}/> 
        
        <PaginationItem/> 
        <PaginationItem 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <PaginationItem isCurrent={false} isDisabled={true}/> 
        
        <PaginationPrevious/> 
        <PaginationPrevious 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <PaginationPrevious isCurrent={false} isDisabled={true}/> 
        
        <PaginationNext/> 
        <PaginationNext 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <PaginationNext isCurrent={false} isDisabled={true}/> 
        
        <PaginationEllipsis/>
        <PaginationEllipsis 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <PaginationEllipsis isCurrent={false} isDisabled={true}/>
        
        <Progress/> 
        <Progress 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Progress
          min={4}
          max={8}
          value={6}
          color={ProgressColors.SECONDARY}
          valueText="ooo"
          meter={{ text: "some" }}
        /> 
        
        <ProgressMeter/> 
        <ProgressMeter 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        
        <ProgressMeterWithText text="some"/> 
        <ProgressMeterWithText text="some" 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        
        <ProgressMeterText/> 
        <ProgressMeterText 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <ProgressMeterText/> 
        
        <NativeProgress/>
        <NativeProgress 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <NativeProgress
          max={6}
          value={10}
          color={ProgressColors.ALERT}
        />
        
        <ResponsiveNavigation/> 
        <ResponsiveNavigation 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <ResponsiveNavigation 
          breakpoint={42}
          titleBar={{ }}
          menuIcon={{ }}
          titleBarTitle={{ }}
          topBar={{ }}
          /> 
        
        <TitleBar/>
        <TitleBar 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <MenuIcon/> 
        <MenuIcon 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        
        <TitleBarTitle/>
        <TitleBarTitle 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <Reveal/>
        <Reveal 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Reveal
          isTiny={true}
          isSmall={true}
          isLarge={true}
          isFullscreen={true}
        />
        
        <Switch/>
        <Switch 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Switch
          size={SwitchSizes.SMALL}
          id="abba"
          input={{}}
          paddle={{}}
          active={{}}
          inactive={{}}
          />
        
        <SwitchInput/>
        <SwitchInput 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <SwitchInput
          type={SwitchInputTypes.CHECKBOX}
          id="blah"
        />
        
        <SwitchPaddle/>
        <SwitchPaddle 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <SwitchPaddle/>
        
        <SwitchActive/>
        <SwitchActive 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <SwitchActive text="ahoy-hoy"/>
        
        <SwitchInactive/>
        <SwitchInactive 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <SwitchInactive text="zebra"/>
        
        <Tabs/>
        <Tabs 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Tabs isVertical={true}/>
        
        <TabItem/>
        <TabItem 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <TabItem isActive={false}/>
        
        <TabsContent/> 
        <TabsContent 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <TabsContent isVertical={true} isActive={false}/> 
        
        <TabPanel/>
        <TabPanel 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <TabPanel isActive={false}/>
        
        <Thumbnail/>
        <Thumbnail 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <ThumbnailLink/>
        <ThumbnailLink 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <TopBar/>
        <TopBar 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <TopBarTitle/>
        <TopBarTitle 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <TopBarLeft/>
        <TopBarLeft 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />

        <TopBarRight/>
        <TopBarRight 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        
        <GridContainer/>
        <GridContainer 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <GridContainer
          fluid={true}
          full={true}
        />
        
        <Grid/>
        <Grid 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          />
        <Grid
          vertical={true}
          gutters={GutterTypes.MARGIN}
          upOnSmall={5}
          upOnMedium={5}
          upOnLarge={5}
          collapseOnSmall={GutterTypes.PADDING}
          collapseOnMedium={GutterTypes.PADDING}
          collapseOnLarge={GutterTypes.PADDING}
          gridFrame={ExtendedBreakpoints.SMALL}
        />
        
        <Cell/> 
        <Cell 
          alignX={HorizontalAlignments.CENTER}
          alignY={VerticalAlignments.MIDDLE}
          selfAlignX={HorizontalAlignments.JUSTIFY}
          selfAlignY={VerticalAlignments.TOP}
          centerAlign={true}
          flexContainer={false}
          flexDirRow={ExtendedBreakpoints.LARGE}
          flexDirRowRev={ExtendedBreakpoints.SMALL}
          flexDirCol={ExtendedBreakpoints.XLARGE}
          flexDirColRev={ExtendedBreakpoints.MEDIUM}
          flexChild={SpaceControls.GROW}
          flexOrder={12}
          flexOrderSmall={24}
          flexOrderMedium={48}
          flexOrderLarge={92} 
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Cell
          small={6}
          medium={6}
          large={6}
          auto={ExtendedBreakpoints.ALL}
          shrink={ExtendedBreakpoints.XLARGE}
          offsetOnSmall={6}
          offsetOnMedium={6}
          offsetOnLarge={6}
        /> 

        <Slider/> 
        <Slider
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
          /> 
        <Slider
          initialStart={2}
          fill={{}}
          handle={{}}
          isVertical={true}
          isDisabled={false}
        /> 

        <TwoHandleSlider/> 
        <TwoHandleSlider
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
        /> 
        <TwoHandleSlider        
          initialStart={3}
          initialEnd={4}
          minHandle={{}}
          maxHandle={{}}
          fill={{}}
          isVertical={true}
          isDisabled={false}
        /> 

        <SliderHandle/> 
        <SliderHandle
          style={{position: "absolute"}}
          className="foo"
          onClick = {(e) => e.pageX}
        /> 
        
        <SliderFill/>
        <SliderFill className="foo" />
      </div>
    );
  }
}
