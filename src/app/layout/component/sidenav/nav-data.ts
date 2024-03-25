import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routerlink: '',
        icon: 'fal fa-home',
        label: 'Dashboard',
        roles: ["admin"]
    },
    {
        routerlink: 'vecules',
        icon: 'fal fa-solid fa-car',
        label: 'Vecules',
        roles: ["user", "validateur"],
        items: [
            {
                routerlink: 'voiture',
                label: 'Voiture'
            },
            {
                routerlink: 'camion',
                label: 'Camion'
            }
        ]
    },
    {
        routerlink: 'administration',
        icon: 'fal fa-solid fa-users',
        label: 'Aministration',
        roles: ["admin"],
        items: [
            {
                routerlink: 'utilisateur',
                label: 'Utilisateur'
            },
            {
                routerlink: 'access',
                label: 'Access'
            }
        ]
    },
    {
        routerlink: 'params',
        icon: 'fal fa-cog',
        label: 'params',
        roles: ["admin"]
    }, {
        routerlink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routerlink: 'products',
                label: 'level 1.1',
                items: [
                    {
                        routerlink: 'products',
                        label: 'level 2.1'
                    },
                    {
                        routerlink: 'products',
                        label: 'level 2.2',
                        items: [
                            {
                                routerlink: 'products/level-3.1',
                                label: 'level 3.1'
                            },
                            {
                                routerlink: 'products/level-3.2',
                                label: 'level 3.2'
                            }
                        ]
                    }
                ]
            },
            {
                routerlink: 'products',
                label: 'level 1.2'
            },
        ]
    },
    {
        routerlink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',
        roles: ["admin", "user"]
    },
    {
        routerlink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items: [
            {
                routerlink: 'coupens/create',
                label: 'Create coupens'

            },
            {
                routerlink: 'coupens/list',
                label: 'List coupens'
            }

        ]
    },
    {
        routerlink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages',
        roles: ["user"]
    },
    {
        routerlink: 'media',
        icon: 'fal fa-camera',
        label: 'Media',
        roles: ["admin"]
    },
    {
        routerlink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routerlink: 'settings',
                label: 'Profile'
            },
            {
                routerlink: 'settings',
                label: 'Customize'
            }

        ]
    }
]





const com: INavbarData[] = [
    {
        routerlink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routerlink: 'products/level1.1',
                label: 'level 1.1',
                items: [
                    {
                        routerlink: 'products/level2.1',
                        label: 'level 2.1'
                    },
                    {
                        routerlink: 'products/level2.2',
                        label: 'level 2.2',
                        items: [
                            {
                                routerlink: 'products/3.1',
                                label: 'level 3.1'
                            },
                            {
                                routerlink: 'products/3.1',
                                label: 'level 3.1'
                            }
                        ]
                    }
                ]
            },
            {
                routerlink: 'products/level1.2',
                label: 'level 1.2'
            },
        ]
    },
    {
        routerlink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',
        roles: ["admin", "user"]
    },
    {
        routerlink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items: [
            {
                routerlink: 'coupens/list',
                label: 'List coupens'
            },
            {
                routerlink: 'coupens/create',
                label: 'Create coupens'

            }
        ]
    },
    {
        routerlink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages',
        roles: ["user"]
    },
    {
        routerlink: 'media',
        icon: 'fal fa-camera',
        label: 'Media',
        roles: ["admin"]
    },
    {
        routerlink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routerlink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerlink: 'settings/cdashboardustomize',
                label: 'Customize'
            }

        ]
    }
]