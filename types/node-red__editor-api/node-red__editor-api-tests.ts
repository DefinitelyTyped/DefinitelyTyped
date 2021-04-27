import editorAPI = require('@node-red/editor-api');

async function tests() {
    await editorAPI.start();
    await editorAPI.stop();
}
