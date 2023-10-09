import * as DC from 'dvgis__dc-sdk'

DC.ready({})

DC.ready().then(()=>{
   let viewer = new DC.Viewer("#viewer-container")
})

