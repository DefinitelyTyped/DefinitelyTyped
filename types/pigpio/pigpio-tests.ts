import * as pigpio from 'pigpio';
import * as assert from 'assert';

(function alert_pwm_measurement(): void {
    const Gpio = pigpio.Gpio;

    pigpio.configureClock(1, pigpio.CLOCK_PWM);
    pigpio.configureSocketPort(23456);

    const led = new Gpio(18, {
        mode: Gpio.OUTPUT,
        alert: true
    });

    led.digitalWrite(0);

    (function closure(): void {
        const pulseCounts: number[] = [];
        let pulses = 0;
        let risingTick = 0;
        let fallingTick: number;
        let i: number;

        led.on('alert', function event(level: number, tick: number): void {
            if (level === 1) {
                risingTick = tick;
            } else {
                fallingTick = tick;
                const pulseLength = fallingTick - risingTick;

                if (pulseCounts[pulseLength] === undefined) {
                    pulseCounts[pulseLength] = 0;
                }
                pulseCounts[pulseLength] += 1;

                pulses += 1;
                if (pulses === 1000) {
                    for (i = 0; i !== pulseCounts.length; i += 1) {
                        if (pulseCounts[i] !== undefined) {
                            console.log(i + 'us - ' + pulseCounts[i]);
                        }
                    }

                    led.digitalWrite(0);
                    led.disableAlert();
                }
            }
        });
    }());

    // frequency 250Hz, duty cycle 7us
    led.hardwarePwmWrite(250, 250 * 7);
})();

(function alert_trigger_pulse_measurement(): void {
    const Gpio = pigpio.Gpio;
    let iv: NodeJS.Timer;

    // pigpio.configureClock(1, pigpio.CLOCK_PCM);

    const led = new Gpio(17, {
        mode: Gpio.OUTPUT,
        alert: true
    });

    led.digitalWrite(0);

    (function closure(): void {
        const pulseCounts: number[] = [];
        let pulses = 0;
        let risingTick: number;
        let fallingTick: number;
        let i: number;

        led.on('alert', function event(level: number, tick: number): void {
            if (level === 1) {
                risingTick = tick;
            } else {
                fallingTick = tick;
                const pulseLength = fallingTick - risingTick;

                if (pulseCounts[pulseLength] === undefined) {
                    pulseCounts[pulseLength] = 0;
                }
                pulseCounts[pulseLength] += 1;

                pulses += 1;
                if (pulses === 1000) {
                    for (i = 0; i !== pulseCounts.length; i += 1) {
                        if (pulseCounts[i] !== undefined) {
                            console.log(i + 'us - ' + pulseCounts[i]);
                        }
                    }

                    clearInterval(iv);
                    led.digitalWrite(0);
                    led.disableAlert();
                }
            }
        });
    }());

    iv = setInterval(function timer() {
        led.trigger(10, 1);
    }, 2);
})();

(function alert(): void {
    const Gpio = pigpio.Gpio;
    const button = new Gpio(4, { alert: true });

    button.on('alert', function event(level: number, tick: number): void {
        console.log(level + ' ' + tick);
    });

    console.log('  press the momentary push button a few times');
})();

(function banked_leds(): void {
    const Gpio = pigpio.Gpio;
    const GpioBank = pigpio.GpioBank;
    const led17 = new Gpio(17, { mode: Gpio.OUTPUT });
    const led18 = new Gpio(18, { mode: Gpio.OUTPUT });
    const bank1 = new GpioBank();
    let iv: NodeJS.Timer;

    bank1.clear(1 << 18 | 1 << 17);
    assert.strictEqual((bank1.read() >> 17) & 0x3, 0, 'expected 0');

    iv = setInterval(function timer(): void {
        const bits = (bank1.read() >> 17) & 0x3;

        switch (bits) {
            case 0:
                bank1.set(1 << 17);
                assert.strictEqual((bank1.read() >> 17) & 0x3, 1, 'expected 1');
                break;
            case 1:
                bank1.clear(1 << 17);
                bank1.set(1 << 18);
                assert.strictEqual((bank1.read() >> 17) & 0x3, 2, 'expected 2');
                break;
            case 2:
                bank1.set(1 << 17);
                bank1.set(1 << 18);
                assert.strictEqual((bank1.read() >> 17) & 0x3, 3, 'expected 3');
                break;
            case 3:
                bank1.clear(1 << 17);
                bank1.clear(1 << 18);
                assert.strictEqual((bank1.read() >> 17) & 0x3, 0, 'expected 0');
                break;
        }
    }, 250);

    setTimeout(function timer() {
        bank1.clear(1 << 18 | 1 << 17);
        clearInterval(iv);
    }, 2000);
})();

(function blinky_pwm(): void {
    const Gpio = pigpio.Gpio;
    const led = new Gpio(18, { mode: Gpio.OUTPUT });

    led.hardwarePwmWrite(10, 500000);

    setTimeout(function timer() {
        led.digitalWrite(0);
    }, 2000);
})();

(function blinky(): void {
    const Gpio = pigpio.Gpio;
    const led = new Gpio(17, { mode: Gpio.OUTPUT });

    const iv: NodeJS.Timer = setInterval(function timer() {
        led.digitalWrite(led.digitalRead() ^ 1);
    }, 100);

    setTimeout(function timer() {
        led.digitalWrite(0);
        clearInterval(iv);
    }, 2000);
})();

(function digital_read_performance(): void {
    const Gpio = pigpio.Gpio;
    const button = new Gpio(4, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_DOWN
    });

    let time = process.hrtime();

    const maxI = 2000000;
    for (let i = 0; i !== maxI; i += 1) {
        button.digitalRead();
    }

    time = process.hrtime(time);
    const ops = Math.floor(maxI / (time[0] + time[1] / 1E9));

    console.log('  ' + ops + ' read ops per second');
})();

(function digital_write_performance(): void {
    const Gpio = pigpio.Gpio;
    const led = new Gpio(17, { mode: Gpio.OUTPUT });

    let time = process.hrtime();

    const maxI = 2000000;
    for (let i = 0; i !== maxI; i += 1) {
        led.digitalWrite(1);
        led.digitalWrite(0);
    }

    time = process.hrtime(time);
    const ops = Math.floor((maxI * 2) / (time[0] + time[1] / 1E9));

    console.log('  ' + ops + ' write ops per second');
})();

(function gpio_mode(): void {
    const Gpio = pigpio.Gpio;
    const gpio7 = new Gpio(7, { mode: Gpio.INPUT });
    const gpio8 = new Gpio(8, { mode: Gpio.OUTPUT });

    assert.strictEqual(gpio7.getMode(), Gpio.INPUT, 'expected INPUT mode for gpio7');
    assert.strictEqual(gpio8.getMode(), Gpio.OUTPUT, 'expected OUTPUT mode for gpio8');

    gpio8.mode(Gpio.INPUT);
    assert.strictEqual(gpio8.getMode(), Gpio.INPUT, 'expected INPUT mode for gpio8');

    gpio7.mode(Gpio.OUTPUT);
    assert.strictEqual(gpio7.getMode(), Gpio.OUTPUT, 'expected OUTPUT mode for gpio7');

    gpio7.mode(Gpio.INPUT);
    assert.strictEqual(gpio7.getMode(), Gpio.INPUT, 'expected INPUT mode for gpio7');
})();

(function gpio_numbers(): void {
    const Gpio = pigpio.Gpio;

    assert.strictEqual(Gpio.MIN_GPIO, 0, 'expected Gpio.MIN_GPIO to be 0');
    assert.strictEqual(Gpio.MAX_GPIO, 53, 'expected Gpio.MAX_GPIO to be 53');
    assert.strictEqual(Gpio.MAX_USER_GPIO, 31, 'expected Gpio.MAX_USER_GPIO to be 31');
})();

(function isr_enable_disable(): void {
    const Gpio = pigpio.Gpio;
    const input = new Gpio(7, { mode: Gpio.INPUT });
    const output = new Gpio(8, { mode: Gpio.OUTPUT });
    let risingCount = 0;
    let fallingCount = 0;

    // Put output (and input) in a known state.
    output.digitalWrite(0);

    // Toggle output (and input) every 10 ms
    const iv = setInterval(function timer() {
        output.digitalWrite(output.digitalRead() ^ 1);
    }, 10);

    // ISR
    input.on('interrupt', function event(level: number) {
        if (level === 0) {
            fallingCount += 1;
        } else if (level === 1) {
            risingCount += 1;
        }
    });

    function noEdge() {
        console.log('  no edge');

        input.disableInterrupt();
        risingCount = 0;
        fallingCount = 0;

        setTimeout(function timer() {
            console.log('    ' + risingCount + ' rising edge interrupts (0 expected)');
            console.log('    ' + fallingCount + ' falling edge interrupts (0 expected)');

            clearInterval(iv);
            input.disableInterrupt();
        }, 1000);
    }

    function fallingEdge() {
        console.log('  falling edge');

        input.enableInterrupt(Gpio.FALLING_EDGE);
        risingCount = 0;
        fallingCount = 0;

        setTimeout(function timer() {
            console.log('    ' + risingCount + ' rising edge interrupts (0 expected)');
            console.log('    ' + fallingCount + ' falling edge interrupts (~50 expected)');

            noEdge();
        }, 1000);
    }

    function risingEdge() {
        console.log('  rising edge');

        input.enableInterrupt(Gpio.RISING_EDGE);
        risingCount = 0;
        fallingCount = 0;

        setTimeout(function timer() {
            console.log('    ' + risingCount + ' rising edge interrupts (~50 expected)');
            console.log('    ' + fallingCount + ' falling edge interrupts (0 expected)');

            fallingEdge();
        }, 1000);
    }

    (function eitherEdge() {
        console.log('  either edge');

        input.enableInterrupt(Gpio.EITHER_EDGE);
        risingCount = 0;
        fallingCount = 0;

        setTimeout(function timer() {
            console.log('    ' + risingCount + ' rising edge interrupts (~50 expected)');
            console.log('    ' + fallingCount + ' falling edge interrupts (~50 expected)');

            risingEdge();
        }, 1000);
    }());
})();

(function isr_multiple_sources(): void {
    const Gpio = pigpio.Gpio;

    [[7, 8], [9, 11]].forEach(function loop(gpioNos: [number, number]) {
        let interruptCount = 0;
        const input = new Gpio(gpioNos[0], { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });
        const output = new Gpio(gpioNos[1], { mode: Gpio.OUTPUT });

        // Put input and output in a known state
        output.digitalWrite(0);

        input.on('interrupt', function event(level: number) {
            interruptCount += 1;
            output.digitalWrite(level ^ 1);

            if (interruptCount === 1000) {
                console.log('  ' + interruptCount + ' interrupts detected on GPIO' + gpioNos[0]);
                input.disableInterrupt();
            }
        });

        setTimeout(function timer() {
            // Trigger first interrupt
            output.digitalWrite(1);
        }, 1);
    });
})();

(function isr_performance(): void {
    const Gpio = pigpio.Gpio;
    let interruptCount = 0;
    const input = new Gpio(7, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });
    const output = new Gpio(8, { mode: Gpio.OUTPUT });

    output.digitalWrite(0);

    input.on('interrupt', function event(level: number) {
        interruptCount++;
        output.digitalWrite(level ^ 1);
    });

    setTimeout(function timer() {
        let time = process.hrtime();

        output.digitalWrite(1);

        setTimeout(function timer() {
            time = process.hrtime(time);
            const interruptsPerSec = Math.floor(interruptCount / (time[0] + time[1] / 1E9));

            console.log('  ' + interruptsPerSec + ' interrupts per second');

            input.disableInterrupt();
        }, 1000);
    }, 1);
})();

(function isr_timeouts_2(): void {
    const Gpio = pigpio.Gpio;
    let timeoutCount = 0;
    const input = new Gpio(7, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE, timeout: 100 });

    input.on('interrupt', function timer(level: number) {
        if (level === Gpio.TIMEOUT) {
            timeoutCount++;
        }
    });

    setTimeout(function time() {
        console.log('  ' + timeoutCount + ' timeouts detected (~10 expected)');

        input.enableInterrupt(Gpio.EITHER_EDGE, 1);
        timeoutCount = 0;

        setTimeout(function timer() {
            input.disableInterrupt();
            console.log('  ' + timeoutCount + ' timeouts detected (~1000 expected)');
        }, 1000);
    }, 1000);
})();

(function isr_timeouts(): void {
    const Gpio = pigpio.Gpio;
    let timeoutCount = 0;
    const input = new Gpio(7, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE, timeout: 10 });

    input.on('interrupt', function timer(level: number) {
        if (level === Gpio.TIMEOUT) {
            timeoutCount++;
        }
    });

    setTimeout(function timer() {
        console.log('  ' + timeoutCount + ' timeouts detected (~100 expected)');

        input.enableInterrupt(Gpio.EITHER_EDGE);
        timeoutCount = 0;

        setTimeout(function timer() {
            input.disableInterrupt();
            console.log('  ' + timeoutCount + ' timeouts detected (0 expected)');
        }, 1000);
    }, 1000);
})();

(function light_switch(): void {
    const Gpio = pigpio.Gpio;
    const button = new Gpio(4, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_DOWN,
        edge: Gpio.EITHER_EDGE
    });
    const led = new Gpio(17, { mode: Gpio.OUTPUT });

    button.on('interrupt', function event(level: number) {
        led.digitalWrite(level);
    });

    setTimeout(function timer() {
        led.digitalWrite(0);
        button.disableInterrupt();
    }, 2000);

    console.log('  press the momentary push button a few times');
})();

(function notifier_leak_check(): void {
    const Gpio = pigpio.Gpio;
    const Notifier = pigpio.Notifier;
    let notifierCount = 0;

    const LED_GPIO = 18;
    const FREQUENCY = 25000;

    (function closure() {
        const led = new Gpio(LED_GPIO, { mode: Gpio.OUTPUT });

        led.hardwarePwmWrite(FREQUENCY, 500000);
    }());

    (function next() {
        const ledNotifier = new Notifier({ bits: 1 << LED_GPIO });
        let closing = false;

        ledNotifier.stream().on('data', function event() {
            if (!closing) {
                ledNotifier.stream().on('close', function event() {
                    notifierCount += 1;

                    if (notifierCount % 1000 === 0) {
                        console.log(notifierCount);
                    }

                    if (notifierCount < 100000) {
                        next();
                    }
                });

                ledNotifier.close();
                closing = true;
            }
        });
    }());
})();

(function notifier_pwm(): void {
    const Gpio = pigpio.Gpio;
    const Notifier = pigpio.Notifier;

    const LED_GPIO = 18;
    const FREQUENCY = 25000;

    (function closure() {
        const led = new Gpio(LED_GPIO, { mode: Gpio.OUTPUT });

        led.hardwarePwmWrite(FREQUENCY, 500000);
    }());

    (function closure() {
        const ledNotifier = new Notifier({ bits: 1 << LED_GPIO });
        let notificationsReceived = 0;
        let seqnoErrors = 0;
        let ledStateErrors = 0;
        let lastSeqno: number;
        let lastLedState: number;
        let lastTick: number;
        let minTickDiff = 0xffffffff;
        let maxTickDiff = 0;

        ledNotifier.stream().on('data', function event(buf: Buffer) {
            for (let ix = 0; ix < buf.length; ix += Notifier.NOTIFICATION_LENGTH) {
                const seqno = buf.readUInt16LE(ix);
                const tick = buf.readUInt32LE(ix + 4);
                const level = buf.readUInt32LE(ix + 8);

                if (notificationsReceived > 0) {
                    if (lastLedState === (level & (1 << LED_GPIO))) {
                        console.log('  unexpected led state');
                        ledStateErrors += 1;
                    }

                    if ((lastSeqno + 1) !== seqno) {
                        console.log('  seqno error, was %d, expected %d', seqno, lastSeqno + 1);
                        seqnoErrors += 1;
                    }

                    if (tick - lastTick < minTickDiff) {
                        minTickDiff = tick - lastTick;
                    }

                    if (tick - lastTick > maxTickDiff) {
                        maxTickDiff = tick - lastTick;
                    }
                }

                notificationsReceived += 1;
                lastSeqno = seqno;
                lastLedState = level & (1 << LED_GPIO);
                lastTick = tick;
            }

            if (notificationsReceived >= 50000) {
                ledNotifier.stream().pause();
                ledNotifier.close();
                console.log('  notifications: %d', notificationsReceived);
                console.log('  seqno errors: %d', seqnoErrors);
                console.log('  led state errors: %d', ledStateErrors);
                console.log('  expected tick diff: %d us', 1000000 / (FREQUENCY * 2));
                console.log('  min tick diff: %d us', minTickDiff);
                console.log('  max tick diff: %d us', maxTickDiff);
            }
        });
    }());
})();

(function notifier_stress(): void {
    const Gpio = pigpio.Gpio;
    const Notifier = pigpio.Notifier;

    const LED_GPIO = 18;
    const FREQUENCY = 150000;

    pigpio.configureClock(1, pigpio.CLOCK_PCM);

    (function closure() {
        const led = new Gpio(LED_GPIO, { mode: Gpio.OUTPUT });

        led.hardwarePwmWrite(FREQUENCY, 500000);
    }());

    (function closure() {
        const ledNotifier = new Notifier({ bits: 1 << LED_GPIO });
        let notificationsReceived = 0;
        let events = 0;
        let seqnoErrors = 0;
        let ledStateErrors = 0;
        let lastSeqno: number;
        let lastLedState: number;
        let lastTick: number;
        let minTickDiff = 0xffffffff;
        let maxTickDiff = 0;
        let restBuf: Buffer | null = null;
        let iv: NodeJS.Timer;

        function printInfo() {
            console.log();
            console.log('  events: %d', events);
            console.log('  notifications: %d', notificationsReceived);
            console.log('  seqno errors: %d', seqnoErrors);
            console.log('  led state errors: %d', ledStateErrors);
            console.log('  expected tick diff: %d us', 1000000 / (FREQUENCY * 2));
            console.log('  min tick diff: %d us', minTickDiff);
            console.log('  max tick diff: %d us', maxTickDiff);

            minTickDiff = 0xffffffff;
            maxTickDiff = 0;
        }

        ledNotifier.stream().on('data', function event(buf: Buffer) {
            let entries: number;

            events += 1;

            if (restBuf !== null) {
                buf = Buffer.concat([restBuf, buf]);
            }

            entries = Math.floor(buf.length / Notifier.NOTIFICATION_LENGTH);
            const rest = buf.length % Notifier.NOTIFICATION_LENGTH;

            restBuf = rest === 0 ? null : new Buffer(buf.slice(buf.length - rest));

            for (let ix = 0; ix < buf.length - rest; ix += Notifier.NOTIFICATION_LENGTH) {
                const seqno = buf.readUInt16LE(ix);
                const tick = buf.readUInt32LE(ix + 4);
                const level = buf.readUInt32LE(ix + 8);

                if (notificationsReceived > 0) {
                    if (lastLedState === (level & (1 << LED_GPIO))) {
                        console.log('  unexpected led state');
                        ledStateErrors += 1;
                    }

                    if (((lastSeqno + 1) & 0xffff) !== seqno) {
                        console.log('  seqno error, was %d, expected %d', seqno, lastSeqno + 1);
                        seqnoErrors += 1;
                    }

                    if (tick - lastTick < minTickDiff) {
                        minTickDiff = tick - lastTick;
                    }

                    if (tick - lastTick > maxTickDiff) {
                        maxTickDiff = tick - lastTick;
                    }
                }

                notificationsReceived += 1;
                lastSeqno = seqno;
                lastLedState = level & (1 << LED_GPIO);
                lastTick = tick;
            }

            if (notificationsReceived >= 1e9) {
                ledNotifier.stream().pause();
                ledNotifier.close();
                clearInterval(iv);
                printInfo();
            }
        });

        iv = setInterval(printInfo, 5000);
    }());
})();

(function notifier(): void {
    const Gpio = pigpio.Gpio;
    const Notifier = pigpio.Notifier;

    const LED_GPIO = 17;
    const LED_TOGGLES = 1000;

    (function closure() {
        const led = new Gpio(LED_GPIO, { mode: Gpio.OUTPUT });
        let ledToggles = 0;
        let lastTime = process.hrtime();
        let minSetIntervalDiff = 0xffffffff;
        let maxSetIntervalDiff = 0;

        const iv = setInterval(function timer() {
            const time = process.hrtime();
            const diff = Math.floor(((time[0] * 1e9 + time[1]) - (lastTime[0] * 1e9 + lastTime[1])) / 1000);

            lastTime = time;

            if (diff < minSetIntervalDiff) {
                minSetIntervalDiff = diff;
            }

            if (diff > maxSetIntervalDiff) {
                maxSetIntervalDiff = diff;
            }

            led.digitalWrite(led.digitalRead() ^ 1);

            ledToggles += 1;
            if (ledToggles === LED_TOGGLES) {
                clearInterval(iv);

                console.log('  led toggles: %d', ledToggles);
                console.log('  min setInterval diff: %d us', minSetIntervalDiff);
                console.log('  max setInterval diff: %d us', maxSetIntervalDiff);
            }
        }, 1);
    }());

    (function closure() {
        const ledNotifier = new Notifier({ bits: 1 << LED_GPIO });
        let notificationsReceived = 0;
        let seqnoErrors = 0;
        let ledStateErrors = 0;
        let lastSeqno: number;
        let lastLedState: number;
        let lastTick: number;
        let minTickDiff = 0xffffffff;
        let maxTickDiff = 0;

        ledNotifier.stream().on('data', function event(buf: Buffer) {
            for (let ix = 0; ix < buf.length; ix += Notifier.NOTIFICATION_LENGTH) {
                const seqno = buf.readUInt16LE(ix);
                const tick = buf.readUInt32LE(ix + 4);
                const level = buf.readUInt32LE(ix + 8);

                if (notificationsReceived > 0) {
                    if (lastLedState === (level & (1 << LED_GPIO))) {
                        console.log('  unexpected led state');
                        ledStateErrors += 1;
                    }

                    if ((lastSeqno + 1) !== seqno) {
                        console.log('  seqno error, was %d, expected %d', seqno, lastSeqno + 1);
                        seqnoErrors += 1;
                    }

                    if (tick - lastTick < minTickDiff) {
                        minTickDiff = tick - lastTick;
                    }

                    if (tick - lastTick > maxTickDiff) {
                        maxTickDiff = tick - lastTick;
                    }
                }

                notificationsReceived += 1;
                lastSeqno = seqno;
                lastLedState = level & (1 << LED_GPIO);
                lastTick = tick;
            }

            if (notificationsReceived >= LED_TOGGLES) {
                ledNotifier.close();
                console.log('  notifications: %d', notificationsReceived);
                console.log('  seqno errors: %d', seqnoErrors);
                console.log('  led state errors: %d', ledStateErrors);
                console.log('  min tick diff: %d us', minTickDiff);
                console.log('  max tick diff: %d us', maxTickDiff);
            }
        });
    }());
})();

(function pull_up_down(): void {
    const Gpio = pigpio.Gpio;
    const input = new Gpio(22, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_UP });

    assert.strictEqual(input.digitalRead(), 1, 'expected gpio22 to be 1');
    input.pullUpDown(Gpio.PUD_DOWN);
    assert.strictEqual(input.digitalRead(), 0, 'expected gpio22 to be 0');
})();

(function pulse_led(): void {
    const Gpio = pigpio.Gpio;
    const led = new Gpio(17, { mode: Gpio.OUTPUT });
    let dutyCycle = 0;

    const iv = setInterval(function timer() {
        led.pwmWrite(dutyCycle);

        const dutyCycleRead: number = led.getPwmDutyCycle();
        assert.strictEqual(dutyCycleRead, dutyCycle,
            'expected dutyCycle to be ' + dutyCycle + ', not ' + dutyCycleRead
        );

        dutyCycle += 5;
        if (dutyCycle > 255) {
            dutyCycle = 0;
        }
    }, 20);

    setTimeout(function timer() {
        led.digitalWrite(0);
        clearInterval(iv);
    }, 2000);
})();

(function pwm(): void {
    const Gpio = pigpio.Gpio;
    const led = new Gpio(18, { mode: Gpio.OUTPUT });
    let dutyCycle: number;

    assert.strictEqual(led.getPwmRange(), 255, 'expected pwm range to be 255');
    assert.strictEqual(led.getPwmRealRange(), 250, 'expected pwm real range to be 250');
    assert.strictEqual(led.getPwmFrequency(), 800, 'expected get pwm frequency to be 800');

    led.pwmRange(125);
    assert.strictEqual(led.getPwmRange(), 125, 'expected pwm range to be 125');
    assert.strictEqual(led.getPwmRealRange(), 250, 'expected pwm real range to be 250');
    assert.strictEqual(led.getPwmFrequency(), 800, 'expected get pwm frequency to be 800');

    led.pwmFrequency(2000);
    assert.strictEqual(led.getPwmRange(), 125, 'expected pwm range to be 125');
    assert.strictEqual(led.getPwmRealRange(), 100, 'expected pwm real range to be 100');
    assert.strictEqual(led.getPwmFrequency(), 2000, 'expected get pwm frequency to be 2000');

    dutyCycle = Math.floor(led.getPwmRange() / 2);
    led.pwmWrite(dutyCycle);
    assert.strictEqual(led.getPwmDutyCycle(), dutyCycle, 'expected duty cycle to be ' + dutyCycle);

    led.hardwarePwmWrite(1e7, 500000);
    assert.strictEqual(led.getPwmRange(), 1e6, 'expected pwm range to be 1e6');
    assert.strictEqual(led.getPwmRealRange(), 25, 'expected pwm real range to be 25');
    assert.strictEqual(led.getPwmFrequency(), 1e7, 'expected get pwm frequency to be 1e7');
    assert.strictEqual(led.getPwmDutyCycle(), 500000, 'expected duty cycle to be 500000');

    led.digitalWrite(0);
    assert.strictEqual(led.getPwmRange(), 125, 'expected pwm range to be 125');
    assert.strictEqual(led.getPwmRealRange(), 100, 'expected pwm real range to be 100');
    assert.strictEqual(led.getPwmFrequency(), 2000, 'expected get pwm frequency to be 2000');
});

(function servo_control(): void {
    const Gpio = pigpio.Gpio;
    let iv: NodeJS.Timer;
    const motor = new Gpio(17, { mode: Gpio.OUTPUT });
    let pulseWidth = 500;

    motor.servoWrite(0);
    assert.strictEqual(motor.getServoPulseWidth(), 0,
        'expected pulseWidth to be 0'
    );

    iv = setInterval(function timer() {
        motor.servoWrite(pulseWidth);

        const pulseWidthRead = motor.getServoPulseWidth();
        assert.strictEqual(pulseWidthRead, pulseWidth,
            'expected pulseWidth to be ' + pulseWidth + ', not ' + pulseWidthRead
        );

        pulseWidth += 25;
        if (pulseWidth > 2500) {
            pulseWidth = 500;
        }
    }, 20);

    setTimeout(function timer() {
        motor.digitalWrite(0);
        clearInterval(iv);
    }, 2000);
})();

(function tirgger_led(): void {
    const Gpio = pigpio.Gpio;
    let iv: NodeJS.Timer;
    const led = new Gpio(17, { mode: Gpio.OUTPUT });

    iv = setInterval(function timer() {
        led.trigger(100, 1);
    }, 2);

    setTimeout(function timer() {
        led.digitalWrite(0);
        clearInterval(iv);
    }, 2000);
})();

(function tickAndTickDiff(): void {
    const startTick: number = pigpio.getTick();
    setTimeout(() => {
        const endTick: number = pigpio.getTick();
        const diff: number = pigpio.tickDiff(startTick, endTick);
        assert.ok(diff > 0, 'expected tick count to increase across a timer call');
    }, 50);
})();

(function gpio_glitch_filter(): void {
    const Gpio = pigpio.Gpio;
    const input = new Gpio(7, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_OFF,
        alert: true
    });
    const output = new Gpio(8, {
      mode: Gpio.OUTPUT
    });
    let count = 0;

    output.digitalWrite(0);
    input.glitchFilter(50);
    input.on('alert', (level, tick) => {
        if (level === 1) {
            count++;
            console.log('  rising edge, count=' + count);
        }
    });

    output.trigger(30, 1); // alert function should not be executed (blocked by glitchFilter)

    setTimeout(() => {
        output.trigger(70, 1); // alert function should be executed
    }, 500);

    setTimeout(() => {
        assert.strictEqual(count, 1, 'expected 1 alert function call instead of ' + count);
        console.log("  success...");
        process.exit(0);
    }, 1000);
})();
