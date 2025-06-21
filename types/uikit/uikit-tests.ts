import UIkit, { UIkitElementBase } from "uikit";

const element = document.createElement("div");

function testUIkitElementBase() {
    const component: UIkitElementBase = UIkit.alert(element, {
        animation: true,
        duration: 300,
        selClose: ">",
    });

    // $ExpectError - Doesn't seem to be working...
    // component.$el = undefined;

    component.$el.classList; // $el is a HTML element
    component.$destroy();
}

function testAccordion() {
    UIkit.accordion(element).$destroy();
    const component = UIkit.accordion(element, {
        active: 0,
        animation: true,
        collapsible: true,
        content: ">",
        duration: 300,
        multiple: true,
        targets: ">",
        toggle: ">",
        transition: "ease",
        offset: 1,
    });

    component.toggle(0);
    component.toggle(0, true);
    component.$destroy();
}

function testAlert() {
    UIkit.alert(element).$destroy();
    const component = UIkit.alert(element, {
        animation: true,
        duration: 300,
        selClose: ">",
    });

    component.close();
    component.$destroy();
}

function testCountdown() {
    UIkit.countdown(element).$destroy();
    const component = UIkit.countdown(element, {
        date: 123,
        reload: true,
    });

    component.stop();
    component.start();
    component.$destroy();
}

function testCover() {
    UIkit.cover(element).$destroy();
    const component = UIkit.cover(element, {
        automute: true,
        width: 1,
        height: 1,
    });

    component.$destroy();
}

function testDrop() {
    UIkit.drop(element).$destroy();
    const component = UIkit.drop(element, {
        toggle: ">",
    });

    component.hide();
    component.hide(true);
    component.show();
    component.$destroy();
}

function testDropdown() {
    UIkit.dropdown(element).$destroy();
    const component = UIkit.dropdown(element, {
        pos: "bottom-center",
        mode: "click",
        flip: true,
    });

    component.hide();
    component.hide(true);
    component.show();
    component.$destroy();
}

function testDropnav() {
    UIkit.dropnav(element).$destroy();
    const component = UIkit.dropnav(element, {
        align: "center",
        mode: "click",
        dropbar: true,
    });

    component.$destroy();
}

function testFilter() {
    UIkit.filter(element).$destroy();
    const component = UIkit.filter(element, {
        target: ">",
        selActive: "active",
        animation: "slide",
        duration: 100,
    });

    component.$destroy();
}

function testForm() {
    UIkit.formCustom(element).$destroy();
    const component = UIkit.formCustom(element, {
        target: ">",
    });

    component.$destroy();
}

function testGrid() {
    UIkit.grid(element).$destroy();
    const component = UIkit.grid(element, {
        masonry: "next",
    });

    component.$destroy();
}

function testHeightMatch() {
    UIkit.heightMatch(element).$destroy();
    const component = UIkit.heightMatch(element, {
        row: true,
    });

    component.$destroy();
}

function testHeightPlaceholder() {
    UIkit.heightPlaceholder(element).$destroy();
    const component = UIkit.heightPlaceholder(element, {});

    component.$destroy();
}

function testHeightViewport() {
    UIkit.heightViewport(element).$destroy();
    const component = UIkit.heightViewport(element, {
        expand: true,
    });

    component.$destroy();
}

async function testIcon() {
    UIkit.icon(element).$destroy();
    const component = UIkit.icon(element, { icon: "facebook" });

    await component.svg.then(() => console.log("Loaded"));
    component.$destroy();
}

function testImage() {
    UIkit.img(element).$destroy();
    const component = UIkit.img(element, { dataSrc: "" });

    component.$destroy();
}

function testInverse() {
    UIkit.inverse(element).$destroy();
    const component = UIkit.inverse(element, {
        target: ">",
        selActive: "active",
    });

    component.$destroy();
}

function testLeader() {
    UIkit.leader(element).$destroy();
    const component = UIkit.leader(element, {
        fill: "a",
        media: "@l",
    });

    component.$destroy();
}

function testLightbox() {
    UIkit.lightbox(element).$destroy();
    const lightbox = UIkit.lightbox(element, {
        videoAutoplay: true,
    });

    lightbox.show(0);
    lightbox.hide();
    lightbox.$destroy();

    UIkit.lightboxPanel(element).$destroy;
    const panel = UIkit.lightboxPanel({ delayControls: true });

    panel.show(1);
    panel.startAutoplay();
    panel.stopAutoplay();
    panel.$destroy();
}

function testMargin() {
    UIkit.margin(element).$destroy();
    const component = UIkit.margin(element, {
        margin: "uk-grid-margin",
    });

    component.$destroy();
}

async function testModal() {
    UIkit.modal(element).$destroy();

    // Alert
    const alert = UIkit.modal.alert("Attention!");
    await alert.then(() => console.log("Success"));
    alert.dialog.$destroy();

    // Confirm
    const confirm = UIkit.modal.confirm("Are you sure?");
    await confirm.then(() => console.log("Success")).catch(() => console.log("Cancelled"));
    confirm.dialog.$destroy();

    // Confirm
    const prompt = UIkit.modal.prompt("Name", "");
    await prompt.then((v) => console.log("Success", v)).catch(() => console.log("Cancelled"));
    prompt.dialog.$destroy();

    // Confirm
    const dialog = UIkit.modal.dialog("<p>UIkit dialog!</p>");
    await dialog.then(() => console.log("Success")).catch(() => console.log("Cancelled"));
    dialog.dialog.$destroy();

    const modal = UIkit.modal("#modal", {
        stack: true,
        container: false,
    });

    setTimeout(() => modal.show(), 2000);
    setTimeout(() => {
        modal.hide();
        modal.$destroy();
    }, 4000);
}

function testNav() {
    UIkit.nav(element).$destroy();
    const component = UIkit.nav(element, {
        targets: ">",
    });

    component.toggle(0);
    component.toggle(0, true);
    component.$destroy();
}

function testNavbar() {
    UIkit.navbar(element).$destroy();
    const component = UIkit.navbar(element, {
        align: "left",
    });

    component.$destroy();
}

function testNotification() {
    UIkit.notification("Hi").$destroy();
    UIkit.notification("Hi", "primary").$destroy();
    const component = UIkit.notification("Hi", { status: "primary" });

    component.close();
    component.close(false);
    component.$destroy();

    UIkit.notification.closeAll();
    UIkit.notification.closeAll("group1");
    UIkit.notification.closeAll("group1", true);
}

function testOffCanvas() {
    UIkit.offcanvas(element).$destroy();
    const component = UIkit.offcanvas(element, {
        mode: "push",
    });

    component.show();
    component.hide();
    component.$destroy();
}

function testParallax() {
    UIkit.parallax(element).$destroy();
    const component = UIkit.parallax(element, { easing: 1 });

    component.$destroy();
}

function testScroll() {
    UIkit.scroll(element).$destroy();
    const component = UIkit.scroll(element, {
        offset: 1,
    });

    component.scrollTo(">");
    component.scrollTo(document.createElement("a"));
    component.$destroy();
}

function testScrollspy() {
    UIkit.scrollspy(element).$destroy();
    const component = UIkit.scrollspy(element, { cls: "active" });

    UIkit.scrollspyNav(element).$destroy();
    const nav = UIkit.scrollspyNav(element, { target: ">" });

    nav.$destroy();
}

function testSlider() {
    UIkit.slider(element).$destroy();
    const slider = UIkit.slider(element, {
        autoplay: true,
    });

    slider.startAutoplay();
    slider.stopAutoplay();
    slider.show(1);
    slider.$destroy();
}

function testSlideshow() {
    UIkit.slideshow(element).$destroy();
    const component = UIkit.slideshow(element, {
        ratio: 1,
    });

    component.startAutoplay();
    component.stopAutoplay();
    component.show(10);
    component.$destroy();
}

function testSortable() {
    UIkit.sortable(element).$destroy();
    const component = UIkit.sortable(element, {
        group: "abc",
    });

    component.$destroy();
}

function testSticky() {
    UIkit.sticky(element).$destroy();
    const component = UIkit.sticky(element, {
        end: 1,
    });

    component.$destroy();
}

async function testSvg() {
    UIkit.svg(element).$destroy();
    const component = UIkit.svg(element, {
        src: "",
        strokeAnimation: true,
    });

    await component.svg;
    component.$destroy();
}

function testSwitcher() {
    UIkit.switcher(element).$destroy();
    const component = UIkit.switcher(element, {
        connect: ">",
    });

    component.show(0);
    component.show(document.createElement("a"));
    component.$destroy();
}

function testToggle() {
    UIkit.toggle(element).$destroy();
    const component = UIkit.toggle(element, {
        mode: "click",
    });

    component.toggle();
    component.$destroy();
}

function testTooltip() {
    UIkit.tooltip(element).$destroy();
    const tooltip = UIkit.tooltip(element, {
        title: "A Tooltip",
    });

    tooltip.show();
    tooltip.hide();
    tooltip.$destroy();
}

function testUpload() {
    UIkit.upload("#upload", {
        abort: (asd: number) => {
            return asd;
        },
    });
}

function testUse() {
    const plugin = (uikit: typeof UIkit) => {};
    plugin.installed = false;
    UIkit.use(plugin);
}

function testUtils() {
    const handler = (e: Event) => console.log(e.target);
    UIkit.util.on(document.body, "show", handler);
    UIkit.util.off(document.body, "show", handler);
}

import Icons from "uikit/dist/js/uikit-icons";

// $ExpectType boolean
Icons.installed;

UIkit.icon.add("icon", "<svg>...</svg>");
UIkit.icon.add({
    icon1: "<svg>A</svg>",
    icon2: "<svg>B</svg>",
});
UIkit.icon("#app", {
    icon: "home",
});
