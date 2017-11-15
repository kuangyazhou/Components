import { Script } from "vm";

module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        {
            name: 'kyz',
            script: 'build/main.js',
            watch: true,
            'max_memory_restart': '90%',
            env: {
                COMMON_VARIABLE: "true"
            },
            'env_production': {
                NODE_ENV: 'production'
            }
        }],
    /**
    * Deployment section
    * http://pm2.keymetrics.io/docs/usage/deployment/
    */
    deploy:{
        production:{
            user:'kuangyazhou',
            ref:'orinig/master',
            repo:'vueComponents.git',
            path:'/www',
            'post-setup':'git pull && ls -la',
            'post-deploy':'yarn && yarn run build && pm2 reload ecosystem.config.js --env production'
        }
    }
}