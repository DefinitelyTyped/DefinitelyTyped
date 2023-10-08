import * as DC from 'dc-sdk'

DC.ready({})

DC.ready().then(()=>{
   let viewer = new DC.Viewer("#viewer-container")
})
