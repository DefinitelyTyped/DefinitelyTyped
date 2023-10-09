import * as DC from 'dvgis_dc-sdk'

DC.ready({})

DC.ready().then(()=>{
   let viewer = new DC.Viewer("#viewer-container")
})

