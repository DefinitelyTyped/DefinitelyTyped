const collectionToArray = <T>(col: {Item(index: any): T}): T[] => {
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
    collectionToArray(app.ActivePresentation.Slides).forEach(slide => {
        collectionToArray(slide.Shapes).filter(shape =>
            shape.Type === Office.MsoShapeType.msoTextBox
            && shape.TextFrame.TextRange.Text.trim() === ''
        ).forEach(shape => shape.Delete());
    });
})();
