import Link from "next-server/link";
import * as React from "react";

const links = (
    <div>
        <Link
            as="foo"
            href="https://www.example.com"
            onError={(e: any) => {
                console.log("Handled error!", e);
            }}
            prefetch
            replace
            scroll
            shallow
        >
            <a>Gotta link to somewhere!</a>
        </Link>
        <Link>
            <a>All props are optional!</a>
        </Link>
    </div>
);
