declare const _default: {
    preview: string;
    meta: {
        linkOnly: boolean;
    };
    context: {
        prefix: any;
        header: {
            company: string;
            platform: string;
            links: {
                href: string;
                title: string;
            }[];
            actions: {
                title: string;
                switcher: {
                    state: {
                        expanded: boolean;
                        showAll: boolean;
                    };
                    links: {
                        href: string;
                        title: string;
                    }[];
                    allLinks: {
                        href: string;
                        title: string;
                    }[];
                    idSuffix: string;
                };
            }[];
            navLinks: ({
                href: string;
                title: string;
                state?: undefined;
                items?: undefined;
            } | {
                title: string;
                state: {
                    expanded: boolean;
                };
                items: {
                    href: string;
                    title: string;
                }[];
                href?: undefined;
            })[];
        };
        navigationMenu: {
            state: {
                expanded: boolean;
            };
            sections: {
                items: ({
                    type: string;
                    title: string;
                    href: string;
                    hasIcon: boolean;
                    active: boolean;
                    links?: undefined;
                } | {
                    type: string;
                    title: string;
                    href: string;
                    hasIcon: boolean;
                    active?: undefined;
                    links?: undefined;
                } | {
                    type: string;
                    title: string;
                    hasIcon: boolean;
                    links: ({
                        title: string;
                        href: string;
                        active?: undefined;
                    } | {
                        title: string;
                        href: string;
                        active: boolean;
                    })[];
                    href?: undefined;
                    active?: undefined;
                })[];
            }[];
            idSuffix: string;
        };
        sidenav: {
            state: {
                expanded: boolean;
                hasIcons: boolean;
                fixed: boolean;
            };
            title: {
                text: string;
            };
            links: ({
                category: string;
                links: {
                    title: string;
                    href: string;
                }[];
                active?: undefined;
            } | {
                category: string;
                links: {
                    title: string;
                    href: string;
                }[];
                active: boolean;
            })[];
        };
        switcher: {
            state: {
                expanded: boolean;
                showAll: boolean;
            };
            links: {
                href: string;
                title: string;
            }[];
            allLinks: {
                href: string;
                title: string;
            }[];
            idSuffix: string;
        };
        content: unknown[];
    };
    variants: ({
        name: string;
        context: {
            sidenav: {
                state: {
                    hasIcons: boolean;
                    expanded: boolean;
                    fixed: boolean;
                };
            };
            navigationMenu?: undefined;
        };
    } | {
        name: string;
        context: {
            navigationMenu: {
                state: {
                    expanded: boolean;
                    category: boolean;
                };
                sections: {
                    items: ({
                        hasIcon: boolean;
                        type: string;
                        title: string;
                        href: string;
                        active: boolean;
                        links?: undefined;
                    } | {
                        hasIcon: boolean;
                        type: string;
                        title: string;
                        href: string;
                        active?: undefined;
                        links?: undefined;
                    } | {
                        hasIcon: boolean;
                        type: string;
                        title: string;
                        links: ({
                            title: string;
                            href: string;
                            active?: undefined;
                        } | {
                            title: string;
                            href: string;
                            active: boolean;
                        })[];
                        href?: undefined;
                        active?: undefined;
                    })[];
                }[];
                idSuffix: string;
            };
            sidenav?: undefined;
        };
    })[];
};
export default _default;
