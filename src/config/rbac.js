export const PERMISSIONS = {
    fullAccess: "full_access",
    app: "/app",
    share: "/share",
    careers: "/careers",
    dialer: "dialer"
};

export const ROLE_DEFINITIONS = {
    admin: {
        id: "admin",
        label: "Admin",
        permissions: [
            PERMISSIONS.app,
            PERMISSIONS.share,
            PERMISSIONS.careers,
            PERMISSIONS.dialer
        ]
    },
    recruiter: {
        id: "recruiter",
        label: "Recruiter",
        permissions: [
            PERMISSIONS.app,
            PERMISSIONS.share,
            PERMISSIONS.careers
        ]
    }
};

export const MODULE_REQUIREMENTS = {
    recruitModule: [PERMISSIONS.app],
    careerPortal: [PERMISSIONS.careers],
    shareProfile: [PERMISSIONS.share],
    dialer: [PERMISSIONS.dialer],
    qrBridgeLogin: [PERMISSIONS.app],
    advancedAnalytics: [PERMISSIONS.app]
};

export function getRole(roleId = "admin") {
    return ROLE_DEFINITIONS[roleId] || ROLE_DEFINITIONS.admin;
}
