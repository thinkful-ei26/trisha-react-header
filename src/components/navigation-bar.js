import React from 'react';
import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar() {
  const links = [
    {
    text: 'Courses',
    href: 'http://www.thinkful.com/courses/'
    },
    {
    text: 'Mentorship',
    href: 'http://www.thinkful.com/mentorship/'
    }
  ];

const link = links.map( (link, index) => (<li key={index}><a href={link.href}>{link.text}</a></li>) );
  
return (<ul> {link} </ul>);
}