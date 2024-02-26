"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const env_core_1 = require("@t3-oss/env-core");
exports.env = (0, env_core_1.createEnv)({
    isServer: true,
    server: {
        PORT: zod_1.z.coerce.number(),
        DATABASE_URL: zod_1.z.string().url()
    },
    runtimeEnv: process.env
});
