import { useRouterScroll, RouterScrollProvider, withRouterScroll } from 'moxy__next-router-scroll';
import * as React from 'react';
import { render } from 'react-dom';

declare function beforeAll(f: () => void): void;
declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;
declare const expect: any;

declare let reactRoot: any;

beforeAll(() => {
    reactRoot = document.createElement('div');
});

describe('useRouterScroll', () => {
    it('should return three funcitons', () => {
        class Component extends React.PureComponent {
            render() {
                const MyComponent = () => {
                    const routerScroll = useRouterScroll();

                    expect(routerScroll).toEqual({
                        updateScroll: expect.any(Function),
                        registerElement: expect.any(Function),
                        unregisterElement: expect.any(Function),
                    });

                    return null;
                };

                return (
                    <RouterScrollProvider>
                        <MyComponent />
                    </RouterScrollProvider>
                );
            }
        }
        render(<Component />, reactRoot);
    });
});

describe('withRouterScroll', () => {
    it('should return component with scroll context', () => {
        class Component extends React.PureComponent {
            render() {
                const MyComponent = withRouterScroll(({ routerScroll }: any) => {
                    const providerValue = useRouterScroll();

                    expect(routerScroll).toBe(providerValue);

                    return null;
                });
                return (
                    <RouterScrollProvider>
                        <MyComponent />
                    </RouterScrollProvider>
                );
            }
        }

        render(<Component />, reactRoot);
    });
});
