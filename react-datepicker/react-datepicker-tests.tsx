import * as React from "react";
import * as moment from 'moment';
import * as DatePicker from 'react-datepicker';

class ReactDatePicker extends React.Component<{}, { startDate: moment.Moment; displayName:string; }> {
     constructor(props: {}) {
        super();
        this.state = {
          startDate: moment(),
          displayName: 'Example'
        }
        this.handleChange = this.handleChange.bind(this);
     }

     handleChange = function(date?: moment.Moment | null) {
        this.setState({
          startDate: date
        });
     }

     render(){
         return (
           <div>
             <DatePicker
                 selected={this.state.startDate}
                 onChange={this.handleChange} />
           </div>
         );
    }
};