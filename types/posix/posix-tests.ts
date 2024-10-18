import * as posix from "posix";

/* test-chroot */

// @ts-expect-error
posix.chroot();

// $ExpectType void
posix.chroot("path");

/* test-getegid */

// @ts-expect-error
posix.getegid(123);

// $ExpectType number
posix.getegid();

/* test-geteuid */

// @ts-expect-error
posix.geteuid(123);

// $ExpectType number
posix.geteuid();

/* test-getgrnam */

// @ts-expect-error
posix.getgrnam();

// @ts-expect-error
posix.getgrnam(1, 2);

const group = posix.getgrnam("daemon");

// $ExpectType string
group.name;

// $ExpectType string
group.passwd;

// $ExpectType number
group.gid;

// $ExpectType string[]
group.members;

// $ExpectType string
posix.getgrnam(group.gid).name;

/* test-gethostname */

// @ts-expect-error
posix.gethostname(123);

// $ExpectType string
posix.gethostname();

/* test-getppid */

// @ts-expect-error
posix.getppid(123);

// $ExpectType number
posix.getppid();

/* test-getpwnam */

// @ts-expect-error
posix.getpwnam();

// @ts-expect-error
posix.getpwnam(1, 2);

const passwd = posix.getpwnam("root");

// $ExpectType string
passwd.name;

// $ExpectType string
passwd.passwd;

// $ExpectType number
passwd.uid;

// $ExpectType number
passwd.gid;

// $ExpectType string | null
passwd.gecos;

// $ExpectType string
passwd.shell;

// $ExpectType string
passwd.dir;

/* test-getrlimit */

// @ts-expect-error
posix.getrlimit("foobar");

// @ts-expect-error
posix.getrlimit();

// @ts-expect-error
posix.getrlimit(0);

const limit = posix.getrlimit("core");

// $ExpectType number | null
limit.soft;

// $ExpectType number | null
limit.hard;

/* test-initgroups */

posix.initgroups?.("root", 0);

// $ExpectType void
posix.initgroups!("root", 0);

// @ts-expect-error
posix.initgroups("root", 0);

// @ts-expect-error
posix.initgroups?.("root");

/* test-setegid */

// $ExpectType void
posix.setegid("daemon");

// $ExpectType void
posix.setegid(0);

/* test-seteuid */

// $ExpectType void
posix.seteuid("daemon");

// $ExpectType void
posix.seteuid(0);

/* test-setpgid */

// @ts-expect-error
posix.setpgid();

// @ts-expect-error
posix.setpgid("a", 1);

// @ts-expect-error
posix.setpgid(1, "a");

// $ExpectType number
posix.getpgid(0);

// $ExpectType void
posix.setpgid(0, 0);

// @ts-expect-error
posix.getpgid();

/* test-setregid */

// $ExpectType void
posix.setregid(0, 0);

// $ExpectType void
posix.setregid("daemon", "daemon");

// @ts-expect-error
posix.setregid("root");

/* test-setreuid */

// $ExpectType void
posix.setreuid(0, 0);

// $ExpectType void
posix.setreuid("root", "root");

// @ts-expect-error
posix.setreuid("root");

/* test-setrlimit */

// @ts-expect-error
posix.setrlimit();

// @ts-expect-error
posix.setrlimit("nofile");

// @ts-expect-error
posix.setrlimit("foobar", { soft: 100 });

// $ExpectType void
posix.setrlimit("cpu", { soft: null, hard: null });

// $ExpectType void
posix.setrlimit("nofile", { soft: 500 });

// @ts-expect-error
posix.setrlimit("foobar", { soft: 100 });

/* test-setsid */

// @ts-expect-error
posix.setsid(123);

// $ExpectType number
posix.setsid();

/* test-syslog */

// @ts-expect-error
posix.openlog("foobar", 1);

// @ts-expect-error
posix.closelog("foobar");

// @ts-expect-error
posix.openlog("foobar", { xxx: 1 }, "local0");

// @ts-expect-error
posix.openlog("foobar", {}, "xxx");

// $ExpectType void
posix.openlog("test-node-syslog", { cons: true, ndelay: true, pid: true }, "local0");

// $ExpectType LogMask
posix.setlogmask({ info: 1, debug: 1 });

// @ts-expect-error
posix.setlogmask();

// $ExpectType void
posix.syslog("info", "hello from node-posix (info)");

// @ts-expect-error
posix.syslog("error");

// @ts-expect-error
posix.closelog("bye");

// $ExpectType void
posix.closelog();

/* test-swap */

posix.swapon?.("path");

posix.swapon?.("path", { prefer: true });

// $ExpectType void
posix.swapon!("path", { prefer: true });

if (posix.swapon) {
    // $ExpectType void
    posix.swapon("path", { prefer: true });
}

// @ts-expect-error
posix.swapon("path");

// @ts-expect-error
posix.swapon("path", { prefer: true });

posix.swapoff?.("path");

// $ExpectType void
posix.swapoff!("path");

if (posix.swapoff) {
    // $ExpectType void
    posix.swapoff("path");
}
