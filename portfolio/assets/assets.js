import user_image from './user-img.jpg';
import camera_icon from './camera-icon.png';
import camera_icon_dark from './camera-icon-dark.png';
import data_icon from './data_icon.png';
import data_icon_dark from './data_icon_dark.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import ubc_logo from './ubc-logo.png';
import fortinet_logo from './fortinet_logo.png';
import canada_flag from './canada_flag.png';
import nserc_logo from './nserc.png';

export const assets = {
    user_image,
    camera_icon,
    camera_icon_dark,
    data_icon,
    data_icon_dark,
    code_icon,
    code_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    ubc_logo,
    fortinet_logo,
    canada_flag,
    nserc_logo
};

export const loopPositions = [
    'software developer',
    'data analyst',
    'researcher',
    'photographer',
];

export const workData = [
    {
        title: 'Weather Application',
        description: 'Web Design',
        bgImage: '/weather.png',
    },
    {
        title: 'Common Ground',
        description: 'Student Blog Web Application',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography Portfolio',
        description: 'Freelance sports and nature photography',
        bgImage: '/work-3.png',
    },
    {
        title: 'No Mo Momo',
        description: 'Unity 2D Frogger adaptation',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web & Mobile Development', description: 'Use React.js, HTML and Android Studio to provide exceptional services for your application', link: '' },
    { icon: assets.mobile_icon, title: 'Backend Development', description: 'Experience building Webservers using Python, anc ensure secure databases using Firebase or SQL', link: '' },
    { icon: assets.ui_icon, title: 'Photography & Graphic Design', description: 'Freelance photography in the Kelowna and Edmonton region. Can additionally provide logos, posters and social media posts using Photoshop and Canva.', link: '' },
    { icon: assets.graphics_icon, title: 'Game Development', description: 'Creating fully-deployed games including custom sprites and animations using Unity 6', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Web Developer', description: 'Experience with web development tools such as React / Next.js ' },
    // replace icon with something research related!!
    { icon: assets.data_icon, iconDark: assets.data_icon_dark, title: 'Researcher', description: 'NSERC-USRA Grant Recipient to complete research in cryptography' },
    { icon: assets.camera_icon, iconDark: assets.camera_icon_dark, title: 'Photographer', description: 'Freelance work and passion projects' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Security Enthusiast', description: 'Enhancing my skills through CTFs and various industry-standard certificates ' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Data Analyst', description: 'Used data to map wildfires, athletes and other interesting patterns. ' },
    // student related icon needed
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Student', description: 'Interested in pursuing a Masters in Computer Science with a cybersecurity focus' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];