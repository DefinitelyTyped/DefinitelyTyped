notifier.show('Hello!', 'I am a default notification.', '', '', 0);
notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', '', 0);
notifier.show('Well Done!', 'You just submit your resume successfuly.', '', '', 0);
notifier.show('Warning!', 'The data presented here can be change.', '', '', 0);
notifier.show('Sorry!', 'Could not complete your transaction.', '', '', 0);

notifier.show('Default!', 'I am a default notification.', '', 'img/clock-48.png', 0);
notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', 'img/survey-48.png', 0);
notifier.show('Well Done!', 'You just submit your resume successfuly.', '', 'img/ok-48.png', 0);
notifier.show('Warning!', 'The data presented here can be change.', '', 'img/medium_priority-48.png', 0);
notifier.show('Sorry!', 'Could not complete your transaction.', '', 'img/high_priority-48.png', 0);

notifier.show('Default!', 'I am a default notification.', '', 'img/clock-48.png', 4000);
notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', 'img/survey-48.png', 4000);
notifier.show('Well Done!', 'You just submit your resume successfuly.', '', 'img/ok-48.png', 4000);
notifier.show('Warning!', 'The data presented here can be change.', '', 'img/medium_priority-48.png', 4000);
notifier.show('Sorry!', 'Could not complete your transaction.', '', 'img/high_priority-48.png', 4000);

let notificationId: string | number;

let showNotification = () => {
    notificationId = notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', 'img/survey-48.png', 4000);
};

let hideNotification = () => {
    notifier.hide(notificationId);
};

document.querySelector('#btn-nt-show').addEventListener('click', showNotification);

document.querySelector('#btn-nt-hide').addEventListener('click', hideNotification);
