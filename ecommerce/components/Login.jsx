import React from 'react';
import {FcGoogle} from 'react-icons/fc';

const Login = () => {
    return (
        <div className='flex justify-start items-center flex-col -h-screen'>
            <div 
                id="g_id_onload" 
                data-client_id="19044338603-ilsgog9ok5849qtkf30d8d8150uat1jq.apps.googleusercontent.com" 
                data-context="signin" data-ux_mode="popup" 
                data-login_uri="https://8080-kevindgnani-firstreactp-jjug6b1t64f.ws-us89b.gitpod.io" 
                data-auto_prompt="false"></div>

            <div 
                class="g_id_signin" data-type="standard" 
                data-shape="rectangular" data-theme="outline" 
                data-text="signin_with" data-size="large" 
                data-logo_alignment="left">

            </div>
        </div>
    )
}

export default Login
