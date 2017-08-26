declare namespace NativeUI {

	class CheckboxChangeEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenu, checkboxItem: NativeUI.UIMenuCheckboxItem, Checked: boolean): void;
		BeginInvoke(sender: NativeUI.UIMenu, checkboxItem: NativeUI.UIMenuCheckboxItem, Checked: boolean, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class IndexChangedEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenu, newIndex: number): void;
		BeginInvoke(sender: NativeUI.UIMenu, newIndex: number, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class InstructionalButton {
		Text: string;
		readonly ItemBind: NativeUI.UIMenuItem;
		constructor(control: GTA.Control, text: string);
		constructor(keystring: string, text: string);
		BindToItem(item: NativeUI.UIMenuItem): void;
		GetButtonId(): string;
	}

	class ItemActivatedEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenu, selectedItem: NativeUI.UIMenuItem): void;
		BeginInvoke(sender: NativeUI.UIMenu, selectedItem: NativeUI.UIMenuItem, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class ItemCheckboxEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenuCheckboxItem, Checked: boolean): void;
		BeginInvoke(sender: NativeUI.UIMenuCheckboxItem, Checked: boolean, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class ItemListEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenuListItem, newIndex: number): void;
		BeginInvoke(sender: NativeUI.UIMenuListItem, newIndex: number, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class ItemSelectEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenu, selectedItem: NativeUI.UIMenuItem, index: number): void;
		BeginInvoke(sender: NativeUI.UIMenu, selectedItem: NativeUI.UIMenuItem, index: number, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class ListChangedEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenu, listItem: NativeUI.UIMenuListItem, newIndex: number): void;
		BeginInvoke(sender: NativeUI.UIMenu, listItem: NativeUI.UIMenuListItem, newIndex: number, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class MenuChangeEvent {
		constructor(object: any, method: any);
		Invoke(oldMenu: NativeUI.UIMenu, newMenu: NativeUI.UIMenu, forward: boolean): void;
		BeginInvoke(oldMenu: NativeUI.UIMenu, newMenu: NativeUI.UIMenu, forward: boolean, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class MenuCloseEvent {
		constructor(object: any, method: any);
		Invoke(sender: NativeUI.UIMenu): void;
		BeginInvoke(sender: NativeUI.UIMenu, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class MenuPool {
		MouseEdgeEnabled: boolean;
		ControlDisablingEnabled: boolean;
		ResetCursorOnOpen: boolean;
		FormatDescriptions: boolean;
		AUDIO_LIBRARY: string;
		AUDIO_UPDOWN: string;
		AUDIO_SELECT: string;
		AUDIO_BACK: string;
		AUDIO_ERROR: string;
		WidthOffset: number;
		CounterPretext: string;
		DisableInstructionalButtons: boolean;
		constructor();
		Add(menu: NativeUI.UIMenu): void;
		AddSubMenu(menu: NativeUI.UIMenu, text: string): NativeUI.UIMenu;
		AddSubMenu(menu: NativeUI.UIMenu, text: string, description: string): NativeUI.UIMenu;
		RefreshIndex(): void;
		ToList(): System.Collections.Generic.List<NativeUI.UIMenu>;
		ProcessControl(): void;
		ProcessKey(key: System.Windows.Forms.Keys): void;
		ProcessMouse(): void;
		Draw(): void;
		IsAnyMenuOpen(): boolean;
		ProcessMenus(): void;
		CloseAllMenus(): void;
		SetBannerType(bannerType: NativeUI.Sprite): void;
		SetBannerType(bannerType: NativeUI.UIResRectangle): void;
		SetBannerType(bannerPath: string): void;
		SetKey(menuControl: NativeUI.UIMenu.MenuControls, control: GTA.Control): void;
		SetKey(menuControl: NativeUI.UIMenu.MenuControls, control: GTA.Control, controllerIndex: number): void;
		SetKey(menuControl: NativeUI.UIMenu.MenuControls, control: System.Windows.Forms.Keys): void;
		ResetKey(menuControl: NativeUI.UIMenu.MenuControls): void;
	}

	class Sprite {
		TextureDict: string;
		constructor(textureDict: string, textureName: string, position: System.Drawing.Point, size: System.Drawing.Size, heading: number, color: System.Drawing.Color);
		constructor(textureDict: string, textureName: string, position: System.Drawing.Point, size: System.Drawing.Size);
		Draw(): void;
		DrawTexture(path: string, position: System.Drawing.Point, size: System.Drawing.Size, rotation: number, color: System.Drawing.Color): void;
		DrawTexture(path: string, position: System.Drawing.Point, size: System.Drawing.Size): void;
		WriteFileFromResources(yourAssembly: any, fullResourceName: string): string;
		WriteFileFromResources(yourAssembly: any, fullResourceName: string, savePath: string): string;
	}

	class UIMenu {
		readonly Children: System.Collections.Generic.Dictionary<NativeUI.UIMenuItem, NativeUI.UIMenu>;
		readonly WidthOffset: number;
		Visible: boolean;
		CurrentSelection: number;
		readonly IsUsingController: boolean;
		readonly Size: number;
		readonly Title: NativeUI.UIResText;
		readonly Subtitle: NativeUI.UIResText;
		CounterPretext: string;
		ParentMenu: NativeUI.UIMenu;
		ParentItem: NativeUI.UIMenuItem;
		OnIndexChange: IEvent<(sender: NativeUI.UIMenu, newIndex: number) => void>;
		OnListChange: IEvent<(sender: NativeUI.UIMenu, listItem: NativeUI.UIMenuListItem, newIndex: number) => void>;
		OnCheckboxChange: IEvent<(sender: NativeUI.UIMenu, checkboxItem: NativeUI.UIMenuCheckboxItem, Checked: boolean) => void>;
		OnItemSelect: IEvent<(sender: NativeUI.UIMenu, selectedItem: NativeUI.UIMenuItem, index: number) => void>;
		OnMenuClose: IEvent<(sender: NativeUI.UIMenu) => void>;
		OnMenuChange: IEvent<(oldMenu: NativeUI.UIMenu, newMenu: NativeUI.UIMenu, forward: boolean) => void>;
		constructor(title: string, subtitle: string);
		constructor(title: string, subtitle: string, offset: System.Drawing.Point);
		constructor(title: string, subtitle: string, offset: System.Drawing.Point, customBanner: string);
		constructor(title: string, subtitle: string, offset: System.Drawing.Point, spriteLibrary: string, spriteName: string);
		SetMenuWidthOffset(widthOffset: number): void;
		DisEnableControls(enable: boolean): void;
		DisableInstructionalButtons(disable: boolean): void;
		SetBannerType(spriteBanner: NativeUI.Sprite): void;
		SetBannerType(rectangle: NativeUI.UIResRectangle): void;
		SetBannerType(pathToCustomSprite: string): void;
		AddItem(item: NativeUI.UIMenuItem): void;
		InsertItem(item: NativeUI.UIMenuItem, position: number): void;
		RemoveItemAt(index: number): void;
		RefreshIndex(): void;
		Clear(): void;
		Draw(): void;
		GetScreenResolutionMantainRatio(): System.Drawing.SizeF;
		IsMouseInBounds(topLeft: System.Drawing.Point, boxSize: System.Drawing.Size): boolean;
		IsMouseInListItemArrows(item: NativeUI.UIMenuListItem, topLeft: System.Drawing.Point, safezone: System.Drawing.Point): number;
		GetSafezoneBounds(): System.Drawing.Point;
		GoUpOverflow(): void;
		GoUp(): void;
		GoDownOverflow(): void;
		GoDown(): void;
		GoLeft(): void;
		GoRight(): void;
		SelectItem(): void;
		GoBack(): void;
		BindMenuToItem(menuToBind: NativeUI.UIMenu, itemToBindTo: NativeUI.UIMenuItem): void;
		ReleaseMenuFromItem(releaseFrom: NativeUI.UIMenuItem): boolean;
		ProcessMouse(): void;
		SetKey(control: NativeUI.UIMenu.MenuControls, keyToSet: System.Windows.Forms.Keys): void;
		SetKey(control: NativeUI.UIMenu.MenuControls, gtaControl: GTA.Control): void;
		SetKey(control: NativeUI.UIMenu.MenuControls, gtaControl: GTA.Control, controlIndex: number): void;
		ResetKey(control: NativeUI.UIMenu.MenuControls): void;
		HasControlJustBeenPressed(control: NativeUI.UIMenu.MenuControls, key?: System.Windows.Forms.Keys): boolean;
		HasControlJustBeenReleased(control: NativeUI.UIMenu.MenuControls, key?: System.Windows.Forms.Keys): boolean;
		IsControlBeingPressed(control: NativeUI.UIMenu.MenuControls, key?: System.Windows.Forms.Keys): boolean;
		ProcessControl(key?: System.Windows.Forms.Keys): void;
		ProcessKey(key: System.Windows.Forms.Keys): void;
		AddInstructionalButton(button: NativeUI.InstructionalButton): void;
		RemoveInstructionalButton(button: NativeUI.InstructionalButton): void;
		UpdateScaleform(): void;
	}

	class UIMenuCheckboxItem extends NativeUI.UIMenuItem {
		Checked: boolean;
		CheckboxEvent: IEvent<(sender: NativeUI.UIMenuCheckboxItem, Checked: boolean) => void>;
		constructor(text: string, check: boolean);
		constructor(text: string, check: boolean, description: string);
		Position(y: number): void;
		ProcessControl(control: NativeUI.UIMenu.MenuControls): boolean;
		Draw(): void;
		CheckboxEventTrigger(): void;
		SetRightBadge(badge: NativeUI.UIMenuItem.BadgeStyle): void;
		SetRightLabel(text: string): void;
	}

	class UIMenuColoredItem extends NativeUI.UIMenuItem {
		MainColor: System.Drawing.Color;
		HighlightColor: System.Drawing.Color;
		TextColor: System.Drawing.Color;
		HighlightedTextColor: System.Drawing.Color;
		constructor(label: string, color: System.Drawing.Color, highlightColor: System.Drawing.Color);
		constructor(label: string, description: string, color: System.Drawing.Color, highlightColor: System.Drawing.Color);
		Draw(): void;
	}

	class UIMenuItem {
		Selected: boolean;
		Hovered: boolean;
		Description: string;
		Enabled: boolean;
		Offset: System.Drawing.Point;
		Text: string;
		readonly RightLabel: string;
		readonly LeftBadge: NativeUI.UIMenuItem.BadgeStyle;
		readonly RightBadge: NativeUI.UIMenuItem.BadgeStyle;
		Parent: NativeUI.UIMenu;
		Activated: IEvent<(sender: NativeUI.UIMenu, selectedItem: NativeUI.UIMenuItem) => void>;
		constructor(text: string);
		constructor(text: string, description: string);
		Position(y: number): void;
		ProcessControl(control: NativeUI.UIMenu.MenuControls): boolean;
		Draw(): void;
		SetLeftBadge(badge: NativeUI.UIMenuItem.BadgeStyle): void;
		SetRightBadge(badge: NativeUI.UIMenuItem.BadgeStyle): void;
		SetRightLabel(text: string): void;
	}

	class UIMenuListItem extends NativeUI.UIMenuItem {
		Index: number;
		List: System.Collections.Generic.List<any>;
		OnListChanged: IEvent<(sender: NativeUI.UIMenuListItem, newIndex: number) => void>;
		constructor(text: string, items: System.Collections.Generic.List<any>, index: number);
		constructor(text: string, items: System.Collections.Generic.List<any>, index: number, description: string);
		Position(y: number): void;
		ItemToIndex(item: any): number;
		IndexToItem(index: number): any;
		ProcessControl(control: NativeUI.UIMenu.MenuControls): boolean;
		Draw(): void;
		SetRightBadge(badge: NativeUI.UIMenuItem.BadgeStyle): void;
		SetRightLabel(text: string): void;
	}

	class UIResRectangle {
		constructor();
		constructor(pos: System.Drawing.Point, size: System.Drawing.Size);
		constructor(pos: System.Drawing.Point, size: System.Drawing.Size, color: System.Drawing.Color);
		Draw(offset: System.Drawing.SizeF): void;
	}

	class UIResText {
		TextAlignment: NativeUI.UIResText.Alignment;
		DropShadow: boolean;
		Outline: boolean;
		WordWrap: System.Drawing.Size;
		constructor(caption: string, position: System.Drawing.Point, scale: number);
		constructor(caption: string, position: System.Drawing.Point, scale: number, color: System.Drawing.Color);
		constructor(caption: string, position: System.Drawing.Point, scale: number, color: System.Drawing.Color, font: GTA.UI.Font, justify: NativeUI.UIResText.Alignment);
		AddLongString(str: string): void;
		MeasureStringWidth(str: string, font: GTA.UI.Font, scale: number): number;
		MeasureStringWidthNoConvert(str: string, font: GTA.UI.Font, scale: number): number;
		Draw(offset: System.Drawing.SizeF): void;
	}

}
