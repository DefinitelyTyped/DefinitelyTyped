// tslint:disable-next-line no-unnecessary-generics
const collectionToArray = <T>(col: any): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
    }
    return results;
};

// -- https://msdn.microsoft.com/VBA/office-shared-vba/articles/getting-started-with-vba-in-office
const app = new ActiveXObject('PowerPoint.Application');
(() => {
    // delete empty textboxes in PowerPoint
    collectionToArray<PowerPoint.Slide>(app.ActivePresentation.Slides).forEach(slide => {
        collectionToArray<PowerPoint.Shape>(slide.Shapes).filter(shape =>
            shape.Type === Office.MsoShapeType.msoTextBox
            && shape.TextFrame.TextRange.Text.trim() === ''
        ).forEach(shape => shape.Delete());
    });
})();
