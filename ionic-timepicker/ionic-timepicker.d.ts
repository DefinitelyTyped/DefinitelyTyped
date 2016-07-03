// Type definitions for Ionic TimePicker
// Definitions by: Beeno Tung <https://github.com/beenotung/>
// Definitions: https://github.com/beenotung/DefinitelyTyped
/**
 * Created by beenotung on 7/3/16.
 */

declare namespace ionic {
    namespace timePicker {
        let defaultConfig = {
            setLabel: 'Set',
            closeLabel: 'Close',
            inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
            format: 12,
            step: 15
        };
        interface ITimePickerOption {
            callback:(val?)=>void;
            setLabel?:string;
            closeLabel?:string
            inputTime?:number;
            format?:number;
            step?:number;
        }
        function openTimePicker(cakkbacoption:ITimePickerOption);
    }
}
