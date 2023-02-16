/*
* Copyright (c) 2019-2020 Bradley Farias
*
*   This file is part of the Moddable SDK Tools.
*
*   The Moddable SDK Tools is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   The Moddable SDK Tools is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
*
*/

declare module "mdns" {
    interface MDNSService {
        name: string;
        protocol: string;
        port: number;
        txt: Record<string, string>;
    }

    class MDNS {
        constructor(
            options: {
                hostName: string
            }, callback?: (message: number, value?: string) => void
        );
        monitor(
            service: string,
            callback: (
                service: string,
                instance: MDNSService
            ) => void
        ): void;
        add(service: MDNSService): void;
        update(service: MDNSService): void;
        remove(service: MDNSService): void;
        remove(serviceType: string): void;
    }
    export { MDNS as default };
}
