import * as service from 'os-service';

const name = "MyTestService";

service.add(name);
service.add(name, (error): void => {
});
service.add(name, {displayName: name}, (): void => {
});

service.run((): void => {
	service.stop(0);
});

service.remove(name, (): void => {
	service.stop(0);
});
service.remove(name, (error): void => {
	service.stop(0);
});
