import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('./routes/_index.tsx'),
    route('direktuppstigning', './routes/direktuppstigning.tsx'),
    route('upprepadedyk', './routes/upprepadedyk.tsx'),
    route('om', './routes/om.tsx'),
] satisfies RouteConfig
