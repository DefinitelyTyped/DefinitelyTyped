// Accelerometer: https://www.w3.org/TR/accelerometer/

const accelerometer1 = () => {
    const sensor = new Accelerometer();
    sensor.start();

    sensor.onreading = () => {
        console.log('Acceleration along X-axis: ' + sensor.x);
        console.log('Acceleration along Y-axis: ' + sensor.y);
        console.log('Acceleration along Z-axis: ' + sensor.z);
    };

    sensor.onerror = event => console.log(event.error.name, event.error.message);
};

const gravitySensor1 = () => {
    const sensor = new GravitySensor({ frequency: 5, referenceFrame: 'screen' });

    sensor.onreading = () => {
        if (sensor.y && sensor.y >= 9.8) {
            console.log('Web page is perpendicular to the ground.');
        }
    };

    sensor.start();
};

const linearAccelerationSensor1 = () => {
    const shakeThreshold = 25;

    const sensor = new LinearAccelerationSensor({ frequency: 60 });

    sensor.addEventListener('reading', () => {
        if (sensor.x && sensor.x > shakeThreshold) {
            console.log('Shake detected.');
        }
    });

    sensor.start();
};

// Gyroscope: https://www.w3.org/TR/gyroscope/

const gyroscope1 = () => {
    const sensor = new Gyroscope();
    sensor.start();

    sensor.onreading = () => {
        console.log('Angular velocity around the X-axis ' + sensor.x);
        console.log('Angular velocity around the Y-axis ' + sensor.y);
        console.log('Angular velocity around the Z-axis ' + sensor.z);
    };

    sensor.onerror = event => console.log(event.error.name, event.error.message);
};

// From Magnetometer spec: https://www.w3.org/TR/magnetometer/

const magnetometer1 = () => {
    const sensor = new Magnetometer();
    sensor.start();

    sensor.onreading = () => {
        console.log('Magnetic field along the X-axis ' + sensor.x);
        console.log('Magnetic field along the Y-axis ' + sensor.y);
        console.log('Magnetic field along the Z-axis ' + sensor.z);
    };

    sensor.onerror = event => console.log(event.error.name, event.error.message);
};

const magnetometer2 = () => {
    const sensor = new Magnetometer();
    sensor.start();

    sensor.onreading = () => {
        if (!sensor.y || !sensor.x) {
            return;
        }
        const heading = Math.atan2(sensor.y, sensor.x) * (180 / Math.PI);
        console.log('Heading in degrees: ' + heading);
    };
};

const magnetometer3 = () => {
    const sensor = new Magnetometer();
    sensor.start();

    sensor.onreading = async () => {
        if (!sensor.y || !sensor.x) {
            return;
        }
        const heading = Math.atan2(sensor.y, sensor.x) * (180 / Math.PI);

        // Get the latitude and longitude, omitted for brevity here.
        const latitude = 0;
        const longitude = 0;

        // Get the magnetic declination at the given latitude and longitude.
        const response = await fetch(
            'https://www.ngdc.noaa.gov/geomag-web/calculators/calculateDeclination' +
                `?lat1=${latitude}&lon1=${longitude}&resultFormat=csv`,
        );
        const text = await response.text();

        const declination = parseFloat(text.replace(/^#.*$/gm, '').trim().split(',')[4]);

        // Compensate for the magnetic declination to get the geographic north.
        console.log('True heading in degrees: ' + (heading + declination));
    };
};

// From Orientation Sensor spec: https://www.w3.org/TR/orientation-sensor/

const orientation1 = () => {
    const sensor = new AbsoluteOrientationSensor();
    const mat4 = new Float32Array(16);
    sensor.start();
    sensor.onerror = event => console.log(event.error.name, event.error.message);

    sensor.onreading = () => {
        sensor.populateMatrix(mat4);
    };
};

const orientation2 = () => {
    const sensor = new AbsoluteOrientationSensor({ frequency: 60 });
    const mat4 = new Float32Array(16);
    sensor.start();
    sensor.onerror = event => console.log(event.error.name, event.error.message);

    function draw() {
        window.requestAnimationFrame(draw);
        try {
            sensor.populateMatrix(mat4);
        } catch (err) {
            console.log('mat4 has not been updated: ' + err);
        }
        // Drawing...
    }

    window.requestAnimationFrame(draw);
};

// From Explainer: https://www.w3.org/TR/motion-sensors/

const explainer1 = () => {
    class LowPassFilterData {
        x: number;
        y: number;
        z: number;
        bias: number;

        constructor(reading: Accelerometer | Gyroscope | Magnetometer, bias: number) {
            Object.assign(this, { x: reading.x, y: reading.y, z: reading.z });
            this.bias = bias;
        }

        update(reading: Accelerometer | Gyroscope | Magnetometer) {
            if (!reading.x || !reading.y || !reading.z) {
                return;
            }

            this.x = this.x * this.bias + reading.x * (1 - this.bias);
            this.y = this.y * this.bias + reading.y * (1 - this.bias);
            this.z = this.z * this.bias + reading.z * (1 - this.bias);
        }
    }

    const accl = new Accelerometer({ frequency: 20 });

    // Isolate gravity with low-pass filter.
    const filter = new LowPassFilterData(accl, 0.8);

    accl.onreading = () => {
        filter.update(accl); // Pass latest values through filter.
        console.log(`Isolated gravity (${filter.x}, ${filter.y}, ${filter.z})`);
    };

    accl.start();
};

const explainer2 = () => {
    class HighPassFilterData {
        cutoff: number;
        timestamp?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;

        constructor(reading: Accelerometer | Gyroscope | Magnetometer, cutoffFrequency: number) {
            this.x = reading.x;
            this.y = reading.y;
            this.z = reading.z;
            this.cutoff = cutoffFrequency;
            this.timestamp = reading.timestamp;
        }

        update(reading: Accelerometer | Gyroscope | Magnetometer) {
            if (!this.timestamp || !this.x || !this.y || !this.z) {
                this.x = reading.x;
                this.y = reading.y;
                this.z = reading.z;
                this.timestamp = reading.timestamp;
                return;
            }

            if (!reading.timestamp || !reading.x || !reading.y || !reading.z) {
                return;
            }

            const dt = reading.timestamp - this.timestamp / 1000;
            this.timestamp = reading.timestamp;

            const alpha = this.cutoff / (this.cutoff + dt);
            this.x = this.x + alpha * (reading.x - this.x);
            this.y = this.y + alpha * (reading.y - this.y);
            this.z = this.z + alpha * (reading.z - this.z);
        }
    }

    const gyro = new Gyroscope({ frequency: 20 });

    // Remove drift with a  high pass filter.
    const filter = new HighPassFilterData(gyro, 0.8);

    gyro.onreading = () => {
        filter.update(gyro); // Pass latest values through filter.
        console.log(`Steady gyroscope (${filter.x}, ${filter.y}, ${filter.z})`);
    };

    gyro.start();
};

const explainer3 = () => {
    const options = { frequency: 50 };

    const accl = new Accelerometer(options);
    const gyro = new Gyroscope(options);

    let timestamp = 0;
    let alpha = 0;
    let beta = 0;
    let gamma = 0;
    const bias = 0.98;

    gyro.onreading = () => {
        if (!gyro.timestamp || !gyro.x || !gyro.y || !gyro.z || !accl.x || !accl.y || !accl.z) {
            return;
        }

        const dt = timestamp ? (gyro.timestamp - timestamp) / 1000 : 0;
        timestamp = gyro.timestamp;

        // Treat the acceleration vector as an orientation vector by normalizing it.
        // Keep in mind that the if the device is flipped, the vector will just be
        // pointing in the other direction, so we have no way to know from the
        // accelerometer data which way the device is oriented.
        const norm = Math.sqrt(accl.x ** 2 + accl.y ** 2 + accl.z ** 2);

        // As we only can cover half (PI rad) of the full spectrum (2*PI rad) we multiply
        // the unit vector with values from [-1, 1] with PI/2, covering [-PI/2, PI/2].
        const scale = Math.PI / 2;

        alpha = alpha + gyro.z * dt;
        beta = bias * (beta + gyro.x * dt) + (1.0 - bias) * ((accl.x * scale) / norm);
        gamma = bias * (gamma + gyro.y * dt) + (1.0 - bias) * ((accl.y * -scale) / norm);

        // Do something with Euler angles (alpha, beta, gamma).
    };

    accl.start();
    gyro.start();
};

// Ambient Light Sensor: https://www.w3.org/TR/ambient-light/

const ambienLightSensor = () => {
    const sensor = new AmbientLightSensor();
    sensor.start();

    sensor.onreading = () => {
        console.log('Illuminance measured in lux' + sensor.illuminance);
    };

    sensor.onerror = event => console.log(event.error.name, event.error.message);
};
