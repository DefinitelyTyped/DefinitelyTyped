
                     
function createFromCodeTests() {
    var survey = new Survey.SurveyModel();
    var page = survey.addNewPage("Page 1");
    page.addNewQuestion("text", "question1");
    page.addNewQuestion("comment", "question2");
    page = survey.addNewPage("Page 2");
    page.addNewQuestion("matrix", "question3");
    page.addNewQuestion("matrixdropdown", "question4");
    return survey;
}
function createFromJSONTests() {
    var survey = new Survey.SurveyModel({
        pages: [{
            "name": "page1",
            "questions": [{ "type": "text", "name": "textQuestion", "isRequired": "true" }, { "type": "checkbox", "name": "checkboxQuestion", "isRequired": "true", "choices": ["red", "white"] }]
        }]
    });
    survey.setValue("textQuestion", "newValue");
    return survey;
}
