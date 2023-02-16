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

declare module "sntp" {
    interface SNTPOptions {
        host: string;
    }
    type SNTPUnableToRetrieveTime = -1;
    type SNTPTimeRetrieved = 1;
    type SNTPRetry = 2;
    type SNTPCallbackMessage = (
        SNTPUnableToRetrieveTime |
        SNTPTimeRetrieved |
        SNTPRetry
    );
    type SNTPCallback = (message: SNTPCallbackMessage, value?: number) => void;
    class SNTP {
        static readonly time: SNTPUnableToRetrieveTime;
        static readonly retry: SNTPRetry;
        static readonly error: SNTPUnableToRetrieveTime;

        constructor(options: SNTPOptions, callback: SNTPCallback);
    }
    export { SNTP as default };
}
