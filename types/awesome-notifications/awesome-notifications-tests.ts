import AWN from 'awesome-notifications';

const awn = new AWN();

const confirmed = () => console.log('Confirmed');
const cancelled = () => console.log('Cancelled');

awn.confirm(`Tests new confirmOk property name`, confirmed, cancelled, {
  labels: {
    confirmOk: 'New property name works'
  }
});
