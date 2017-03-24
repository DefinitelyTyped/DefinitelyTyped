// Type definitions for flightplan v0.6.9
// Project: https://github.com/pstadler/flightplan
// Definitions by: Borislav Zhivkov <https://github.com/borislavjivkov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var flightplan: FlightplanInterfaces.Flightplan;

declare namespace FlightplanInterfaces {
  interface CommandOptions {
    silent?: boolean;
    failsafe?: boolean;
  }

  interface SudoOptions extends CommandOptions {
    user?: string;
  }

  interface PromptOptions {
    hidden?: boolean;
    required?: boolean;
  }

  interface CommandResult {
    code: number;
    stdout: string;
    stderr: string;
  }

  interface Transport {
    runtime: Host;

    exec(command: string, options?: CommandOptions): CommandResult;
    exec(command: string, options?: { exec: any }): CommandResult;

    sudo(command: string, options?: SudoOptions): CommandResult;
    transfer(files: CommandResult, remoteDir: string, options?: CommandOptions): Array<CommandResult>;
    transfer(files: CommandResult[], remoteDir: string, options?: CommandOptions): Array<CommandResult>;
    transfer(files: string[], remoteDir: string, options?: CommandOptions): Array<CommandResult>;
    prompt(message: string, options?: PromptOptions): string;
    waitFor(fn: (done: (result: any) => void) => void): any;

    with(command: string, fn: () => void): void;
    with(options: CommandOptions, fn: () => void): void;
    with(command: string, options: CommandOptions, fn: () => void): void;

    silent(): void;
    verbose(): void;
    failsafe(): void;
    log(message: string): void;
    debug(message: string): void;

    awk(command: string, options?: CommandOptions): CommandResult;
    awk(command: string, options?: { exec: any }): CommandResult;

    cat(command: string, options?: CommandOptions): CommandResult;
    cat(command: string, options?: { exec: any }): CommandResult;

    cd(command: string, options?: CommandOptions): CommandResult;
    cd(command: string, options?: { exec: any }): CommandResult;

    chgrp(command: string, options?: CommandOptions): CommandResult;
    chgrp(command: string, options?: { exec: any }): CommandResult;

    chmod(command: string, options?: CommandOptions): CommandResult;
    chmod(command: string, options?: { exec: any }): CommandResult;

    chown(command: string, options?: CommandOptions): CommandResult;
    chown(command: string, options?: { exec: any }): CommandResult;

    cp(command: string, options?: CommandOptions): CommandResult;
    cp(command: string, options?: { exec: any }): CommandResult;

    echo(command: string, options?: CommandOptions): CommandResult;
    echo(command: string, options?: { exec: any }): CommandResult;

    find(command: string, options?: CommandOptions): CommandResult;
    find(command: string, options?: { exec: any }): CommandResult;

    ftp(command: string, options?: CommandOptions): CommandResult;
    ftp(command: string, options?: { exec: any }): CommandResult;

    grep(command: string, options?: CommandOptions): CommandResult;
    grep(command: string, options?: { exec: any }): CommandResult;

    groups(command: string, options?: CommandOptions): CommandResult;
    groups(command: string, options?: { exec: any }): CommandResult;

    hostname(command: string, options?: CommandOptions): CommandResult;
    hostname(command: string, options?: { exec: any }): CommandResult;

    kill(command: string, options?: CommandOptions): CommandResult;
    kill(command: string, options?: { exec: any }): CommandResult;

    ln(command: string, options?: CommandOptions): CommandResult;
    ln(command: string, options?: { exec: any }): CommandResult;

    ls(command: string, options?: CommandOptions): CommandResult;
    ls(command: string, options?: { exec: any }): CommandResult;

    mkdir(command: string, options?: CommandOptions): CommandResult;
    mkdir(command: string, options?: { exec: any }): CommandResult;

    mv(command: string, options?: CommandOptions): CommandResult;
    mv(command: string, options?: { exec: any }): CommandResult;

    ps(command: string, options?: CommandOptions): CommandResult;
    ps(command: string, options?: { exec: any }): CommandResult;

    pwd(command: string, options?: CommandOptions): CommandResult;
    pwd(command: string, options?: { exec: any }): CommandResult;

    rm(command: string, options?: CommandOptions): CommandResult;
    rm(command: string, options?: { exec: any }): CommandResult;

    rmdir(command: string, options?: CommandOptions): CommandResult;
    rmdir(command: string, options?: { exec: any }): CommandResult;

    scp(command: string, options?: CommandOptions): CommandResult;
    scp(command: string, options?: { exec: any }): CommandResult;

    sed(command: string, options?: CommandOptions): CommandResult;
    sed(command: string, options?: { exec: any }): CommandResult;

    tail(command: string, options?: CommandOptions): CommandResult;
    tail(command: string, options?: { exec: any }): CommandResult;

    tar(command: string, options?: CommandOptions): CommandResult;
    tar(command: string, options?: { exec: any }): CommandResult;

    touch(command: string, options?: CommandOptions): CommandResult;
    touch(command: string, options?: { exec: any }): CommandResult;

    unzip(command: string, options?: CommandOptions): CommandResult;
    unzip(command: string, options?: { exec: any }): CommandResult;

    whoami(command: string, options?: CommandOptions): CommandResult;
    whoami(command: string, options?: { exec: any }): CommandResult;

    zip(command: string, options?: CommandOptions): CommandResult;
    zip(command: string, options?: { exec: any }): CommandResult;

    git(command: string, options?: CommandOptions): CommandResult;
    git(command: string, options?: { exec: any }): CommandResult;

    hg(command: string, options?: CommandOptions): CommandResult;
    hg(command: string, options?: { exec: any }): CommandResult;

    node(command: string, options?: CommandOptions): CommandResult;
    node(command: string, options?: { exec: any }): CommandResult;

    npm(command: string, options?: CommandOptions): CommandResult;
    npm(command: string, options?: { exec: any }): CommandResult;

    rsync(command: string, options?: CommandOptions): CommandResult;
    rsync(command: string, options?: { exec: any }): CommandResult;

    svn(command: string, options?: CommandOptions): CommandResult;
    svn(command: string, options?: { exec: any }): CommandResult;
  }

  interface TargetOptions {
      host: string;
      username: string;
      agent: string;
      failsafe?: boolean;
  }

  interface Runtime {
    task: string;
    target: string;
    hosts: Host[];
    options: any;
  }

  interface Host {
    host: string;
    port: number;
  }

  interface Flightplan {
    runtime: Runtime;

    local(fn: (transport: Transport) => void): Flightplan;
    local(task: string, fn: (transport: Transport) => void): Flightplan;
    local(task: string[], fn: (transport: Transport) => void): Flightplan;

    remote(fn: (transport: Transport) => void): Flightplan;
    remote(task: string, fn: (transport: Transport) => void): Flightplan;
    remote(task: string[], fn: (transport: Transport) => void): Flightplan;

    target(name: string, options: TargetOptions): Flightplan;
    target(name: string, options: TargetOptions[]): Flightplan;
    target(name: string, fn: (done: (result: any) => void) => void): Flightplan;

    abort(message?: string): void;
  }
}

declare module "flightplan" {
  export = flightplan;
}
