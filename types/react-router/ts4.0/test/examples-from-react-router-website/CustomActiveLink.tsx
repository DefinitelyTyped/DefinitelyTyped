import * as React from "react";
import {
    Routes,
    Route,
    Outlet,
    Link,
    useSearchParams,
    useParams
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const CustomActiveLinkExample = () => {
    return (
        <div>
            <h1>Custom Filter Link Example</h1>

            <p>
                This example demonstrates how to create a "filter link" like one that is
                commonly used to filter a list of products on an e-commerce website. The
                <code>&lt;BrandLink&gt;</code> component is a custom{" "}
                <code>&lt;Link&gt;</code> that knows whether or not it is currently
                "active" by what is in the URL query string.
            </p>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<SneakerGrid />} />
                    <Route path="/sneakers/:id" element={<SneakerView />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

interface BrandLinkProps extends Omit<LinkProps, "to"> {
    brand: string;
}

function BrandLink({ brand, children, ...props }: BrandLinkProps) {
    let [searchParams] = useSearchParams();
    let isActive = searchParams.get("brand") === brand;

    return (
        <Link
            to={`/?brand=${brand}`}
            {...props}
            style={{
                ...props.style,
                color: isActive ? "red" : "black"
            }}
        >
            {children}
        </Link>
    );
}

function Layout() {
    return (
        <div>
            <nav>
                <h3>Filter by brand</h3>
                <ul>
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    {brands.map(brand => (
                        <li key={brand}>
                            <BrandLink brand={brand}>{brand}</BrandLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

function SneakerGrid() {
    let [searchParams] = useSearchParams();
    let brand = searchParams.get("brand");

    const sneakers = React.useMemo(() => {
        if (!brand) return SNEAKERS;
        return filterByBrand(brand);
    }, [brand]);

    return (
        <main>
            <h2>Sneakers</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "12px 24px"
                }}
            >
                {sneakers.map(snkr => {
                    let name = `${snkr.brand} ${snkr.model} ${snkr.colorway}`;
                    return (
                        <div key={snkr.id} style={{ position: "relative" }}>
                            <img
                                width={200}
                                height={200}
                                src={snkr.imageUrl}
                                alt={name}
                                style={{
                                    borderRadius: "8px",
                                    width: "100%",
                                    height: "auto",
                                    aspectRatio: "1 / 1"
                                }}
                            />
                            <Link
                                style={{ position: "absolute", inset: 0 }}
                                to={`/sneakers/${snkr.id}`}
                            >
                                <p style={{hidden:true}}>{name}</p>
                            </Link>
                            <div>
                                <p>{name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

function SneakerView() {
    // @ts-ignore
    let { id } = useParams<"id">();

    if (!id) {
        return <NoMatch />;
    }

    let snkr = getSneakerById(id);

    if (!snkr) {
        return <NoMatch />;
    }

    let name = `${snkr.brand} ${snkr.model} ${snkr.colorway}`;

    return (
        <div>
            <h2>{name}</h2>
            <img
                width={400}
                height={400}
                style={{
                    borderRadius: "8px",
                    maxWidth: "100%",
                    aspectRatio: "1 / 1"
                }}
                src={snkr.imageUrl}
                alt={name}
            />
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
interface Sneaker {
    id: string;
    colorway: string;
    imageUrl: string;
    model: string;
    brand: string;
}

let SNEAKERS: Sneaker[] = [
    {
        id: "1",
        colorway: "Pine Green",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/bkkj0lqzlwlwdwtofqxs",
        model: "Blazer Low 77 Vintage",
        brand: "Nike"
    },
    {
        id: "2",
        colorway: "Reverse Infrared",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/RPlzC_CBHjiMM4dr90gdU",
        model: "Air Max 90",
        brand: "Nike"
    },
    {
        id: "3",
        colorway: "White/Black/Desert",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/0bf9336b-03c9-4cbd-b482-f4e80b770582",
        model: "Court Legacy",
        brand: "Nike"
    },
    {
        id: "5",
        colorway: "Beluga 2.0",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/irxakb1ij0uzmcvn9szo",
        model: "Yeezy 350 v2",
        brand: "Adidas"
    },
    {
        id: "6",
        colorway: "Pumpkin Spice",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/g9tjjjdn476nhou1c1dj",
        model: "Grid SD",
        brand: "Saucony"
    },
    {
        id: "7",
        colorway: "Golden Coast",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/erg1lxa8x29h1wtbog9a",
        model: "Checkerboard Slip-On",
        brand: "Vans"
    },
    {
        id: "8",
        colorway: "Have a Nike Day",
        imageUrl:
            "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/u4z27k4wyzr7bxatlfgj",
        model: "Air Max 1",
        brand: "Nike"
    }
];

function filterByBrand(brand: string) {
    return SNEAKERS.filter(
        sneaker => sneaker.brand.toLowerCase() === brand.toLowerCase()
    );
}

function getSneakerById(id: string) {
    return SNEAKERS.find(sneaker => sneaker.id === id);
}

// @ts-ignore
let brands = [...new Set(SNEAKERS.map(sneaker => sneaker.brand))];

export default CustomActiveLinkExample;
