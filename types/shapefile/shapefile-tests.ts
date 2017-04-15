import * as shapefile from 'shapefile'

shapefile.open('./example.shp')
    .then(source => {
        source.bbox
        source.read()
            .then(result => {
                result.value
                result.done
        })
    })

shapefile.read("example.shp")
    .then(result => {
        result.bbox
        result.features
        result.type
    })
