// named import
import { minimalTimezoneSet } from 'compact-timezone-list';
// Default import
import tz  from 'compact-timezone-list';


minimalTimezoneSet.map(({label,offset,tzCode})=>{
    console.log({
        label,
        offset,
        tzCode
    })
})
tz.map(({label,offset,tzCode})=>{
    console.log({
        label,
        offset,
        tzCode
    })
})


