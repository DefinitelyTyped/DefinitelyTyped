import * as React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ description, title }: CardProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '40px',
                gap: '16px',
                borderRadius: '16px',
                boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
            }}
        >
            <p
                style={{
                    fontSize: '24px',
                    lineHeight: '32px',
                }}
            >
                {title}
            </p>
            <p>{description}</p>
        </div>
    );
};

const Test = () => {
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="40px" columnsCount={5}>
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
            <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
        </Masonry>
    </ResponsiveMasonry>;
};
