declare let button: DevExpress.AspNetCore.BootstrapButton;
button.on('click', e => {});
button.doClick();
button.once('click', e => {});

declare let accordion: DevExpress.AspNetCore.BootstrapAccordion;
accordion.on('init', e => {});
const firstGroup = accordion.getGroup(0);
if (firstGroup) {
    const groupText = firstGroup.getText();
    const item = firstGroup.getItemByName('item10');
    item && item.getEnabled();
}
