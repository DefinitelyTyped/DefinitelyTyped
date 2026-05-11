declare global {
    namespace Chai {
        interface Deep {
            equalInAnyOrder: Equal;
        }
    }
}

declare global {
    namespace Chai {
        interface Assert {
            /**
             * It works in similar way as deepEqual but it doesn’t checks the arrays order (at any level of nested objects and arrays).
             * The array elements can be any JS entity (boolean, null, number, string, object, array…).
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            deepEqualInAnyOrder: <T>(actual: T, expected: T, message?: string) => void;

            /**
             * It works in similar way as notDeepEqual but it doesn’t checks the arrays order (at any level of nested objects and arrays).
             * The array elements can be any JS entity (boolean, null, number, string, object, array…).
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            notDeepEqualInAnyOrder: <T>(actual: T, expected: T, message?: string) => void;
        }
    }
}

declare const deepEqualInAnyOrder: Chai.ChaiPlugin;
export = deepEqualInAnyOrder;
