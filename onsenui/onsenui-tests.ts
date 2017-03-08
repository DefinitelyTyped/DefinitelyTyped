

function onsStatic(): void {
	ons.ready(function(): void {
		alert('Ready!');
	});
	ons.bootstrap();
	ons.enableAutoStatusBarFill();
	ons.disableAutoStatusBarFill();
	ons.findParentComponentUntil('ons-page');
	ons.findComponent('.class1');
	ons.setDefaultDeviceBackButtonListener(null);
	ons.disableDeviceBackButtonHandler();
	ons.enableDeviceBackButtonHandler();
	ons.isReady();
	var content: HTMLElement = document.getElementById('#my-content');
	content.innerHTML = '<ons-button>Test Button</ons-button>';
	ons.compile(content);
	ons.isWebView();
	ons.createAlertDialog('myPage.html');
	ons.createDialog('myPage.html');
	ons.createPopover('myPage.html');

	var options: alertOptions = {
		message: 'text message'
	};
	ons.notification.alert(options);
	ons.notification.confirm(options);
	ons.notification.prompt(options);

	var potrait: boolean = ons.orientation.isPortrait();
	var isLandscape: boolean = ons.orientation.isLandscape();
	ons.orientation.on('eventName', null);
	ons.orientation.once('eventName', null);
	ons.orientation.off('eventName', null);

	var web: boolean = ons.platform.isWebView();
	var ios: boolean = ons.platform.isIOS();
	var iPhone: boolean = ons.platform.isIPhone();
	var iPad: boolean = ons.platform.isIPad();
	var blackBerry: boolean = ons.platform.isBlackBerry();
	var opera: boolean = ons.platform.isOpera();
	var firefox: boolean = ons.platform.isFirefox();
	var safari: boolean = ons.platform.isSafari();
	var chrome: boolean = ons.platform.isChrome();
	var ie: boolean = ons.platform.isIE();
	var ios7above: boolean = ons.platform.isIOS7above();

}

function onsPage(page: PageView): void {
	var DBBHandler: any = page.getDeviceBackButtonHandler();
}

function onsCarousel(carousel: CarouselView): void {
	carousel.next();
	carousel.prev();
	carousel.first();
	carousel.last();
	carousel.setSwipeable(true);
	var swipeable: boolean = carousel.isSwipeable();
	carousel.setActiveCarouselItemIndex(0);
	carousel.getActiveCarouselItemIndex();
	var autoScrollEnabled: boolean = carousel.isAutoScrollEnabled();
	carousel.setAutoScrollEnabled(true);
	carousel.getAutoScrollRatio();
	carousel.setOverscrollable(true);
	var overscrollable: boolean = carousel.isOverscrollable();
	carousel.refresh();
	var disabled: boolean = carousel.isDisabled();
	carousel.setDisabled(false);
	carousel.on('eventName', null);
	carousel.once('eventName', null);
	carousel.off('eventName', null);
}

function onsPullHook(pullHook: PullHookView): void {
	pullHook.setDisabled(false);
	var disabled: boolean = pullHook.isDisabled();
	pullHook.setHeight(15);
	pullHook.setThresholdHeight(4);
	pullHook.on('eventName', null);
	pullHook.once('eventName', null);
	pullHook.off('eventName', null);
}

function onsSplitView(splitViewVar: SplitView): void {
	splitViewVar.setMainPage('myPage.html');
	splitViewVar.setSecondaryPage('myPage2.html');
	splitViewVar.update();
	splitViewVar.on('eventName', null);
	splitViewVar.once('eventName', null);
	splitViewVar.off('eventName', null);
}

function onsAlertDialog(alertDialog: AlertDialogView): void {
	var options: dialogOptions = {
		animation: 'default'
	};
	alertDialog.show(options);
	alertDialog.hide(options);
	var shown: boolean = alertDialog.isShown();
	alertDialog.destroy();
	alertDialog.setCancelable(true);
	var cancelable: boolean = alertDialog.isCancelable();
	alertDialog.setDisabled(false);
	var disabled: boolean = alertDialog.isDisabled();
	alertDialog.on('eventName', null);
	alertDialog.once('eventName', null);
	alertDialog.off('eventName', null);
}

function onsDialog(dialog: DialogView): void {
	var options: dialogOptions = {
		animation: 'default'
	};
	dialog.show(options);
	dialog.hide(options);
	var shown: boolean = dialog.isShown();
	dialog.destroy();
	var DBBHandler: any = dialog.getDeviceBackButtonHandler();
	dialog.setCancelable(true);
	var cancelable: boolean = dialog.isCancelable();
	dialog.setDisabled(false);
	var disabled: boolean = dialog.isDisabled();
	dialog.on('eventName', null);
	dialog.once('eventName', null);
	dialog.off('eventName', null);
}

function onsButton(button: ButtonView): void {
	button.startSpin();
	button.stopSpin();
	var spinning: boolean = button.isSpinning();
	button.setSpinAnimation('slide-left');
	button.setDisabled(false);
	var disabled: boolean = button.isDisabled();
}

function onsSwitch(switchVar: SwitchView): void {
	var checked: boolean = switchVar.isChecked();
	switchVar.setChecked(true);
	var checkbox: HTMLElement = switchVar.getCheckboxElement();
	switchVar.on('eventName', null);
	switchVar.once('eventName', null);
	switchVar.off('eventName', null);
}

function onsModal(modal: ModalView): void {
	modal.toggle();
	modal.show();
	modal.hide();
	var DBBHandler: boolean = modal.getDeviceBackButtonHandler();
}

function onsNavigator(navigator: NavigatorView): void {
	var options: navigatorOptions = {
		animation: 'slide'
	};
	navigator.pushPage('myPage.html');
	navigator.insertPage(2, 'myPage2.html');
	navigator.popPage();
	navigator.resetToPage('myPage.html');
	var currentPage: any = navigator.getCurrentPage();
	var pages: objectArray = navigator.getPages();
	var DBBHandler: any = navigator.getDeviceBackButtonHandler();
	navigator.on('eventName', null);
	navigator.once('eventName', null);
	navigator.off('eventName', null);
}

function onsSlidingMenu(slidingMenu: SlidingMenuView): void {
	var options: slidingMenuOptions = {
		closeMenu: true
	};
	slidingMenu.setMainPage('myPage.html', options);
	slidingMenu.setMenuPage('myMenu.html', options);
	slidingMenu.openMenu(options);
	slidingMenu.closeMenu(options);
	slidingMenu.toggleMenu(options);
	var opened: boolean = slidingMenu.isMenuOpened();
	var DBBHandler: any = slidingMenu.getDeviceBackButtonHandler();
	slidingMenu.setSwipeable(true);
	slidingMenu.on('eventName', null);
	slidingMenu.once('eventName', null);
	slidingMenu.off('eventName', null);
}

function onsTabbar(tabBar: TabbarView): void {
	var options: tabbarOptions = {
		keepPage: true
	};
	tabBar.setActiveTab(2, options);
	var activeTab: number = tabBar.getActiveTabIndex();
	tabBar.loadPage('myPage.html');
	tabBar.on('eventName', null);
	tabBar.once('eventName', null);
	tabBar.off('eventName', null);
}

function onsPopover(popover: PopoverView): void {
	var options: popoverOptions = {
		animation: 'fade'
	}
	popover.show('#element5', options);
	popover.hide(options);
	var shown: boolean = popover.isShown();
	popover.destroy();
	popover.setCancelable(true);
	var cancelable: boolean = popover.isCancelable();
	popover.setDisabled(true);
	var disabled: boolean = popover.isDisabled();
	popover.on('eventName', null);
	popover.once('eventName', null);
	popover.off('eventName', null);
}
