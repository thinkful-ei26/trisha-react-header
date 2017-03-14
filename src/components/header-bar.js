import React from 'react';

export default function HeaderBar(props) {
    const links = props.links.map((link, index) => (
        <li key={index}>
            <a href={link.href}>
                {link.text}
            </a>
        </li>
    ));

    return (
        <div className="header-bar">
            <h1>{props.title}</h1>
            <nav className="header-bar-nav">
                <ul>
                    {links}
                </ul>
            </nav>
        </div>
    );
}
