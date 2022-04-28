import React from 'react';

const Link = ({ className , href, children}) => {

    const onClick = (event) => {
        //opens new tab if you hold down ctrl(windows) or command(mac)
        if(event.metaKey || event.ctrlKey){
            return;
        }
        //prevents full page reload
        event.preventDefault();
        //update the URL on each click on navigation
        window.history.pushState({} , '', href);
        //tell the dropwdown components the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a
            onClick={onClick}
            className={className}
            href={href}
        >
            {children}
        </a>
    )
};

export default Link;