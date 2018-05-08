import { Options } from "jquery-countto";

// Basic usage
$('.timer').countTo();

// With options
const options: Options = {
    from: 50,
    to: 2500,
    speed: 1000,
    refreshInterval: 50,
    formatter: (value: number, options: Options) => {
      return value.toFixed(options.decimals);
    },
    onUpdate: (value: number) => {
      console.log(value);
    },
    onComplete: (value: number) => {
      console.log(value);
    }
  };

$('.timer').countTo(options);
$('.timer').countTo({from: 50});

// Controls
$('.timer').countTo('start');
$('.timer').countTo('stop');
$('.timer').countTo('restart');
$('.timer').countTo('toggle');
