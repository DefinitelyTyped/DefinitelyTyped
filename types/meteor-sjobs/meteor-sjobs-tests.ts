import { Jobs } from 'meteor/msavin:sjobs';

Jobs.register({
    sendReminder(message: string) {
        const instance = this;

        const call = HTTP.put('http://www.magic.com/email/send', { content: message });

        if (call.statusCode !== 200) {
            instance.reschedule({
                in: {
                    minutes: 5,
                },
            });
        } else {
            return call.data;
        }
    },
});

Jobs.run('sendReminder', 'The future is here!');

Jobs.run('sendReminder', 'The future is here!', {
    in: {
        days: 3,
    },
    on: {
        hour: 9,
        minute: 42,
    },
    priority: 9999999999,
});

Jobs.register({
    syncData() {
        const instance = this;
        const call = HTTP.put('http://www.magic.com/syncData');

        if (call.statusCode === 200) {
            instance.replicate({
                in: {
                    hours: 1,
                },
            });

            instance.remove();
        } else {
            instance.reschedule({
                in: {
                    minutes: 5,
                },
            });
        }
    },
});

Jobs.start('sendReminder');

Jobs.start(['sendReminder', 'sendEmail']);

Jobs.configure({
    autoStart: false,
    autoRetry: false,
    autoPurge: true,
    interval: 5000,
    startupDelay: 200,
    maxWait: 10000,
    setServerId: () => 'SERVER1',
});

Meteor.startup(() => {
    Jobs.run('syncData', {
        singular: true,
    });
});
